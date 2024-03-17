<template>
    <div class="sticky top-0 z-30 w-full h-0">
        <div :class="['flex justify-between px-8 py-5 relative items-center transition-colors', headerColor]">
            <img src="@/assets/logo.png" class="scale-50" alt="Jordon Goodsir's logo">
            <div class="flex gap-2">
                <CustomButton class="font-semibold" @click="openEmail">Contact</CustomButton>
                <CustomButton @click="openLink('https://github.com/JordonGoodsir')"> <unicon name="github" height="24" width="24" />
                </CustomButton>
                <CustomButton
                    @click="openLink('https://au.linkedin.com/in/jordon-goodsir-61466a1a5')">
                    <unicon name="linkedin" height="24" width="24" />
                </CustomButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { openLink, openEmail } from '@/utils/globals'
import CustomButton from '@/components/utils/CustomButton.vue'
import { defineProps } from 'vue';

defineProps(
    {
        headerColor: {
            type: String,
            default: ''
        },
    }
)


</script>