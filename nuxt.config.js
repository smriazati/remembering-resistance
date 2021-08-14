export default {
  head: {
    target: "static",
    titleTemplate: "Remembering Resistance: %s",
    htmlAttrs: {
      lang: "en"
    },
    bodyAttrs: {
      class: ["my-style"]
    },
    meta: [{
      charset: "utf-8",
    }],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/ScrollTrigger.min.js"
      },

    ],
    link: [
      {
        rel: 'preconnect',
        src: "https://fonts.googleapis.com",
      },
      {
        rel: 'preconnect',
        src: "https://fonts.gstatic.com",
      },
      {
        rel: 'stylesheet',
        src: "https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,700;1,400&display=swap",
        as: "style"
      },
      {
        rel: 'stylesheet',
        src: "https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap",
        as: "style"
      },
      {
        rel: 'stylesheet',
        src: "https://fonts.googleapis.com/css2?family=Zilla+Slab&display=swap",
        as: "style"

      },

    ],
  },

  css: ['~/assets/sass/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/maps.client'],
  modules: [
    '@nuxtjs/cloudinary'
  ],
  cloudinary: {
    // Cloudinary configuration options
    cloudName: process.env.CLOUDINARYCLOUDNAME,
    useComponent: true
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  env: {
    mapsApi: process.env.GOOGLEMAPSAPI,
  },
  privateRuntimeConfig: {
    mapsApi: process.env.GOOGLEMAPSAPI
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    loaders: {
      limit: 0,
    }
  },
}
