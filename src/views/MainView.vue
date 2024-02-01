<template>
    <div class="flex flex-col items-center h-fit w-full gap-12 pb-12">

        <div class="absolute w-full top-0 bg-main h-[82px]" />

        <!-- links -->
        <div class="sticky top-0 w-full z-40 shadow">

            <div class="flex justify-between z-20 px-8 py-5 relative">
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
            <div class="absolute w-full h-full z-10 bg-main top-0" />

        </div>

        <!-- Hero Banner -->
        <section class="h-[calc(100vh-62px)] w-full bg-main relative -mt-12">

            <!-- moving shapes -->
            <ul id="moving-shapes" class="overflow-hidden z-50 relative" />

            <!-- hero text -->
            <div class="flex items-center justify-center h-full w-full">
                <h1 id="hero-text"
                    class="text-5xl sm:text-8xl md:text-9xl font-bold test text-transparent bg-clip-text text-center whitespace-pre-line">
                    {{ activeHeroText }}
                    <transition enter-active-class="duration-300 ease-out" enter-from-class="transform opacity-0"
                        enter-to-class="opacity-100" leave-active-class="duration-200 ease-in"
                        leave-from-class="opacity-100" leave-to-class="transform opacity-0">
                        <span
                            :class="['font-bold test text-transparent bg-clip-text animate-[flashingType_0.500s_ease-in-out_infinite] -ml-1 text-[35px] sm:text-[83px] md:text-[115px] transition-all duration-700', { '!text-[0px]': activeHeroText === heroText }]">
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
                    <ProjectCard v-for="project in projects" :text="project.name" :description="project.description"
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
            <div class="flex flex-col items-center mt-28 text-center w-full">
                <h2 class="text-4xl font-bold text-center">Project need building?</h2>
                <div class="flex flex-col items-center justify-center w-full">
                    <MaddnessButton text="Talk to me" @click="openEmail" href="mailto:jordon.goodsir1@gmail.com" />
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import CustomButton from '@/components/utils/CustomButton.vue'
import LanguageCard from '@/components/LanguageCard.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { onMounted, ref } from 'vue';
import MaddnessButton from '@/components/utils/MaddnessButton.vue';


// ======================================
// Contact
// ======================================

const openEmail = () => {
    window.open('mailto:jordon.goodsir1@gmail.com')
}

const scrollToId = (id: string) => {
    const element = document.getElementById(id)

    if (element) {
        element.scrollIntoView({ behavior: "smooth" })
    }
}


// ======================================
// hero banner
// ======================================

const heroText = 'A Software \n Deloper'
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
        newDot.style.position = 'absolute'
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
        description: 'good',
        image: 'together.png'
    },
    {
        name: 'Phoenix',
        description: 'good',
        image: 'phoenix.png'
    },
    {
        name: 'SimConverse',
        description: 'good',
        image: 'SimConverse.png'
    }
]

// ======================================
// tech stacks
// ======================================

const openLink = (link: string) => {
    window.open(link, '_blank')
}

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
        name: 'Figma',
        img: 'Figma.svg',
        link: 'https://www.figma.com/design/'

    },
    {
        name: 'AWS',
        img: 'AWS.svg',
        link: 'https://aws.amazon.com/'

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
.test {
    background: linear-gradient(180deg, rgb(67, 198, 172) 0%, rgb(248, 255, 174) 100%);
}

#moving-shapes {
    @apply absolute top-0 left-0 h-full w-full z-0;
}

#moving-shapes {
    * {
        @apply opacity-0 block absolute list-none bg-white;
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

.blur {
    transition: opacity .2s ease;
    -webkit-backdrop-filter: blur(100px);
    backdrop-filter: blur(100px);
}
</style>
