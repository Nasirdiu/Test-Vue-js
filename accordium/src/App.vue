<script setup>
import { ref } from 'vue';


const fullImage = ref('https://kartinkof.club/uploads/posts/2022-09/1662240057_44-kartinkof-club-p-novie-i-krasivie-kartinki-loshadka-48.jpg');

const images = [
  {
    thumb: 'https://kartinkof.club/uploads/posts/2022-09/1662240057_44-kartinkof-club-p-novie-i-krasivie-kartinki-loshadka-48.jpg',
    full: 'https://kartinkof.club/uploads/posts/2022-09/1662240057_44-kartinkof-club-p-novie-i-krasivie-kartinki-loshadka-48.jpg'
  },
  {
    thumb: 'https://setroom.ru/wp-content/uploads/sites/15/2022/02/s1200.jpg',
    full: 'https://setroom.ru/wp-content/uploads/sites/15/2022/02/s1200.jpg'
  },
  {
    thumb: 'https://img.desktopwallpapers.ru/animals/pics/49-1024.jpg',
    full: 'https://img.desktopwallpapers.ru/animals/pics/49-1024.jpg'
  },
  {
    thumb: 'https://krasivosti.pro/uploads/posts/2021-03/1616296238_11-p-belaya-loshadka-14.jpg',
    full: 'https://krasivosti.pro/uploads/posts/2021-03/1616296238_11-p-belaya-loshadka-14.jpg'
  }
]
function setImage(image) {
  fullImage.value = image.full
}
</script>

<template>
  <section class="container mx-auto flex items-center flex-col">
    <h1 class="text-center text-2xl py-10">Events & Reactiviy</h1>
    <div>
      <div class="flex space-x-2">
        <img @click="setImage(image)" class="cursor-pointer w-50 h-40" v-for="image in images" :key="image.thumb" :src="image.thumb" alt="">

      </div>
      <div class="mt-10">
        <h1 class="mb-10 text-2xl font-bold">Change Horse</h1>
        <img class="cursor-pointer w-full pl-80 pr-80 " :src="fullImage" alt="">
      </div>
    </div>
  </section>
</template>

<style scoped></style>
