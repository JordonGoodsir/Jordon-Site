<template>
    <div :class="[
        'flex flex-col min-h-screen min-w-screen w-screen p-5',
        scroll ? ' min-h-screen' : 'h-screen'
    ]">
            <slot />
    </div>
</template>

<script setup lang="ts">

defineProps(
  {
    scroll: {
      type: Boolean,
      default: true
    }
  }
)
</script>

<style lang="scss" scoped></style>
