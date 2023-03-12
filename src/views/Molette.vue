<template>
     <div>
    <h1 class="text-3xl font-bold mb-4">Voici molette</h1>

    <nav class="flex mb-8">
      <router-link to="/molette/history" class="mr-4" :class="{ 'bg-gray-900 text-white': $route.name === 'History' }">Son Histoire</router-link>
      <router-link to="/molette/bioMolette" :class="{ 'bg-gray-900 text-white': $route.name === 'BioMolette' }">Sa bio</router-link>
    </nav>
  </div>

  <RouterView /> 
 </template>
 
 <script>
 export default {
   name: "Molette"
   
 }
 </script>