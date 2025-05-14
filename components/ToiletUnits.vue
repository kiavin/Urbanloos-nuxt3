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

// Animation triggers

</script>

<template>
  <section class="py-16 bg-gray-50" id="toilet-units">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div class="text-center">
        <span
          class="inline-block px-3 py-1 text-sm font-semibold text-[#5dbb63] bg-[#5dbb63]/10 rounded-full mb-4"
        >
          Our Solutions
        </span>
        <h2 class="text-4xl font-bold text-gray-900 mb-4">
          Premium Mobile Toilet Units
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Clean, comfortable, and well-maintained portable toilets for all your
          event and construction needs
        </p>
      </div>

      <!-- Units Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <!-- Standard Unit -->
        <div
          class="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500"
          style="view-transition-name: standard-unit"
        >
          <!-- Pricing Badge -->
          <div
            class="absolute top-4 right-4 bg-[#5dbb63] text-white px-4 py-2 rounded-full z-10 shadow-md"
          >
            <span class="font-bold">KSh 5,500</span>
            <span class="text-xs block">per day</span>
          </div>

          <!-- Image Swiper -->
          <div class="w-full h-[400px] relative">
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
                <div class="w-full h-full ">
                  <img
                    class="w-full h-full object-cover"
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
              class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent"
            ></div>
          </div>

          <!-- Content -->
          <div class="p-6 lg:p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">
              Standard Unit
            </h3>
            <p class="text-gray-600 mb-6 text-center">
              Perfect for construction sites, outdoor events, and temporary
              installations
            </p>

            <ul class="space-y-3 text-gray-700 mb-8">
              <li class="flex items-start">
                <svg
                  class="h-5 w-5 text-[#5dbb63] mt-0.5 mr-3"
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
                <span>Basic handwash station with soap</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="h-5 w-5 text-[#5dbb63] mt-0.5 mr-3"
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
                <span>Eco-friendly flushing system</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="h-5 w-5 text-[#5dbb63] mt-0.5 mr-3"
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
                <span>Ventilation for air circulation</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="h-5 w-5 text-[#5dbb63] mt-0.5 mr-3"
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
                <span>Durable and easy to clean</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="h-5 w-5 text-[#5dbb63] mt-0.5 mr-3"
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
                <span>Includes free toiletries and air freshener</span>
              </li>
            </ul>

            <div class="text-center">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#5dbb63] hover:bg-[#4da955] transition-all duration-300 transform hover:scale-105 shadow-md"
                aria-label="Book standard mobile toilet unit"
              >
                Book Standard Unit
                <svg
                  class="ml-2 -mr-1 w-5 h-5"
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
          class="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500"
          style="view-transition-name: vip-unit"
        >
          <!-- Pricing Badge -->
          <div
            class="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-full z-10 shadow-md"
          >
            <span class="font-bold">KSh 9,500</span>
            <span class="text-xs block">per day</span>
          </div>

          <!-- Image Swiper -->
          <div class="w-full h-[400px] relative">
            <Swiper
              :modules="[Autoplay, EffectFade]"
              :slides-per-view="1"
              :autoplay="{ delay: 5000, disableOnInteraction: false }"
              :effect="'fade'"
              :loop="true"
              class="w-full h-full"
            >
              <SwiperSlide v-for="(image, index) in vipUnitImages" :key="index">
                <div class="w-full h-full responsive-img-wrapper">
                  <img
                    class="w-full h-full object-cover"
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
              class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent"
            ></div>
          </div>

          <!-- Content -->
          <div class="p-6 lg:p-8 bg-gradient-to-br from-yellow-50 to-white">
            <div class="flex justify-center mb-4">
              <span
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800"
              >
                Premium Option
              </span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">
              VIP Luxury Unit
            </h3>
            <p class="text-gray-600 mb-6 text-center">
              Ideal for weddings, corporate events, and upscale gatherings
            </p>

            <ul class="space-y-3 text-gray-700 mb-8">
              <li class="flex items-start">
                <svg
                  class="h-5 w-5 text-yellow-500 mt-0.5 mr-3"
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
                <span>Elegant handwash station with mirror</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="h-5 w-5 text-yellow-500 mt-0.5 mr-3"
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
                <span>Interior lighting and ventilation</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="h-5 w-5 text-yellow-500 mt-0.5 mr-3"
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
                <span>Premium flushing toilet system</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="h-5 w-5 text-yellow-500 mt-0.5 mr-3"
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
                <span>Scented luxury interior</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="h-5 w-5 text-yellow-500 mt-0.5 mr-3"
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
                <span>Spacious design (50% larger than standard)</span>
              </li>
              <li class="flex items-start">
                <svg
                  class="h-5 w-5 text-yellow-500 mt-0.5 mr-3"
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
                <span>Includes premium toiletries package</span>
              </li>
            </ul>

            <div class="text-center">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-md"
                aria-label="Book VIP luxury mobile toilet unit"
              >
                Book VIP Unit
                <svg
                  class="ml-2 -mr-1 w-5 h-5"
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
