<template>
    <div class="flex flex-col items-center w-full h-full gap-12 pb-12 fixed top-0 z-50 min-h-full w-full bg-white gap-12 pb-12 overflow-y-auto overflow-x-hidden"
        v-if="activeProject">

        <!-- nav -->
        <!-- to split out to component -->
        <div class="h-[62px] flex items-center w-full px-8 gap-5 shadow sticky top-0 bg-white z-50">
            <div class="h-[62px] flex gap-5 items-center">
                <unicon name="arrow-left" height="30" width="30" @click="() => $emit('close')" class="cursor-pointer" />
                <h4 class="text-lg font-semibold">{{ activeProject }}</h4>
            </div>
        </div>

        <div class="max-w-screen-xl px-8 w-full gap-16 flex flex-col">
            <ProjectHeader :heading="projectPages[activeProject].heading"
                :description="projectPages[activeProject].description" :skills="projectPages[activeProject].skills"
                :stack="projectPages[activeProject].stack" :live-site="projectPages[activeProject].liveSite" />


            <AlwaysHere v-if="activeProject === ProProject.AlwaysHere" />
            <PhoenixApp v-if="activeProject === ProProject.Phoenix" />
            <SimConverse v-if="activeProject === ProProject.SimConverse" />

            <ProjectOutcome :years="projectPages[activeProject].years" :status="projectPages[activeProject].status"
                :summary="projectPages[activeProject].summary" />

            <MaddnessButton />

        </div>
    </div>
</template>

<script lang="ts">

export enum ProProject {
    // eslint-disable-next-line no-unused-vars
    AlwaysHere = 'Always Here',
    // eslint-disable-next-line no-unused-vars
    SimConverse = 'SimConverse',
    // eslint-disable-next-line no-unused-vars
    Phoenix = 'Phoenix'
}
</script>

<script setup lang="ts">
import { PropType, defineProps } from 'vue'
import ProjectHeader from './ProjectHeader.vue';
import ProjectOutcome from './ProjectOutcome.vue';
import AlwaysHere from '@/components/project/project-boides/AlwaysHere.vue';
import PhoenixApp from '@/components/project/project-boides/PhoenixApp.vue';
import SimConverse from '@/components/project/project-boides/SimConverse.vue';
import MaddnessButton from '@/components/utils/MaddnessButton.vue';

defineProps(
    {
        activeProject: {
            type: String as PropType<ProProject | undefined>,
            default: undefined
        },
    }
)

// ======================================
// Project Pages
// ======================================

type Project = {
    // eslint-disable-next-line no-unused-vars
    [key in ProProject]: {
        years: string,
        status: string,
        summary: string,
        heading: string,
        description: string,
        stack: string[],
        skills: string[]
        liveSite: string
    }
}

const projectPages: Project = {
    [ProProject.AlwaysHere]: {
        years: '2+ Years',
        status: 'Paused',
        summary: `Always Here faced many obstacles, ultimately leading to its pause. However one feature of the app 'LiveChat Counseling' a chat service between trained psychologists and children, sparked interest in the investors abroad and has potential. Working on Always Here was the best introduction to the workforce anyone could ask for, meeting life long friends and learning a hell of a lot, leaving me only wanting to learn more.`,
        heading: `A New Approach to Children's Mental Health`,
        description: 'Mental health and wellbeing app for families',
        stack: ['Vue', 'Ionic', 'Capacitor', 'Css', 'Scss', 'TypeScript', 'PWA', 'Express', 'MongoDB', 'AWS'],
        skills: ['Teamwork', 'Communication', 'Web Development', 'App Development (IOS/Android)'],
        liveSite: 'https://www.alwayshere.io/'
    },
    [ProProject.Phoenix]: {
        years: '2+ Years',
        status: 'Canceled',
        summary: 'Although Phoenix met its demise at the hands of funding, I thoroughly enjoyed the process of making it. It taught to always look for new tools that can help optimize in development and to be excited for what comes next. One thing to keep in mind though, you never know what can happen, I mean, this tool was named Phoenix for a reason.',
        heading: 'An AI chatbot builder design for none technical users',
        description: 'An internal tool that rose from the ashes for Always Here',
        stack: ['Vue', 'PWA', 'Css', 'Scss', 'TypeScript', 'PWA', 'Express', 'MongoDB', 'AWS', 'Tailwind Css'],
        skills: ['Teamwork', 'Communication', 'Web Development', 'Feature Management'],
        liveSite: ''
    },
    [ProProject.SimConverse]: {
        years: '1+ Year',
        status: 'Ongoing',
        summary: 'Although my journey at SimConverse was cut short due to management reconstruction taking out an entire team. My time at SimConverse was definitely worthwhile, allowing me to put to use my skills, learn more about the fundamentals of programming and spark more interest in new innovations',
        heading: 'Training Health Professionals Communication Skills with AI',
        description: 'A training platform for medical students',
        stack: ['Vue', 'Css', 'Scss', 'TypeScript', 'Rust', 'AWS', 'Tailwind', 'Aframe'],
        skills: ['Web Development', 'Teamwork', 'Communication'],
        liveSite: 'https://www.simconverse.com/'
    },
}


</script>