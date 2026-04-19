export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/default.styl'],

  modules: [
    '@nuxt/image',
    '@pinia/nuxt'
  ],

  app: {
    head: {
      title: 'JAAM House of Sushi',

      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            "Here at Jaam, you'll find a distinctly unique dining experience! We are committed to bringing you the taste of Japan. All of our food preparation procedures must meet rigorous requirements which ensure that we offer top quality products made by our highly skilled chefs."
        }
      ],

      link: [
        { rel: 'icon', type: 'image/webp', href: '/LOGO.webp' }
      ]
    }
  }
})
