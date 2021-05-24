import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWorld from "@/app/components/HelloWorld.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../app/views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
