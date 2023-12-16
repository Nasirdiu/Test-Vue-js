<script setup>
import { onMounted, ref } from "vue";

const newItem = ref(16);

let chart = null;

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
      hoverOffset: 4,
    },
  ],
};
const config = {
  type: "pie",
  data: data,
};
onMounted(() => {
  const ctx = document.getElementById("chart");
  chart = new chart(ctx, config);
}),
  function updateChart() {
    dataset.push(newItem.value);
  };
</script>

<template>
  <div class="mx-auto w-[400px] h-[400px] bg-gray-400">
    <canvas id="Chart"></canvas>
  </div>
  <div class="mt-20">
    <input type="text" v-model="newItem" />
    <button @click="updateChart()" class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">Add</button>
  </div>
</template>

<style scoped></style>
