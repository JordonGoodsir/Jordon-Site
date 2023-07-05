<template>
    <p class="bg-red-500">{{ name }}</p>
    e
</template>
  
<script lang="ts">

export default {
    name: 'App',
    components: {
    },
    data() {
        return ({
            name: 'doggie'
        })
    },
    created() {
        console.error('ello')
    }

}
</script>
  
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
  