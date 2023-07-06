<template>
    <PageWrapper>
        <div class="flex flex justify-center items-center bg-main h-full w-full">
            <div class="border-white flex flex-col border-4 px-10 py-52 text-center text-white gap-5">
                <h1>Welcome, <br> I'm <span class="text-highlight-dark">Jordon</span></h1>
                <h2>A Software Developer</h2>
            </div>
        </div>
    </PageWrapper>
</template>
  
<script lang="ts">

import PageWrapper from "@/components/PageWrapper.vue"

export default {
    name: 'App',
    components: {
        PageWrapper
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
  