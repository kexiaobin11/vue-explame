import {createRouter, createWebHistory} from 'vue-router'
import Layout from "@/Layout/Layout.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), routes: [{
        path: '/',
        component: Layout,
        children: [{
            path: '/user',
            name: 'user',
            component: () => import('@/views/user/User.vue')
        }, {
            path: '/project',
            name: 'project',
            component: () => import('@/views/project/Project.vue')
        }, {
            path: '/technology',
            name: 'technology',
            component: () => import('@/views/technology/Technology.vue')
        }, {
            path: '/technology/detail/::name',
            name: '/technology/detail',
            component: () => import('@/views/technology/TechnologyDetail.vue')
        }]
    }, {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    }, {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/Login.vue')
    },]
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'login' && !sessionStorage.getItem("accessToken")) {
        next({name: 'login'})
    } else {
        next()
    }
})

export default router
