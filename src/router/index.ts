import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Cube from '../views/Cube.vue'
import Light from '../views/Light.vue'
import Model from '../views/Model.vue'

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
    path: '/light',
    name: 'Light',
    component: Light,
  },
  {
    path: '/model',
    name: 'Model',
    component: Model,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
