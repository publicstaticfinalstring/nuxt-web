// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
    app: {
        head: {
            title: "仿写termius",
            meta: [
                {name: 'viewport', content: 'width=device-width, initial-scale=1'}
            ],
            charset: 'utf-8'
        }
    },
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    // 启用ts检查
    typescript: {
        typeCheck: true
    },
    // 引入模块
    modules: ['@pinia/nuxt', '@vueuse/nuxt', '@primevue/nuxt-module'],
    //配置primevue ui页面
    primevue: {
        autoImport: true,
        options: {
            theme: {
                preset: Aura,
                darkModeSelector: '.my-app-dark',
            }
        }
    },
    // 启动路由的配置
    pages: true,
    // 引入自定义css全局样式
    css: ['~/assets/app.css']
})