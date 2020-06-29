import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Kan from '@/pages/kanlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/kanlist',
      name: 'Kan',
      component: Kan
    },
    {
      path:"/",
      redirect: '/home'
    }
  ]
})
