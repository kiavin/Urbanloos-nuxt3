<template>
    <div class="faq-page">
        <h1>Frequently Asked Questions</h1>
        <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
            <h2 @click="toggleFaq(index)" class="faq-question">
                {{ faq.question }}
            </h2>
            <p v-if="faq.open" class="faq-answer">
                {{ faq.answer }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            faqs: [
                {
                    question: "What is Nuxt.js?",
                    answer: "Nuxt.js is a framework for creating Vue.js applications.",
                    open: false,
                },
                {
                    question: "How do I install Nuxt.js?",
                    answer: "You can install Nuxt.js using npm or yarn.",
                    open: false,
                },
                {
                    question: "Is Nuxt.js free to use?",
                    answer: "Yes, Nuxt.js is an open-source framework.",
                    open: false,
                },
            ],
        };
    },
    methods: {
        toggleFaq(index) {
            this.faqs[index].open = !this.faqs[index].open;
        },
    },
};
</script>

<style scoped>
.faq-page {
    padding: 20px;
    font-family: Arial, sans-serif;
}

.faq-item {
    margin-bottom: 20px;
}

.faq-question {
    cursor: pointer;
    color: #007bff;
}

.faq-answer {
    margin-top: 10px;
}
</style>