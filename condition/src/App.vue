<script setup>
const location = "Dhaka"
const weather = 's'
</script>

<template>
  <!-- <template v-if="weather"></template> div er jaigai remplate use kora jai but at maje v-show use kora jai na..... v-if new vabe ase v-show thake jai new vabe korer dorkar pore na -->

  <h1 class="text-red-600 text-3xl">Logic if else in vue js</h1>
  <h1 class="text-green-600 text-2xl" v-if="weather == 's'">Weather :Sunny</h1>
  <h1 class="text-green-600 text-2xl" v-show="weather == 'pc'">Weather :Partly Cloudy</h1>
  <h1 class="text-green-600 text-2xl" v-show="weather == 'r'">Weather :Rainy</h1>
  <h1 class="text-green-600 text-2xl" v-show="weather == 't'">Weather :Thunderstore</h1>
  <h1 class="text-green-600 text-2xl" v-show="weather == c">Weather :Cyclone</h1>
</template>

<style scoped></style>
