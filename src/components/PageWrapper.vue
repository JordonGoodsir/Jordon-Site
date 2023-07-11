<template>
    <div :class="[
        'flex flex-col h-screen w-screen',
        scroll ? 'overflow-scroll' : 'overflow-hidden'
    ]">
        <Header :headerDark="headerDark" />
        <div :class="[
            'flex flex-col h-full',
            scroll ? 'overflow-scroll' : 'overflow-hidden'
        ]">
            <slot />
        </div>
    </div>
</template>
  
<script lang="ts">
import Header from '@/components/Header.vue'

export default {
    name: 'App',
    components: {
        Header
    },
    props: {
        scroll: {
            default: true,
            type: Boolean
        },
        headerDark: {
            default: true,
            type: Boolean,
        }
    },
    data() {
        return ({
            name: 'doggie'
        })
    },
}
</script>
  
<style lang="scss" scoped></style>
  