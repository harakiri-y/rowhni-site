// Rowhni Service Worker - Advanced Caching Strategy
// Version: 1.0.0

const CACHE_NAME = 'rowhni-cache-v1.0.0';
const STATIC_CACHE = 'rowhni-static-v1.0.0';
const DYNAMIC_CACHE = 'rowhni-dynamic-v1.0.0';
const IMAGE_CACHE = 'rowhni-images-v1.0.0';

// Critical resources to cache immediately
const CRITICAL_ASSETS = [
  '/',
  '/index.html',
  '/_assets/site.css',
  '/_assets/site.js',
  '/manifest.json',
  '/rowhni_logo_day.png'
];

// Static assets to cache
const STATIC_ASSETS = [
  '/support/',
  '/privacy/',
  '/browserconfig.xml',
  '/Screenshots/image1.jpg',
  '/Screenshots/image2.jpg',
  '/Screenshots/image3.jpg',
  '/Screenshots/image4.jpg',
  '/Screenshots/2118C33D-97FE-4130-8CC0-968C6765DFC7.png'
];

// External resources to cache
const EXTERNAL_ASSETS = [
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollToPlugin.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/TextPlugin.min.js',
  'https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQQoyDLAp5cP2D2lNP65C3E0-sJp4S.woff2',
  'https://fonts.gstatic.com/s/playfairdisplay/v32/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDPYA.woff2'
];

// Install event - Cache critical resources
self.addEventListener('install', event => {
  console.log('🚀 Rowhni Service Worker installing...');
  
  event.waitUntil(
    Promise.all([
      // Cache critical assets immediately
      caches.open(STATIC_CACHE).then(cache => {
        console.log('📦 Caching critical assets');
        return cache.addAll(CRITICAL_ASSETS);
      }),
      
      // Cache static assets
      caches.open(STATIC_CACHE).then(cache => {
        console.log('📁 Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      }),
      
      // Cache external resources
      caches.open(STATIC_CACHE).then(cache => {
        console.log('🌐 Caching external resources');
        return Promise.allSettled(
          EXTERNAL_ASSETS.map(url => 
            cache.add(url).catch(err => {
              console.warn(`Failed to cache ${url}:`, err);
            })
          )
        );
      })
    ]).then(() => {
      console.log('✅ Service Worker installed successfully');
      self.skipWaiting();
    })
  );
});

// Activate event - Clean up old caches
self.addEventListener('activate', event => {
  console.log('🔄 Rowhni Service Worker activating...');
  
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== IMAGE_CACHE) {
              console.log('🗑️ Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      
      // Take control of all clients
      self.clients.claim()
    ]).then(() => {
      console.log('✅ Service Worker activated successfully');
    })
  );
});

// Fetch event - Advanced caching strategies
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }
  
  event.respondWith(handleRequest(request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  
  try {
    // Strategy 1: Cache First for static assets
    if (isStaticAsset(request)) {
      return await cacheFirst(request, STATIC_CACHE);
    }
    
    // Strategy 2: Cache First for images with fallback
    if (isImageRequest(request)) {
      return await cacheFirstWithFallback(request, IMAGE_CACHE);
    }
    
    // Strategy 3: Network First for API and dynamic content
    if (isApiRequest(request) || isDynamicContent(request)) {
      return await networkFirst(request, DYNAMIC_CACHE);
    }
    
    // Strategy 4: Stale While Revalidate for CSS/JS
    if (isCssOrJs(request)) {
      return await staleWhileRevalidate(request, STATIC_CACHE);
    }
    
    // Strategy 5: Network First for external resources
    if (isExternalResource(request)) {
      return await networkFirst(request, STATIC_CACHE);
    }
    
    // Default: Network First with cache fallback
    return await networkFirst(request, DYNAMIC_CACHE);
    
  } catch (error) {
    console.error('Service Worker fetch error:', error);
    return await caches.match('/') || new Response('Offline', { status: 503 });
  }
}

// Caching Strategies Implementation

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) {
    return cached;
  }
  
  const response = await fetch(request);
  if (response.ok) {
    const cache = await caches.open(cacheName);
    cache.put(request, response.clone());
  }
  
  return response;
}

async function cacheFirstWithFallback(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) {
    return cached;
  }
  
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
      return response;
    }
  } catch (error) {
    console.warn('Image fetch failed:', error);
  }
  
  // Return placeholder or cached fallback
  return await caches.match('/rowhni_logo_day.png') || 
         new Response('Image not available', { status: 404 });
}

async function networkFirst(request, cacheName) {
  try {
    const response = await fetch(request);
    // Cache only successful responses, but always return whatever the network gave us
    if (response && response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.warn('Network request failed, falling back to cache:', error);
    // Try exact match
    let cached = await caches.match(request);
    if (cached) return cached;
    // For navigations like "/privacy" (no extension, no trailing slash), try directory index "/privacy/"
    const directoryFallback = await matchDirectoryIndex(request);
    if (directoryFallback) return directoryFallback;
    // As a last resort, return cached root or offline response
    return (await caches.match('/')) || new Response('Offline', { status: 503 });
  }
}

async function matchDirectoryIndex(request) {
  try {
    const acceptsHtml = (request.headers.get('accept') || '').includes('text/html');
    if (request.mode === 'navigate' || acceptsHtml) {
      const url = new URL(request.url);
      const path = url.pathname;
      const hasExtension = /\.[^\/]+$/.test(path);
      const needsSlash = !hasExtension && !path.endsWith('/');
      if (needsSlash) {
        return await caches.match(path + '/');
      }
    }
  } catch (_) {
    // no-op
  }
  return undefined;
}

async function staleWhileRevalidate(request, cacheName) {
  const cached = await caches.match(request);
  
  const fetchPromise = fetch(request).then(response => {
    if (response.ok) {
      const cache = caches.open(cacheName);
      cache.then(c => c.put(request, response.clone()));
    }
    return response;
  }).catch(error => {
    console.warn('Background fetch failed:', error);
    return cached;
  });
  
  return cached || await fetchPromise;
}

// Helper functions for request classification

function isStaticAsset(request) {
  const url = new URL(request.url);
  return url.pathname.includes('manifest.json') ||
         url.pathname.includes('browserconfig.xml') ||
         url.pathname.endsWith('.ico') ||
         url.pathname.includes('/icons/');
}

function isImageRequest(request) {
  return request.destination === 'image' ||
         /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(request.url);
}

function isApiRequest(request) {
  const url = new URL(request.url);
  return url.pathname.includes('/api/') ||
         url.pathname.includes('/subscribe') ||
         url.hostname.includes('analytics') ||
         url.hostname.includes('gtag');
}

function isDynamicContent(request) {
  const url = new URL(request.url);
  return url.searchParams.has('utm_') ||
         url.searchParams.has('fbclid') ||
         url.searchParams.has('gclid');
}

function isCssOrJs(request) {
  return request.destination === 'style' ||
         request.destination === 'script' ||
         /\.(css|js)$/i.test(request.url);
}

function isExternalResource(request) {
  const url = new URL(request.url);
  return url.hostname !== self.location.hostname;
}

// Background sync for offline functionality
self.addEventListener('sync', event => {
  if (event.tag === 'newsletter-signup') {
    event.waitUntil(syncNewsletterSignup());
  }
});

async function syncNewsletterSignup() {
  // Handle offline newsletter signups
  const subscriptions = await getStoredSubscriptions();
  
  for (const subscription of subscriptions) {
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(subscription)
      });
      
      // Remove from offline storage after successful sync
      await removeStoredSubscription(subscription.id);
      
    } catch (error) {
      console.error('Failed to sync newsletter signup:', error);
    }
  }
}

async function getStoredSubscriptions() {
  // Implementation would depend on your offline storage strategy
  return [];
}

async function removeStoredSubscription(id) {
  // Implementation would depend on your offline storage strategy
}

// Push notification handling
self.addEventListener('push', event => {
  if (!event.data) return;
  
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/rowhni_logo_day.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [200, 100, 200],
    data: data.url,
    actions: [
      {
        action: 'view',
        title: 'View',
        icon: '/icons/icon-72x72.png'
      },
      {
        action: 'close',
        title: 'Close'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow(event.notification.data)
    );
  }
});

console.log('🎯 Rowhni Service Worker loaded successfully');