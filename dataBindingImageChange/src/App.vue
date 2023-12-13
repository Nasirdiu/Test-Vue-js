<script setup>
import { reactive, ref } from 'vue';

const displayImage = ref(true);

</script>

<template>
  <section class="container mx-auto ">
    <h1 class="text-2xl mb-10">Vue Form</h1>
    <img src="" alt="">
    <p class="mb-10"> {{ displayImage }}</p>
    <div class="flex items-center mb-4">
      <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Display Random Image</label>
      <input  type="checkbox" class="ml-2" v-model="displayImage">

        <p class="mt-20">
          <input  type="radio" name="display" :value="true" v-model="displayImage"> On <br>
          <input type="radio" name="display" :value="false" v-model="displayImage"> Off <br>

        </p>
    </div>

   <div>
    <img v-show="displayImage" class="mt-10 mx-auto w-[500px]"
      :src="`https://source.unsplash.com/random?version=${Math.random()}`" alt="">
   </div>


  </section>
</template>

<style scoped></style>
