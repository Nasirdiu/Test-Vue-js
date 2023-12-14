<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';

const status = ref([])

onBeforeMount(() => {
  console.log('before mount');
  status.value.push('Before Mount')
});

  onMounted(() => {
    console.log('mounted');
    status.value.push('Mounted')
  });
</script>

<template>
  <section class="container mt-5 bg-gray-200 mx-auto">
    <h1 class="text-2xl text-center font-mono uppercase">Vue Life Cycle</h1>
    <div class="flex justify-between mt-20">
      <div class="w-1/2">
        <img src="https://vuejs.org/assets/lifecycle.DLmSwRQE.png" alt="">
      </div>
      <div class="text-2xl w-1/2">
        {{ status }}
      </div>
    </div>
  </section>
</template>

<style scoped></style>
