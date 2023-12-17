<script setup>
import Buttom from './components/Buttom.vue';
import ButtomCount from './components/ButtomCount.vue';
</script>

<template>
<buttom class="ml-5" label="Click me"/> 
<buttom class="ml-5" label="Click "/> 
<buttom class="ml-5" color="red" label="add me"/>
<buttom class="ml-5" color="orange" label="me"/> <br><br>

<ButtomCount :start="20"/><br><br>
<buttom-count :start="10"/>
</template>

<style scoped></style>
