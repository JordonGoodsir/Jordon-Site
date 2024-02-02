<template>
    <div class="flex flex-col gap-5 w-full rounded bg-gray-50 p-8">

        <h6 class="text-3xl font-bold">Outcome</h6>

        <div class="flex gap-8 flex-wrap">
            <div class="flex flex-col">
                <p class="font-bold text-gray-500">Experience</p>
                <h4 class="font-bold text-5xl">{{ years }}</h4>
            </div>

            <div class="flex flex-col">
                <p class="font-bold text-gray-500">years</p>
                <h4 class="font-bold text-5xl">{{ status }}</h4>
            </div>
        </div>

        <div class="flex flex-col">
            <p class="font-bold text-gray-500">Summary</p>
            <p>{{ summary }}</p>
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
        years: {
            type: String,
            default: ''
        },
        status: {
            type: String,
            default: ''
        },
        summary: {
            type: String,
            default: ''
        },
    }
)


</script>