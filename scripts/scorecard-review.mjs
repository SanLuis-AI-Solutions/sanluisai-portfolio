import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const baseUrl = process.env.SCORECARD_REVIEW_URL || 'http://127.0.0.1:3000'
const output = path.resolve('output/playwright/ops-008')
const fixtures = ['case-1', 'case-2', 'case-3', 'case-4', 'case-5', 'case-6', 'case-7']
const viewports = [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'mobile', width: 390, height: 844 },
]

await mkdir(output, { recursive: true })
const browser = await chromium.launch()

try {
  for (const viewport of viewports) {
    const context = await browser.newContext({ viewport, reducedMotion: viewport.name === 'mobile' ? 'reduce' : 'no-preference' })
    const externalRequests = []
    const consoleErrors = []
    const page = await context.newPage()
    page.on('console', message => {
      if (message.type() === 'error') consoleErrors.push(message.text())
    })
    page.on('request', request => {
      const url = new URL(request.url())
      if (!['127.0.0.1', 'localhost'].includes(url.hostname)) externalRequests.push(request.url())
    })

    for (const fixture of fixtures) {
      await page.goto(`${baseUrl}/internal/ai-opportunity-scorecard?fixture=${fixture}`, { waitUntil: 'networkidle' })
      await page.locator('[data-result-category]').waitFor()
      await page.waitForTimeout(1500)
      await page.locator('nextjs-portal').evaluateAll(portals => portals.forEach(portal => { portal.style.display = 'none' }))
      const cta = page.getByRole('button', { name: /placeholder .* disabled/i })
      if (!(await cta.isDisabled())) throw new Error(`${fixture} CTA is active`)
      await page.screenshot({ path: path.join(output, `${viewport.name}-${fixture}.png`), fullPage: true })
    }

    await page.goto(`${baseUrl}/internal/ai-opportunity-scorecard`, { waitUntil: 'networkidle' })
    await page.getByRole('button', { name: 'Start synthetic Scorecard' }).focus()
    await page.keyboard.press('Enter')
    await page.getByRole('heading', { name: 'AI Opportunity Scorecard' }).waitFor()
    if ((await page.locator('input[type="text"], input[type="email"], input[type="tel"], textarea').count()) !== 0) {
      throw new Error('Prohibited personal-data control rendered')
    }
    if (await page.locator('input[type="radio"]').evaluateAll(inputs => inputs.some(input => !input.labels?.length))) {
      throw new Error('Unlabeled Scorecard control rendered')
    }
    await page.keyboard.press('Tab')
    if (await page.evaluate(() => document.activeElement?.getAttribute('name')) !== 'q1') {
      throw new Error('Keyboard focus did not enter Q1 first')
    }
    await page.keyboard.press('Space')
    for (let question = 2; question <= 10; question += 1) {
      await page.locator(`input[name="q${question}"][value="2"]`).focus()
      await page.keyboard.press('Space')
    }
    await page.getByRole('button', { name: 'Calculate synthetic result' }).focus()
    await page.keyboard.press('Enter')
    await page.locator('[data-result-category="Lead Response Automation"]').waitFor()
    await page.getByRole('button', { name: 'Start another synthetic run' }).focus()
    await page.keyboard.press('Enter')
    await page.getByRole('button', { name: 'Start synthetic Scorecard' }).focus()
    await page.keyboard.press('Enter')
    await page.getByRole('button', { name: 'Calculate synthetic result' }).focus()
    await page.keyboard.press('Enter')
    await page.getByText('Q1 is missing or invalid.').waitFor()
    await page.screenshot({ path: path.join(output, `${viewport.name}-validation-error.png`), fullPage: true })

    if (externalRequests.length) throw new Error(`External network requests detected: ${externalRequests.join(', ')}`)
    if (consoleErrors.length) throw new Error(`Browser console errors detected: ${consoleErrors.join(' | ')}`)
    await context.close()
  }
  console.log(`Scorecard review passed; screenshots written to ${output}`)
} finally {
  await browser.close()
}
