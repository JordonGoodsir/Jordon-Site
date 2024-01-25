<template>
  <PageWrapper>
    <!-- Page being re designed in figma -->
    <!-- more design progression + 2 -->
    <div class="flex flex-col w-full items-center">

      <div class="flex items-center justify-between bg-[#F0F9F] h-[300px] w-full border-b-2 border-black">
        <img src="@/assets/header-images/left-header-img.png" class="z-10" />
        <h1 class="text-4xl tracking-[8px] mb-10">Skills and Projects</h1>
        <img src="@/assets/header-images/right-header-img.png" class="z-10" />
      </div>
      <div class="max-w-[1127px]">
        <div class="overflow-scroll -mt-[80px] mb-10">
          <div class="flex overflow-scoll gap-5 w-full">
            <div v-for="(skill, index) in reversedSkills" :key="index" v-tooltip="skill.name"
              class="h-[250px] min-w-[150px] w-[150px] gap-5 rounded-md items-center justify-center flex"
              :style="{ background: skill.color }">
              <div class="flex flex-col items-center">
                <img :src="skill.icon" :class="['h-10 w-10 select-none']" />
              </div>
            </div>
          </div>
        </div>

        <div class="relative mb-10 w-fit">
          <h3 class="text-3xl">Projects</h3>
          <div class="h-px w-3/4 -right-1/4 absolute bottom-[-5px] bg-black" />
        </div>
        <div class="flex flex-col items-center justify-center mb-20 gap-10">
          <div class="flex w-full gap-20 items-center" v-for="project in projects" :key="project.img()">
            <img :src="project.img()" class="h-[250px] w-[500px] bg-gray-500 object-fill" />

            <div class="flex flex-col">
              <h3 class="text-2xl">{{ project.title }}</h3>
              <br>
              <p class="w-[34rem]">{{ project.description }}</p>
              <div class="flex justify-end w-full gap-5 mt-5">
                <div class="border border-2 border-black w-fit items-center justify-center flex px-3 py-2"
                  v-if="project?.siteLink">
                  <i class="uil uil-window text-xl" />
                </div>
                <div class="border border-2 border-black w-fit items-center justify-center flex px-3 py-2"
                  v-if="project?.gitHubLink">
                  <i class="uil uil-github text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="w-full flex flex-col px-14 pt-10 gap-10 mb-10">
                <h2 class="text-highlight bg-main px-10 text-center rounded-md">-Projects-</h2>

                <div class="flex flex-wrap w-full justify-center gap-10">
                    <div class="overflow-hidden flex flex-col project relative" v-for="project in projects.normalProjects"
                        :key="project.img()">
                        <img class="h-[250px] w-[450px] object-fill" :src="project.img()">
                        <div
                            class=" z-10 links bg-white opacity-40 absolute inset-0  h-[250px] w-[450px] hidden flex items-center justify-center">
                        </div>
                        <div
                            class="z-20 flex links absolute gap-5 inset-0 h-[250px] w-[450px] hidden flex items-center justify-center">
                            <div @click="routeAway(project.gitHubLink)"
                                class="rounded-full bg-white h-14 w-14 hover:bg-highlight flex items-center justify-center">
                                <img class="h-10 w-10" src="@/assets/icons/github.svg">
                            </div>
                            <div v-if="project.siteLink" @click="routeAway(project.siteLink)"
                                class="rounded-full bg-white h-14 w-14 hover:bg-highlight flex items-center justify-center">
                                <img class="h-10 w-10" src="@/assets/icons/live.svg">
                            </div>
                        </div>
                        <div class="bg-main text-white description-box h-0 p-0 w-[450px] overflow-hidden">
                            <h3 class="mb-2 text-lg">{{ project.title }}</h3>
                            <p class="mb-3">{{ project.description }}</p>

                            <h3 class="mb-2 text-lg">Tech Stack</h3>
                            <div class="flex gap-2">
                                <img v-for="(tech, index) in project.techStack" :key="index" :src="getSvg(tech)"
                                    class="h-8 w-8">
                            </div>
                        </div>
                    </div>
                </div>

                <h2 class="text-highlight bg-main rounded-md px-10 text-center">-2 Day Challenge Projects-</h2>

                <div class="flex flex-wrap w-full justify-center gap-10">

                    <div class="overflow-hidden flex flex-col project relative" @mouseover="() => hoverProject()"
                        v-for="project in projects.challengeProjects" :key="project.img()">
                        <img class="h-[250px] w-[450px] object-fill" :src="project.img()">
                        <div
                            class=" z-10 links bg-white opacity-40 absolute inset-0  h-[250px] w-[450px] hidden flex items-center justify-center">
                        </div>
                        <div
                            class="z-20 flex links absolute gap-5 inset-0 h-[250px] w-[450px] hidden flex items-center justify-center">
                            <div @click="routeAway(project.gitHubLink)"
                                class="rounded-full bg-white hover:bg-highlight h-14 w-14 flex items-center justify-center">
                                <img class="h-10 w-10" src="@/assets/icons/github.svg">
                            </div>
                            <div v-if="project.siteLink" @click="routeAway(project.siteLink)"
                                class="rounded-full bg-white hover:bg-highlight h-14 w-14 flex items-center justify-center">
                                <img class="h-10 w-10" src="@/assets/icons/live.svg">
                            </div>
                        </div>
                        <div class="bg-main text-white description-box h-0 p-0 w-[450px] overflow-hidden">
                            <h3 class="mb-2 text-lg">{{ project.title }}</h3>
                            <p class="mb-3">{{ project.description }}</p>

                            <h3 class="mb-2 text-lg">Tech Stack</h3>
                            <div class="flex gap-2">
                                <img v-for="(tech, index) in project.techStack" :key="index" :src="getSvg(tech)"
                                    class="h-8 w-8">
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">

import { reactive } from 'vue'
import PageWrapper from '@/components/PageWrapper.vue'

const getSvg = (name: string): string => {
  return require(`@/assets/language-logos/${name}.svg`)
}

const triangleSkills = reactive([
  {
    icon: getSvg('express'),
    color: 'black',
    name: 'Express'
  },
  {
    icon: getSvg('ts'),
    color: '#007ACB',
    name: 'TypeScript'
  },
  {
    icon: getSvg('tailwind'),
    color: '#06b6d4',
    name: 'Tailwindcss'
  },
  {
    icon: getSvg('css'),
    color: '#2096F3',
    name: 'CSS'
  },
  {
    icon: getSvg('ruby'),
    color: '#DC160A',
    name: 'Ruby'
  },
  {
    icon: getSvg('docker'),
    color: '#2396ED',
    name: 'Docker'
  },
  {
    icon: getSvg('ionic'),
    color: '#367BF8',
    name: 'Ionic'
  },
  {
    icon: getSvg('vue'),
    color: '#42B882',
    name: 'Vue'
  },
  {
    icon: getSvg('react'),
    color: '#61DAFB',
    name: 'React'
  },
  {
    icon: getSvg('rust'),
    color: '#7C552C',
    name: 'Rust'
  },
  {
    icon: getSvg('nodeJS'),
    color: '#7fc828',
    name: 'NodeJS'
  },
  {
    icon: getSvg('js'),
    color: '#F1DC4E',
    name: 'JavaScript'
  },
  {
    icon: getSvg('html'),
    color: '#FF5622',
    name: 'HTML'
  },
  {
    icon: getSvg('postman'),
    color: '#F66A33',
    name: 'Postman'
  },
  {
    icon: getSvg('sass'),
    color: '#C76395',
    name: 'SASS'
  },
  {
    icon: getSvg('aws'),
    color: '#FF9900',
    name: 'AWS'
  },
  {
    icon: getSvg('mongoDB'),
    color: '#00ED64',
    name: 'MongoDb'
  }
])

const reversedSkills = triangleSkills.reverse()

const projects = reactive([
  {
    img: () => require('@/assets/projects/connectFour.png'),
    title: 'Connect Four',
    gitHubLink: 'https://github.com/JordonGoodsir/Connect-Four-Terminal-app',
    techStack: ['ruby'],
    description: 'My first project ever programing project, accidently picking the most difficult idea of the cohort. This being inspired by my days at univerity, playing connect 4 with a random person next to me trying to survive a mandatory 3 hour lecture.'
  },
  {
    img: () => require('@/assets/projects/legacySite.png'),
    title: 'My First Portfolio site',
    siteLink: 'https://jordongoodsir.netlify.app/portfolio.html',
    gitHubLink: 'https://github.com/JordonGoodsir/my_site',
    techStack: ['html', 'css', 'sass', 'js'],
    description: 'My first portfolio site, a month into leaning to program. I learned a great many things in making this, hover the standouts were css transitions, animations and the wonder of flexbox and grid.'
  },
  {
    img: () => require('@/assets/projects/entertain.png'),
    title: 'Quarentine Entertainment',
    siteLink: 'https://quarantine-entertainment.netlify.app/index.html',
    gitHubLink: 'https://github.com/JordonGoodsir/Hackathon',
    techStack: ['html', 'css', 'sass', 'js'],
    description: 'A 2 person, 2 day project for CoderAcademy. A site made in the height of covid to ease the lockdown bordem. This concept gave us a great amount of freedom in what we made, making varous random activities. did you beat the box game? or generate enough power to fuel the menu screen?'
  },
  {
    img: () => require('@/assets/projects/monsterMashUp.png'),
    title: 'Monster Mash Up',
    siteLink: 'https://monster-mash-05c26b5af67b.herokuapp.com/',
    gitHubLink: 'https://github.com/JordonGoodsir/monsterMash',
    techStack: ['html', 'css', 'sass', 'js', 'mongoDB', 'express'],
    description: 'A 2 person, 2 day project for CoderAcademy. A site to make your very own Frankenstein\'s monster and take them on a journey'
  }
]
)

// const routeAway = (site: string): void => {
//   window.open(site)
// }

</script>

<style lang="scss">
.icon {
  width: 50px;
  height: 50px;
}

use {
  width: 50px;
  height: 50px;
}

.triangle {
  @apply h-52 w-52 flex items-center justify-center -mx-10;
}

.triangle-down {
  clip-path: polygon(1% 2%, 98% 2%, 49% 99%);
}

.triangle-up {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.description-box {
  @apply transition-all duration-300 ease-in-out scroll-smooth;
}

.project:hover .description-box {
  @apply h-auto p-10;
}

.links {
  @apply transition-all duration-300 ease-in-out;
}

.project:hover .links {
  @apply flex;

}
</style>
