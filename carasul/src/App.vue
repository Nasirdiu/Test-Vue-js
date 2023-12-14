<script setup>
import { ref, onMounted, nextTick } from 'vue';
const items = ref([
  'https://w.forfun.com/fetch/5c/5c334e59090eea66965a648b19e05bb2.jpeg',
  'https://motoxmoto.ru/wp-content/uploads/2018/07/3-2048x1280.jpg',
  'https://gas-kvas.com/grafic/uploads/posts/2023-10/1696558729_gas-kvas-com-p-kartinki-motokross-9.jpg',
  'https://get.wallhere.com/photo/sport-vehicle-racing-1342183.jpg',
  'https://gas-kvas.com/grafic/uploads/posts/2023-10/1696558729_gas-kvas-com-p-kartinki-motokross-8.jpg',
  'https://sportishka.com/uploads/posts/2021-12/1639156390_16-sportishka-com-p-motokross-trassa-sport-krasivo-foto-17.jpg',
  'https://gas-kvas.com/grafic/uploads/posts/2023-10/1696558740_gas-kvas-com-p-kartinki-motokross-42.jpg',
  'https://novosti44.ru/wp-content/uploads/photo_5458629754061181946_y.jpg',
  'http://i53.fastpic.org/big/2012/1212/c2/e9c45d8b25d7b4df54652e27f6472fc2.jpg',
  'https://jooinn.com/images/motocross-1.jpg',
  'https://i.pinimg.com/originals/dd/ad/20/ddad206e351cd9bd355e16a083dc6d32.jpg',
  'https://gas-kvas.com/grafic/uploads/posts/2023-10/1696558732_gas-kvas-com-p-kartinki-motokross-16.jpg',
])

let carousel = null

const newItem = ref('https://cdn4.louis.de/r/e06846afb7b7518e7981ed43bb0767c6aa0d58f2/damenjacken-03-2000x874-1200x524.jpg')

function addNewItem() {
  items.value.push(newItem.value)
  carousel.destroy();
  nextTick(function () {
    carousel = new Flickity('#carousel', {})
  });

};
onMounted(() => {
  carousel = new Flickity('#carousel', {})

})
</script>

<template>
  <section class="container mx-auto">
    <h1 class=" text-center text-2xl uppercase font-sans mt-5">Carosel </h1>
    <div class="my-10 ml-72">
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="Username" v-model="newItem">

      <button @click="addNewItem()"
        class=" mt-5 ml-40 bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">Add Item</button>
    </div>

    <div class="mx-auto items" id="carousel">
      <div :style="`background-image:url(${item})`" class="item" v-for="item, index in items" :key="item">{{ index++ }}
      </div>
    </div>
  </section>
</template>

<style scoped>
.items {
  width: 600px;
  height: 400px;
}

/* Additional styling for carousel items can be added here */
.item {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
</style>
