import MainView from '@/views/MainView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: MainView,
    meta: {
      name: 'description',
      content: 'a portfolio SPA made and designed by Jordon Goodsir'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default (
  router
)
