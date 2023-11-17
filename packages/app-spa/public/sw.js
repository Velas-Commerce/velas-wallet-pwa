self.addEventListener("install", function (event) {
  console.log("SW Installed: ", event);

  // wait untill cache completes
  event.waitUntill(
    cashes.open("static").then((cache) => {
      cache.add("/src/main.tsx");
    }),
  );
});

self.addEventListener("activate", function (event) {
  console.log("SW Activated: ", event);
  return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  console.log("SW fetching: ", event);
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      } else {
        return fetch(event.request);
      }
    }),
  );
  // event.respondWith(fetch(event.request));
});
