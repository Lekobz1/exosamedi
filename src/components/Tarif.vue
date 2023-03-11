<template>
    <div class="bg-gray-100 h-screen flex justify-center items-center">
      <div class="max-w-md p-6 bg-white rounded-lg shadow">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Prices of 10 Things</h1>
        <slot name="test">
        <p class="text-lg text-gray-800 mb-4">This is a test.</p>
      </slot>
        <ul class="divide-y divide-gray-300">
          <li class="py-4 flex justify-between">
            <span class="text-lg font-medium text-gray-800">Thing 1</span>
            <span class="text-lg font-medium text-gray-800">$9.99</span>
          </li>
          <li class="py-4 flex justify-between">
            <span class="text-lg font-medium text-gray-800">Thing 2</span>
            <span class="text-lg font-medium text-gray-800">$14.99</span>
          </li>
          <li class="py-4 flex justify-between">
            <span class="text-lg font-medium text-gray-800">Thing 3</span>
            <span class="text-lg font-medium text-gray-800">$19.99</span>
          </li>
          <li class="py-4 flex justify-between">
            <span class="text-lg font-medium text-gray-800">Thing 4</span>
            <span class="text-lg font-medium text-gray-800">$24.99</span>
          </li>
          <li class="py-4 flex justify-between">
            <span class="text-lg font-medium text-gray-800">Thing 5</span>
            <span class="text-lg font-medium text-gray-800">$29.99</span>
          </li>
          <li class="py-4 flex justify-between">
            <span class="text-lg font-medium text-gray-800">Thing 6</span>
            <span class="text-lg font-medium text-gray-800">$34.99</span>
          </li>
        
        </ul>
      </div>
    </div>
  </template>

<script>
export default {
  name: "Tarif"

}
</script>