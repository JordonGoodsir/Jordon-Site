<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div class="flex flex-col gap-5">
            <h1 class="font-bold text-6xl">{{ heading }}</h1>
            <p class="text-xl">{{ description }}</p>
        </div>

        <div class="flex flex-col gap-3 justify-center">
            <div class="flex flex-col gap-1">
                <p class="text-gray-500 text-sm">Skills:</p>
                <p class=" text-sm">{{ skills.join(', ') }}</p>
            </div>

            <div class="flex flex-col gap-1">
                <p class="text-gray-500 text-sm">Stack:</p>
                <p class=" text-sm">{{ stack.join(', ') }}</p>
            </div>

            <div v-if="liveSite" @click="() => openLink(liveSite)"
                class="rounded-full bg-main w-full py-5 flex items-center justify-center gap-2 text-white text-base mt-5">
                <p class="text-xl">Website</p>
                <i class="uil uil-external-link-alt text-lg" />
            </div>
        </div>



    </div>
</template>

<script setup lang="ts">

import { defineProps } from 'vue'
import { openLink } from '@/utils/globals'

// ======================================
// contact maddness
// ======================================

defineProps(
    {
        heading: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        stack: {
            type: Array,
            default: () => []
        },
        skills: {
            type: Array,
            default: () => []
        },
        liveSite: {
            type: String,
            default: ''
        }
    }
)


</script>