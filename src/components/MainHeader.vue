<template>
    <div class="sticky top-0 z-30 w-full h-0">
        <!-- { 'bg-main': scrolledPastHeader } -->
        <div :class="['flex justify-between px-8 py-5 relative items-center transition-colors', headerColor]">
            <img src="@/assets/logo.png" class="scale-75">
            <div class="flex gap-2">
                <CustomButton class="font-semibold" @click="openEmail">Contact</CustomButton>
                <CustomButton @click="openLink('https://github.com/JordonGoodsir')"> <i class="uil uil-github text-2xl" />
                </CustomButton>
                <CustomButton
                    @click="openLink('https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile')">
                    <i class="uil uil-linkedin text-2xl" />
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