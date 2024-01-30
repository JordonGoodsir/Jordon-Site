<template>
    <AppCard>
        ello
    </AppCard>
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
            type: String,
            default: ''
        }
    }
)
</script>