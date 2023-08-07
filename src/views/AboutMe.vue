<template>
    <PageWrapper>
        <div class="flex flex-col">
            <div class="bg-main flex items-center justify-center">
                <h1 class="text-highlight">-My Skills-</h1>
            </div>
            <div class="flex flex-wrap justify-center bg-main px-14 py-10">
                <div v-for="(skill, index) in triangleSkills" :key="index" v-tooltip="skill.name"
                    :class="[`triangle transition-all text-white hover:scale-[1.1]`, index % 2 == 0 ? 'triangle-down' : 'triangle-up']"
                    :style="{ background: skill.color }">
                    <div class="flex flex-col items-center">
                        <!-- <svg class="icon">
                        <use :xlink:href="`${skill.icon()}#${skill.name}`" />
                    </svg> -->

                        <img :src="skill.icon()" :class="['h-16 w-16', index % 2 == 0 ? 'mb-16' : 'mt-16']" />

                    </div>
                </div>
            </div>
            <div class="w-full flex flex-col items-center px-14 pt-10">
                <h2 class="text-highlight mb-10 bg-main w-full text-center">-Challenge Projects-</h2>
                <div class="flex flex-wrap w-full justify-center">
                    <div class="overflow-hidden flex" v-for="project in projects" :key="project.img()">
                        <img class="h-[250px] w-[450px] object-fill" :src="project.img()">
                    </div>
                </div>
            </div>
        </div>
    </PageWrapper>
</template>
  
<script setup lang="ts">

import { reactive } from 'vue'
import PageWrapper from "@/components/PageWrapper.vue"

let triangleSkills = reactive([
    {
        icon: () => require('@/assets/language-logos/js.svg'),
        color: '#F1DC4E',
        name: "JavaScript"
    },
    {
        icon: () => require('@/assets/language-logos/ts.svg'),
        color: '#007ACB',
        name: "TypeScript"
    },
    {
        icon: () => require('@/assets/language-logos/html.svg'),
        color: '#FF5622',
        name: "HTML"
    },
    {
        icon: () => require('@/assets/language-logos/css.svg'),
        color: '#2096F3',
        name: "CSS"
    },
    {
        icon: () => require('@/assets/language-logos/sass.svg'),
        color: '#C76395',
        name: "SASS"
    },
    {
        icon: () => require('@/assets/language-logos/react.svg'),
        color: '#61DAFB',
        name: "React"
    },
    {
        icon: () => require('@/assets/language-logos/docker.svg'),
        color: '#2396ED',
        name: "Docker"
    },
    {
        icon: () => require('@/assets/language-logos/nodeJS.svg'),
        color: '#7fc828',
        name: "NodeJS"
    },

])

let projects = reactive([
    {
        img: () => require('@/assets/projects/connectFour.png')
    },
    {
        img: () => require('@/assets/projects/entertain.png')
    },
    {
        img: () => require('@/assets/projects/monsterMashUp.png')
    },
    {
        img: () => require('@/assets/projects/legacySite.png')
    },

])

</script>
  
<style lang="scss">
.icon {
    width: 50px;
    height: 50px;
}

use {
    width: 50px;
    height: 50px;
}

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
  