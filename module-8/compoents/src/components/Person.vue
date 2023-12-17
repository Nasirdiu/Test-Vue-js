<script setup>
const props = defineProps([
    'person'
])
</script>


<template>
    <p>
        <label class="block text-gray-700 text-sm font-bold mb-2">
           Name
        </label>

        <input v-model="person.name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Name" >
        <label class="block text-gray-700 text-sm font-bold mb-2">
           Email
        </label>

        <input v-model="person.email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Name" >
    </p>

</template>



<style lang="scss" scoped>

</style>