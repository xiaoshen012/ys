import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Kan from '@/pages/kanlist'
import Ztlist from '@/pages/ztlist'
import Zldetail from '@/pages/zldetail'

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
      path: '/ztlist',
      name: 'Ztlist',
      component: Ztlist
    },
    {
      path: '/zldetail:id',
      name: 'Zldetail',
      component: Zldetail
    },
    {
      path:"/",
      redirect: '/home'
    }
  ]
})
