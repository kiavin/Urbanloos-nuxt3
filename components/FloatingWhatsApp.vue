<template>
  <div
    v-show="isVisible"
    class="whatsapp-float"
  >
    <a
      :href="whatsappLink"
      class="whatsapp-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
        alt="WhatsApp"
      />
      <span class="whatsapp-label">{{ currentText }}</span>
    </a>
    <button class="close-btn" @click="isVisible = false">✕</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const messages = [
  "Get a Quote Now",
  "Message Us Now",
  "Get Instant Quote Here",
  "Let’s Talk on WhatsApp"
]

const currentText = ref(messages[0])
const isVisible = ref(true)
const whatsappLink = "https://wa.me/254715557481?text=Hello,%20I%20would%20like%20to%20get%20a%20quote"

let scrollListener

onMounted(() => {
  // Rotate message every 3s
  let index = 0
  setInterval(() => {
    index = (index + 1) % messages.length
    currentText.value = messages[index]
  }, 3000)

  // Show again on scroll
  scrollListener = () => {
    if (!isVisible.value) {
      isVisible.value = true
    }
  }

  window.addEventListener('scroll', scrollListener)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollListener)
})
</script>

<style scoped>
.whatsapp-float {
  position: fixed;
  bottom: 13%;
  right: 20px;
  background-color: #25d366;
  color: white;
  border-radius: 50px;
  padding: 10px 16px 10px 12px;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  z-index: 9999;
  animation: pulse 2s infinite;
  gap: 6px;
}

.whatsapp-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.whatsapp-float img {
  width: 24px;
  height: 24px;
}

.whatsapp-label {
  font-family: Arial, sans-serif;
  white-space: nowrap;
}

.close-btn {
  background: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  margin-left: 4px;
  padding: 0;
  line-height: 1;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}
</style>
