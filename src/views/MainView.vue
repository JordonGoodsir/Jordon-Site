<template>
    <div :class="['flex flex-col items-center h-fit w-full gap-12 pb-12', { 'overflow-hidden': activeProject }]">
        <MainHeader :headerColor="scrolledPastHeader ? 'bg-main' : ''" />

        <!-- Hero Banner -->
        <section id="hero-banner" class="h-screen w-full bg-main relative -mt-12 z-20">
            <MovingDots />
            <!-- hero text -->
            <div class="flex items-center justify-center h-full w-full">
                <h1 id="hero-text"
                    class="text-5xl sm:text-8xl md:text-9xl font-bold main-gradient text-transparent bg-clip-text text-center whitespace-pre-line">
                    {{ activeHeroText }}
                    <transition enter-active-class="duration-300 ease-out" enter-from-class="transform opacity-0"
                        enter-to-class="opacity-100" leave-active-class="duration-200 ease-in"
                        leave-from-class="opacity-100" leave-to-class="transform opacity-0">
                        <span
                            :class="['font-bold main-gradient text-transparent bg-clip-text animate-[flashingType_0.500s_ease-in-out_infinite] -ml-1 text-[35px] sm:text-[83px] md:text-[115px] transition-all duration-700', { '!text-[0px]': activeHeroText === heroText }]">
                            |
                        </span>
                    </transition>
                </h1>
            </div>
            <unicon @click="scrollToId('body')" name="angle-down"
                class="text-6xl bottom-5 absolute left-1/2 -translate-x-1/2 cursor-pointer fill-white" height="55"
                width="55" />
        </section>

        <!-- <svg class="hidden" width="597" height="608" viewBox="0 0 597 608" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="line"
                d="M329.51 6C487.524 315.541 477.078 414.931 298.171 304.171C190.902 246.918 180.456 346.309 266.832 602.342"
                stroke="black" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div class="h-[608px]">
            <div id="box" class="h-5 w-5 bg-red-500" />
        </div> -->

        <!-- body -->
        <div class="max-w-screen-xl px-8 w-full gap-12 flex flex-col -mt-12 pt-12 relative">
            <div id="body" class="absolute -top-[82px]" />
            <!-- projects -->
            <div class="flex flex-col gap-5">
                <h2 class="text-4xl font-bold scroll-in">Professional Projects</h2>

                <div class="flex flex-wrap">
                    <ProjectCard @click="() => activeProject = project.name as ProProject" v-for="project in projects"
                        :text="project.name" :description="project.description"
                        :image="() => require(`@/assets/projects/${project.image}`)" :key="project.name" />
                </div>
            </div>

            <!-- tech stack -->
            <div class="flex flex-col gap-5">
                <h2 class="text-4xl font-bold scroll-in">Tech Stacks</h2>
                <div class="flex flex-wrap">
                    <LanguageCard @click="openLink(tech.link)" v-for="tech in stacks" :text="tech.name" :key="tech.name"
                        :image="() => require(`@/assets/languages/${tech.img}`)" />
                </div>

            </div>

            <!-- contact -->
            <MaddnessButton />
        </div>
    </div>
    <transition enter-active-class="transition-transform duration-300 ease-in-out"
        leave-active-class="transition-transform duration-300 ease-in-out" enter-from-class="translate-x-[200%]"
        leave-to-class="translate-x-[200%]">
        <CurrentProject :active-project="activeProject" @close="() => activeProject = undefined" />
    </transition>
</template>

<script setup lang="ts">
import LanguageCard from '@/components/LanguageCard.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { onMounted, ref, watch } from 'vue';
import MaddnessButton from '@/components/utils/MaddnessButton.vue';
import { openLink } from '@/utils/globals'
import { projects, stacks } from '@/utils/variables'
import { useRouter, useRoute } from 'vue-router'
import CurrentProject, { ProProject } from '@/components/project/CurrentProject.vue'
import MainHeader from '@/components/MainHeader.vue';
import MovingDots from '@/components/MovingDots.vue';

import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);


onMounted(() => {
    // gsap.to("#box", { scrollTrigger: { trigger: '#box', scrub: true }, duration: 2, motionPath: "#line" })

    const elements = gsap.utils.toArray('.scroll-in');

    gsap.set(elements, { opacity: 0, y: -30 });

    elements.forEach(element => {
        //@ts-ignore
        gsap.to(element, { scrollTrigger: { trigger: element, toggleActions: 'restart none none none' }, y: 0, duration: 0.5, opacity: 1, delay: 0.1 })

    })

})


// ======================================
// Init
// ======================================

const router = useRouter()
const route = useRoute()

const activeProject = ref<ProProject | undefined>(undefined)
watch(() => activeProject.value, (newVal) => {
    if (newVal) {
        router.push({ query: { project: newVal } })
    } else {
        router.push({ path: '/' })
        activeProject.value = undefined
    }
})


// ======================================
// Scroll
// ======================================

onMounted(() => {

    // on back button press remove active project
    window.onpopstate = function () {
        if (!route.query?.project) {
            activeProject.value = undefined
        }
    };


    window.addEventListener("scroll", function () {
        const heroBanner = document.getElementById("hero-banner");
        if (heroBanner && window.scrollY > (heroBanner.offsetTop + heroBanner.offsetHeight) - 50) {
            scrolledPastHeader.value = true
        } else {
            scrolledPastHeader.value = false
        }
    });

})

const scrolledPastHeader = ref(false)


// ======================================
// Contact
// ======================================

const scrollToId = (id: string) => {
    const element = document.getElementById(id)

    if (element) {
        element.scrollIntoView({ behavior: "smooth" })
    }
}


// ======================================
// hero banner
// ======================================

const heroText = 'A Software \n Developer'
const activeHeroText = ref('')

onMounted(() => {
    // trigger innterhtml anim

    const heroTextElement = document.getElementById('hero-text')

    if (heroTextElement) {
        heroText.split('').forEach((letter, letterIndex) => {
            setTimeout(() => {
                activeHeroText.value = activeHeroText.value += letter
            }, 150 * letterIndex)
        })
    }
})
</script>

<style lang="scss">
.main-gradient {
    background: linear-gradient(180deg, rgb(67, 198, 172) 0%, rgb(248, 255, 174) 100%);
}
</style>
