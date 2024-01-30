<template>
    <div class="flex flex-col items-center h-fit w-full gap-12 pb-12">

        <!-- Hero Banner -->
        <section class="h-screen w-full bg-main relative">
            <!-- links -->
            <div class="absolute flex gap-5 top-0 w-full justify-end px-8 pt-5">
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
            <div class="flex flex-col">

            </div>

            <!-- tech stack -->
            <div class="flex flex-col gap-10">
                <h2 class="text-5xl font-bold">Tech Stacks</h2>
                <div class="flex flex-wrap">
                    <LanguageCard v-for="tech in stacks" :text="tech.name" :key="tech.name"
                        :image="() => require(`@/assets/languages/${tech.img}`)" />
                </div>

            </div>

            <!-- contact -->
            <div class="flex flex-col items-center justify-center">

                <div class="text-5xl my-32 relative">
                    contact me
                    <!-- animate-[maddness_2s_ease-in-out_infinite] -->
                    <!-- <div
                        v-for="(mad) in maddness"
                        :key="mad.text"
                        :class="[`absolute text-base`, mad.position]">
                        {{ mad.text }}</div> -->
                    <div
                        :class="[`absolute text-base animate-[maddness_3s_ease-in-out_infinite] whitespace-nowrap`, maddness[maddnessStep].position]">
                        {{ maddness[maddnessStep].text }}
                    </div>

                </div>

            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import CustomButton from '@/components/utils/CustomButton.vue'
import LanguageCard from '@/components/LanguageCard.vue'
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
// tech stacks
// ======================================

const stacks = [
    {
        name: 'Vue',
        img: 'Vue.svg'
    },
    {
        name: 'MongoDB',
        img: 'Mongodb.svg'
    },
    {
        name: 'React',
        img: 'React.svg'
    },
    {
        name: 'Tailwind',
        img: 'Tailwind.svg'
    },
    {
        name: 'TypeScript',
        img: 'Typescript.svg'
    },
    {
        name: 'Ionic',
        img: 'Ionic.svg'
    },
    {
        name: 'Html',
        img: 'Html.svg'
    },
    {
        name: 'Ruby',
        img: 'Ruby.svg'
    },
    {
        name: 'Figma',
        img: 'Figma.svg'
    },
    {
        name: 'AWS',
        img: 'AWS.svg'
    },
    {
        name: 'Sass',
        img: 'Sass.svg'
    },
    {
        name: 'Python',
        img: 'Python.svg'
    },
    {
        name: 'JavaScript',
        img: 'Javascript.svg'
    },
    {
        name: 'Express',
        img: 'Express.svg'
    },
    {
        name: 'Cordova',
        img: 'Cordova.svg'
    },
]

// ======================================
// contact maddness
// ======================================

const maddness = [
    {
        text: 'Click me',
        position: 'right-[-50px] top-[-40px]'
    },
    {
        text: 'Do it',
        position: 'left-[-50px] top-[60px]'
    },
    {
        text: 'You know you want to',
        position: 'right-[-50px] bottom-[-50px]'
    },
    {
        text: `You're going to click it arn't you`,
        position: 'right-[-0px] bottom-[-80px]'
    },
    {
        text: 'Whats the worst that can happen',
        position: 'left-[-60px] top-[-40px]'
    }
]

const maddnessStep = ref(0)



onMounted(() => {
    setInterval(() => {
        // if (maddnessStep.value <= (maddness.length - 1)) {
        //     maddnessStep.value += 1
        // } else[
        //     maddnessStep.value = 0
        // ]

        let generatedNumber = Math.floor(Math.random() * 5)
        console.error(generatedNumber)

        while (generatedNumber === maddnessStep.value) {
            generatedNumber = Math.floor(Math.random() * 5)
        }
        maddnessStep.value = generatedNumber


    }, 3000)
})

</script>

<style lang="scss">
.test {
    background: linear-gradient(180deg, rgb(67, 198, 172) 0%, rgb(248, 255, 174) 100%);
}
</style>
