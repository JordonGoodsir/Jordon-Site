import HomePage from '@/views/HomePage.vue'
import AboutMe from '@/views/AboutMe.vue'
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
