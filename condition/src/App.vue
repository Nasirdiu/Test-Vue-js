<script setup>
const location = "Dhaka"
const weather = 's'
</script>

<template>
  <h1 class="text-red-600 text-3xl">Logic if else in vue js</h1>
  <h1 class="text-green-600 text-2xl" v-if="weather=='s'">Weather :Sunny</h1>
  <h1 class="text-green-600 text-2xl"  v-show="weather=='pc'">Weather :Partly Cloudy</h1>
  <h1 class="text-green-600 text-2xl" v-show="weather=='r'">Weather :Rainy</h1>
  <h1 class="text-green-600 text-2xl"  v-show="weather=='t'">Weather :Thunderstore</h1>
  <h1 class="text-green-600 text-2xl" v-show="weather==c">Weather :Cyclone</h1>
</template>

<style scoped></style>
