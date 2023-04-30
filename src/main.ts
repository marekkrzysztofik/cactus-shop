import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Slider from '@/components/Home/Slider.vue'
import './sass/main.scss'
import '../node_modules/primeicons/primeicons.css';
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('Slider', Slider);
app.mount('#app')
