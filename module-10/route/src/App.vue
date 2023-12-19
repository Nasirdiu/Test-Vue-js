<script setup>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <header class="bg-black text-white">
    <Nav></Nav>
  </header>

  <main>
    <router-view></router-view>
  </main>

  <section class="bg-black text-white">
    <Footer></Footer>
  </section>
</template>
<style scoped></style>
