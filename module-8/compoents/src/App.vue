<script setup>
import { reactive, ref } from 'vue';
import TextCompontes from './components/TextCompontes.vue';
import Person from './components/Person.vue';
const name = ref("Nasir Uddin")
const email = ref("Nasir@Uddin.com")

const person=reactive({
  name:"Nasir",
  email:'nasir@aa.com'
})

</script>

<template>
  <!-- <div>
    Orginal Name: {{ name }}
    Orginal Email: {{ email }}
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2">
      Name
    </label>
    <p>
      <input v-model="name"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="Name">
    </p>
  </div>
  <div class="mb-4">
    <TextCompontes label="Compontents" v-model="name"/>
    <TextCompontes label="Email" v-model="email"/>
  </div> -->

  <div>
    Orginal Name: {{ person.name }} <br> 
    Orginal Email: {{ person.email }}
  </div>
  <div class="mb-4">
    <person  :person="person"/>
  </div>

</template>

<style scoped></style>
