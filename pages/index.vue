<script setup>
// import all components 
import { useHead, useRoute } from '#imports'
import HeroSection from '~/components/HeroSection.vue'
import AboutUs from '~/components/AboutUs.vue'
import ActionCall from '~/components/ActionCall.vue'
import ToiletUnits from '~/components/ToiletUnits.vue'
import HowItWorks from '~/components/HowItWorks.vue'
import OurLoactions from '~/components/OurLoactions.vue'

const route = useRoute()
const canonical = 'https://www.urbanloos.com' + route.path

useHead({
  link: [
    {
      rel: 'canonical',
      href: canonical.endsWith('/') ? canonical : canonical + '/'
    }
  ]
})

</script>

<template>
    <div class="urbanmain">
        <HeroSection/>
        <AboutUs />
        <ActionCall />
        <ToiletUnits />
        <HowItWorks />
        <OurLoactions />

    </div>

</template>
<style scoped>
.urbanmain {
  background: linear-gradient(
    to right,
    rgba(16, 185, 129, 0.2) 0%,
    rgba(34, 197, 94, 0.2) 100%
  );
}
</style>