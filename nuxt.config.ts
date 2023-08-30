// https://nuxt.com/docs/api/configuration/nuxt-config
module.exports = {
    css: [
        'bootstrap/dist/css/bootstrap.min.css'
    ]
}
//@ts-ignore
export default defineNuxtConfig({
    devtools: {enabled: true},
    buildModules: [
        'nuxt-storage',
    ],
    storage: {
        localStorage: {
            prefix: 'blog-',
        },
    }
})
