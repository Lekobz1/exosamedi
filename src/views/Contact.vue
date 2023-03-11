<template>
    <div class="bg-gray-100 h-screen flex justify-center items-center">
      <div class="max-w-md p-6 bg-white rounded-lg shadow">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Contact Page</h1>
        <div class="flex items-center mb-4">
          <button @click="incrementCounter" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
            Click me!
          </button>
          <span class="ml-4 text-xl font-bold">{{ counter }}</span>
        </div>
        <div :class="{'bg-yellow-500': counter >= 0 , 'bg-red-500' : counter >= 5 , 'bg-green-500' : counter >= 10 ,'bg-purple-500' : counter >= 15,  }" class="h-64"></div>
      </div>
    </div>
  </template>

<script>
export default {
  name: "Contact",

  data(){
    return{
        counter : 0,
    }
  },

  methods :{
    incrementCounter(){
        this.counter ++;
    }
  }

  
}
</script>