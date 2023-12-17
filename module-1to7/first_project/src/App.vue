<script setup>
// const message='Hello Vue Js';
// function getdate(){
//   const date= new Date();
//   return date.toDateString();
// }

//import {data} from './data/data'
import data from './data/data'


const image = [

  {
    title: 'The Catalyzer',
    text: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
    image: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
    link: 'https://www.facebook.com/reel/340389982078688'
  },
  {
    title: 'The 400 Blows',
    text: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
    image: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
    link: 'https://www.youtube.com/watch?v=TVQdKLx3FJw'
  },
  {
    title: 'Shooting Stars',
    text: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
    image: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
    link: 'https://www.youtube.com/watch?v=6HDJyI5iFbo'
  },

]

</script>

<template>
  <!-- <div>
    <h1>{{ data.message }}</h1>
    <h2>Today is Date :- {{ data.dates }}</h2>
  </div> -->

  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3">
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img :title="image[0].title" class="lg:h-48 md:h-36 w-full object-cover object-center" :src="image[0].image"
              alt="blog">
            <div class="p-6">

              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ image[0].title }}</h1>
              <p class="leading-relaxed mb-3">{{ image[0].text }}</p>
              <a :href="image[0].link" target="_blank">Facebook Reel</a>
            </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img v-bind:title="image[1].title" class="lg:h-48 md:h-36 w-full object-cover object-center"
              v-bind:src="image[1].image" alt="blog">
            <div class="p-6">
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ image[1].title }}</h1>
              <p class="leading-relaxed mb-3">{{ image[1].text }}</p>
              <a v-bind:href="image[1].link" target="_blank">Proect</a>
            </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img v-bind:title="image[2].title" class="lg:h-48 md:h-36 w-full object-cover object-center"
              :src="image[2].image" alt="blog">
            <div class="p-6">
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ image[2].title }}</h1>
              <p class="leading-relaxed mb-3">{{ image[2].text }}</p>
              <a :href="image[2].link" target="_blank">Protfilo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
