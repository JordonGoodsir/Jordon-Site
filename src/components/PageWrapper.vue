<template>
    <div :class="[
        'flex flex-col min-h-screen min-w-screen h-screen w-screen',
        scroll ? 'overflow-scroll' : 'overflow-hidden'
    ]">
        <div :class="[
            'flex flex-col h-full',
            scroll ? 'overflow-scroll' : 'overflow-hidden'
        ]">
            <Header :headerDark="headerDark" :title="title" />

            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'

defineProps(
  {
    scroll: {
      type: Boolean,
      default: true
    },
    headerDark: {
      default: true,
      type: Boolean
    },
    title: {
      default: '',
      type: String
    }
  }
)
</script>

<style lang="scss" scoped></style>
