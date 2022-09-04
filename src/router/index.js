import { createRouter, createWebHistory } from 'vue-router'
import NewTaskFormList from "../components/NewTaskFormList.vue"
const routes = [
  {
    path: '/',
    name: 'NewTaskFormList',
    component: NewTaskFormList
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
