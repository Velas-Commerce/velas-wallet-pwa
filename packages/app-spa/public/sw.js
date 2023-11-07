self.addEventListener("install", function (event) {
  console.log("SW Installed: ", event);
});

self.addEventListener("activate", function (event) {
  console.log("SW Activated: ", event);
  return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  console.log("SW fetching: ", event);
  event.respondWith(fetch(event.request));
});
