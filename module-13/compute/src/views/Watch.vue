<script setup>
import { onBeforeMount, ref, watch, watchEffect } from "vue";

const postId = ref(1);
const post = ref({});

const fetchPost = () => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId.value}`)
    .then((response) => response.json())
    .then((json) => (post.value = json));
};
// onBeforeMount(() => {
//   fetchPost();
// });

// ata diye kaj hba

// watch(
//   postId,
//   () => {
//     fetchPost();
//   },
//   { immediate: true }
// );

// or

watchEffect(() => {
  fetchPost();
});

const previousPost = () => {
  postId.value <= 1 ? (postId.value = 1) : postId.value--;
  // fetchPost()
};
const nextPost = () => {
  postId.value++;
  // fetchPost()
};
</script>

<template>
  <div>
    <h1 class="text-center text-2xl font-bold">Watch Example</h1>

    <p class="mt-2 font-bold"><strong>Post Id :</strong>{{ postId }}</p>
    <p class="mt-2 font-bold"><strong>Post Title :</strong>{{ post.title }}</p>
    <p class="mt-2 font-bold"><strong>Post Body :</strong>{{ post.body }}</p>

    <button
      @click="previousPost()"
      class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-5"
    >
      Previus Post
    </button>
    <button
      @click="nextPost()"
      class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-5 ml-3"
    >
      Next Post
    </button>
  </div>
</template>

<style scoped></style>
