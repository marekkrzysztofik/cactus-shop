import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Header from '@/components/Home/Header.vue'
import Categories from '@/components/Home/Categories.vue'
import Products from '@/components/Home/Products.vue'
import Features from '@/components/Home/Features.vue'
import './sass/main.scss'
import '../node_modules/primeicons/primeicons.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)

app.use(pinia)
app.use(router)
app.component('Header', Header)
app.component('Categories', Categories)
app.component('Products', Products)
app.component('Features', Features)
app.mount('#app')
