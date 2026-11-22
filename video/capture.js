// 영상에 쓸 실제 앱 화면 캡처 (4개 언어). 실행: node video/capture.js  (사이트를 http://localhost:8765 에서 띄운 상태)
// 화면 비율: 영상 속 휴대폰 화면 640×1385px = 390 CSS px 폭 (×1.641)
const { chromium } = require('playwright');
const fs = require('fs');
const BASE = process.env.BASE || 'http://localhost:8765/';
const OUT = __dirname + '/assets/';
const H = { app: 790, safari: 687, chrome: 653 };   // 상태 표시줄·브라우저 막대를 뺀 앱 높이 (CSS px)
(async () => {
  const b = await chromium.launch();
  const boxes = {};
  for (const l of ['ko', 'en', 'es', 'zh']) {
    boxes[l] = {};
    const shot = async (name, h, prep) => {
      const ctx = await b.newContext({ viewport: { width: 390, height: h }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
      const p = await ctx.newPage();
      await p.addInitScript(() => { try { localStorage.setItem('rt_hint', '1'); localStorage.setItem('rt_theme', 'light'); } catch (e) {} });
      await p.goto(`${BASE}?lang=${l}&now=2026-11-28T09:25`, { waitUntil: 'networkidle' });
      await p.addStyleTag({ content: '#snow{display:none!important} *{animation:none!important;transition:none!important}' });
      await p.waitForTimeout(300);
      const extra = prep ? await prep(p) : {};
      await p.screenshot({ path: `${OUT}${l}_${name}.png` });
      const box = async (sel) => p.evaluate((s) => { const r = document.querySelector(s).getBoundingClientRect(); return { x: r.x + r.width / 2, y: r.y + r.height / 2 }; }, sel);
      boxes[l][name] = Object.assign({ setBtn: await box('#setBtn') }, extra);
      for (const k of Object.keys(extra)) if (typeof extra[k] === 'string') boxes[l][name][k] = await box(extra[k]);
      await ctx.close();
    };
    await shot('app', H.app, async (p) => ({ table: '#viewSeg [data-mode=table]', sermon: '#sqList li.soon button' }));
    await shot('safari', H.safari);
    await shot('chrome', H.chrome);
    await shot('table', H.app, async (p) => { await p.click('#viewSeg [data-mode=table]'); await p.evaluate(() => { document.getElementById('viewSeg').scrollIntoView({ block: 'start' }); }); return {}; });
    await shot('settings', H.app, async (p) => { await p.click('#setBtn'); await p.waitForTimeout(400); return { lang: '#langSeg [data-lang=en]', big: '#sizeSeg [data-size="3"]' }; });
    await shot('big', H.app, async (p) => { await p.click('#setBtn'); await p.click('#sizeSeg [data-size="3"]'); await p.click('#setDone'); await p.evaluate(() => window.scrollTo(0, 0)); return {}; });
    await shot('install', H.safari, async (p) => { await p.evaluate(() => { document.getElementById('installBtn').hidden = false; document.getElementById('installBtn').scrollIntoView({ block: 'center' }); }); return { installBtn: '#installBtn' }; });
    console.log(l, 'ok');
  }
  fs.writeFileSync(OUT + 'boxes.js', 'window.BOXES = ' + JSON.stringify(boxes, null, 1) + ';\n');
  await b.close();
})();
