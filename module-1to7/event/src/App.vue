<script setup>
//  valu jono ref use r object er --- jono reactive use korte hba 
import { ref, reactive } from 'vue';
// const location =ref( "Dhaka")
const location = reactive({
  name: "Dhaka",
  weather: "Sunny"
})

function changeLocation(newLocation) {
  // location.value=newLocation;
  location.name = newLocation;
}
</script>

<template>
  <section class="container mx-auto flex items-center flex-col">
    <h1 class="text-center text-2xl py-10">Event & Reactivity in vue.js</h1>
    <div class="container mx-auto flex space-x-5 justify-center m-5">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="changeLocation('Dhaka')">Dhaka</button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="changeLocation('Bogra')">Bogra</button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="changeLocation('Panthopoth')">Panthopoth</button>
    </div>
    <h1 class="text-2xl m-10">Current Location is : {{ location.name }}</h1>
  </section>
</template>

<style scoped></style>
