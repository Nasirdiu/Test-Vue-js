<script setup>
const message='Hello Vue Js';
function getdate(){
  const date= new Date();
  return date.toDateString();
}

</script>

<template>
  <div>
    <h1 >{{ message }}</h1>
    <h2 >Today is Date :- {{ getdate() }}</h2>
    
  </div>
</template>

<style scoped>

</style>
