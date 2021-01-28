import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index.vue'
import Home from '@/views/Home'
// 职位管理
import position from '@/views/position'
import positionDetails from '@/views/position/details'

import resume from '@/views/resume'
// 客户管理
import customer from '@/views/customer'
import customerAdd from '@/views/customer/add'

import operate from '@/views/operate'
import myInfo from '@/views/myInfo'
import login from '@/views/login/login'



// import NotFound from '@/views/NotFound'

// import * as icons from '@/assets/icons';
Vue.use(VueRouter)

export const pageRouter = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
      icon: 'line-chart'
    },
  },
  {
    path: '/position',
    name: 'position',
    component: position,
    meta: {
      title: '职位管理',
      icon: 'apartment'
    },
  },
  {
    path: '/positionDetails',
    name: 'positionDetails',
    component: positionDetails,
    hidden: true,
    meta: {
      title: '职位详情',
      icon: 'file-protect',
      hideChildrenInMenu: true,
    },
  },
  {
    path: '/resume',
    name: 'resume',
    component: resume,
    meta: {
      title: '简历管理',
      icon: 'file-protect'
    },
  },
  {
    path: '/customer',
    name: 'customer',
    component: customer,
    hideChildrenInMenu: true,
    meta: {
      title: '客户管理',
      icon: 'deployment-unit'
    },
  },
  {
    path: '/customerAdd',
    name: 'customerAdd',
    component: customerAdd,
    hidden: true,
    meta: {
      title: '添加客户',
    },
  },
  {
    path: '/operate',
    name: 'operate',
    component: operate,
    meta: {
      title: '运营管理',
      icon: 'team'
    },
  },
  {
    path: '/myInfo',
    name: 'myInfo',
    component: myInfo,
    hidden: true,
    meta: {
      title: '个人中心',
      icon: 'user'
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
      // { path: '*', hidden: true, component: NotFound }
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
