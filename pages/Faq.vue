<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

// FAQ data moved inside the component
const faqCategories = ref([
  { id: "general", name: "General Questions" },
  { id: "booking", name: "Booking & Delivery" },
  { id: "services", name: "Our Services" },
  { id: "maintenance", name: "Maintenance & Hygiene" },
  { id: "pricing", name: "Pricing & Payments" },
]);

const faqs = ref([
  {
    id: 1,
    question: "What areas do you serve?",
    answer:
      "We serve multiple counties including Nairobi, Nakuru, Naivasha, Kiambu, Narok, Nyandarua, Laikipia, and Gilgil. We also cover surrounding areas.",
    category: "general",
  },
  {
    id: 2,
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 3–7 days in advance for events, especially during peak seasons. For last-minute requests, please call us directly to check availability.",
    category: "booking",
  },
  {
    id: 3,
    question: "What is included with the standard toilet rental?",
    answer:
      "Our standard unit includes a dedicated attendant, free toiletries (soap, tissue), air freshener system, basic handwashing station, and ventilation system.",
    category: "services",
  },
  {
    id: 4,
    question: "Do you provide toilet attendants during events?",
    answer:
      "Yes, we can provide professional attendants to ensure cleanliness and restocking during your event. This service is optional and can be added during booking.",
    category: "maintenance",
  },
  {
    id: 5,
    question: "What payment methods do you accept?",
    answer:
      "We accept M-Pesa, bank transfers, and cash payments. Corporate clients may arrange for invoice payments with prior agreement.",
    category: "pricing",
  },
  {
    id: 6,
    question: "What makes your VIP toilets different?",
    answer:
      "Our VIP units feature premium toiletries, luxury handwashing stations with mirrors, interior lighting, enhanced ventilation, and more spacious designs - perfect for weddings and corporate events.",
    category: "services",
  },
  {
    id: 7,
    question: "Is there a minimum rental period?",
    answer:
      "We offer flexible rental periods from daily to monthly. There is no strict minimum, but we have a 1-day minimum charge for all rentals.",
    category: "booking",
  },
  {
    id: 8,
    question: "What types of mobile toilets do you offer?",
    answer:
      "We offer standard, executive VIP, and wheelchair-accessible mobile toilet units to cater to different event and site needs.",
    category: "services",
  },
  {
  id: 9,
  question: "Can I hire toilets for just one day?",
  answer:
    "Absolutely. We offer flexible hire durations including single-day, weekend, and long-term rentals depending on your needs.",
  category: "services",
},
{
  id: 10,
  question: "Are your toilets suitable for remote or off-grid locations?",
  answer:
    "Yes, our mobile toilets are fully self-contained and do not require external plumbing or electricity, making them ideal for off-grid use.",
  category: "services",
},
{
  id: 11,
  question: "Is a deposit required to confirm booking?",
  answer:
    "Yes, we typically require a 50% deposit to confirm your booking. The balance is due before or upon delivery unless otherwise arranged.",
  category: "booking",
},
{
  id: 12,
  question: "Are there discounts for bulk or long-term rentals?",
  answer:
    "Yes, we offer discounted rates for large orders or long-term rentals. Contact our sales team for a custom quote.",
  category: "pricing",
},
{
  id: 13,
  question: "Do your prices include delivery and setup?",
  answer:
    "Setup is fully included in our pricing. However, delivery charges vary depending on the distance to your location. We’ll provide a clear quote with the delivery fee based on your site.",
  category: "pricing",
}
]);

const activeCategory = ref(route.query.category || "all");
const searchQuery = ref("");
const transitionName = ref("fade");

// Filter FAQs based on category and search query
const filteredFaqs = computed(() => {
  let result = faqs.value;

  if (activeCategory.value !== "all") {
    result = result.filter((faq) => faq.category === activeCategory.value);
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
    );
  }

  return result;
});

// Set active category and update URL
function setCategory(categoryId) {
  transitionName.value =
    categoryId > activeCategory.value ? "slide-left" : "slide-right";
  activeCategory.value = categoryId;
  router.push({ query: { category: categoryId } });
}

// Add new FAQ
// const newFaq = ref({
//   question: '',
//   answer: '',
//   category: 'general'
// })

// const showAdminSection = ref(false);

// function addFaq() {
//   if (newFaq.value.question && newFaq.value.answer) {
//     const newId = Math.max(...faqs.value.map(f => f.id)) + 1
//     faqs.value.push({
//       id: newId,
//       question: newFaq.value.question,
//       answer: newFaq.value.answer,
//       category: newFaq.value.category
//     })
//     newFaq.value = { question: '', answer: '', category: 'general' }
//   }
// }

// Animation watcher
watch(activeCategory, (newVal, oldVal) => {
  if (newVal > oldVal) {
    transitionName.value = "slide-left";
  } else {
    transitionName.value = "slide-right";
  }
});
</script>

<template>
  <div class="faq-page min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section
      class="hero-section bg-gradient-to-r from-blue-500 to-blue-700 py-16 text-white"
    >
      <div class="container mx-auto px-4 max-w-6xl">
        <h1 class="text-4xl font-bold text-center mb-6 animate-fade-in">
          Frequently Asked Questions
        </h1>
        <p
          class="text-center text-blue-100 max-w-2xl mx-auto text-lg animate-fade-in delay-100"
        >
          Find answers to common questions about our mobile toilet rental
          services.
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-12 max-w-6xl">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Sidebar -->
        <div class="lg:w-1/4">
          <div class="sticky top-6 space-y-6">
            <!-- Search Box -->
            <div
              class="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg"
            >
              <h3 class="font-bold text-xl mb-4 text-blue-800">Search FAQs</h3>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Type your question..."
                class="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <!-- Categories -->
            <div
              class="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg"
            >
              <h3 class="font-bold text-xl mb-4 text-blue-800">Categories</h3>
              <ul class="space-y-2">
                <li>
                  <button
                    @click="setCategory('all')"
                    :class="{
                      'bg-blue-100 text-blue-800 font-semibold':
                        activeCategory === 'all',
                      'text-gray-700 hover:bg-gray-50':
                        activeCategory !== 'all',
                    }"
                    class="w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center"
                  >
                    <span class="mr-2">📋</span>
                    All Questions
                  </button>
                </li>
                <li v-for="category in faqCategories" :key="category.id">
                  <button
                    @click="setCategory(category.id)"
                    :class="{
                      'bg-blue-100 text-blue-800 font-semibold':
                        activeCategory === category.id,
                      'text-gray-700 hover:bg-gray-50':
                        activeCategory !== category.id,
                    }"
                    class="w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center"
                  >
                    <span class="mr-2">
                      {{
                        category.id === "general"
                          ? "ℹ️"
                          : category.id === "booking"
                          ? "📅"
                          : category.id === "services"
                          ? "🚻"
                          : category.id === "maintenance"
                          ? "🧼"
                          : "💰"
                      }}
                    </span>
                    {{ category.name }}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- FAQ Content -->
        <div class="lg:w-3/4">
          <transition-group :name="transitionName" tag="div" class="space-y-6">
            <div
              v-for="faq in filteredFaqs"
              :key="faq.id"
              class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div class="p-6">
                <h3 class="text-xl font-semibold text-blue-800 mb-3">
                  {{ faq.question }}
                </h3>
                <p class="text-gray-600 mb-4">{{ faq.answer }}</p>
                <span
                  :class="{
                    'bg-blue-100 text-blue-800': faq.category === 'general',
                    'bg-green-100 text-green-800': faq.category === 'booking',
                    'bg-purple-100 text-purple-800':
                      faq.category === 'services',
                    'bg-yellow-100 text-yellow-800':
                      faq.category === 'maintenance',
                    'bg-red-100 text-red-800': faq.category === 'pricing',
                  }"
                  class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                >
                  {{ faqCategories.find((c) => c.id === faq.category).name }}
                </span>
              </div>
            </div>

            <div
              v-if="filteredFaqs.length === 0"
              key="no-results"
              class="bg-white rounded-xl shadow-md p-8 text-center animate-fade-in"
            >
              <div class="text-gray-500 mb-4 text-5xl">😕</div>
              <h3 class="text-xl font-semibold text-gray-700 mb-2">
                No questions found
              </h3>
              <p class="text-gray-500 mb-6">
                Try adjusting your search or category filters
              </p>
              <button
                @click="
                  () => {
                    activeCategory = 'all';
                    searchQuery = '';
                  }
                "
                class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Reset Filters
              </button>
            </div>
          </transition-group>
        </div>
      </div>

      <!-- Admin Section Toggle
      <div class="mt-12 text-center">
        <button
          @click="showAdminSection = !showAdminSection"
          class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-300 transition-colors"
        >
          {{ showAdminSection ? "Hide Admin" : "Show Admin" }}
        </button>
      </div> -->

      <!-- Admin Section
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-200 ease-in"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-screen"
        leave-from-class="opacity-100 max-h-screen"
        leave-to-class="opacity-0 max-h-0"
      >
        <div v-if="showAdminSection" class="mt-6 bg-gray-50 p-8 rounded-xl border border-gray-200">
          <h3 class="text-2xl font-bold mb-6 text-blue-800">Add New FAQ</h3>
          <div class="space-y-6 max-w-2xl mx-auto">
            <div>
              <label class="block text-gray-700 mb-2 font-medium">Question</label>
              <input 
                v-model="newFaq.question" 
                type="text" 
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter the question..."
              >
            </div>
            <div>
              <label class="block text-gray-700 mb-2 font-medium">Answer</label>
              <textarea 
                v-model="newFaq.answer" 
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                rows="4"
                placeholder="Enter the answer..."
              ></textarea>
            </div>
            <div>
              <label class="block text-gray-700 mb-2 font-medium">Category</label>
              <select 
                v-model="newFaq.category" 
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option v-for="category in faqCategories" :key="category.id" :value="category.id">
                  {{ category.name }}
                </option>
              </select>
            </div>
            <button 
              @click="addFaq"
              :disabled="!newFaq.question || !newFaq.answer"
              :class="{
                'bg-blue-600 hover:bg-blue-700': newFaq.question && newFaq.answer,
                'bg-blue-300 cursor-not-allowed': !newFaq.question || !newFaq.answer
              }"
              class="px-6 py-3 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg w-full"
            >
              Add FAQ
            </button>
          </div>
        </div>
      </transition> -->
    </div>
  </div>
</template>

<style>
/* Animation styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.4s ease;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* Custom animations */
.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}
.delay-100 {
  animation-delay: 0.1s;
}
.delay-200 {
  animation-delay: 0.2s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
