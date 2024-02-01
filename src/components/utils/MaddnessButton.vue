<template>
    <div class=" mb-28 mt-20 relative rounded-full bg-[#43C6AC] px-10 py-6 max-w-sm w-full cursor-pointer">
        <h2 class="text-4xl text-white font-semibold">{{ text }}</h2>
        <div
            :class="[`absolute font-semibold text-base animate-[maddness_3.5s_ease-in-out_infinite] whitespace-nowrap`, maddness[maddnessStep].position]">
            {{ maddness[maddnessStep].text }}
        </div>

    </div>
</template>

<script setup lang="ts">

import { ref, onMounted, defineProps } from 'vue'

// ======================================
// contact maddness
// ======================================

defineProps(
    {
        text: {
            type: String,
            default: ''
        },
    }
)

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