<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper/modules";

// Import only necessary Swiper CSS
import "swiper/css";
import "swiper/css/effect-fade";

const standardUnitImages = [
  { src: "/images/IMG_20241227_083356_610.webp", alt: "Standard Unit Image 1" },
  { src: "/images/standard1.webp", alt: "Standard Unit Image 2" },
  { src: "/images/IMG_20241227_084232_432.webp", alt: "Standard Unit Image 3" },
  { src: "/images/IMG_20241227_084632_600.webp", alt: "Standard Unit Image 4" },
];

const vipUnitImages = [
  { src: "/images/vip1.webp", alt: "VIP Unit Image 1" },
  { src: "/images/shower-toilet-trailer-combo-unit-intro.webp", alt: "VIP Unit Image 2" },
  { src: "/images/vip2.webp", alt: "VIP Unit Image 3" },
];
</script>

<template>
  <section class="py-16 bg-gray-50" id="services">
    <div class="container mx-auto px-4 space-y-16 bg-gray-50">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-10">
        Our Mobile Toilet Units
      </h2>

      <!-- Units Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Standard Unit -->
        <div
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105"
        >
          <!-- Image Swiper -->
          <div class="w-full h-[45vh]">
            <Swiper
              :modules="[Autoplay, EffectFade]"
              :slides-per-view="1"
              :autoplay="{ delay: 4000, disableOnInteraction: false }"
              :effect="'fade'"
              :loop="true"
              pagination
              class="w-full h-full"
            >
              <SwiperSlide v-for="(image, index) in standardUnitImages" :key="index">
                <div class="w-full h-full">
                  <NuxtImg
                    class="w-full h-full object-cover rounded-t-2xl"
                    :src="image.src"
                    :alt="image.alt"
                    width="800"
                    height="600"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <!-- Content -->
          <div class="p-4">
            <h3 class="text-xl font-semibold text-blue-700 mb-3 text-center">
              Standard Unit
            </h3>
            <ul class="space-y-2 text-gray-600">
              <li>✅ Basic handwash station</li>
              <li>✅ Interior ventilation</li>
              <li>✅ Eco-friendly flushing system</li>
              <li>✅ Compact and event-ready</li>
              <li>✅ Affordable pricing</li>
            </ul>
          </div>
        </div>

        <!-- VIP Unit -->
        <div
          class="bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-transform transform hover:scale-105 border-2 border-yellow-500"
        >
          <!-- Image Swiper -->
          <div class="w-full h-[45vh]">
            <Swiper
              :modules="[Autoplay, EffectFade]"
              :slides-per-view="1"
              :autoplay="{ delay: 5000, disableOnInteraction: false }"
              :effect="'fade'"
              :loop="true"
              pagination
              class="w-full h-full"
            >
              <SwiperSlide v-for="(image, index) in vipUnitImages" :key="index">
                <div class="w-full h-full">
                  <NuxtImg
                    class="w-full h-full object-cover rounded-t-2xl"
                    :src="image.src"
                    :alt="image.alt"
                    width="800"
                    height="600"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <!-- Content -->
          <div class="p-6 bg-gradient-to-br from-yellow-50 to-white">
            <h3 class="text-2xl font-bold text-yellow-600 mb-4 text-center">
              VIP Unit
            </h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-center">
                <span class="text-yellow-500 mr-2">⭐</span> Handwash station with mirror
              </li>
              <li class="flex items-center">
                <span class="text-yellow-500 mr-2">⭐</span> Lighting inside the unit
              </li>
              <li class="flex items-center">
                <span class="text-yellow-500 mr-2">⭐</span> Premium flushing toilet
              </li>
              <li class="flex items-center">
                <span class="text-yellow-500 mr-2">⭐</span> Scented, luxury interior
              </li>
              <li class="flex items-center">
                <span class="text-yellow-500 mr-2">⭐</span> Extra spacious design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
