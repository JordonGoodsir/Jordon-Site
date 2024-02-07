<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import '@/styles/tailwind.css'
import '@/styles/styles.scss'

</script>

<style lang="scss">
a { 
  @apply text-blue-500 underline;
}
</style>
