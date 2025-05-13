<script setup>
import { onMounted } from 'vue';

onMounted(()=> {
  document.addEventListener('copy', function (e) {
  e.preventDefault();
  alert('Copying is disabled!');
});
})

</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>

</style>
