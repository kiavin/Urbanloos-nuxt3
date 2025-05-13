<template>
  <nav
    :class="['sticky top-0 z-50 transition-colors duration-300 border-none bg-white text-gray-900']"
    role="navigation"
    style="height: 8vh"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-full pt-3">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            class="inline-flex items-center"
          >
            <svg
              class="w-8 text-pink-400"
              viewBox="0 0 24 24"
              stroke-linejoin="round"
              stroke-width="2"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12"></rect>
              <rect x="3" y="17" width="7" height="6"></rect>
              <rect x="14" y="1" width="7" height="6"></rect>
              <rect x="14" y="11" width="7" height="12"></rect>
            </svg>
            <span
              class="ml-2 text-xl font-bold tracking-wide text-pink-600 uppercase"
              >Urbanloos</span
            >
          </a>
        </div>

        <!-- Hamburger Menu Button -->
        <div class="md:hidden">
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="text-gray-600 focus:outline-none"
            :aria-expanded="isMenuOpen"
            aria-label="Toggle navigation menu"
          >
            <svg
              v-if="!isMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Navigation Links -->
        <div
          :class="[
            'md:flex md:space-x-8 md:space-y-0',
            isMenuOpen ? 'block absolute top-full left-0 w-full bg-white shadow-md p-4 space-y-4' : 'hidden',
          ]"
          class="md:flex"
        >
          <NuxtLink
            to="/"
            :class="[
              'nav-link border-none block md:inline-block px-4 py-2 rounded-full hover:bg-pink-400',
              route.path === '/' ? 'bg-[#5DBB63] text-black' : ''
            ]"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/about"
            :class="[
              'nav-link border-none block md:inline-block px-4 py-2 rounded-full hover:bg-pink-400',
              route.path === '/about' ? 'bg-[#5DBB63] text-black' : ''
            ]"
          >
            About Us
          </NuxtLink>
          <NuxtLink
            to="#services"
            :class="[
              'nav-link border-none block md:inline-block px-4 py-2 rounded-full hover:bg-pink-400',
              route.path === '/services' ? 'bg-[#5DBB63] text-black' : ''
            ]"
          >
            Services
          </NuxtLink>
          <NuxtLink
            to="#locations"
            :class="[
              'nav-link border-none block md:inline-block px-4 py-2 rounded-full hover:bg-pink-400',
              route.path === '/contact' ? 'bg-[#5DBB63] text-black' : ''
            ]"
          >
            Contact
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const isMenuOpen = ref(false);
const route = useRoute();
</script>
