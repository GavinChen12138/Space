import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkView from '@/views/WorkView.vue'
import ThinkView from '@/views/ThinkView.vue'
import AboutView from '@/views/AboutView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/work',
    name: 'work',
    component: WorkView
  },
  {
    path: '/think',
    name: 'think',
    component: ThinkView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
