import { createApp } from 'vue'
import router from '@/routes/index'
import App from './App.vue'
import { createPinia } from 'pinia'
import { store } from '@/stores/store'

// gloabl css
import '@/styles/styles.scss'
import '@/styles/tailwind.css'

// @ts-expect-error because idk
import VTooltipPlugin from 'v-tooltip'
import 'v-tooltip/dist/v-tooltip.css'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(VTooltipPlugin)

const theStore = store()

app.config.globalProperties.$store = theStore

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: any
  }
}

app.mount('#app')
