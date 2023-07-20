<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import '@/styles/tailwind.css'
import '@/styles/styles.scss'

export default {
  name: 'App',
  components: {
  },
  data() {
    return ({
      name: 'doggie'
    })
  },
}
</script>

<style lang="scss">

</style>
