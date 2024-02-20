<template>
    <div class="flex flex-col w-full md:w-1/2 p-2 group gap-y-1.5 cursor-pointer">
        <AppCard
            class="h-64 overflow-hidden scroll-in flex items-center justify-center group-hover:animate-[hover_4s_ease-in-out_infinite]">
            <img class="object-cover h-full w-full" :src="image()" :alt="text" />
        </AppCard>
        <AppCard class="flex items-center justify-between select-none group gap-8 group-hover:bg-main group-hover:text-white topography duration-500 px-6 py-3">
            <div class="flex flex-col">
                <h2 class="text-3xl font-semibold">{{ text }}</h2>
                <p>{{ description }}</p>
            </div>
                <unicon name="arrow-right" class="ml-1 group-hover:fill-white" height="36" width="36" />
        </AppCard>
    </div>
</template>

<script setup lang="ts">
import AppCard from '@/components/utils/AppCard.vue'
import { defineProps } from 'vue';

defineProps(
    {
        text: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        image: {
            type: Function,
            default: () => { }
        }
    }
)
</script>

<style>
.topography {
    background: white;
    background-image: url('@/assets/topography.svg');
    background-repeat: repeat;
    @apply bg-[length:160px_160px]
}
</style>