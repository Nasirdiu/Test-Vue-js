<script setup>
const location = "Dhaka"
const weather = 's'

const weekday = true

const colors = {
  bgColor: 'bg-teal-100',
  borderColor: 'border-teal-500',
  textColor: 'text-teal-900'
}

const messageType = ''

if ('error' == messageType) {
  colors.borderColor = 'bg-red-100'
  colors.bgColor = 'bg-red-500'
  colors.textColor = 'bg-red-900'
}
if ('warning' == messageType) {
  colors.borderColor = 'bg-orange-100'
  colors.bgColor = 'bg-orange-500'
  colors.textColor = 'bg-orange-900'
}

const items = ["New York", "London", "Paris", "Tokyo"]
</script>

<template>
  <!-- <template v-if="weather"></template> div er jaigai remplate use kora jai but at maje v-show use kora jai na..... v-if new vabe ase v-show thake jai new vabe korer dorkar pore na -->
  <section class="container mx-auto">

    <section class="text-center mt-5">
      <h1 class="text-red-600 text-3xl">Logic if else in vue js</h1>
      <h1 class="text-red-600 text-3xl">{{ location }}</h1>
      <h1 class="text-green-600 text-2xl" v-if="weather == 's'">Weather :Sunny</h1>
      <h1 class="text-green-600 text-2xl" v-show="weather == 'pc'">Weather :Partly Cloudy</h1>
      <h1 class="text-green-600 text-2xl" v-show="weather == 'r'">Weather :Rainy</h1>
      <h1 class="text-green-600 text-2xl" v-show="weather == 't'">Weather :Thunderstore</h1>
      <h1 class="text-green-600 text-2xl" v-show="weather == c">Weather :Cyclone</h1>
    </section>

    <section class="mt-10">
      <div class="h-16 items-center justify-center text-white text-center"
        :class="[weekday ? 'bg-red-600 ' : 'bg-green-600', weekday == true ? 'text-2xl' : 'text-4xl']">
        <h1>It's a weekday</h1>
      </div>
    </section>

    <section class="mt-10">
      <div class="border-t-4 rounded-b px-4 py-3 shadow-md"
        :class="[colors.bgColor, colors.borderColor, colors.textColor]">
        <p class="font-bold">Our privacy policy has change</p>
        <p class="text-sm">make sure you know how these chasge affect you.</p>

      </div>
    </section>

    <!-- loop  -->

    <section class="mt-10 ">
      <h1 class="text-red-600 text-3xl text-center mb-10">Loop</h1>
      <div class="grid grid-cols-1 md:grid-cols-6">
        <div class="box-content h-32 w-32 p-4 border-4 text-center" v-for="(item, index) in items" :key="item">{{ index + 1 }}.{{ item }}
        </div>
        <div class="box-content h-32 w-32 p-4 border-4 text-center" v-for="(n, index) in 100">{{ index }}.{{ n }}</div>
      </div>

    </section>
  </section>
</template>

<style scoped></style>
