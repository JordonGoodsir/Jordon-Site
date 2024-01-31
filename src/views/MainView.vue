<template>
    <div class="flex flex-col items-center h-fit w-full gap-12 pb-12">

        <!-- Hero Banner -->
        <section class="h-screen w-full bg-main relative">
            <!-- links -->
            <div class="absolute flex gap-2 top-0 w-full justify-end px-8 pt-5">
                <CustomButton class="font-semibold">Contact</CustomButton>
                <CustomButton> <i class="uil uil-github text-2xl" />
                </CustomButton>
                <CustomButton> <i class="uil uil-linkedin text-2xl" />
                </CustomButton>
            </div>

            <!-- hero text -->
            <div class="flex items-center justify-center h-full w-full">
                <h1 id="hero-text"
                    class="text-5xl sm:text-8xl md:text-9xl font-bold test text-transparent bg-clip-text text-center whitespace-pre-line">
                    {{ activeHeroText }}
                    <transition enter-active-class="duration-300 ease-out" enter-from-class="transform opacity-0"
                        enter-to-class="opacity-100" leave-active-class="duration-200 ease-in"
                        leave-from-class="opacity-100" leave-to-class="transform opacity-0">
                        <span v-if="activeHeroText !== heroText"
                            class="font-bold test text-transparent bg-clip-text animate-[flashingType_0.500s_ease-in-out_infinite] -ml-1 text-5xl md:text-9xl">
                            |
                        </span>
                    </transition>

                </h1>
            </div>
        </section>

        <!-- body -->
        <div class="max-w-screen-xl px-8 w-full gap-12 flex flex-col">
            <!-- projects -->
            <div class="flex flex-wrap">
                <ProjectCard v-for="project in projects" :text="project.name" :description="project.description"
                    :image="() => require(`@/assets/projects/${project.image}`)" :key="project.name" />


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

                    <div class=" mb-28 mt-20 relative rounded-full bg-[#43C6AC] px-10 py-6 max-w-sm w-full cursor-pointer">
                        <h2 class="text-4xl text-white font-semibold">Talk to me</h2>
                        <div
                            :class="[`absolute font-semibold text-base animate-[maddness_3.5s_ease-in-out_infinite] whitespace-nowrap`, maddness[maddnessStep].position]">
                            {{ maddness[maddnessStep].text }}
                        </div>

                    </div>

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

// ======================================
// contact maddness
// ======================================

const maddness = [
    {
        text: 'Click me',
        position: 'right-[-25px] top-[-40px]'
    },
    {
        text: 'Do it',
        position: 'left-[-25px] top-[90px]'
    },
    {
        text: 'You know you want to',
        position: 'right-[-25px] bottom-[-50px]'
    },
    {
        text: `You're going to click it arn't you`,
        position: 'right-[-0px] bottom-[-80px]'
    },
    {
        text: 'Whats the worst that can happen',
        position: 'left-[-35px] top-[-40px]'
    }
]

const maddnessStep = ref(0)

onMounted(() => {
    setInterval(() => {

        let generatedNumber = Math.floor(Math.random() * 5)

        while (generatedNumber === maddnessStep.value) {
            generatedNumber = Math.floor(Math.random() * 5)
        }
        maddnessStep.value = generatedNumber

    }, 3500)
})

</script>

<style lang="scss">
.test {
    background: linear-gradient(180deg, rgb(67, 198, 172) 0%, rgb(248, 255, 174) 100%);
}
</style>
