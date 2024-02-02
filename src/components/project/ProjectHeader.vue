<template>
    <div class="grid md:grid-cols-2 gap-8">

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
        </div>


    </div>
</template>

<script setup lang="ts">

import { defineProps } from 'vue'

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