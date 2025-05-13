<template>
  <main class="dark:bg-gray-800 bg-white relative overflow-hidden">
    <div class="relative w-full" style="height: 92vh">
      <nuxt-img
        src="/images/IMG_20241227_084221_655.webp"
        class="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        alt="Hero Section Background"
        width="1920"
        height="1080"
      />
      <div class="absolute inset-0 flex items-center">
        <div
          class="bg-opacity-100 sm:w-3/3 w-full h-full flex items-center justify-center"
          style="backdrop-filter: blur(3px) ; background-color: rgba(0, 0, 0, 0.4)"
        >
          <div class="text-center text-white px-6">
            <span
              class="w-100 h-2"
              style="
                background-color: #f9f9f9;
                margin-bottom: 12px;
                display: inline-block;
              "
            ></span>
            <h1
              class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none"
              style="color: #f9f9f9"
            >
            Luxury Loos. 
              <span class="text-5xl sm:text-7xl" style="color: #fff"
                > Everyday Prices.</span
              >
              <span class="text-5xl sm:text-7xl" style="color: #5dbb63"
                > Everywhere You Need Us</span
              >
            </h1>
            <p>
              Urbanloos is proud to be Kenya’s trusted provider of high-quality mobile toilet solutions. 
            </p>
              <p>We specialize in serving a wide range of events and construction sites across Nakuru, Kiambu, Narok, Nyandarua, and Laikipia counties, with services expanding to neighboring regions as well.
            </p>
            <div class="flex mt-8 justify-center">
              <a
                href="#"
                class="uppercase py-2 px-4 rounded-lg text-white text-md mr-4"
                style="background-color: #5dbb63; border: 2px solid transparent"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
