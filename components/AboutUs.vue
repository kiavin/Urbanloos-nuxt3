<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

// Animation triggers

const features = [
  {
    title: "Clean & Reliable",
    description:
      "Sparkling clean mobile toilets for a worry-free event experience",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Fast Delivery",
    description:
      "On-time delivery and setup, every time — no delays, no stress",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Wide Coverage",
    description:
      "Serving a wide range of events and locations with dependable mobile toilets",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
  },
  {
    title: "Pocket-Friendly",
    description:
      "Affordable mobile restroom solutions without compromising on quality",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const aboutImages = [
  {
    src: "/images/standard1.webp",
    alt: "Clean standard mobile toilet unit with handwashing station at an event in Nairobi",
  },
  {
    src: "/images/IMG_20241227_084232_432.webp",
    alt: "Well-maintained UrbanLoos portable toilet at a construction site in Nakuru",
  },
  {
    src: "/images/IMG_20241227_084632_600.webp",
    alt: "Premium event-ready mobile toilet unit with ventilation system in Kenya",
  },
];
</script>

<template>
  <section
    class="py-16 md:py-24 relative bg-gray-50"
    id="about"
    aria-labelledby="about-heading"
  >
    <div class="absolute inset-0 bg-[#5DBB63] opacity-5"></div>

    <div class="relative w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
      <div class="text-center mb-12 lg:hidden">
        <span
          class="inline-block px-3 py-1 text-sm font-medium text-[#5DBB63] bg-[#5DBB63]/10 rounded-full mb-3"
        >
          About UrbanLoos
        </span>
        <h2
          id="about-heading"
          class="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Our <span class="text-[#5DBB63]">Commitment</span> to Clean Sanitation
        </h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="flex flex-col space-y-8">
          <div class="hidden lg:block space-y-4">
            <span
              class="inline-block px-3 py-1 text-sm font-medium text-[#5DBB63] bg-[#5DBB63]/10 rounded-full"
            >
              About UrbanLoos
            </span>
            <h2
              id="about-heading-desktop"
              class="text-3xl md:text-4xl font-bold text-gray-900"
            >
              Our <span class="text-[#5DBB63]">Commitment</span> to Clean
              Sanitation
            </h2>
            <p class="text-lg text-gray-600">
              UrbanLoos is Kenya's premier mobile sanitation provider,
              delivering hygienic, reliable portable toilet solutions for events
              and construction sites across multiple counties.
            </p>
          </div>

          <div class="grid sm:grid-cols-2 gap-6">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="p-6 bg-white rounded-xl border border-gray-200 hover:border-[#5DBB63] transition-all duration-300 hover:shadow-lg"
              aria-labelledby="`feature-${index}-title`"
            >
              <div class="flex items-center mb-3">
                <div
                  class="w-10 h-10 rounded-full bg-[#5DBB63]/10 flex items-center justify-center mr-3"
                >
                  <svg
                    class="w-5 h-5 text-[#5DBB63]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      :d="feature.icon"
                    />
                  </svg>
                </div>
                <h3
                  :id="`feature-${index}-title`"
                  class="text-xl font-bold text-gray-900"
                >
                  {{ feature.title }}
                </h3>
              </div>
              <p class="text-gray-600">{{ feature.description }}</p>
            </div>
          </div>

          <NuxtLink
            to="/about"
            class="group inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#5DBB63] hover:bg-[#4da955] shadow-md transition-all duration-300 transform hover:scale-[1.02] w-full sm:w-auto"
            aria-label="Learn more about UrbanLoos' story and services"
          >
            <span>Discover Our Story</span>
            <svg
              class="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

        <div class="relative hidden lg:block">
          <div class="w-full lg:justify-start justify-center">
            <div
              class="w-full max-w-[564px] aspect-[4/5] lg:aspect-[564/646] rounded-3xl overflow-hidden shadow-xl border border-gray-200/50 lg:border-gray-200"
            >
              <Swiper
                :modules="[Autoplay, EffectFade]"
                :slides-per-view="1"
                :autoplay="{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }"
                :effect="'fade'"
                :loop="true"
                :speed="800"
                class="w-full h-full"
              >
                <SwiperSlide v-for="(image, index) in aboutImages" :key="index">
                  <NuxtImg
                    class="w-full h-full object-cover"
                    :src="image.src"
                    :alt="image.alt"
                    width="564"
                    height="646"
                    loading="lazy"
                  />
                </SwiperSlide>
              </Swiper>

              <!-- Gradient Overlay -->
              <div
                class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent z-[1]"
              ></div>

              <!-- Custom Pagination -->
              <div
                class="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-[2]"
              >
                <div
                  v-for="(_, index) in aboutImages"
                  :key="index"
                  class="w-2.5 h-2.5 rounded-full bg-white/80 border border-white cursor-pointer transition-all duration-300 hover:bg-white"
                  @click="swiper.slideTo(index)"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
