import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Cube from '../views/Cube.vue'
import Lights from '../views/Lights.vue'
import Models from '../views/Models.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cube',
    name: 'Cube',
    component: Cube,
  },
  {
    path: '/lights',
    name: 'Lights',
    component: Lights,
  },
  {
    path: '/models',
    name: 'Models',
    component: Models,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
