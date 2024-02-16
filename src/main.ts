import { createApp } from 'vue'
import router from '@/routes/index'
import App from './App.vue'
import { createPinia } from 'pinia'
import { store } from '@/stores/store'
import Unicon from 'vue-unicons'
//@ts-ignore
import { uniAngleDown, uniCarWash, uniArrowRight, uniExternalLinkAlt, uniGithub, uniLinkedin, uniArrowLeft } from 'vue-unicons/dist/icons'

Unicon.add([uniAngleDown, uniCarWash, uniArrowRight, uniExternalLinkAlt, uniGithub, uniLinkedin, uniArrowLeft])


// gloabl css
import '@/styles/styles.scss'
import '@/styles/tailwind.css'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
//@ts-ignore
app.use(Unicon)

const theStore = store()

app.config.globalProperties.$store = theStore

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: any
  }
}

app.mount('#app')
