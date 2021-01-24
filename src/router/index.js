import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index.vue'
import Home from '@/views/Home'
import position from '@/views/position'
import resume from '@/views/resume'
import customer from '@/views/customer'
import operate from '@/views/operate'
import myInfo from '@/views/myInfo'
import login from '@/views/login/login'
import NotFound from '@/views/NotFound'

import * as icons from '@/assets/icons';
Vue.use(VueRouter)

const pageRouter = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
      icon: icons.order
    },
  },
  {
    path: '/position',
    name: 'position',
    component: position,
    meta: {
      title: '职位管理',
      icon: icons.order
    },
  },
  {
    path: '/resume',
    name: 'resume',
    component: resume,
    meta: {
      title: '简历管理',
      icon: icons.order
    },
  },
  {
    path: '/customer',
    name: 'customer',
    component: customer,
    meta: {
      title: '客户管理',
      icon: icons.order
    },
  },
  {
    path: '/operate',
    name: 'operate',
    component: operate,
    meta: {
      title: '运营管理',
      icon: 'table'
    },
  },
  {
    path: '/myInfo',
    name: 'myInfo',
    component: myInfo,
    hideInMenu: true,
    meta: {
      title: '个人中心',
      icon: icons.order
    },
  },
]
const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    redirect: '/Home',
    children: [ 
      ...pageRouter,
      { path: '*', hideInMenu: true, component: NotFound }
     ]
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
