<script setup>
import { onMounted } from 'vue';

onMounted(()=> {
  document.addEventListener('copy', function (e) {
  e.preventDefault();
  alert('Copying is disabled!');
});
})
useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/images/urban-loos-favicon-color.png',
    },
  ],
})

</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
