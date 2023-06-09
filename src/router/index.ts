import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import Basket from '@/components/Basket.vue'
import Products from '@/components/Home/Products.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
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
