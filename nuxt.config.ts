// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: [
      // Scan top-level modules
      "composables",
      // ... or scan modules nested one level deep with a specific name and file extension
      "composables/*/index.{ts,js,mjs,mts}",
      // ... or scan all modules within given directory
      "composables/**"
    ]
  },

  runtimeConfig: {
    public: {
      api: process.env.API_MAIN,
      apiAddress: process.env.API_ADDRESS,
      apiAuthentication: process.env.API_AUTHENTICATION,
    },
  },

  modules:[
    "@nuxtjs/tailwindcss",
    // "@nuxtjs/abifa-ui"
  ],

});
