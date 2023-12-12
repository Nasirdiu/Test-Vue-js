<script setup>
import { ref } from 'vue';
const message = ref("Hello Vue3 !")

const space = ref(0);

function spacePressed() {
    space.value++
    message.value = "Space pressed " + space.value + " times"
}
function pressedWhat(event) {
    message.value = "Your Pressed :" + event.key;
}
function buttomPress() {
    message.value = "You click The Buttom"
}
function ctrlRightPress() {
    message.value = "You click The buttom ctrl Right"
}
function divClick() {
    alert("Div Click")
}
function buttomClick() {
    alert("Buttom Click")
}
</script>

<template>
    <section class="container mx-auto flex items-center flex-col font-bold bg-green-500">
        <h1 class="text-center text-2xl py-10">Events & Reactiviy</h1>
        <h2>{{ message }}</h2>
        <form @submit.prevent action="https://www.google.com/search">
            <div class="container mx-auto flex space-x-5 justify-center m-5">
                <input @keyup.space="spacePressed()" type="text" name="q" class="border border-gray-500 bg-white p-5"
                    placeholder="Pas Space">
            </div>
            <div class="container mx-auto flex space-x-5 justify-center m-5">
                <input @keyup="pressedWhat($event)" type="text" name="q" class="border border-gray-500 bg-white p-5"
                    placeholder="Type Somthing">
            </div>
            <button @click.prevent="buttomPress()" class="bg-blue-500 hover:bg-blue-500 text-white py-2 px-4 rounded mb-5">
                Buttom
            </button>
            <button @click.ctrl.right="ctrlRightPress()"
                class="bg-blue-500 ml-5 hover:bg-blue-500 text-white py-2 px-4 rounded mb-5">
                Mouse Ctrl +Right Click
            </button>
        </form>

        <div class="bg-gray-200 w-[300px] h-80 flex items-center justify-center mb-10" @click="divClick()">
            <button @click.stop="buttomClick()"
                class="bg-orange-500 ml-5 hover:bg-orange-500 text-white py-2 px-4 rounded ">
                Buttom
            </button>

        </div>
    </section>
</template>

<style scoped></style>
