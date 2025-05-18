<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper/modules";

// Import only necessary Swiper CSS
import "swiper/css";
import "swiper/css/effect-fade";

const standardUnitImages = [
  {
    src: "/images/IMG_20241227_083356_610.webp",
    alt: "Clean standard mobile toilet unit with handwashing station - UrbanLoos Kenya",
  },
  {
    src: "/images/standard1.webp",
    alt: "Standard portable toilet at a construction site in Nakuru",
  },
  {
    src: "/images/IMG_20241227_084232_432.webp",
    alt: "Well-maintained mobile toilet with ventilation system",
  },
  {
    src: "/images/IMG_20241227_084632_600.webp",
    alt: "Event-ready standard toilet unit with eco-friendly features",
  },
];

const vipUnitImages = [
  {
    src: "/images/vip1.webp",
    alt: "Luxury VIP mobile toilet trailer with premium amenities",
  },
  {
    src: "/images/shower-toilet-trailer-combo-unit-intro.webp",
    alt: "VIP toilet and shower combo unit for upscale events",
  },
  {
    src: "/images/vip2.webp",
    alt: "Spacious VIP mobile toilet with mirror and lighting",
  },
];
</script>

<template>
  <section class="py-20 bg-gradient-to-b from-gray-50 to-white" id="toilet-units">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div class="text-center">
        <span
          class="inline-block px-4 py-1.5 text-sm font-semibold tracking-wide text-[#5dbb63] uppercase bg-[#5dbb63]/10 rounded-full mb-4 shadow-sm"
        >
          Our Solutions
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Premium <span class="text-[#5dbb63]">Mobile Toilet</span> Units
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Clean, comfortable, and well-maintained portable toilets for all your
          event and construction needs
        </p>
      </div>

      <!-- Units Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
        <!-- Standard Unit -->
        <div
          class="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative"
          style="view-transition-name: standard-unit"
        >
          <!-- Pricing Badge -->
          <div
            class="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-lg z-10 shadow-md border border-gray-200/80 font-medium flex items-center"
          >
            <span class="text-[#5dbb63] font-semibold">KSh 5,500</span>
            <span class="text-xs text-gray-600 ml-1">/day</span>
          </div>

          <!-- Image Swiper -->
          <div class="w-full h-[400px] relative overflow-hidden rounded-t-2xl">
            <Swiper
              :modules="[Autoplay, EffectFade]"
              :slides-per-view="1"
              :autoplay="{ delay: 4000, disableOnInteraction: false }"
              :effect="'fade'"
              :loop="true"
              class="w-full h-full"
            >
              <SwiperSlide
                v-for="(image, index) in standardUnitImages"
                :key="index"
              >
                <div class="w-full h-full relative">
                  <NuxtImg
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    :src="image.src"
                    :alt="image.alt"
                    width="800"
                    height="600"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
            <div
              class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent"
            ></div>
          </div>

          <!-- Content -->
          <div class="p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center relative">
              <span class="relative inline-block">
                Standard Unit
                <span class="absolute bottom-0 left-0 w-full h-1 bg-[#5dbb63]/30 -mb-1"></span>
              </span>
            </h3>
            <p class="text-gray-600 mb-6 text-center">
              Perfect for construction sites, outdoor events, and temporary
              installations
            </p>

            <ul class="space-y-3 text-gray-700 mb-8">
              <li class="flex items-start group">
                <div class="flex-shrink-0 mt-0.5 mr-3 bg-[#5dbb63]/10 p-1 rounded-full">
                  <svg
                    class="h-5 w-5 text-[#5dbb63]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span class="group-hover:text-gray-900 transition-colors">Basic handwash station with soap</span>
              </li>
              <li class="flex items-start group">
                <div class="flex-shrink-0 mt-0.5 mr-3 bg-[#5dbb63]/10 p-1 rounded-full">
                  <svg
                    class="h-5 w-5 text-[#5dbb63]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span class="group-hover:text-gray-900 transition-colors">Eco-friendly flushing system</span>
              </li>
              <li class="flex items-start group">
                <div class="flex-shrink-0 mt-0.5 mr-3 bg-[#5dbb63]/10 p-1 rounded-full">
                  <svg
                    class="h-5 w-5 text-[#5dbb63]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span class="group-hover:text-gray-900 transition-colors">Ventilation for air circulation</span>
              </li>
              <li class="flex items-start group">
                <div class="flex-shrink-0 mt-0.5 mr-3 bg-[#5dbb63]/10 p-1 rounded-full">
                  <svg
                    class="h-5 w-5 text-[#5dbb63]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span class="group-hover:text-gray-900 transition-colors">Durable and easy to clean</span>
              </li>
              <li class="flex items-start group">
                <div class="flex-shrink-0 mt-0.5 mr-3 bg-[#5dbb63]/10 p-1 rounded-full">
                  <svg
                    class="h-5 w-5 text-[#5dbb63]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span class="group-hover:text-gray-900 transition-colors">Includes free toiletries and air freshener</span>
              </li>
            </ul>

            <div class="text-center">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-[#5dbb63] hover:bg-[#4da955] transition-all duration-300 transform hover:scale-[1.03] shadow-md hover:shadow-lg group"
                aria-label="Book standard mobile toilet unit"
              >
                <span class="group-hover:translate-x-1 transition-transform">Book Standard Unit</span>
                <svg
                  class="ml-3 -mr-1 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- VIP Unit -->
        <div
          class="group bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative"
          style="view-transition-name: vip-unit"
        >
          <!-- Pricing Badge -->
          <div
            class="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-lg z-10 shadow-md border border-gray-200/80 font-medium flex items-center"
          >
            <span class="text-yellow-600 font-semibold">KSh 15,000</span>
            <span class="text-xs text-gray-600 ml-1">/day</span>
          </div>

          <!-- Premium Ribbon -->
          <div class="absolute top-0 left-0 w-32 h-32 overflow-hidden z-10">
            <div class="absolute top-0 left-0 w-full h-full bg-yellow-500/90 transform -translate-x-1/2 -translate-y-1/2 rotate-45 origin-bottom-right"></div>
            <span class="absolute top-4 left-0 text-xs font-bold text-white uppercase tracking-wider transform -rotate-45 origin-bottom-right">
              Premium
            </span>
          </div>

          <!-- Image Swiper -->
          <div class="w-full h-[400px] relative overflow-hidden rounded-t-2xl">
            <Swiper
              :modules="[Autoplay, EffectFade]"
              :slides-per-view="1"
              :autoplay="{ delay: 5000, disableOnInteraction: false }"
              :effect="'fade'"
              :loop="true"
              class="w-full h-full"
            >
              <SwiperSlide v-for="(image, index) in vipUnitImages" :key="index">
                <div class="w-full h-full relative">
                  <NuxtImg
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    :src="image.src"
                    :alt="image.alt"
                    width="800"
                    height="600"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
            <div
              class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent"
            ></div>
          </div>

          <!-- Content -->
          <div class="p-8 bg-gradient-to-br from-yellow-50/80 to-white/80">
            <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center relative">
              <span class="relative inline-block">
                VIP Luxury Unit
                <span class="absolute bottom-0 left-0 w-full h-1 bg-yellow-500/40 -mb-1"></span>
              </span>
            </h3>
            <p class="text-gray-600 mb-6 text-center">
              Ideal for weddings, corporate events, and upscale gatherings
            </p>

            <ul class="space-y-3 text-gray-700 mb-8">
              <li class="flex items-start group">
                <div class="flex-shrink-0 mt-0.5 mr-3 bg-yellow-500/10 p-1 rounded-full">
                  <svg
                    class="h-5 w-5 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span class="group-hover:text-gray-900 transition-colors">Elegant handwash station with mirror</span>
              </li>
              <li class="flex items-start group">
                <div class="flex-shrink-0 mt-0.5 mr-3 bg-yellow-500/10 p-1 rounded-full">
                  <svg
                    class="h-5 w-5 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span class="group-hover:text-gray-900 transition-colors">Interior lighting and ventilation</span>
              </li>
              <li class="flex items-start group">
                <div class="flex-shrink-0 mt-0.5 mr-3 bg-yellow-500/10 p-1 rounded-full">
                  <svg
                    class="h-5 w-5 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span class="group-hover:text-gray-900 transition-colors">Premium flushing toilet system</span>
              </li>
              <li class="flex items-start group">
                <div class="flex-shrink-0 mt-0.5 mr-3 bg-yellow-500/10 p-1 rounded-full">
                  <svg
                    class="h-5 w-5 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span class="group-hover:text-gray-900 transition-colors">Scented luxury interior</span>
              </li>
              <li class="flex items-start group">
                <div class="flex-shrink-0 mt-0.5 mr-3 bg-yellow-500/10 p-1 rounded-full">
                  <svg
                    class="h-5 w-5 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span class="group-hover:text-gray-900 transition-colors">Spacious design (50% larger than standard)</span>
              </li>
              <li class="flex items-start group">
                <div class="flex-shrink-0 mt-0.5 mr-3 bg-yellow-500/10 p-1 rounded-full">
                  <svg
                    class="h-5 w-5 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span class="group-hover:text-gray-900 transition-colors">Includes premium toiletries package</span>
              </li>
            </ul>

            <div class="text-center">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 transition-all duration-300 transform hover:scale-[1.03] shadow-md hover:shadow-lg group"
                aria-label="Book VIP luxury mobile toilet unit"
              >
                <span class="group-hover:translate-x-1 transition-transform">Book VIP Unit</span>
                <svg
                  class="ml-3 -mr-1 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>