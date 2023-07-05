<template>
    {{ name }}
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
  
<style>

</style>
  