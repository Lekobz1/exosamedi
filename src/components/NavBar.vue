<template>
     <nav :class="{ 'bg-gray-800 text-white py-4 w-full z-10': isScrolled, 'py-6': !isScrolled }">
    <ul class="flex justify-between">
        <li>
          <router-link to="/" class="text-gray-300 hover:text-white">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="text-gray-300 hover:text-white">About</router-link>
        </li>
        <li>
          <router-link to="/contact" class="text-gray-300 hover:text-white">Contact</router-link>
        </li>
        <li>
          <router-link to="/molette" class="text-gray-300 hover:text-white">Molette</router-link>
        </li>
        <li>
          <router-link to="/prestation" class="text-gray-300 hover:text-white">Prestation</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Navbar"

  }
  </script>