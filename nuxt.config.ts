// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    pageTransition: {name: 'page'}
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content'
  ],
  content: {
    highlight: {
      theme: {
        default: 'min-light',
        dark: 'min-dark'
      }
    }
  },
  colorMode: {
    classSuffix: ''
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})
