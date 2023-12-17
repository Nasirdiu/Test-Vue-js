<script setup>
const props = defineProps([
    'label', 'modelValue'
])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
    <p>
        <label class="block text-gray-700 text-sm font-bold mb-2">
            {{ label }}
        </label>

        <input :value="modelValue"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Name" @input="$emit('update:modelValue', $event.target.value)">
    </p>
 
</template>



<style  scoped></style>