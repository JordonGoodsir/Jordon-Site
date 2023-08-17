import HomePage from '@/views/HomePage.vue'
import Skills from '@/views/Skills.vue'
import ContactMe from '@/views/ContactMe.vue'
import CarrerAndExperience from '@/views/CarrerAndExperience.vue'

import Generator from '@/views/Generator.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/skills',
    component: Skills
  },
  {
    path: '/path',
    component: CarrerAndExperience
  },
  {
    path: '/contact-me',
    component: ContactMe
  },
  {
    path: '/hmm',
    component: Generator
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default (
  router
)
