
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/pwa',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },
  pwa: {
    manifest: {
      crossorigin: 'use-credentials'
    },
    workbox: {
      importScripts: [
        'kasa-sw.js'
      ],
      config: true,
      skipWaiting: true,
      preCaching: [
        {
          url: "/"
        }
      ],
      cleanOutdatedCaches: true,
      runtimeCaching: [
        {
          urlPattern: 'https://my-json-server.typicode.com/ChesterHub/KasaLiving_JsonServer/.*',
          method: 'GET',
          handler: 'networkFirst'
        },
        {
          urlPattern: '/*',
          method: 'GET',
          handler: 'networkFirst'
        }
      ],
    }
  }
}
