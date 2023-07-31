<template>
    <PageWrapper>
        <div class="bg-main flex items-center justify-center py-20">
            <h1 class="text-highlight">-My Skills-</h1>
        </div>
        <div class="flex flex-wrap justify-center mt-10">
            <div v-for="(skill, index) in triangleSkills" :key="skill.icon"
                :class="['triangle', index % 2 == 0 ? 'triangle-down' : 'triangle-up']">
                <img :src="skill.icon" :class="['h-16 w-16', index % 2 == 0 ? 'mb-16' : 'mt-16']" />
            </div>
        </div>
    </PageWrapper>
</template>
  
<script setup lang="ts">

import { ref } from 'vue'
import PageWrapper from "@/components/PageWrapper.vue"

const triangleSkills = ref([

    {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    },
    {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    },
    {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    },
    {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    },
    {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    },
    {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    },
    {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    },
    {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    },
    {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    },
    {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    },
    {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    },
    {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    },

])





</script>
  
<style lang="scss">
.triangle {
    @apply h-52 w-52 bg-main flex items-center justify-center -mx-10
}

.triangle-down {
    clip-path: polygon(1% 2%, 98% 2%, 49% 99%);
}

.triangle-up {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

}
</style>
  