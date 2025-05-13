<template>
    <div class="bg-gray-50 min-h-screen">
      <!-- Hero Section -->
      <div class="relative bg-pink-600">
        <div class="absolute inset-0 bg-black opacity-40"></div>
        <img src="https://plus.unsplash.com/premium_photo-1682125644324-97c2559473b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
             alt="Clean mobile toilet"
             class="w-full h-64 object-cover">
        <div class="absolute inset-0 flex items-center justify-center">
          <h1 class="text-4xl font-bold text-white">Get In Touch</h1>
        </div>
      </div>
  
      <!-- Main Content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div class="space-y-6">
                <!-- WhatsApp -->
                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-green-100 rounded-lg p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-gray-900">WhatsApp Us</h3>
                    <a :href="whatsappLink" 
                       class="mt-1 text-gray-600 hover:text-green-600 transition-colors duration-300">
                      +254 715 557 481
                    </a>
                    <p class="mt-1 text-sm text-gray-500">Instant response during business hours</p>
                  </div>
                </div>
                
                <!-- Phone -->
                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-pink-100 rounded-lg p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-gray-900">Call Us</h3>
                    <a href="tel:+254715557481" 
                       class="mt-1 text-gray-600 hover:text-pink-600 transition-colors duration-300">
                      +254 715 557 481
                    </a>
                    <p class="mt-1 text-sm text-gray-500">Mon-Fri, 8am-5pm</p>
                  </div>
                </div>
                
                <!-- Email -->
                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-pink-100 rounded-lg p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-gray-900">Email Us</h3>
                    <a href="mailto:customerservice@urbanloos.com" 
                       class="mt-1 text-gray-600 hover:text-pink-600 transition-colors duration-300">
                      customerservice@urbanloos.com
                    </a>
                    <p class="mt-1 text-sm text-gray-500">Typically replies within 24 hours</p>
                  </div>
                </div>
                
                <!-- Address -->
                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-pink-100 rounded-lg p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-gray-900">Visit Us</h3>
                    <p class="mt-1 text-gray-600">Kenyatta Ave, Naivasha</p>
                    <p class="mt-1 text-gray-600">Above UrbanDining Hotel</p>
                  </div>
                </div>
              </div>
              
              <!-- Social Media -->
              <div class="mt-8">
                <h3 class="text-lg font-medium text-gray-900 mb-4">Follow Us</h3>
                <div class="flex space-x-4">
                  <a href="#" class="text-gray-400 hover:text-pink-600 transition-colors duration-300">
                    <span class="sr-only">Facebook</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-pink-600 transition-colors duration-300">
                    <span class="sr-only">Instagram</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- WhatsApp Form -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="p-8">
              <div class="flex items-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-500 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <h2 class="text-2xl font-bold text-gray-900">Chat on WhatsApp</h2>
              </div>
              
              <form @submit.prevent="sendWhatsAppMessage" class="space-y-6">
                <div>
                  <label for="wa-name" class="block text-sm font-medium text-gray-700">Your Name</label>
                  <div class="mt-1">
                    <input v-model="formData.name" type="text" id="wa-name" required class="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500">
                  </div>
                </div>
                
                <div>
                  <label for="wa-phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
                  <div class="mt-1">
                    <input v-model="formData.phone" type="tel" id="wa-phone" required class="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500">
                  </div>
                </div>
                
                <div>
                  <label for="wa-message" class="block text-sm font-medium text-gray-700">Your Message</label>
                  <div class="mt-1">
                    <textarea v-model="formData.message" id="wa-message" rows="4" required class="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"></textarea>
                  </div>
                </div>
                
                <div>
                  <button type="submit" class="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Send via WhatsApp
                  </button>
                </div>
                
                <p class="text-sm text-gray-500">
                  By clicking this button, you'll start a chat with our customer service team on WhatsApp.
                </p>
              </form>
            </div>
          </div>
        </div>
        
        <!-- Map Section -->
        <div class="mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="h-96 w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d547.3879673501376!2d36.433256!3d-0.719473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18291721ab526561%3A0xc1a91318400cf8e1!2sUrban%20Dining!5e1!3m2!1sen!2ske!4v1747157287747!5m2!1sen!2ske" 
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy"
              class="rounded-lg"
            ></iframe>
          </div>
          <div class="p-6 text-center">
            <h3 class="text-lg font-medium text-gray-900">Our Location</h3>
            <p class="mt-1 text-gray-600">Kenyatta Ave, Naivasha - Above UrbanDining Hotel</p>
            <a :href="directionsLink" 
               class="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors duration-300">
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const formData = ref({
    name: '',
    phone: '',
    message: ''
  });
  
  const whatsappNumber = '254715557481';
  
  const whatsappLink = computed(() => {
    return `https://wa.me/${whatsappNumber}`;
  });
  
  const directionsLink = computed(() => {
    return `https://www.google.com/maps/dir/?api=1&destination=Kenyatta+Ave,+Naivasha,+Kenya`;
  });
  
  const sendWhatsAppMessage = () => {
    const message = encodeURIComponent(
      `Hello UrbanLoos,\n\nMy name is ${formData.value.name}.\n\n${formData.value.message}\n\nPhone: ${formData.value.phone}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };
  </script>
  
  <style scoped>
  /* Custom styles can be added here if needed */
  </style>