#!/usr/bin/env node
/**
 * Design Token Extractor for SanLuis AI portfolio
 * Reads globals.css, tailwind.config.js, and component TSX files,
 * then writes a Google DESIGN.md token spec.
 */
const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const OUTPUT_PATH = path.join(REPO_ROOT, 'DESIGN.md');

function read(relPath) {
  const full = path.join(REPO_ROOT, relPath);
  return fs.existsSync(full) ? fs.readFileSync(full, 'utf8') : '';
}

function unique(arr) {
  return [...new Set(arr)].filter(Boolean);
}

function hexToRgb(hex) {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) return null;
  return { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) };
}

// Extract CSS custom properties from :root
function extractCssVars(css) {
  const vars = [];
  const rootBlock = css.match(/:root\s*\{([^}]*)\}/s)?.[1] || '';
  const re = /--([\w-]+)\s*:\s*([^;]+);?/g;
  let m;
  while ((m = re.exec(rootBlock))) {
    vars.push({ name: `--${m[1]}`, value: m[2].trim() });
  }
  return vars;
}

// Extract color-like values (#, rgb/rgba, hsl) from a string
function extractColors(text) {
  const colors = [];
  const patterns = [
    /#[a-f\d]{3,8}\b/gi, // hex
    /rgba?\s*\([^)]*\)/gi, // rgb/rgba
    /hsla?\s*\([^)]*\)/gi, // hsl/hsla
  ];
  patterns.forEach((p) => {
    let m;
    while ((m = p.exec(text))) colors.push(m[0]);
  });
  return unique(colors);
}

// Extract Tailwind colors object from tailwind.config.js using a simple heuristic
function extractTailwindColors(configText) {
  const colors = [];
  const blockMatch = configText.match(/colors\s*:\s*\{([\s\S]*?)\n\s*\},/);
  if (!blockMatch) return colors;
  const block = blockMatch[1];
  const lineRe = /['"]?([\w-]+)['"]?\s*:\s*(['"]([^'"]+)['"]|(rgba?\([^)]+\))|(hsla?\([^)]+\)))/g;
  let m;
  while ((m = lineRe.exec(block))) {
    const key = m[1];
    const value = m[3] || m[4] || m[5];
    if (key && value) colors.push({ key, value });
  }
  return colors;
}

// Extract Tailwind extend.fontFamily values
function extractTailwindFontFamilies(configText) {
  const block = configText.match(/fontFamily\s*:\s*\{([\s\S]*?)\n\s*\},/)?.[1] || '';
  const families = [];
  const re = /([\w-]+)\s*:\s*\[([^\]]+)\]/g;
  let m;
  while ((m = re.exec(block))) {
    families.push({ key: m[1], stack: m[2].replace(/['"]/g, '').split(',').map((s) => s.trim()) });
  }
  return families;
}

// Extract Tailwind extend.letterSpacing values
function extractLetterSpacing(configText) {
  const block = configText.match(/letterSpacing\s*:\s*\{([\s\S]*?)\n\s*\},/)?.[1] || '';
  const out = [];
  const re = /([\w-]+)\s*:\s*['"]?([^'",\s]+)['"]?/g;
  let m;
  while ((m = re.exec(block))) out.push({ key: m[1], value: m[2] });
  return out;
}

// Extract Tailwind backgroundImage values
function extractBackgroundImages(configText) {
  const block = configText.match(/backgroundImage\s*:\s*\{([\s\S]*?)\n\s*\},/)?.[1] || '';
  const out = [];
  const re = /['"]?([\w-]+)['"]?\s*:\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = re.exec(block))) out.push({ key: m[1], value: m[2] });
  return out;
}

// Scan component files for Tailwind class names
function getComponentFiles() {
  const compsDir = path.join(REPO_ROOT, 'components');
  const appDir = path.join(REPO_ROOT, 'app');
  const files = [];
  [compsDir, appDir].forEach((dir) => {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir, { recursive: true }).forEach((entry) => {
      const full = path.join(dir, entry);
      if (fs.statSync(full).isFile() && full.endsWith('.tsx')) files.push(full);
    });
  });
  return files;
}

function extractClassNames(text) {
  const classes = new Set();
  // className="..." or className={`...`}
  const re = /className\s*=\s*(?:\{`([^`]*)`\}|"([^"]*)"|'([^']*)')/g;
  let m;
  while ((m = re.exec(text))) {
    (m[1] || m[2] || m[3])
      .split(/\s+/)
      .map((c) => c.trim())
      .filter(Boolean)
      .forEach((c) => classes.add(c));
  }
  return [...classes];
}

function findNumericPrefix(cls, prefix) {
  const m = cls.match(new RegExp(`^${prefix}-?(\\d+(?:\\.\\d+)?)$`));
  return m ? m[1] : null;
}

function findArbitrary(cls, prefix) {
  const m = cls.match(new RegExp(`^${prefix}-\\[(.+?)\\]$`));
  return m ? m[1] : null;
}

function extractTokens() {
  const globalsCss = read('app/globals.css');
  const tailwindConfig = read('tailwind.config.js');
  const layoutTsx = read('app/layout.tsx');
  const componentFiles = getComponentFiles();
  const componentSources = componentFiles.map((f) => fs.readFileSync(f, 'utf8'));
  const allClasses = componentSources.flatMap(extractClassNames);

  // --- Colors ---
  const cssVars = extractCssVars(globalsCss);
  const tailwindColors = extractTailwindColors(tailwindConfig);
  const gradientColors = unique([
    ...extractColors(globalsCss),
    ...extractColors(tailwindConfig),
    ...extractColors(layoutTsx),
    ...componentSources.flatMap(extractColors),
  ]);

  // Build a unified color palette from Tailwind config + CSS vars + inline values
  const colorMap = new Map();
  tailwindColors.forEach(({ key, value }) => colorMap.set(key, value));
  cssVars.forEach(({ name, value }) => {
    const key = name.replace(/^--/, '');
    if (!colorMap.has(key)) colorMap.set(key, value);
  });

  // Add common inline colors used in gradients/components
  gradientColors.forEach((c) => {
    if (![...colorMap.values()].includes(c)) {
      // derive a semantic key from hex
      const hex = c.replace('#', '').toUpperCase();
      colorMap.set(`inline-${hex}`, c);
    }
  });

  // --- Typography ---
  const fontFamilies = extractTailwindFontFamilies(tailwindConfig);
  const typography = {
    families: unique(fontFamilies.map((f) => `${f.key}: ${f.stack.join(', ')}`)),
    scale: [],
    letterSpacing: extractLetterSpacing(tailwindConfig),
  };

  // Extract .hero-h1, .section-h2, .stat-display, .metric-display
  const scaleRe = /\.(hero-h1|section-h2|stat-display|metric-display|section-label)\s*\{([^}]+)\}/g;
  let sm;
  while ((sm = scaleRe.exec(globalsCss))) {
    const name = sm[1];
    const body = sm[2];
    const size = body.match(/font-size:\s*([^;]+);/)?.[1] || '';
    const weight = body.match(/font-weight:\s*([^;]+);/)?.[1] || '';
    const spacing = body.match(/letter-spacing:\s*([^;]+);/)?.[1] || '';
    const lineHeight = body.match(/line-height:\s*([^;]+);/)?.[1] || '';
    typography.scale.push({ name, size, weight, spacing, lineHeight });
  }

  // --- Spacing ---
  const spacing = {
    tailwind: [],
    arbitrary: [],
  };
  const spacingPrefixes = ['p', 'px', 'py', 'pt', 'pr', 'pb', 'pl', 'm', 'mx', 'my', 'mt', 'mr', 'mb', 'ml', 'gap', 'space-x', 'space-y'];
  const seenSpacing = new Set();
  allClasses.forEach((cls) => {
    for (const prefix of spacingPrefixes) {
      const num = findNumericPrefix(cls, prefix);
      if (num && !seenSpacing.has(`${prefix}-${num}`)) {
        seenSpacing.add(`${prefix}-${num}`);
        spacing.tailwind.push(`${prefix}-${num}`);
      }
      const arb = findArbitrary(cls, prefix);
      if (arb && !seenSpacing.has(`${prefix}-[${arb}]`)) {
        seenSpacing.add(`${prefix}-[${arb}]`);
        spacing.arbitrary.push(`${prefix}-[${arb}]`);
      }
    }
  });

  // --- Border Radius ---
  const radii = [];
  const seenRadii = new Set();
  allClasses.forEach((cls) => {
    if (cls.startsWith('rounded')) {
      const tail = cls.replace(/^rounded-?/, '');
      if (tail && !seenRadii.has(cls)) {
        seenRadii.add(cls);
        radii.push(cls);
      }
    }
  });

  // --- Shadows ---
  const shadowClasses = allClasses.filter((c) => c.startsWith('shadow'));
  const shadows = unique(shadowClasses);

  // --- Transitions / motion ---
  const transitions = unique(globalsCss.match(/transition:\s*([^;]+);/g) || []);

  // --- Gradients & overlays ---
  const gradients = [];
  const gradPatterns = [
    /(linear-gradient\([^)]+\))/g,
    /(radial-gradient\([^)]+\))/g,
  ];
  [globalsCss, tailwindConfig, layoutTsx, ...componentSources].forEach((src) => {
    gradPatterns.forEach((re) => {
      let gm;
      while ((gm = re.exec(src))) gradients.push(gm[1]);
    });
  });

  // --- Effects (box-shadow, opacity) ---
  const effects = {
    boxShadows: unique(globalsCss.match(/box-shadow:\s*([^;]+);/g) || []),
    opacityClasses: unique(allClasses.filter((c) => /^\/(\d+|\[.+\])$/.test(c) || /^opacity-/.test(c))),
  };

  return {
    cssVars,
    colors: Object.fromEntries(colorMap),
    typography,
    spacing,
    radii,
    shadows,
    transitions,
    gradients: unique(gradients),
    effects,
    backgroundImages: extractBackgroundImages(tailwindConfig),
    componentFiles: componentFiles.map((f) => path.relative(REPO_ROOT, f)),
  };
}

function toGoogleDesignMd(tokens) {
  const now = new Date().toISOString();
  const paletteRows = Object.entries(tokens.colors)
    .map(([key, value]) => {
      const rgb = value.startsWith('#') ? hexToRgb(value) : null;
      const figma = rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)` : value;
      return `| ${key} | ${value} | ${figma} |`;
    })
    .join('\n');

  const scaleRows = tokens.typography.scale
    .map((t) => `| ${t.name} | ${t.size} | ${t.weight} | ${t.spacing} | ${t.lineHeight} |`)
    .join('\n');

  const spacingRows = tokens.spacing.tailwind
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((s) => `| ${s} |`)
    .join('\n');

  const radiusRows = tokens.radii
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((r) => `| ${r} |`)
    .join('\n');

  const shadowRows = tokens.shadows.map((s) => `| ${s} |`).join('\n');

  const letterRows = tokens.typography.letterSpacing
    .map((ls) => `| ${ls.key} | ${ls.value} |`)
    .join('\n');

  const gradRows = tokens.gradients.map((g) => `- \`${g}\``).join('\n');

  return `# SanLuis AI — Design Token Specification

> Auto-generated by \`scripts/extract-design-tokens.js\` on ${now}.
> Follows Google's [DESIGN.md token spec](https://github.com/google/material-design-lite/wiki/DESIGN.md) conventions.

## Sources Scanned

- \`app/globals.css\`
- \`tailwind.config.js\`
- \`app/layout.tsx\`
- Components: ${tokens.componentFiles.map((f) => `\`${f}\``).join(', ')}

---

## 1. Color Palette

### 1.1 CSS Custom Properties (:root)

| Token | Value |
|-------|-------|
${tokens.cssVars.map((v) => `| ${v.name} | ${v.value} |`).join('\n')}

### 1.2 Tailwind Theme Colors

| Token | Hex / CSS | Figma rgba |
|-------|-----------|------------|
${paletteRows}

---

## 2. Typography

### 2.1 Font Families

| Token | Stack |
|-------|-------|
${tokens.typography.families.map((f) => `| ${f.split(':')[0]} | ${f.split(':').slice(1).join(':').trim()} |`).join('\n')}

### 2.2 Type Scale (Custom Classes)

| Class | font-size | font-weight | letter-spacing | line-height |
|-------|-----------|---------------|----------------|-------------|
${scaleRows}

### 2.3 Letter Spacing Tokens

| Token | Value |
|-------|-------|
${letterRows}

---

## 3. Spacing

### 3.1 Tailwind Spacing Classes Used

| Class |
|-------|
${spacingRows}

### 3.2 Arbitrary Spacing Values

${tokens.spacing.arbitrary.length ? tokens.spacing.arbitrary.map((s) => `- \`${s}\``).join('\n') : '_None detected_'}

---

## 4. Shape (Border Radius)

| Class |
|-------|
${radiusRows}

---

## 5. Elevation / Shadows

### 5.1 Tailwind Shadow Classes

| Class |
|-------|
${shadowRows.length ? shadowRows : '_None detected_'}

### 5.2 CSS Box Shadows

${tokens.effects.boxShadows.length ? tokens.effects.boxShadows.map((s) => `- \`${s}\``).join('\n') : '_None detected_'}

---

## 6. Backgrounds & Gradients

### 6.1 Tailwind Background Images

| Token | Value |
|-------|-------|
${tokens.backgroundImages.map((b) => `| ${b.key} | \`${b.value}\` |`).join('\n')}

### 6.2 Inline Gradients

${gradRows}

---

## 7. Motion

### 7.1 Transitions

${tokens.transitions.length ? tokens.transitions.map((t) => `- \`${t}\``).join('\n') : '_None detected_'}

### 7.2 Custom Utility Classes Referenced

- \`.btn-gold\` — gold CTA hover state (glow + lift)
- \`.btn-navy\` — navy secondary hover state
- \`.gold-border\`, \`.gold-divider\` — 1px gold accents
- \`.navy-border\`, \`.navy-divider\`, \`.navy-bg\`, \`.navy-glow\` — navy accents
- \`.grain-overlay\` — film-grain texture overlay
- \`.section-label\` — uppercase micro-label style

---

## 8. How to Use

Import tokens via Tailwind classes or CSS variables:

\`\`\`css
body {
  background-color: var(--bg);
  color: #ffffff;
  font-family: var(--font-inter), sans-serif;
}

h1, h2, h3 {
  font-family: var(--font-space-grotesk), sans-serif;
}
\`\`\`

Regenerate this file:

\`\`\`bash
node scripts/extract-design-tokens.js
\`\`\`
`;
}

function main() {
  const tokens = extractTokens();
  const md = toGoogleDesignMd(tokens);
  fs.writeFileSync(OUTPUT_PATH, md, 'utf8');
  console.log(`Wrote DESIGN.md to ${OUTPUT_PATH}`);
  console.log(`Colors extracted: ${Object.keys(tokens.colors).length}`);
  console.log(`Font families: ${tokens.typography.families.length}`);
  console.log(`Type scale entries: ${tokens.typography.scale.length}`);
  console.log(`Spacing classes: ${tokens.spacing.tailwind.length}`);
  console.log(`Radius classes: ${tokens.radii.length}`);
  console.log(`Shadow classes: ${tokens.shadows.length}`);
  console.log(`Gradients: ${tokens.gradients.length}`);
  console.log(`Components scanned: ${tokens.componentFiles.length}`);
}

main();
