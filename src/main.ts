import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Slider from '@/components/Home/Slider.vue'
import './sass/main.scss'
import '../node_modules/primeicons/primeicons.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)

app.use(pinia)
app.use(router)
app.component('Slider', Slider)
app.mount('#app')
