// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@nuxt/postcss8',
  ],
  css: [
    '~/assets/css/main.css',
  ],
  typescript: {
    strict: true
  },
  modules: [
    '@nuxtjs/strapi',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  strapi: {
    entities: ['restaurants', 'categories'],
    url: 'http://localhost:1337',
  },
});
