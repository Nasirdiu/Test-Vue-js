<script setup>
const persons=[
  {
    id:1,
    name:"Jone Doe",
    profilePhoto:"https://w.forfun.com/fetch/4a/4a9e0148e3e1bccd179693237d24ebd0.jpeg",
    jobTitle:"CEO,Co-Founder",
  },
  {
    id:2,
    name:"Jone Doe",
    profilePhoto:"https://sportishka.com/uploads/posts/2022-08/1660817573_12-sportishka-com-p-marka-mashini-marusya-krasivo-foto-16.jpg",
    jobTitle:"CEO,Co-Founder",
  },
  {
    id:3,
    name:"Jone Doe",
    profilePhoto:"https://w.forfun.com/fetch/4a/4a9e0148e3e1bccd179693237d24ebd0.jpeg",
    jobTitle:"CEO,Co-Founder",
  },
]

</script>

<template>
  <section>
    <div>
      <h1 class="text-center mt-10 mb-5 text-2xl">Team Member Car</h1>
      <div class="grid gap-12 items-center grid-cols-3">
       <div class="space-y-4 text-center" v-for="(person,index) in persons" :key="person.id">
        <!-- <img class="w-64 h-64 mx-auto object-cover rounded-xl w-64 " v-bind:class="2==person.id?'h-80':'h-64'" :src=" person.profilePhoto " alt=""> -->
        <img class="w-64 h-64 mx-auto object-cover rounded-xl w-64 " v-bind:class="1==index?'h-80':'h-64'" :src=" person.profilePhoto " alt="">
        <div>
          <h4 class="text-2xl">{{ person.name }}</h4>
          <span class="block text-sm">{{ person.jobTitle }}</span>
        </div>
       </div>
   
    
      </div>
    </div>
  </section>
</template>

<style scoped></style>
