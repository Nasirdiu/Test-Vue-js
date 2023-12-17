<script setup>
import { ref } from 'vue';

const props = defineProps({
    start: {
        type: Number,
        default: 0
    },
})

const count = ref(props.start)

function increment() {
    count.value++
}
function Deincrement() {
    count.value--
};
</script>

<template>
    <button @click="increment"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mr-5">
        +
    </button>
    <span class="py-5">{{ count }}</span>

    <button @click="Deincrement"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-5">
        -
    </button>
</template>

<style scoped></style>
