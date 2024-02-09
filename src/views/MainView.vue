<template>
    <div :class="['flex flex-col items-center h-fit w-full gap-12 pb-12', { 'overflow-hidden': activeProject }]">
        <!-- links -->
        <div class="sticky top-0 z-30 w-full h-0">
            <div
                :class="['flex justify-between px-8 py-5 relative items-center transition-colors', { 'bg-main': scrolledPastHeader }]">
                <img src="@/assets/logo.png" class="scale-75">
                <div class="flex gap-2">
                    <CustomButton class="font-semibold" @click="openEmail">Contact</CustomButton>
                    <CustomButton @click="openLink('https://github.com/JordonGoodsir')"> <i
                            class="uil uil-github text-2xl" />
                    </CustomButton>
                    <CustomButton @click="openLink('https://www.linkedin.com/in/jordon-goodsir-61466a1a5/')"> <i
                            class="uil uil-linkedin text-2xl" />
                    </CustomButton>
                </div>
            </div>
        </div>

        <!-- Hero Banner -->
        <section id="hero-banner" class="h-screen w-full bg-main relative -mt-12 z-20">
            <!-- moving shapes -->
            <ul id="moving-shapes" class="overflow-hidden relative" />
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
            <i @click="scrollToId('body')"
                class="uil uil-angle-down text-6xl bottom-5 absolute text-white left-1/2 -translate-x-1/2 cursor-pointer" />
        </section>

        <!-- body -->
        <div class="max-w-screen-xl px-8 w-full gap-12 flex flex-col -mt-12 pt-12 relative">
            <div id="body" class="absolute -top-[82px]" />
            <!-- projects -->
            <div class="flex flex-col gap-5">
                <h2 class="text-4xl font-bold">Professional Projects</h2>

                <div class="flex flex-wrap">
                    <ProjectCard @click="() => activeProject = project.name as ProProject" v-for="project in projects"
                        :text="project.name" :description="project.description"
                        :image="() => require(`@/assets/projects/${project.image}`)" :key="project.name" />
                </div>
            </div>

            <!-- tech stack -->
            <div class="flex flex-col gap-5">
                <h2 class="text-4xl font-bold">Tech Stacks</h2>
                <div class="flex flex-wrap">
                    <LanguageCard @click="openLink(tech.link)" v-for="tech in stacks" :text="tech.name" :key="tech.name"
                        :image="() => require(`@/assets/languages/${tech.img}`)" />
                </div>

            </div>

            <!-- contact -->
            <MaddnessButton />
        </div>
    </div>
    <transition name="slide">
        <CurrentProject :active-project="activeProject" @close="() => activeProject = undefined" />
    </transition>
</template>

<script setup lang="ts">
import CustomButton from '@/components/utils/CustomButton.vue'
import LanguageCard from '@/components/LanguageCard.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { onMounted, ref, watch } from 'vue';
import MaddnessButton from '@/components/utils/MaddnessButton.vue';
import { openLink, openEmail } from '@/utils/globals'
import { useRouter, useRoute } from 'vue-router'
import CurrentProject, { ProProject } from '@/components/project/CurrentProject.vue'

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

// ======================================
// moving shapes
// ======================================
const spawnDots = (amount: number): void => {
    const dots = document.getElementById('moving-shapes')

    for (let i = 0; i <= amount; i++) {
        const size = Math.floor(Math.random() * 3) + 1

        const newDot = document.createElement('li')
        newDot.style.width = `${size}rem`
        newDot.style.height = `${size}rem`
        newDot.style.bottom = `-${size}rem`
        newDot.style.bottom = `-${size}rem`
        newDot.style.left = `${Math.floor(Math.random() * 100)}%`
        newDot.style.animationDuration = `${Math.floor(Math.random() * 10) + 10}s`
        newDot.style.animationDelay = `${Math.floor(Math.random() * 3) + 0.2}s`
        if (dots != null) {
            dots.appendChild(newDot)
        }
    }
}

const timer = (time: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, time)
    })
}

onMounted(async () => {
    const maxSpawn: number = 5
    let timesSpawned: number = 0

    while (maxSpawn !== timesSpawned) {
        await timer(2000)
        timesSpawned += 1
        spawnDots(Math.floor(Math.random() * 5))
    }


})

// ======================================
// Projects
// ======================================

const projects = [
    {
        name: 'Always Here',
        description: 'Addressing Childrens Mental Health with a Companion',
        image: 'together.png'
    },
    {
        name: 'Phoenix',
        description: 'An AI chatbot builder design for none technical users',
        image: 'phoenix.png'
    },
    {
        name: 'SimConverse',
        description: 'Training Health Professionals Communication Skills with AI',
        image: 'SimConverse.png'
    }
]

// ======================================
// tech stacks
// ======================================

const stacks = [
    {
        name: 'Vue',
        img: 'Vue.svg',
        link: 'https://vuejs.org/'
    },
    {
        name: 'MongoDB',
        img: 'Mongodb.svg',
        link: 'https://www.mongodb.com/'

    },
    {
        name: 'React',
        img: 'React.svg',
        link: 'https://react.dev/'
    },
    {
        name: 'Tailwind',
        img: 'Tailwind.svg',
        link: 'https://tailwindcss.com/'

    },
    {
        name: 'TypeScript',
        img: 'Typescript.svg',
        link: 'https://www.typescriptlang.org/'

    },
    {
        name: 'Ionic',
        img: 'Ionic.svg',
        link: 'https://ionicframework.com/'

    },
    {
        name: 'Html',
        img: 'Html.svg',
        link: 'https://www.w3schools.com/html/'

    },
    {
        name: 'Ruby',
        img: 'Ruby.svg',
        link: 'https://www.ruby-lang.org/en/'

    },
    {
        name: 'AWS',
        img: 'AwsCloud.svg',
        link: 'https://aws.amazon.com/'
    },
    {
        name: 'Figma',
        img: 'Figma.svg',
        link: 'https://www.figma.com/design/'

    },
    {
        name: 'Sass',
        img: 'Sass.svg',
        link: 'https://sass-lang.com/'

    },
    {
        name: 'Python',
        img: 'Python.svg',
        link: 'https://www.python.org/'

    },
    {
        name: 'JavaScript',
        img: 'Javascript.svg',
        link: 'https://en.wikipedia.org/wiki/JavaScript'

    },
    {
        name: 'Express',
        img: 'Express.svg',
        link: 'https://expressjs.com/'

    },
    {
        name: 'Cordova',
        img: 'Cordova.svg',
        link: 'https://cordova.apache.org/'

    },
]

</script>

<style lang="scss">
.main-gradient {
    background: linear-gradient(180deg, rgb(67, 198, 172) 0%, rgb(248, 255, 174) 100%);
}

#moving-shapes {
    @apply absolute top-0 left-0 h-full w-full z-0;
}

#moving-shapes {
    * {
        @apply opacity-0 block absolute list-none bg-white z-30;
        animation: float infinite;
        transition-timing-function: linear;
        clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    }
}

@keyframes float {
    0% {
        transform: translateY(0px);
        @apply opacity-50;
    }

    80% {
        transform: translateY(-100vh) rotate(630deg);
        @apply opacity-0;
    }
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(200%)
}
</style>
