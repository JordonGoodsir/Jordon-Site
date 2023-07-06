<template>
    <div :class="[
        'flex flex-col h-screen w-screen',
        scroll ? 'overflow-scroll' : 'overflow-hiddeb'
    ]">
        <Header />
        <slot />
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
        }
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
  
<style lang="scss" scoped></style>
  