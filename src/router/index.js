import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Index from '../components/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',

    component: About
  },
  {
    path: '/index',
    component: Index
  }
]

const router = new VueRouter({
  routes
})

export default router
