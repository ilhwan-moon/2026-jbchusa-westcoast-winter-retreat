// 홈 화면 앱용 서비스 워커
// 항상 서버에서 최신 파일을 먼저 받아 옵니다(브라우저 저장본도 무시하고 서버에 확인).
// 인터넷이 끊겼을 때만 마지막으로 받은 파일을 보여 줍니다.
const CACHE = 'retreat-v2';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(
  caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())
));
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  if (/\.(mp4|wav)$/.test(new URL(req.url).pathname)) return;   // 영상은 저장하지 않음 (용량이 커서)
  e.respondWith(
    fetch(req, { cache: 'no-cache' }).then((res) => {
      if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }))
  );
});
