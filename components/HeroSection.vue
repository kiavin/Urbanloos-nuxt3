<template>
  <section class="relative bg-[#5dbb63] overflow-hidden">
    <!-- Hero Container with optimized image -->
    <div class="relative w-full h-screen max-h-[92vh]">
      <NuxtImg
        src="/images/IMG_20241227_084221_655.webp"
        class="absolute inset-0 w-full h-full object-cover"
        alt="Premium mobile toilet rental service in Kenya - UrbanLoos"
        width="1920"
        height="1080"
        format="webp"
        quality="80"
        priority
      />
      
      <!-- Overlay with improved contrast -->
      <div class="absolute inset-0  backdrop-blur-sm " style="backdrop-filter: blur(3px) ; background-color: rgba(0, 0, 0, 0.4)"></div>
      
      <!-- Content Container -->
      <div class="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto text-white">
          <!-- Decorative element -->
          <div class="w-20 h-1 bg-white mb-6 mx-auto"></div>
          
          <!-- Headline with semantic hierarchy -->
          <h1 class="font-bebas-neue uppercase text-5xl sm:text-7xl lg:text-8xl font-black leading-tight mb-4">
            <span class="block text-white">Luxury Loos.</span>
            <span class="block text-white text-4xl sm:text-6xl lg:text-7xl">Everyday Prices.</span>
            <span class="block text-[#5dbb63] text-4xl sm:text-6xl lg:text-7xl">Everywhere You Need Us</span>
          </h1>
          
          <!-- Improved paragraph with better readability -->
          <div class="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto space-y-2">
            <p>
              UrbanLoos is Kenya's leading provider of premium mobile sanitation solutions, serving events and construction sites across multiple counties.
            </p>
            <p>
              Currently operating in Nakuru, Kiambu, Narok, Nyandarua, and Laikipia, with expanding coverage to neighboring regions.
            </p>
          </div>
          
          <!-- CTA Buttons with better interaction -->
          <div class="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <nuxt-link
              to="/contact"
              class="inline-flex items-center justify-center uppercase py-3 px-8 rounded-lg text-white text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              style="background-color: #5dbb63; border: 2px solid white;"
              aria-label="Get an instant quote for mobile toilet rentals"
            >
              Get Instant Quote
            </nuxt-link>
            <nuxt-link
              to="/services"
              class="inline-flex items-center justify-center uppercase py-3 px-8 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              style="background-color: white; color: #5dbb63; border: 2px solid white;"
              aria-label="View our mobile toilet services"
            >
              Our Services
            </nuxt-link>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator for better UX -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
// SEO Meta Configuration
useHead({
  title: 'Premium Mobile Toilet Rentals in Kenya | UrbanLoos',
  meta: [
    { 
      name: 'description', 
      content: 'Rent luxury mobile toilets at affordable prices across Kenya. Serving Nakuru, Kiambu, Narok, Nyandarua, and Laikipia with premium sanitation solutions.' 
    },
    {
      name: 'keywords',
      content: 'mobile toilet rental Kenya, portable toilets Nakuru, luxury loos Kiambu, construction toilets Narok, event toilets Nyandarua, sanitation services Laikipia'
    },
    {
      property: 'og:image',
      content: '/images/IMG_20241227_084221_655.webp'
    }
  ]
})
</script>

<style scoped>
/* Custom animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

/* Ensure text remains readable on all devices */
.text-shadow {
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}
</style>