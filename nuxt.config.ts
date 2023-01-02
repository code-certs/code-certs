// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content'
    ],
    content: {
        // https://content.nuxtjs.org/api/configuration
    },
    nitro: {
        prerender: {
            routes: ['/sitemap.xml']
        }
    }
})
