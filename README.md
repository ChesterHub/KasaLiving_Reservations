# KasaLiving_Reservations

## Build Setup

```
1 - npm install

# build for production and launch server (required for Service Worker to work)
2 - npm run build && npm run start


# serve with hot reload at localhost:3000
$ npm run dev
```

While QAing, I found a bug with the `NUXT workbox-module` itself.

In order for a SPA to cache pages from dynamic urls, workbox has to use `registerNavigationRoute (version 4)`. To do this within the Nuxt modules, I had to add a custom service worker to workbox `(https://pwa.nuxtjs.org/modules/workbox.html#adding-custom-service-worker)`. Unfortunately there is an ongoing bug with adding custom service workers in the Nuxt framework. You can find it here where it goes into detail:
- https://github.com/nuxt-community/pwa-module/issues/268
- https://github.com/GoogleChrome/workbox/issues/1324

In my custom sw file "kasa-sw.js", I have code that is commented out that would be the solution if this bug did not exist.
The workaround right now is after building the production app, I copy and paste that code into the generated `sw.js` file under `// Runtime Caching`.

Code to paste : `const cacheRoute = workbox.precaching.getCacheKeyForURL("/")
                  workbox.routing.registerNavigationRoute(cacheRoute)`
                 
If the code is not added, most of the caching still works. The only thing that wont work is directly navigating to a specific reservation while offline (unless of course you navigate directly to that reservation while online prior, then the page will be cached).





