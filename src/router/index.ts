import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/login/Login.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "layout" */ '../layouts/BasicLayout.vue'),
    children: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'Home',
        meta: { title: '首页' },
        component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    // component: () => import(/* webpackChunkName: "login" */ '../views/login/Login')
    beforeEnter(to: any, from: any, next: any) {
      const { isLogin } = localStorage
      // const isLogin = true
      isLogin ? next({ name: 'Home' }) : next()
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to, from)
  if (to.path !== from.path) {
    NProgress.start()
  }
  const { isLogin } = localStorage
  // const isLogin = true
  const { name } = to
  const isLoginOrRegister = name === 'Login' || name === 'Register'
  isLogin || isLoginOrRegister ? next() : next({ name: 'Login' })
})

router.afterEach(() => {
  NProgress.done()
})

export default router
