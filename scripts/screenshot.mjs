import { chromium } from 'playwright';

const URL = process.env.URL || 'http://localhost:5174/';

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 820, height: 1180 },
  { name: 'mobile', width: 390, height: 844 },
];

const SECTIONS = [
  { id: 'top', name: 'hero' },
  { id: 'features', name: 'features' },
  { id: 'tech', name: 'tech' },
  { id: 'pricing', name: 'pricing' },
  { id: 'faq', name: 'faq' },
  { id: 'cta', name: 'cta' },
];

async function main() {
  const browser = await chromium.launch();
  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    const page = await ctx.newPage();
    await page.goto(URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(800);

    // Scroll programático muy lento para que IntersectionObserver dispare
    // todas las animaciones whileInView con once: true.
    const totalH = await page.evaluate(() => document.body.scrollHeight);
    const step = 200;
    for (let y = 0; y <= totalH; y += step) {
      await page.evaluate((yy) => window.scrollTo({ top: yy, behavior: 'instant' }), y);
      await page.waitForTimeout(160);
    }
    // Esperar que terminen las animaciones con delay
    await page.waitForTimeout(1500);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(600);

    // Full page
    await page.screenshot({
      path: `/tmp/proposal-${vp.name}-full.png`,
      fullPage: true,
    });
    console.log(`✓ ${vp.name} full`);

    // Por sección
    for (const sec of SECTIONS) {
      await page.evaluate((id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
      }, sec.id);
      await page.waitForTimeout(900); // dejar correr animaciones
      await page.screenshot({
        path: `/tmp/proposal-${vp.name}-${sec.name}.png`,
        fullPage: false,
      });
      console.log(`  ↳ ${sec.name}`);
    }

    await ctx.close();
  }
  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
