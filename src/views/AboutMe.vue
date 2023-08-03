<template>
    <PageWrapper>
        <div class="bg-main flex items-center justify-center py-20">
            <h1 class="text-highlight">-My Skills-</h1>
        </div>
        <!-- <img :src="test" /> -->
        <div class="flex flex-wrap justify-center py-10 bg-main">
            <div v-for="(skill, index) in triangleSkills" :key="index"
                :class="[`triangle`, index % 2 == 0 ? 'triangle-down' : 'triangle-up']" :style="{ background: skill.color }">
                <div class="flex flex-col items-center">
                    <!-- <p v-if="index % 2 == 0" class="t">JavaScript</p> -->

                    <img :src="skill.icon()" :class="['h-16 w-16', index % 2 == 0 ? 'mb-16' : 'mt-16']" />
                    <!-- <p v-if="index % 2 !== 0" class="t">JavaScript</p> -->

                </div>
            </div>
        </div>
        <div>
            <!-- @/assets/language-logos/ -->
            my projects
        </div>
    </PageWrapper>
</template>
  
<script setup lang="ts">

import { reactive } from 'vue'
import PageWrapper from "@/components/PageWrapper.vue"

let triangleSkills = reactive([

    {
        icon: () => require('@/assets/language-logos/js.svg'),
        color: '#F1DC4E'
    },
    {
        icon: () => require('@/assets/language-logos/ts.svg'),
        color: '#007ACB'
    },
    {
        icon: () => require('@/assets/language-logos/html.svg'),
        color: '#FF5622'
    },
    {
        icon: () => require('@/assets/language-logos/css.svg'),
        color: '#2096F3'
    },
    {
        icon: () => require('@/assets/language-logos/sass.svg'),
        color: '#C76395'
    },
    {
        icon: () => require('@/assets/language-logos/react.svg'),
        color: '#61DAFB'
    },
    {
        icon: () => require('@/assets/language-logos/docker.svg'),
        color: '#2396ED'
    },
    {
        icon: () => require('@/assets/language-logos/nodeJS.svg'),
        color: '#7fc828'
    },
    // {
    //     icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    // },
    // {
    //     icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    // },
    // {
    //     icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    // },
    // {
    //     icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    // },
    // {
    //     icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    // },
    // {
    //     icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    // },
    // {
    //     icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    // },
    // {
    //     icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    // },
    // {
    //     icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    // },
    // {
    //     icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    // },

])

</script>
  
<style lang="scss">
.triangle {
    @apply h-52 w-52 flex items-center justify-center -mx-10;
}

.triangle-down {
    clip-path: polygon(1% 2%, 98% 2%, 49% 99%);
}

.triangle-up {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
</style>
  