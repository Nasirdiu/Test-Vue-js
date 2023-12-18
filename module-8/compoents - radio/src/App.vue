<script setup>
import { reactive, ref } from 'vue';
import Radio from './components/Radio.vue';

const fruit = ref('apple')

</script>

<template>
  <div>

    Fruit: {{ fruit }}<br>
  </div>
  <div class="mb-4">
    <label for="">Compontents</label>
    <p>
      <label for=""> Your favorite fruit</label>
      <Radio v-model="fruit" label="Apple" value="apple" />
      <Radio v-model="fruit" label="banna" value="banna" />
      <Radio v-model="fruit" label="orange" value="orange" />
      <Radio v-model="fruit" label="lechu" value="lechu" />
    </p>
  </div>
</template>

<style scoped></style>
