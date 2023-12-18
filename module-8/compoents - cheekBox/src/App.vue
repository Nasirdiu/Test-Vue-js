<script setup>
import { reactive, ref } from 'vue';
import CheekBox from './components/CheekBox.vue';

const person = reactive({
  name: "Nasir",
  email: 'nasir@aa.com'
})

const taskDone = ref(false);

</script>

<template>
  <div>
    Orginal Name: {{ person.name }} <br>
    Task Done: {{ taskDone}}
  </div>
  <div class="mb-4">
  <label for="">Cheek Box</label>
    <cheek-box v-model="taskDone"  label="complete thke task"/>
  </div>
</template>

<style scoped></style>
