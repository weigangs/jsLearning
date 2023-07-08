import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import delegate from '@/views/delegate/Delegate'

Vue.use(Router)

const configRoutes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/delegate',
    name: 'delegate',
    component: delegate
  }
]

export default new Router({
  routes: configRoutes
})
