export default {
  server: {
    port: 8080
  },
  router: {
    middleware: ['getLang', 'getProduct'],
    scrollBehavior() {
      return { x: 0, y: 0 }
    }
  },
  head: {
    title: '鉅鴻科技 CGT TECHNOLOGY',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '鉅鴻, 鉅鴻科技, 鉅鴻科技有限公司, CGT, CGT TECHNOLOGY, 鉅鴻科技 CGT TECHNOLOGY' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.3.1/css/all.css", integrity: "sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU", crossorigin: "anonymous" }
    ],
  },

  css: [
    '~/static/style/animation.css',
    '~/assets/scss/main.scss',
  ],

  plugins: [
    '~/plugins/axios',
    '~/plugins/api',
    '~/plugins/i18n.js',

    { src: '~/plugins/sweet-alert', ssr: false },
    { src: '~/plugins/vee-validate', ssr: false },
    { src: '~/plugins/font-awesome', ssr: false },
    { src: '~/plugins/aos', ssr: false },
    { src: '~/plugins/tw-elements-path', ssr: false },
    { src: '~/plugins/vue-slick-carousel', ssr: false },
    { src: '~/plugins/days', ssr: false },
  ],

  components: true,

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  buildModules: [
    '@nuxt/postcss8',
    ["@nuxtjs/dotenv", { filename: ".env." + process.env.NODE_ENV }]
  ],

  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],

  axios: {
    baseURL: '/',
  },

  build: {
    transpile: ["vee-validate/dist/rules"],
    vendor: ['axios'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
