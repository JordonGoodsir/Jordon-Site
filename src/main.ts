import { createApp } from 'vue'
import router from '@/routes/index'
import App from './App.vue'

// gloabl css
import '@/styles/styles.scss'
import '@/styles/tailwind.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
