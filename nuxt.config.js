import i18n from "./config/i18n";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Pidgin - Contact Solutions",
    htmlAttrs: {
      lang: "es",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Somos una firma de developers on demand especializada en conectar a los mejores desarrolladores con las mejores empresas.",
      },

      { name: "robots", content: "index, follow" },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "keywords",
        content:
          "Pidgin, Pidgin Contact Solutions, Pidgin Colombia, BPO, Desarrolladores, Developers, Desarrollo, Desarrolladores, Programación, Programadores, On demand",
      },
    ],
    link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    script: [
      {
        src: "https://smtpjs.com/v3/smtp.js",
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/scss/_variables.scss", "~assets/css/fonts.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/bootstrap-vue",
    "@/plugins/vue-typed-js",
    "@/plugins/infinite-slide-bar",
    "@/plugins/vue-cookies",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    /* other modules */
    [
      "nuxt-i18n",
      {
        strategy: "no_prefix",
        defaultLocale: "es",
        locales: [
          {
            code: "en",
            name: "English",
          },
          {
            code: "es",
            name: "Español",
          },
        ],
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "user_language",
          redirectOn: "root",
        },
        vueI18n: i18n,
      },
    ],
    "@nuxtjs/google-fonts",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/robots"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  googleFonts: {
    families: {
      Montserrat: {
        wght: [300, 400, 500, 600, 700],
        ital: [300, 400, 500, 600, 700],
      },
    },
  },
};
