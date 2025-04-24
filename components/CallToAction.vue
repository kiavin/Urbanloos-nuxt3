<template>
  <div class="cta-container lg:max-w-7xl w-full mx-auto flex items-center justify-center relative">
    <div class="overlay w-full h-full absolute bg-cyan-700 bg-opacity-60 rounded-2xl"></div>
    <img
      src="https://pagedone.io/asset/uploads/1705400194.png"
      alt="Inline CTAs image"
      class="cta-image w-full h-96 rounded-2xl object-cover"
      loading="lazy"
    />
    <div class="content absolute flex items-center justify-center px-12">
      <div class="grid lg:gap-7 gap-4">
        <div class="grid gap-3">
          <h2 class="cta-title text-center text-white text-3xl font-bold font-manrope leading-10">
            Ready to Superpower Your Ideas?
          </h2>
          <p class="cta-description xl:max-w-2xl w-auto mx-auto text-center text-white text-base font-normal leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
        </div>
        <div class="cta-buttons gap-5 flex flex-wrap justify-center">
          <button
            class="cta-dismiss w-80 px-7 lg:py-4 py-2 bg-white hover:bg-gray-50 transition-all duration-500 rounded-full"
            aria-label="Dismiss"
          >
            <span class="text-indigo-600 text-xl font-semibold leading-relaxed">Dismiss</span>
          </button>
          <button
            class="cta-subscribe w-80 px-7 lg:py-4 py-2 bg-indigo-600 hover:bg-indigo-700 transition-all duration-500 rounded-full"
            aria-label="Subscribe"
          >
            <span class="text-white text-xl font-semibold leading-relaxed">Subscribe</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cta-container {
  position: relative;
}

.overlay {
  z-index: 1;
}

.cta-image {
  z-index: 0;
}

.content {
  z-index: 2;
}

.cta-title,
.cta-description {
  z-index: 3;
}

.cta-buttons button {
  z-index: 3;
}
</style>
