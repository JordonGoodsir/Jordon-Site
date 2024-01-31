<template>
    <div class="flex flex-col w-full md:w-1/2 p-2 group gap-y-1.5">
        <AppCard class="h-64 overflow-hidden flex items-center justify-center group-hover:animate-[hover_4s_ease-in-out_infinite]">
            <img :src="image()" />
        </AppCard>
        <AppCard class="flex items-center justify-between select-none cursor-pointer hover:bg-main hover:text-white transition-colors px-6 py-3">
            <div class="flex flex-col">
                <h4 class="text-3xl font-semibold">{{ text }}</h4>
                <p>{{ description }}</p>
            </div>
                
                <i class="uil uil-arrow-right ml-1 text-4xl" />
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
            default: () => {}
        }
    }
)
</script>