<template>
  <div class="dark:bg-secondary">
    <section class="relative bg-[#00A63E] h-[300px]">
      <div class="absolute w-full bottom-0 mx-auto">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            <div>
              <div class="lg:block lge:block md:hidden mdsm:hidden sm:hidden">
                <NuxtImg
                  src="/images/pusher.avif"
                  alt="person "
                  class="h-[300px] mx-auto hidden md:block"
                  width="500"
                  height="300"
                  loading="lazy"
                />
              </div>
            </div>
            <div
              class="col-span-2 relative sm:flex sm:flex-col sm:items-center sm:justify-center md:flex md:flex-col md:items-center md:justify-center"
            >
              <div
                class="absolute bottom-0 sm:flex sm:flex-col sm:items-center sm:justify-center sm:pb-4 text-center"
              >
                <h3
                  class="text-[#f9f9f9] relative after:bg-[#fff] after:w-[10%] text-4xl font-semibold pb-4 sm:block"
                >
                  Need Mobile Toilets for Your Event? Get a Free Quote Now!
                </h3>
                <h4 class="text-[#fff] text-[20px] hidden md:block">
                  "Book Your Clean, Reliable Mobile Toilet Today — Make Your
                  Event Comfortable and Worry-Free!"
                  <NuxtLink to="/contact">
                    <span
                      class="text-[#f0bb0c] underline underline-[#fff] underline-offset-2"
                    >
                      Request your quote now!
                    </span>
                  </NuxtLink>
                </h4>
                <NuxtLink to="/contact">
                  <button
                    class="bg-[#f0bb0c] rounded-lg py-2 px-16 mt-4 hover:bg-[#fff] sm:mt-4 sm:mx-auto"
                  >
                    Call Now
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
