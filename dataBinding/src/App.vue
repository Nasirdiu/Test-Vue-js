<script setup>
import { guardReactiveProps, ref } from 'vue';

const color = ref('');

function getStyle() {
  return {
    backgroundColor: color.value,
  }
}

</script>

<template>
  <section class="container mx-auto ">
    <h1 class="text-2xl mb-10">Vue Color Form</h1>
    <img src="" alt="">
    <p> Your Favorite Color Name Is: {{ color }}</p>
    <p>
      Type Your Favorite Color Name:
      <input
        class="p-5 mt-5 shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        v-model="color">
    <div class="w-32 h-32 mt-10 ml-56" :style="getStyle()"></div>
    </p>
    <div class="mt-10">
      <a target="_blank" href="https://nasir369.netlify.app/">Nasir369</a>
    </div>
  </section>
</template>

<style scoped></style>
