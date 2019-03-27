import Vue from 'vue'
import Router from 'vue-router'
import dingdan from '@/components/views/dingdan'
import list from '@/components/views/list'
import hover from '@/components/views/hover'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hover',
      name: 'hover',
      component: hover,
    },
    {
      path: '/dingdan',
      name: 'dingdan',
      component: dingdan,
    },
    {
      path: '/list',
      name: 'list',
      component: list,
    }
  ]
})
