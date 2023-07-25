import HomePage from '@/views/HomePage.vue'
import Generator from '@/views/Generator.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: HomePage
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
