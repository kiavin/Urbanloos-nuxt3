// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: 'Urbanloos | Mobile Toilet Rentals in Kenya – VIP, Events & Construction',
      htmlAttrs: {
        lang: 'en' // or 'en-KE' for English (Kenya)
      },
      meta: [
        { name: 'description', content: 'Urbanloos provides clean, affordable mobile toilet services across Nakuru, Kiambu, Narok, and more. Book VIP or standard toilets for any event or construction site.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  
        // Open Graph (OG) for Facebook/LinkedIn
        { property: 'og:title', content: 'Urbanloos | Mobile Toilet Rentals in Kenya' },
        { property: 'og:description', content: 'Professional mobile toilet rentals for events, weddings, and construction sites. Serving Nakuru, Kiambu, Narok, Nyandarua, Laikipia and more.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.urbanloos.com' },
        { property: 'og:image', content: 'https://www.urbanloos.com/images/og-image.webp' },
  
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Urbanloos | Clean, Reliable Mobile Toilets in Kenya' },
        { name: 'twitter:description', content: 'VIP toilets, event sanitation, and mobile loos across Nakuru, Kiambu, Narok, and beyond.' },
        { name: 'twitter:image', content: 'https://www.urbanloos.com/images/og-image.webp' },
  
        // Robots
        { name: 'robots', content: 'index, follow' }
      ],
      link: [
        // Canonical URL
        { rel: 'canonical', href: 'https://www.urbanloos.com' },
        // Favicon
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
      ]
    }
  },  
  components: false, 
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    '@nuxt/image',
    '@nuxt/eslint'
  ]
})