import sitemap from './config/sitemap.js';

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
      { name: 'keywords', content: '鉅鴻, 鉅鴻科技, CGT, CGT TECHNOLOGY, 離心脫泡機, 真空攪拌機' },
      { hid: 'description', name: 'description', content: '主要服務項目有：真空式脫泡攪拌機、離心式脫泡攪拌機、真空式針筒離心機、填充機、攪拌杯' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    noscript: [
      { innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MM5DR9F" height="0" width="0" style="display:none;visibility:hidden"></iframe>', body: true }
    ],
    script: [
      {
        innerHTML: `(function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ 'gtm.start': new Date().getTime(), 'event': 'gtm.js' });
          var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
          j.async = true;
          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'G-GV1RXM3EXR');`
      }
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

    { src: '~/plugins/ga.js', mode: 'client' },

    { src: '~/plugins/sweet-alert', ssr: false },
    { src: '~/plugins/vee-validate', ssr: false },
    { src: '~/plugins/font-awesome', ssr: false },
    { src: '~/plugins/aos', ssr: false },
    { src: '~/plugins/tw-elements-path', ssr: false },
    { src: '~/plugins/vue-slick-carousel', ssr: false },
    { src: '~/plugins/days', ssr: false },
    { src: '~/plugins/directive-lazyLoad.js', ssr: false }
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
    '@nuxtjs/sitemap',
    'cookie-universal-nuxt'
  ],
  sitemap,

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
