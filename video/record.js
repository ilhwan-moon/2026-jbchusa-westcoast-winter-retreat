// 사용법 영상 만들기: node video/record.js ko   (사이트를 http://localhost:8765 에서 띄운 상태, bgm.wav 필요)
// → video/howto_ko.mp4 (세로 1080×1920, 30fps, 배경음악 포함)
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const L = process.argv[2] || 'ko', FPS = 30, DIR = __dirname;
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto(`http://localhost:8765/video/howto.html?lang=${L}`, { waitUntil: 'networkidle' });
  await p.evaluate(async () => {
    await document.fonts.ready;
    const srcs = ['app', 'safari', 'chrome', 'table', 'settings', 'big', 'install'].map((n) => `assets/${document.documentElement.lang}_${n}.png`);
    await Promise.all(srcs.map((s) => new Promise((r) => { const i = new Image(); i.onload = i.onerror = r; i.src = s; })));
  });
  const total = await p.evaluate(() => window.TOTAL);
  const n = Math.round(total * FPS);
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-i', '-', '-i', `${DIR}/bgm.wav`,
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '23', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '160k', '-shortest', '-movflags', '+faststart', `${DIR}/howto_${L}.mp4`], { stdio: ['pipe', 'inherit', 'inherit'] });
  for (let i = 0; i < n; i++) {
    await p.evaluate(async (t) => { window.render(t); await Promise.all([...document.querySelectorAll('img')].filter((im) => !im.complete).map((im) => new Promise((r) => { im.onload = im.onerror = r; }))); }, i / FPS);
    const buf = await p.screenshot({ type: 'jpeg', quality: 90 });
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
    if (i % 300 === 0) console.log(L, i, '/', n);
  }
  ff.stdin.end(); await new Promise((r) => ff.on('close', r));
  await b.close(); console.log(L, 'done');
})();
