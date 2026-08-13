/* Retired service worker.
 *
 * This site used to install a caching worker. It is a static marketing site
 * that changes rarely and is small enough to serve from the edge, so the
 * worker bought nothing and cost real trouble: it kept serving a stale copy
 * of the old page after the site had been rebuilt, which is exactly the
 * failure mode people hit.
 *
 * The file stays at its old URL on purpose. Browsers that already registered
 * the previous worker fetch this one, run it, and it clears every cache and
 * unregisters itself. Deleting the file instead would leave the old worker
 * in place on those devices until it happened to 404.
 *
 * Once traffic has cycled through (a few months), this file can go too.
 */

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(names.map((name) => caches.delete(name)));
      await self.registration.unregister();

      // Reload open tabs so they leave the cached copy behind immediately.
      const clients = await self.clients.matchAll({ type: "window" });
      for (const client of clients) {
        client.navigate(client.url).catch(() => {});
      }
    })()
  );
});
