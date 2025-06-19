import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  nitro: {
    preset: 'static'
  },
  ssr: true,
  app: {
    head: {
      title: "Urbanloos | Mobile Toilet Rentals in Kenya - Events & Construction Sites",
      htmlAttrs: {
        lang: "en-KE",
      },
      meta: [
        { charset: "utf-8" },
        { 
          name: "theme-color", 
          content: "#0E3A59" 
        },
        {
          name: "description",
          content: "Clean, affordable mobile toilet rentals across Nakuru, Kiambu, Narok, Nyandarua, Laikipia. Book VIP or standard toilets for events, weddings, construction sites.",
        },
        { 
          name: "viewport", 
          content: "width=device-width, initial-scale=1, maximum-scale=5" 
        },
        { 
          name: "keywords", 
          content: "mobile toilets kenya, toilet rentals nakuru, vip toilets kiambu, construction toilets narok, event sanitation kenya" 
        },
        { 
          property: "og:title",
          content: "Urbanloos | Premium Mobile Toilet Rentals in Kenya"
        },
        {
          property: "og:description",
          content: "Professional mobile toilet solutions for events, construction sites & emergencies. Serving Central & Rift Valley regions.",
        },
        { 
          property: "og:type", 
          content: "website" 
        },
        { 
          property: "og:url", 
          content: "https://www.urbanloos.com" 
        },
        {
          property: "og:image",
          content: "https://www.urbanloos.com/images/og-banner.jpg"
        },
        { 
          property: "og:locale", 
          content: "en_KE" 
        },
        { 
          property: "og:site_name", 
          content: "Urbanloos" 
        },
        { 
          name: "twitter:card", 
          content: "summary_large_image" 
        },
        {
          name: "twitter:title",
          content: "Urbanloos | Reliable Mobile Toilets in Kenya"
        },
        {
          name: "twitter:description",
          content: "Hygienic toilet rentals for construction, events & emergencies. Quick delivery in Nakuru, Kiambu & Narok.",
        },
        {
          name: "twitter:image",
          content: "https://www.urbanloos.com/images/twitter-card.jpg"
        },
        { 
          name: "twitter:site", 
          content: "@urbanloos_ke"
        },
        // { 
        //   name: "google-site-verification", 
        //   content: "your_verification_code"
        // }
      ],
      link: [
        { 
          rel: "canonical", 
          href: "https://www.urbanloos.com" 
        },
        { 
          rel: "icon", 
          type: "image/png", 
          href: "/images/urban-loos-favicon-color.png" 
        },
        { 
          rel: "apple-touch-icon", 
          href: "/images/apple-touch-icon.png", 
          sizes: "180x180" 
        },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Urbanloos",
            "image": "https://www.urbanloos.com/images/logo.jpg",
            "url": "https://www.urbanloos.com",
            "telephone": "+254 715 557 481",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Your Street Address",
              "addressLocality": "Nakuru",
              "postalCode": "1644",
              "addressCountry": "KE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -0.303099,
              "longitude": 36.080026
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "07:00",
              "closes": "19:00"
            },
            "sameAs": [
              "https://www.facebook.com/urbanloos_ke",
              "https://www.instagram.com/urbanloos_ke",
            ]
          })
        }
      ]
    },
  },
  components: false,
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "@nuxt/image", 
    "@nuxtjs/sitemap",
    "nuxt-simple-robots"
  ],
  image: {
    domains: ["urbanloos.com"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    format: ["webp"],
  },
  site: {
    url: "https://www.urbanloos.com",
    name: "Urbanloos",
    trailingSlash: true
  },
  sitemap: {
    strictNuxtContentPaths: true,
    exclude: ["/admin/**"],
    autoLastmod: true,
    credits: false
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://www.urbanloos.com",
    }
  },
  features: {
    inlineStyles: false
  }
});