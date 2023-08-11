import HomePage from '@/views/HomePage.vue'
import AboutMe from '@/views/AboutMe.vue'
import ContactMe from '@/views/ContactMe.vue'

import Generator from '@/views/Generator.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/skills',
        component: AboutMe
    },
    {
        path: '/contact-me',
        component: ContactMe
    },
    {
        path: '/hmm',
        component: Generator
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default (
    router
)
