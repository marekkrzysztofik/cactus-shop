import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home/Home.vue'
import Basket from '@/components/Home/Basket.vue'
import Products from '@/components/Home/Products.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {      path: '/products',
      name: 'Products',
      component: Products,
    },
    {
      path: '/basket',
      name: 'Basket',
      component: Basket,
    },
  ],
})

export default router
