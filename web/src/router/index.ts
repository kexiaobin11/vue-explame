import { createRouter, createWebHistory } from 'vue-router'
import Layout from "@/layout/Layout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login/Index.vue')
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/Home/Home.vue')
        }
      ]
    },
  ]
})

export default router
