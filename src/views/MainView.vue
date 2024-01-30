<template>
    <div class="flex flex-col itmes-center h-fit w-full gap-12">

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
                    class="text-9xl font-bold test text-transparent bg-clip-text text-center whitespace-pre-line">
                    {{ activeHeroText }}
                    <transition enter-active-class="duration-300 ease-out" enter-from-class="transform opacity-0"
                        enter-to-class="opacity-100" leave-active-class="duration-200 ease-in"
                        leave-from-class="opacity-100" leave-to-class="transform opacity-0">
                        <span v-if="activeHeroText !== heroText"
                            class="text-9xl font-bold test text-transparent bg-clip-text animate-[flashingType_0.500s_ease-in-out_infinite] -ml-1 text-[115px]">
                            |
                        </span>
                    </transition>

                </h1>
            </div>
        </section>

        <!-- body -->
        <div class="max-w-screen-xl px-8">
            <!-- projects -->
            <div class="flex flex-col">

            </div>

            <!-- tech stack -->
            <div class="flex flex-col">
                <LanguageCard :text="'hello'"/>

            </div>

            <!-- contact -->
            <div class="flex flex-col">

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

</script>

<style lang="scss">
.test {
    background: linear-gradient(180deg, rgb(67, 198, 172) 0%, rgb(248, 255, 174) 100%);
}
</style>
