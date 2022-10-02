<template>
    <div>
        <button v-on:mouseover="hello('data')">Count</button>
    </div>
</template>

<script>
    export default{
        methods:{
            hello(item){
                console.log(item);
            }
        }
    }
</script>