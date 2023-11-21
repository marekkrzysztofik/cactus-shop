import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import Header from '@/components/Header.vue'
import Categories from '@/components/Categories.vue'
import Products from '@/components/Products.vue'
import Features from '@/components/Features.vue'
import './sass/main.scss'
import '../node_modules/primeicons/primeicons.css'

const app = createApp(App)

app.use(router)
app.component('Header', Header)
app.component('Categories', Categories)
app.component('Products', Products)
app.component('Features', Features)
app.mount('#app')
