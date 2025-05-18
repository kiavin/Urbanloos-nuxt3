<template>
  <div
    class="fixed inset-0 z-[9999] flex items-center justify-center bg-white/90 backdrop-blur-sm transition-opacity duration-300"
    :class="{ 'opacity-0 pointer-events-none': !isLoading }"
  >
    <div class="text-center">
      <!-- Animated Toilet Icon -->
      <div class="relative mx-auto w-24 h-32 mb-6">
        <!-- Toilet Bowl -->
        <div
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-24 border-4 border-[#5dbb63] rounded-b-full rounded-t-lg overflow-hidden"
        >
          <!-- Water Animation -->
          <div
            class="absolute bottom-0 left-0 right-0 h-8 bg-blue-100/70 animate-water-wave"
          ></div>
        </div>

        <!-- Toilet Seat -->
        <div
          class="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-300 rounded-full"
        ></div>

        <!-- Flush Tank -->
        <div
          class="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-8 border-4 border-[#5dbb63] rounded-lg"
        >
          <!-- Flush Handle -->
          <div
            class="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-4 bg-gray-400 rounded-l"
          ></div>
        </div>

        <!-- Water Drops -->
        <div
          class="absolute top-12 left-1/4 w-2 h-2 bg-blue-200 rounded-full animate-drop-fall animation-delay-100"
        ></div>
        <div
          class="absolute top-14 left-1/3 w-1.5 h-1.5 bg-blue-200 rounded-full animate-drop-fall animation-delay-300"
        ></div>
        <div
          class="absolute top-16 left-2/3 w-1 h-1 bg-blue-200 rounded-full animate-drop-fall animation-delay-500"
        ></div>
      </div>

      <!-- Loading Text -->
      <h3 class="text-xl font-semibold text-gray-800 mb-2">UrbanLoos Kenya</h3>
      <p class="text-gray-600 mb-6">Sanitation solutions loading...</p>

      <!-- Progress Bar -->
      <div class="w-48 mx-auto h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          class="h-full bg-gradient-to-r from-[#5dbb63] to-[#4da955] rounded-full animate-progress-load"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isLoading: Boolean,
});
</script>

<style>
/* Keyframe Animations */
@keyframes waterWave {
  0%,
  100% {
    transform: translateY(0) scaleX(1);
  }
  50% {
    transform: translateY(-4px) scaleX(1.02);
  }
}

@keyframes dropFall {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(20px);
    opacity: 0;
  }
}

@keyframes progressLoad {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

/* Animation Classes */
.animate-water-wave {
  animation: waterWave 1.5s ease-in-out infinite;
}

.animate-drop-fall {
  animation: dropFall 1.2s ease-in infinite;
}

.animate-progress-load {
  animation: progressLoad 2s ease-out infinite;
}

/* Animation Delays */
.animation-delay-100 {
  animation-delay: 0.1s;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}
</style>
