import Home from '@/views/Home.vue'
import Generator from '@/views/Generator.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Home
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
