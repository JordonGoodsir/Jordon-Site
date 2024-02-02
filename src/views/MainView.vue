<template>
    <div :class="['flex flex-col items-center h-fit w-full gap-12 pb-12', { 'overflow-hidden h-screen': activeProject }]">
        <!-- links -->
        <div class="sticky top-0 z-30 w-full h-0">
            <div
                :class="['flex justify-between px-8 py-5 relative items-center transition-colors', { 'bg-main': scrolledPastHeader }]">
                <img src="@/assets/logo.png" class="scale-75">
                <div class="flex gap-2">
                    <CustomButton class="font-semibold" @click="openEmail">Contact</CustomButton>
                    <CustomButton @click="openLink('https://github.com/JordonGoodsir')"> <i
                            class="uil uil-github text-2xl" />
                    </CustomButton>
                    <CustomButton @click="openLink('https://www.linkedin.com/in/jordon-goodsir-61466a1a5/')"> <i
                            class="uil uil-linkedin text-2xl" />
                    </CustomButton>
                </div>
            </div>
        </div>

        <!-- Hero Banner -->
        <section id="hero-banner" class="h-screen w-full bg-main relative -mt-12 z-20">
            <!-- moving shapes -->
            <ul id="moving-shapes" class="overflow-hidden relative" />

            <!-- hero text -->
            <div class="flex items-center justify-center h-full w-full">
                <h1 id="hero-text"
                    class="text-5xl sm:text-8xl md:text-9xl font-bold test text-transparent bg-clip-text text-center whitespace-pre-line">
                    {{ activeHeroText }}
                    <transition enter-active-class="duration-300 ease-out" enter-from-class="transform opacity-0"
                        enter-to-class="opacity-100" leave-active-class="duration-200 ease-in"
                        leave-from-class="opacity-100" leave-to-class="transform opacity-0">
                        <span
                            :class="['font-bold test text-transparent bg-clip-text animate-[flashingType_0.500s_ease-in-out_infinite] -ml-1 text-[35px] sm:text-[83px] md:text-[115px] transition-all duration-700', { '!text-[0px]': activeHeroText === heroText }]">
                            |
                        </span>
                    </transition>

                </h1>
            </div>
            <i @click="scrollToId('body')"
                class="uil uil-angle-down text-6xl bottom-5 absolute text-white left-1/2 -translate-x-1/2 cursor-pointer" />
        </section>

        <!-- body -->
        <div class="max-w-screen-xl px-8 w-full gap-12 flex flex-col -mt-12 pt-12 relative">
            <div id="body" class="absolute -top-[82px]" />
            <!-- projects -->
            <div class="flex flex-col gap-5">
                <h2 class="text-4xl font-bold">Professional Projects</h2>

                <div class="flex flex-wrap">
                    <ProjectCard @click="() => activeProject = project.name as ProProject" v-for="project in projects"
                        :text="project.name" :description="project.description"
                        :image="() => require(`@/assets/projects/${project.image}`)" :key="project.name" />
                </div>
            </div>

            <!-- tech stack -->
            <div class="flex flex-col gap-5">
                <h2 class="text-4xl font-bold">Tech Stacks</h2>
                <div class="flex flex-wrap">
                    <LanguageCard @click="openLink(tech.link)" v-for="tech in stacks" :text="tech.name" :key="tech.name"
                        :image="() => require(`@/assets/languages/${tech.img}`)" />
                </div>

            </div>

            <!-- contact -->
            <div class="flex flex-col items-center mt-28 text-center w-full">
                <h2 class="text-4xl font-bold text-center">Project need building?</h2>
                <div class="flex flex-col items-center justify-center w-full">
                    <MaddnessButton text="Talk to me" @click="openEmail" href="mailto:jordon.goodsir1@gmail.com" />
                </div>
            </div>

        </div>
    </div>
    <transition name="slide">
        <div class="flex flex-col items-center w-full h-full gap-12 pb-12 fixed top-0 z-50 min-h-full w-full bg-white gap-12 pb-12 overflow-y-auto overflow-x-hidden"
            v-if="activeProject">

            <!-- nav -->
            <div class="h-[62px] flex items-center w-full px-8 gap-5 shadow sticky top-0 bg-white">
                <div class="h-[62px] flex gap-5 items-center">
                    <i class="uil uil-arrow-left text-3xl" @click="() => activeProject = undefined" />
                    <h4 class="text-lg font-semibold">{{ activeProject }}</h4>
                </div>
            </div>

            <div class="max-w-screen-xl px-8 w-full gap-16 flex flex-col">
                <ProjectHeader :heading="projectPages[activeProject].heading"
                    :description="projectPages[activeProject].description" :skills="projectPages[activeProject].skills"
                    :stack="projectPages[activeProject].stack" :live-site="projectPages[activeProject].liveSite" />
                <template v-if="activeProject === ProProject.AlwaysHere">

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <img src="@/assets/ProjectImages/Together/icons.png" />

                        <div class="flex flex-col justify-center gap-5">
                            <h3 class="text-3xl font-bold">How it started</h3>
                            <p>After completing a bootcamp at CoderAcademy, I was setup with a slew of interviews. However
                                by far the best interview was at Always here, a technical test that I flew through and the
                                best interviewers bringing forward amazing energy. Not only this, the company was founded on
                                the basis to help families mental health post Covid-19, one couldent ask for a better cause.
                            </p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-5">

                        <div class="order-2 md:order-1 flex flex-col justify-center gap-5">
                            <h3 class="text-3xl font-bold">My Approach</h3>
                            <p>Being completely new to the workforce and to coding, aside form my bootcamp, I saw only one
                                approach, learn. Myself along with 2 other interns embarked on hours of trial and error,
                                thrown throughly in the deep end, learning from our mentors as best we could. Although
                                imposter syndrome may have kicked in a few times in those early days, I feel as though it
                                only made me stronger and better developer.</p>
                        </div>



                        <img class="h-auto order-1 md:order-2" src="@/assets/ProjectImages/Together/onboarding.png" />

                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="flex h-96 justify-center">
                            <img class="rotate-12" src="@/assets/ProjectImages/Together/chat.png" />
                            <img class="rotate-12 -ml-5" src="@/assets/ProjectImages/Together/companionChat.png" />
                        </div>

                        <div class="flex flex-col justify-center gap-5">
                            <h3 class="text-3xl font-bold">Learning Experiences</h3>
                            <p>I learned a alot at my time with the Always Here team not only techically, but how to truly
                                colaborate as a team.
                                <br>
                                <br>
                                Techinically speaking, some of the things I learned include a completely new stack, the
                                importance of building reuasable components and
                                How to develop on IOS/Android and all the annoying nuances
                                that came with them (like having your app rejected from the store over one word).
                                <br>
                                <br>

                                More broadly I learned to be even more curious about how things work and to ask questions in
                                bulk, doing the things you can do and saving up a few questions for when someones free. Oh
                                and I also learned that having a office dog is amazing (miss you axe).
                            </p>
                        </div>
                    </div>

                </template>

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
    </transition>
</template>

<script setup lang="ts">
import CustomButton from '@/components/utils/CustomButton.vue'
import LanguageCard from '@/components/LanguageCard.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { onMounted, ref } from 'vue';
import MaddnessButton from '@/components/utils/MaddnessButton.vue';
import ProjectHeader from '@/components/project/ProjectHeader.vue'
import ProjectOutcome from '@/components/project/ProjectOutcome.vue'
import { openLink } from '@/utils/globals'


// ======================================
// Project Pages
// ======================================

// eslint-disable-next-line no-unused-vars
enum ProProject {
    // eslint-disable-next-line no-unused-vars
    AlwaysHere = 'Always Here',
    // eslint-disable-next-line no-unused-vars
    SimConverse = 'SimConverse',
    // eslint-disable-next-line no-unused-vars
    Phoenix = 'Phoenix'
}

const activeProject = ref<ProProject | undefined>(ProProject.AlwaysHere)


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

// ======================================
// Scroll
// ======================================

onMounted(() => {
    window.addEventListener("scroll", function () {
        const heroBanner = document.getElementById("hero-banner");
        if (heroBanner && window.scrollY > (heroBanner.offsetTop + heroBanner.offsetHeight) - 50) {
            scrolledPastHeader.value = true
        } else {
            scrolledPastHeader.value = false
        }
    });

})

const scrolledPastHeader = ref(false)


// ======================================
// Contact
// ======================================

const openEmail = () => {
    window.open('mailto:jordon.goodsir1@gmail.com')
}

const scrollToId = (id: string) => {
    const element = document.getElementById(id)

    if (element) {
        element.scrollIntoView({ behavior: "smooth" })
    }
}


// ======================================
// hero banner
// ======================================

const heroText = 'A Software \n Deloper'
const activeHeroText = ref('')

onMounted(() => {
    // trigger innterhtml anim

    const heroTextElement = document.getElementById('hero-text')

    if (heroTextElement) {
        heroText.split('').forEach((letter, letterIndex) => {
            setTimeout(() => {
                activeHeroText.value = activeHeroText.value += letter
            }, 150 * letterIndex)
        })
    }
})

// ======================================
// moving shapes
// ======================================
const spawnDots = (amount: number): void => {
    const dots = document.getElementById('moving-shapes')

    for (let i = 0; i <= amount; i++) {
        const size = Math.floor(Math.random() * 3) + 1

        const newDot = document.createElement('li')
        newDot.style.width = `${size}rem`
        newDot.style.height = `${size}rem`
        newDot.style.bottom = `-${size}rem`
        newDot.style.bottom = `-${size}rem`
        newDot.style.left = `${Math.floor(Math.random() * 100)}%`
        newDot.style.animationDuration = `${Math.floor(Math.random() * 10) + 10}s`
        newDot.style.animationDelay = `${Math.floor(Math.random() * 3) + 0.2}s`
        if (dots != null) {
            dots.appendChild(newDot)
        }
    }
}

const timer = (time: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, time)
    })
}

onMounted(async () => {
    const maxSpawn: number = 5
    let timesSpawned: number = 0

    while (maxSpawn !== timesSpawned) {
        await timer(2000)
        timesSpawned += 1
        spawnDots(Math.floor(Math.random() * 5))
    }


})

// ======================================
// Projects
// ======================================

const projects = [
    {
        name: 'Always Here',
        description: 'Addressing Childrens Mental Health with a Companion',
        image: 'together.png'
    },
    {
        name: 'Phoenix',
        description: 'An AI chatbot builder design for none technical users',
        image: 'phoenix.png'
    },
    {
        name: 'SimConverse',
        description: 'Training Health Professionals Communication Skills with AI',
        image: 'SimConverse.png'
    }
]

// ======================================
// tech stacks
// ======================================

const stacks = [
    {
        name: 'Vue',
        img: 'Vue.svg',
        link: 'https://vuejs.org/'
    },
    {
        name: 'MongoDB',
        img: 'Mongodb.svg',
        link: 'https://www.mongodb.com/'

    },
    {
        name: 'React',
        img: 'React.svg',
        link: 'https://react.dev/'
    },
    {
        name: 'Tailwind',
        img: 'Tailwind.svg',
        link: 'https://tailwindcss.com/'

    },
    {
        name: 'TypeScript',
        img: 'Typescript.svg',
        link: 'https://www.typescriptlang.org/'

    },
    {
        name: 'Ionic',
        img: 'Ionic.svg',
        link: 'https://ionicframework.com/'

    },
    {
        name: 'Html',
        img: 'Html.svg',
        link: 'https://www.w3schools.com/html/'

    },
    {
        name: 'Ruby',
        img: 'Ruby.svg',
        link: 'https://www.ruby-lang.org/en/'

    },
    {
        name: 'Figma',
        img: 'Figma.svg',
        link: 'https://www.figma.com/design/'

    },
    {
        name: 'AWS',
        img: 'AWS.svg',
        link: 'https://aws.amazon.com/'

    },
    {
        name: 'Sass',
        img: 'Sass.svg',
        link: 'https://sass-lang.com/'

    },
    {
        name: 'Python',
        img: 'Python.svg',
        link: 'https://www.python.org/'

    },
    {
        name: 'JavaScript',
        img: 'Javascript.svg',
        link: 'https://en.wikipedia.org/wiki/JavaScript'

    },
    {
        name: 'Express',
        img: 'Express.svg',
        link: 'https://expressjs.com/'

    },
    {
        name: 'Cordova',
        img: 'Cordova.svg',
        link: 'https://cordova.apache.org/'

    },
]

</script>

<style lang="scss">
.test {
    background: linear-gradient(180deg, rgb(67, 198, 172) 0%, rgb(248, 255, 174) 100%);
}

#moving-shapes {
    @apply absolute top-0 left-0 h-full w-full z-0;
}

#moving-shapes {
    * {
        @apply opacity-0 block absolute list-none bg-white z-30;
        animation: float infinite;
        transition-timing-function: linear;
        clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    }
}

@keyframes float {
    0% {
        transform: translateY(0px);
        @apply opacity-50;
    }

    80% {
        transform: translateY(-100vh) rotate(630deg);
        @apply opacity-0;
    }
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(200%)
}
</style>
