<script setup>
import { reactive, ref } from 'vue';

const person = reactive({
  name:'Jone Doe',
  age:27,
  job:'Web Developer'
});


</script>

<template>
  <section class="container mx-auto ">
    <h1 class="text-2xl mb-10">Vue Form</h1>
    <img src="" alt="">
    <p class="mb-10">  {{ person }}</p>
    <div class="flex flex-col mb-5 text-left" v-for="(value,key,index) in person" :key="key">
      <label for="name">{{ key }}</label>
      <input
        class="p-5 mt-5 shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        v-model="person[key]">
    </div>
      
    
   
 
  </section>
</template>

<style scoped></style>
