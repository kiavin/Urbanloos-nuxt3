<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
</script>

<template>
  <section class="py-24 relative xl:mr-0 lg:mr-5 mr-0 bg-gray-50" id="about">
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto bg-gray-50">
      <div
        class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1"
      >
        <div
          class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex"
        >
          <div class="w-full flex-col justify-center items-start gap-8 flex">
            <div
              class="flex-col justify-start lg:items-start items-center gap-4 flex"
            >
              <h6 class="text-gray-800 text-base font-normal leading-relaxed">
                About Us
              </h6>
              <div
                class="w-full flex-col justify-start lg:items-start items-center gap-3 flex"
              >
                <h4
                  class="text-[#5DBB63] text-4xl font-bold font-manrope leading-normal lg:text-start text-center"
                >
                  The Tale of Our Achievement Story
                </h4>
                <p
                  class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center"
                >
                  At Urbanloos, we specialize in providing clean, reliable
                  mobile toilet rentals for events of all sizes, from weddings
                  and festivals to corporate gatherings. With a strong focus on
                  hygiene standards, customer satisfaction, and on-time portable
                  restroom delivery, we ensure your guests enjoy a comfortable,
                  worry-free experience. Trust our expert team at Urbanloos to
                  deliver high-quality event toilet hire solutions, tailored to
                  meet your specific needs and make your event truly
                  exceptional.
                </p>
              </div>
            </div>
            <div class="w-full flex-col justify-center items-start gap-6 flex">
              <div
                class="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1"
              >
                <div
                  class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
                >
                  <h4
                    class="text-gray-900 text-2xl font-bold font-manrope leading-9"
                  >
                    Clean & Reliable
                  </h4>
                  <p
                    class="text-gray-500 text-base font-normal leading-relaxed"
                  >
                    "Sparkling clean mobile toilets for a worry-free event
                    experience."
                  </p>
                </div>
                <div
                  class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
                >
                  <h4
                    class="text-gray-900 text-2xl font-bold font-manrope leading-9"
                  >
                    Fast Delivery
                  </h4>
                  <p
                    class="text-gray-500 text-base font-normal leading-relaxed"
                  >
                    "On-time delivery and setup, every time — no delays, no
                    stress."
                  </p>
                </div>
              </div>
              <div
                class="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1"
              >
                <div
                  class="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
                >
                  <h4
                    class="text-gray-900 text-2xl font-bold font-manrope leading-9"
                  >
                    Wide Coverage
                  </h4>
                  <p
                    class="text-gray-500 text-base font-normal leading-relaxed"
                  >
                    "Serving a wide range of events and locations with
                    dependable mobile toilets."
                  </p>
                </div>
                <div
                  class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
                >
                  <h4
                    class="text-gray-900 text-2xl font-bold font-manrope leading-9"
                  >
                    Pocket-Friendly
                  </h4>
                  <p
                    class="text-gray-500 text-base font-normal leading-relaxed"
                  >
                    "Affordable mobile restroom solutions without compromising
                    on quality."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <NuxtLink
            to="/about"
            class="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex"
          >
            <span
              class="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out"
              >Learn More About Urbanloos</span
            >
            <svg
              class="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                stroke="#4F46E5"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </NuxtLink>
        </div>
        <div class="w-full lg:justify-start justify-center items-start flex">
          <div
            class="sm:w-[564px] w-full sm:h-[646px] h-full bg-gray-300 rounded-3xl sm:border border-gray-200 relative"
            style="background-size: cover; background-position: center"
          >
            <Swiper
              :modules="[Autoplay, EffectFade]"
              :slides-per-view="1"
              :autoplay="{ delay: 5000, disableOnInteraction: true }"
              :effect="'fade'"
              :loop="true"
              pagination
              class="rounded-3xl sm:mt-5 sm:ml-5 w-full h-full"
            >
              <SwiperSlide>
                <NuxtImg
                  class="w-full h-full object-cover rounded-3xl"
                  src="/images/standard1.webp"
                  alt="About Us Image 1"
                  width="564"
                  height="646"
                  loading="lazy"
                />
              </SwiperSlide>

              <SwiperSlide>
                <NuxtImg
                  class="w-full h-full object-cover rounded-3xl"
                  src="/images/IMG_20241227_084232_432.webp"
                  alt="About Us Image 2"
                  width="564"
                  height="646"
                  loading="lazy"
                />
              </SwiperSlide>

              <SwiperSlide>
                <NuxtImg
                  class="w-full h-full object-cover rounded-3xl"
                  src="/images/IMG_20241227_084632_600.webp"
                  alt="About Us Image 3"
                  width="564"
                  height="646"
                  loading="lazy"
                />
              </SwiperSlide>

              <!-- Add as many SwiperSlide as you want -->
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
