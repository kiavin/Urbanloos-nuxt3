<template>
    <div class="services-page">
        <h1>Our Services</h1>
        <p>We offer a wide range of services to meet your needs.</p>
        <ul>
            <li>Service 1: Description of service 1</li>
            <li>Service 2: Description of service 2</li>
            <li>Service 3: Description of service 3</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ServicesPage',
};
</script>

<style scoped>
.services-page {
    padding: 20px;
    font-family: Arial, sans-serif;
}

h1 {
    color: #333;
}

ul {
    list-style-type: disc;
    margin-left: 20px;
}

li {
    margin-bottom: 10px;
}
</style>