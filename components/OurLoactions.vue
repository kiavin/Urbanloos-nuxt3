<template>
    <section class="py-24 bg-gray-50" id="locations">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="md:flex gap-x-24 clear-left md:mb-16 mb-10">
                <div class="md:mb-0 mb-4">
                    <h2
                        class="text-black font-manrope text-4xl font-semibold leading-10 mb-5 md:text-left text-center"
                    >
                        Get In Touch
                    </h2>
                    <p
                        class="text-gray-600 text-lg font-normal leading-7 mb-7 md:text-left text-center"
                    >
                        Reach out today — let's make your event clean, comfortable, and stress-free with Urbanloos mobile toilet solutions.
                    </p>
                    <div class="flex md:items-center md:justify-start justify-center">
                        <NuxtLink
                            to="/contact"
                            class="bg-[#FB64B6] text-white font-semibold text-base leading-6 py-4 px-8 rounded shadow hover:bg-emerald-500 transition duration-300 ease-in-out"
                        >
                            Contact Us
                        </NuxtLink>
                    </div>
                </div>
                <div class="border-l-2 md:border-[#00A63E] border-white px-10 py-6">
                    <div class="mb-8">
                        <h6
                            class="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center"
                        >
                            Email Address
                        </h6>
                        <h3
                            class="text-black text-xl font-semibold leading-8 md:text-start text-center"
                        >
                            customerservice@urbanloos.com
                        </h3>
                    </div>
                    <div>
                        <h6
                            class="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center"
                        >
                            Phone Number
                        </h6>
                        <h3
                            class="text-black text-xl font-semibold leading-8 md:text-start text-center"
                        >
                            +254-715-557-481
                        </h3>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
                <div class="h-96 relative flex justify-center">
                    <div
                        class="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"
                    ></div>
                    <NuxtImg
                        src="/images/Thomson_Falls.webp"
                        alt="Nyahururu"
                        class="w-full h-full object-cover shadow"
                        width="400"
                        height="400"
                        loading="lazy"
                    />
                    <div class="absolute bottom-0 mb-6 text-center px-6">
                        <h5 class="text-white text-lg font-semibold leading-7 mb-2">
                            Nyahururu
                        </h5>
                        <p class="text-white text-base font-medium leading-6">
                            Kimwa Center, Nyahururu<br /> opposite Breeze Hotel
                        </p>
                    </div>
                </div>
                <div class="h-96 relative flex justify-center">
                    <div
                        class="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"
                    ></div>
                    <NuxtImg
                        src="/images/gilo.webp"
                        alt="Ol-kalou"
                        class="w-full h-full object-cover shadow"
                        width="400"
                        height="400"
                        loading="lazy"
                    />
                    <div class="absolute bottom-0 mb-6 text-center px-6">
                        <h5 class="text-white text-lg font-semibold leading-7 mb-2">
                            Ol-kalou
                        </h5>
                    </div>
                </div>
                <div class="h-96 relative flex justify-center">
                    <div
                        class="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"
                    ></div>
                    <NuxtImg
                        src="/images/olkalou.webp"
                        alt="nakuru"
                        class="w-full h-full object-cover shadow"
                        width="400"
                        height="400"
                        loading="lazy"
                    />
                    <div class="absolute bottom-0 mb-6 text-center px-6">
                        <h5 class="text-white text-lg font-semibold leading-7 mb-2">
                            Nakuru
                        </h5>
                    </div>
                </div>
                <div class="h-96 relative flex justify-center">
                    <div
                        class="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"
                    ></div>
                    <NuxtImg
                        src="/images/naivasha.webp"
                        alt="Naivasha"
                        class="w-full h-full object-cover shadow"
                        width="400"
                        height="400"
                        loading="lazy"
                    />
                    <div class="absolute bottom-0 mb-6 text-center px-6">
                        <h5 class="text-white text-lg font-semibold leading-7 mb-2">
                            Naivasha
                        </h5>
                        <p class="text-white text-base font-medium leading-6">
                            Kenyatta Ave, Naivasha <br />
                            Above UrbanDining Hotel
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
