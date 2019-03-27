import Vue from 'vue'
import Router from 'vue-router'
import navlist from '@/components/navlist/navlist'
import orders from '@/components/navlist/orders'
import sorng from '@/components/navlist/sorng'
import service from '@/components/navlist/service'
import material from '@/components/navlist/material'
import childone from '@/components/navlist/children/childone'
import childtow from '@/components/navlist/children/childtow'
import childtreen from '@/components/navlist/children/childtreen'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: navlist
    },
    {
      path: '/material',
      component: material
    },
    {
      path: '/orders',
      component: orders
    },
    {
      path: '/service',
      component: service
    },
    {
      path: '/sorng',
      component: sorng,
      children: [
        {
          path: '/childtow',
          component: childtow
        },
        {
          path: '/childone',
          component: childone
        },
        {
          path: '/childtreen',
          component: childtreen
        }
      ]
    }
  ]
})

