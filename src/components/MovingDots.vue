<template>
    <ul id="moving-shapes" class="overflow-hidden relative z-50" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { timer } from '@/utils/globals'


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

onMounted(async () => {
    const maxSpawn: number = 5
    let timesSpawned: number = 0

    while (maxSpawn !== timesSpawned) {
        await timer(2000)
        timesSpawned += 1
        spawnDots(Math.floor(Math.random() * 5))
    }
})
</script>

<style lang="scss">
#moving-shapes {
    @apply absolute top-0 left-0 h-full w-full z-20;
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
</style>