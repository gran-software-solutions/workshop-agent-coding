// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Modules
  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@pinia/nuxt'
  ],
  
  // UI Configuration
  ui: {
    icons: ['heroicons', 'lucide']
  },
  
  // Pinia Configuration
  pinia: {
    storesDirs: ['~/stores/**']
  },
  
  // CSS - Use tilde alias for project root
  css: [
    '~/assets/css/main.css'
  ],
  
  // PostCSS Configuration for Tailwind CSS v4
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
})
