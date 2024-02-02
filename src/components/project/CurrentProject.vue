<template>
    <div class="flex flex-col items-center w-full h-full gap-12 pb-12 fixed top-0 z-50 min-h-full w-full bg-white gap-12 pb-12 overflow-y-auto overflow-x-hidden"
        v-if="activeProject">

        <!-- nav -->
        <!-- to split out to component -->
        <div class="h-[62px] flex items-center w-full px-8 gap-5 shadow sticky top-0 bg-white z-50">
            <div class="h-[62px] flex gap-5 items-center">
                <i class="uil uil-arrow-left text-3xl" @click="() => $emit('close')" />
                <h4 class="text-lg font-semibold">{{ activeProject }}</h4>
            </div>
        </div>

        <div class="max-w-screen-xl px-8 w-full gap-16 flex flex-col">
            <ProjectHeader :heading="projectPages[activeProject].heading"
                :description="projectPages[activeProject].description" :skills="projectPages[activeProject].skills"
                :stack="projectPages[activeProject].stack" :live-site="projectPages[activeProject].liveSite" />


            <AlwaysHere v-if="activeProject === ProProject.AlwaysHere" />

            <div v-if="activeProject === ProProject.Phoenix">
                <!-- how it started -->
                <!-- approach -->
                <!-- learning experiences -->

            </div>

            <div v-if="activeProject === ProProject.SimConverse">
                <!-- how it started -->
                <!-- approach -->
                <!-- learning experiences -->

            </div>
            <ProjectOutcome :years="projectPages[activeProject].years" :status="projectPages[activeProject].status"
                :summary="projectPages[activeProject].summary" />

        </div>
    </div>
</template>

<script lang="ts">

// eslint-disable-next-line no-unused-vars
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
import AlwaysHere from '@/components/project/project-boides/AlwaysHere.vue'

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
        summary: `Always Here faced many obsicles, ultimately leading to its pause. However one feature of the app 'LiveChat Counseling' a chat service between trained psychologists and children, sparked intrest in the investors abroad and has potential. Working on Always Here was the best introduction to the workforce anyone could ask for, meeting life long friends and learning a hell of a lot, leaving me only wanting to learn more.`,
        heading: 'A New Approach to Childrens Mental Health',
        description: 'Mental health and wellbeing app for families',
        stack: ['Vue', 'Ionic', 'Capacitor', 'Css', 'Scss', 'TypeScript', 'PWA', 'Express', 'MongoDB', 'AWS'],
        skills: ['Teamwork', 'Communication', 'Web Development', 'App Developmnet (IOS/Android)'],
        liveSite: 'https://www.alwayshere.io/'
    },
    [ProProject.Phoenix]: {
        years: '2+ Years',
        status: 'Canceled',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget mollis est. Nunc in sollicitudin magna. Nullam ut luctus nisi. Vestibulum mauris risus, pretium non feugiat eget, placerat quis velit. Suspendisse mauris sem, efficitur ac sem blandit, varius tincidunt ante. Pellentesque mattis blandit hendrerit. Suspendisse efficitur eget diam ut fermentum. Vestibulum volutpat rutrum finibus. In at gravida metus, ut placerat ante. Sed condimentum arcu id ante dictum, et mattis justo sollicitudin. Duis efficitur justo vitae augue tincidunt, at iaculis mauris placerat. Etiam libero turpis, egestas non diam nec, ornare ultrices libero.',
        heading: 'An AI chatbot builder design for none technical users',
        description: 'An internal tool that rose from the ashes for always here',
        stack: ['Vue', 'Ionic', 'Capacitor', 'Css', 'Scss', 'TypeScript', 'PWA', 'Express', 'MongoDB', 'AWS', 'Tailwind Css'],
        skills: ['Teamwork', 'Communication', 'Web Development'],
        liveSite: 'https://www.alwayshere.io/'
    },
    [ProProject.SimConverse]: {
        years: '1+ Year',
        status: 'Ongoing',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget mollis est. Nunc in sollicitudin magna. Nullam ut luctus nisi. Vestibulum mauris risus, pretium non feugiat eget, placerat quis velit. Suspendisse mauris sem, efficitur ac sem blandit, varius tincidunt ante. Pellentesque mattis blandit hendrerit. Suspendisse efficitur eget diam ut fermentum. Vestibulum volutpat rutrum finibus. In at gravida metus, ut placerat ante. Sed condimentum arcu id ante dictum, et mattis justo sollicitudin. Duis efficitur justo vitae augue tincidunt, at iaculis mauris placerat. Etiam libero turpis, egestas non diam nec, ornare ultrices libero.',
        heading: 'Training Health Professionals Communication Skills with AI',
        description: 'A training platform for medical students',
        stack: ['Vue', 'Css', 'Scss', 'TypeScript', 'Rust', 'AWS'],
        skills: ['Web Development', 'Teamwork', 'Communication'],
        liveSite: 'https://www.alwayshere.io/'
    },
}


</script>