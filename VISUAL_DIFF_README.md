# Visual Diff / Screenshot Comparison Tool

This tool captures consistent screenshots of the SanLuis AI website and compares them against a baseline using **Playwright** + **pixelmatch**.

## What it does

- Opens the target URL in a headless Chromium browser at a fixed viewport (default 1440x900).
- Dismisses common cookie/consent banners so they don't pollute diffs.
- Captures a screenshot of a specific element (`--selector`) or the viewport/full page.
- On first run, saves the screenshot as the **baseline**.
- On later runs, compares the new screenshot to the baseline and writes a red-highlighted **diff** image.
- Exits with a non-zero code if visual changes exceed the 0.5% tolerance.

## Files

- `scripts/visual-diff.mjs` — main script (ES module, runs directly with Node).
- `scripts/visual-diff.ts` — TypeScript source equivalent.
- `visual-diff-baselines/` — reference screenshots.
- `visual-diff-current/` — latest captured screenshots.
- `visual-diff-diffs/` — red-highlighted difference images.

## Usage

### Quick start

```bash
cd /home/ninef/workspace/sanluisai-portfolio
npm run visual-diff
```

This captures the homepage `main` element as `homepage-hero`.

### Full-page homepage capture

```bash
npm run visual-diff:fullpage
```

### Custom URL / element / viewport

```bash
node scripts/visual-diff.mjs \
  --url https://sanluisai-portfolio.vercel.app \
  --name homepage-hero \
  --selector "main" \
  --viewport '{"width":1280,"height":800}'
```

### CLI options

| Option       | Description                                      | Default                                     |
| ------------ | ------------------------------------------------ | --------------------------------------------|
| `--url`      | Page URL to capture                              | `https://sanluisai-portfolio.vercel.app`  |
| `--name`     | Output name (used for baseline/current/diff)     | `homepage`                                  |
| `--selector` | CSS selector of the element to capture             | (full viewport)                             |
| `--fullPage` | Capture the full page (ignored if `--selector`)    | `false`                                     |
| `--viewport` | JSON viewport dimensions                           | `{"width":1440,"height":900}`               |

## Exit codes

| Code | Meaning                                        |
| ---- | ---------------------------------------------- |
| `0`  | Baseline created or diff within tolerance      |
| `1`  | Runtime error or dimension mismatch            |
| `2`  | Visual change detected above 0.5% threshold    |

## Dependencies installed

- `playwright` — browser automation and screenshots
- `pixelmatch` — pixel-level image comparison
- `pngjs` — PNG encode/decode
- `ts-node` — optional TypeScript runner

Playwright Chromium binary was also installed via `npx playwright install chromium`.

## Example output

```text
Capturing visual diff
  URL:       https://sanluisai-portfolio.vercel.app
  Name:      homepage-hero
  Selector:  main
  Full page: false
  Viewport:  1440x900
Current:  /home/ninef/workspace/sanluisai-portfolio/visual-diff-current/homepage-hero.png
Baseline: /home/ninef/workspace/sanluisai-portfolio/visual-diff-baselines/homepage-hero.png
Diff:     /home/ninef/workspace/sanluisai-portfolio/visual-diff-diffs/homepage-hero-diff.png
Mismatched pixels: 27762 (0.21%)
Visual diff within tolerance.
```

## Notes

- Delete or move files in `visual-diff-baselines/` to reset the baseline.
- Increase `--viewport` height if the hero element is taller than 900px and clipped.
- The script intentionally hides cookie/consent overlays before screenshotting for stable baselines.
