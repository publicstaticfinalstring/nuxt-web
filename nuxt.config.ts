// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
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
                darkModeSelector: false,
            }
        }
    },
    // 启动路由的配置
    pages: true
})