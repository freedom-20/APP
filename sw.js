self.addEventListener('install', () => {
  console.log('Service Worker installed');
});
self.addEventListener('fetch', (event) => {
  // 暂时不拦截任何请求
});
