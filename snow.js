// 은은하게 내리는 눈 (화면을 가리지 않도록 작고 옅게, 화면 움직임 줄이기 설정이면 꺼짐)
(function () {
  var cv = document.getElementById('snow');
  if (!cv || !cv.getContext || (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches)) return;
  var ctx = cv.getContext('2d'), W = 0, H = 0, dpr = 1, flakes = [], N = 22, run = true, last = 0;
  function size() { dpr = Math.min(window.devicePixelRatio || 1, 2); W = innerWidth; H = innerHeight; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
  function mk(top) { return { x: Math.random() * W, y: top ? -10 : Math.random() * H, r: 4 + Math.random() * 6, v: 14 + Math.random() * 20, s: Math.random() * 6.28, a: .3 + Math.random() * .35, rot: Math.random() * 6.28, spin: (Math.random() - .5) * .6 }; }
  // 눈꽃 모양: 가지 6개 + 작은 잔가지
  function flake(f, col) {
    var r = f.r;
    ctx.save(); ctx.translate(f.x, f.y); ctx.rotate(f.rot);
    ctx.strokeStyle = col; ctx.lineWidth = Math.max(1, r / 6); ctx.lineCap = 'round';
    ctx.beginPath();
    for (var k = 0; k < 6; k++) {
      ctx.moveTo(0, 0); ctx.lineTo(0, -r);
      ctx.moveTo(0, -r * .55); ctx.lineTo(-r * .28, -r * .78);
      ctx.moveTo(0, -r * .55); ctx.lineTo(r * .28, -r * .78);
      ctx.rotate(Math.PI / 3);
    }
    ctx.stroke(); ctx.restore();
  }
  function dark() { var t = document.documentElement.getAttribute('data-theme'); return t === 'dark' || (!t && window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches); }
  function frame(ts) {
    if (!run) return;
    var dt = Math.min((ts - last) / 1000 || 0, .05); last = ts;
    ctx.clearRect(0, 0, W, H);
    var c = dark() ? '255,255,255' : '140,170,195';
    for (var i = 0; i < flakes.length; i++) {
      var f = flakes[i];
      f.y += f.v * dt; f.s += dt * .8; f.x += Math.sin(f.s) * 12 * dt;
      if (f.y > H + 10) flakes[i] = mk(true);
      f.rot += f.spin * dt;
      flake(f, 'rgba(' + c + ',' + f.a + ')');
    }
    requestAnimationFrame(frame);
  }
  size(); for (var i = 0; i < N; i++) flakes.push(mk(false));
  addEventListener('resize', size);
  document.addEventListener('visibilitychange', function () { run = !document.hidden; if (run) { last = performance.now(); requestAnimationFrame(frame); } });   // 안 볼 때는 멈춰서 배터리 절약
  requestAnimationFrame(frame);
})();
