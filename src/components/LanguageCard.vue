<template>
    <div class="flex flex-col w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2 group gap-y-1.5 cursor-pointer">
        <AppCard class="h-40 flex items-center justify-center group-hover:animate-[hover_4s_ease-in-out_infinite] shadow">
            <img :src="image()" />
        </AppCard>
        <AppCard
            class="text-center h-10 flex items-center justify-center select-none group-hover:bg-main group-hover:text-white transition-colors shadow topography">
            {{ text }} <i class="uil uil-external-link-alt ml-1" />
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
    @apply bg-[length:155px_155px]
}
</style>