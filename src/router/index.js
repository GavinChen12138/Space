import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/homeView.vue'
import Work from '../views/workView.vue'
import Think from '../views/thinkView.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
  },
  {
    path: '/think',
    name: 'Think',
    component: Think
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
