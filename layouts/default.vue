<script setup>
import NavBar from "~/components/NavBar.vue";
import FooterSection from "~/components/FooterSection.vue";
import FloatingWhatsApp from "~/components/FloatingWhatsApp.vue";


const isLoading = ref(true)

// Handle initial load
onMounted(() => {
  // Simulate loading (remove this in production)
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
})

// Handle route changes
const router = useRouter()
router.beforeEach(() => {
  isLoading.value = true
})

router.afterEach(() => {
  // Add slight delay for better UX
  setTimeout(() => {
    isLoading.value = false
  }, 300)
})



useSeoMeta({
  description:
    "Looking for mobile toilets near you? UrbanLoos offers clean, affordable portable toilets across Kenya. Book mobile toilets for events and construction sites today.",
  ogTitle: "UrbanLoos | Mobile Toilets in Kenya for Hire – Clean & Affordable",
  ogDescription:
    "UrbanLoos provides reliable mobile toilets in Kenya, perfect for events, weddings, and construction sites. Find mobile toilets near you and book online today.",
  ogImage: "https://urbanloos.co.ke/images/seo/urbanloos-og.jpg",
  ogUrl: "https://urbanloos.co.ke/toilet-units",
  twitterTitle: "UrbanLoos | Mobile Toilets Near You – Rent in Kenya",
  twitterDescription:
    "Need mobile toilets near you? UrbanLoos offers VIP and standard portable toilet rentals across Kenya. Book now for fast, clean delivery.",
  twitterImage: "https://urbanloos.co.ke/images/seo/urbanloos-twitter.jpg",
  twitterCard: "summary_large_image",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "UrbanLoos",
        "image": "https://urbanloos.com/images/logo.png",
        "@id": "https://urbanloos.com",
        "url": "https://urbanloos.com",
        "telephone": "+254712345678",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kenyatta Street",
          "addressLocality": "Naivasha",
          "addressRegion": "Nakuru County",
          "postalCode": "20117",
          "addressCountry": "KE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -0.7261668,
          "longitude": 36.445286
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "08:00",
            "closes": "18:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/urbanloos",
          "https://www.instagram.com/urbanloos",
          "https://www.linkedin.com/company/urbanloos"
        ],
        "description": "UrbanLoos is a leading provider of mobile toilet rental services in Kenya. Located in Naivasha, Nakuru County, we offer clean, affordable portable toilets for events, construction sites, weddings, and more.",
        "priceRange": "$$",
        "serviceArea": {
          "@type": "Place",
          "name": "Kenya"
        }
      })
    }
  ]
});
</script>
<template>
  <div>
    <NavBar />
    <NuxtPage />
    <FloatingWhatsApp v-if="$route.path !== '/contact'" />
    <FooterSection />

  </div>
</template>
