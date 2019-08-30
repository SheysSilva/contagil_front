import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import('./views'),
    children: [
      {
        path: '',
        component: () => import('./views/home/Home')
      }
    ]
  }
]

const router = new Router({
  linkActiveClass: 'active',
  routes,
  mode: 'history'
})

export default router
