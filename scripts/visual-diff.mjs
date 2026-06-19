import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASELINE_DIR = path.resolve(__dirname, "..", "visual-diff-baselines");
const CURRENT_DIR = path.resolve(__dirname, "..", "visual-diff-current");
const DIFF_DIR = path.resolve(__dirname, "..", "visual-diff-diffs");

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function parseArgs() {
  const args = process.argv.slice(2);
  const out = {};
  for (let i = 0; i < args.length; i++) {
    const key = args[i];
    if (key.startsWith("--")) {
      const next = args[i + 1];
      if (next && !next.startsWith("--")) {
        out[key.slice(2)] = next;
        i++;
      } else {
        out[key.slice(2)] = true;
      }
    }
  }
  return out;
}

async function captureScreenshot(url, name, options) {
  ensureDir(BASELINE_DIR);
  ensureDir(CURRENT_DIR);
  ensureDir(DIFF_DIR);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: options.viewport || { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });

  // Dismiss common consent banners / cookie notices if present.
  await page.evaluate(() => {
    const selectors = [
      '[class*="cookie"]',
      '[class*="consent"]',
      '[id*="cookie"]',
      '[id*="consent"]',
    ];
    selectors.forEach((sel) => {
      const el = document.querySelector(sel);
      if (el && el instanceof HTMLElement) el.style.display = "none";
    });
  });

  const baselinePath = path.join(BASELINE_DIR, `${name}.png`);
  const currentPath = path.join(CURRENT_DIR, `${name}.png`);
  const diffPath = path.join(DIFF_DIR, `${name}-diff.png`);

  let screenshotBuffer;
  if (options.selector) {
    const el = page.locator(options.selector).first();
    await el.waitFor({ state: "visible", timeout: 15000 });
    screenshotBuffer = await el.screenshot({ path: currentPath });
  } else {
    screenshotBuffer = await page.screenshot({
      path: currentPath,
      fullPage: options.fullPage || false,
    });
  }

  await browser.close();

  if (!fs.existsSync(baselinePath)) {
    fs.copyFileSync(currentPath, baselinePath);
    console.log(`Baseline created: ${baselinePath}`);
    return { isNewBaseline: true, baselinePath, currentPath, diffPath };
  }

  const baselineImg = PNG.sync.read(fs.readFileSync(baselinePath));
  const currentImg = PNG.sync.read(screenshotBuffer);

  if (baselineImg.width !== currentImg.width || baselineImg.height !== currentImg.height) {
    console.warn(
      `Dimension mismatch: baseline ${baselineImg.width}x${baselineImg.height} vs current ${currentImg.width}x${currentImg.height}`
    );
    return {
      isNewBaseline: false,
      baselinePath,
      currentPath,
      diffPath,
      mismatch: null,
      dimensionMismatch: true,
    };
  }

  const diff = new PNG({ width: baselineImg.width, height: baselineImg.height });
  const mismatch = pixelmatch(
    baselineImg.data,
    currentImg.data,
    diff.data,
    baselineImg.width,
    baselineImg.height,
    { threshold: 0.1, includeAA: false }
  );

  const totalPixels = baselineImg.width * baselineImg.height;
  const mismatchRatio = mismatch / totalPixels;
  fs.writeFileSync(diffPath, PNG.sync.write(diff));

  console.log(`Current:  ${currentPath}`);
  console.log(`Baseline: ${baselinePath}`);
  console.log(`Diff:     ${diffPath}`);
  console.log(`Mismatched pixels: ${mismatch} (${(mismatchRatio * 100).toFixed(2)}%)`);

  return {
    isNewBaseline: false,
    baselinePath,
    currentPath,
    diffPath,
    mismatch,
    mismatchRatio,
    dimensionMismatch: false,
  };
}

const args = parseArgs();
const url = args.url || "https://sanluisai-portfolio.vercel.app";
const name = args.name || "homepage";
const selector = args.selector;
const fullPage = !!args.fullPage;
const viewport = args.viewport
  ? JSON.parse(args.viewport)
  : { width: 1440, height: 900 };

console.log("\nCapturing visual diff");
console.log(`  URL:       ${url}`);
console.log(`  Name:      ${name}`);
console.log(`  Selector:  ${selector || "(viewport)"}`);
console.log(`  Full page: ${fullPage}`);
console.log(`  Viewport:  ${viewport.width}x${viewport.height}`);

try {
  const result = await captureScreenshot(url, name, {
    selector,
    fullPage,
    viewport,
  });

  if (result.isNewBaseline) {
    process.exit(0);
  }

  if (result.dimensionMismatch) {
    console.error("Dimension mismatch - manual review required.");
    process.exit(1);
  }

  const threshold = 0.005;
  if (result.mismatchRatio > threshold) {
    console.warn(`Visual change detected (>${(threshold * 100).toFixed(1)}% threshold).`);
    process.exit(2);
  } else {
    console.log("Visual diff within tolerance.");
    process.exit(0);
  }
} catch (err) {
  console.error("Error:", err);
  process.exit(1);
}
