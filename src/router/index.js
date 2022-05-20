import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkView from '@/views/WorkView.vue'
import ThinkView from '@/views/ThinkView.vue'
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
