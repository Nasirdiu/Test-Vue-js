<script setup>
// const props= defineProps([
//     'label'
// ])

const props = defineProps({
    label: {
        type: String,
        default: "cleck Me"
    },
    color: {
        type: String,
        default: 'blue'
    }
})
function getColor() {
    return `hover:bg-${props.color}-500 text-${props.color}-700`
}
</script>

<template>
    <button :class="getColor()"
        class="font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        {{ label }}
    </button>
</template>

<style scoped></style>
