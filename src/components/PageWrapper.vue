<template>
    <div :class="[
        'flex flex-col min-h-screen min-w-screen w-screen',
        scroll ? ' min-h-screen' : 'h-screen',
        {'p-5' : hasPadding}
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
    },
    hasPadding: {
      type: Boolean,
      default: true
    }
  }
)
</script>

<style lang="scss" scoped></style>
