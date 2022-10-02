<template>
    <div class="main">
        <h1  v-if="show">Welcome to Vue</h1>
        <h1 class="green" v-else>Nasir Uddin</h1>
        <button v-on:mouseover="hello('data')">Count</button>
        <button v-on:click="display">Toogle</button>
    </div>
</template>

<script>
    export default{
        methods:{
            hello(item){
                console.log(item);
            },
            display(){
                this.show=!this.show
            }
        },
        data(){
            return{
                show:false
            }
        },

    }
</script>

<style>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
button{
    margin: 10px;
    padding: 10px;
    background-color:coral;
    border-radius:10px ;
}
</style>