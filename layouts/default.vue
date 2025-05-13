<script setup>
import NavBar from '~/components/NavBar.vue'
import FooterSection from '~/components/FooterSection.vue'
import FloatingWhatsApp from '~/components/FloatingWhatsApp.vue'
</script>
<template>
    <div>
        <NavBar />
        <NuxtPage />
        <FloatingWhatsApp v-if="$route.path !== '/contact'" />
        <FooterSection />
    </div>
</template>




