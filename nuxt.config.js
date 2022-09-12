export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Jannata Resort",
    htmlAttrs: {
      lang: "en",
      class: "has-scroll-init has-scroll-smooth has-scroll-scrolling",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/flickity@2.3.0/dist/flickity.css",
      },
    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js",
      },
      {
        src: "https://unpkg.com/flickity@2.3.0/dist/flickity.pkgd.min.js",
      },
      {
        src: "/scripts/_vendor.js",
        type: "text/javascript",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    "@/styles/global.scss",
    "@/styles/_normalize.scss",
    "@/styles/gsap.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/anime.js",
      ssr: false,
    },
    {
      src: "~/plugins/locomotiveScroll.js",
      ssr: false,
    },
    { src: "~/plugins/jarallax.js", ssr: false },
    { src: "~~/node_modules/vue-rellax/lib/nuxt-plugin", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "nuxt-i18n",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  //Loading Configuration
  // loading: "@/components/LoadingBar.vue",
};
