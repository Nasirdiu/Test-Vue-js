<script setup>
import { ref } from 'vue';
import { countries } from './data/countries';
const search = ref('')

function getFilterCountries() {
  return countries.filter(country => {
    return country.name.toLocaleLowerCase().startsWith(search.value.toLowerCase())
  })
}
</script>

<template>
  <section class="mx-auto container text-center">
    <h1 class="text-2xl mb-10 mt-10">Total Country :{{ countries.length }}</h1>

    <p class="mb-10">Search Country Name: {{ search }}</p>
    <p>
      <input type="search" id="default-search"
        class=" p-4 pl-10 w-50 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Country" v-model="search">
    </p>
    <p>
    <ul>
      <div class="box-content h-15 w-20 p-4 border-4 shadow-inner ml-40 mt-5" v-for="country in getFilterCountries()"
        :key="country.code">
        {{ country.name }} <br>
        <div class="mt-5">
          {{ country.code }}
        </div>
      </div>

    </ul>
    </p>
  </section>
</template>

<style scoped></style>
