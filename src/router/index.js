import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Kan from '@/pages/kanlist'
import Ztlist from '@/pages/ztlist'
import Zldetail from '@/pages/zldetail'
import Renlist from '@/pages/renlist'
import Classify from '@/pages/classify'
import Goods from '@/pages/goods'
import My from '@/pages/my'
import Index from '@/pages/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          path:"Index",
          component:Index
        },
        {
          path:"goods",
          component:Goods
        },
        {
          path:"my",
          component:My
        },
        {
          path:"classify",
          component:Classify
        },

      ]
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
      path: '/renlist',
      name: 'Renlist',
      component: Renlist
    },
    {
      path:"/",
      redirect: '/home/Index'
    }
  ]
})
