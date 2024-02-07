<template>
    <div class="flex flex-col items-center mt-28 text-center w-full">
        <h2 class="text-4xl font-bold text-center">Project need building?</h2>
        <div class="flex flex-col items-center justify-center w-full">
            <div class=" mb-28 mt-20 relative rounded-full bg-main px-10 py-6 max-w-sm w-full cursor-pointer topography-madness"
                @click="openEmail()">
                <h2 class="text-4xl text-white font-semibold">Talk to me</h2>
                <div
                    :class="[`absolute font-semibold text-base animate-[maddness_3.5s_ease-in-out_infinite] whitespace-nowrap`, maddness[maddnessStep].position]">
                    {{ maddness[maddnessStep].text }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue'
import { openEmail } from '@/utils/globals'

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
        position: 'left-[-20px] top-[-40px]'
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

<style scoped>
.topography-madness {
    background-image: url('@/assets/topography-animated.svg');
    background-repeat: repeat;
    @apply bg-[length:130px_130px] md:bg-[length:155px_155px]
}
</style>