<template>
    <div class="flex flex-col w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2 group gap-y-1.5">
        <AppCard class="h-40 flex items-center justify-center group-hover:animate-[hover_4s_ease-in-out_infinite]">
            <img :src="image()" />
        </AppCard>
        <AppCard class="text-center h-10 flex items-center justify-center select-none cursor-pointer hover:bg-main hover:text-white transition-colors">
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
            default: () => {}
        }
    }
)
</script>