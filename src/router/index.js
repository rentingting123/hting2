import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index.vue'
import Home from '@/views/Home'
// 职位管理
import position from '@/views/position'
import positionDetails from '@/views/position/details'

// 简历管理
import resume from '@/views/resume'
import resumeAdd from '@/views/resume/add'
import resumeUpload from '@/views/resume/resumeUpload'
import talentReport from '@/views/resume/talentReport'
import resumeDetails from '@/views/resume/details'

// 客户管理
import customer from '@/views/customer'
import customerAdd from '@/views/customer/add'
import customerDetails from '@/views/customer/details'

//运营管理
import operate from '@/views/operate'
import resources from '@/views/operate/resources/index' // 资源管理
import companyManage from '@/views/operate/companyManage/index' // 公司管理
import organizationalStructure from '@/views/operate/organizationalStructure/index' // 组织架构
import accountManage from '@/views/operate/accountManage/index' // 账号管理
import MoneyDetails from '@/views/operate/MoneyDetails/index' // 鉴赏金明细

import myInfo from '@/views/myInfo'
//登录
import login from '@/views/login/login'
import register from '@/views/login/register'
import applyUse from '@/views/login/applyUse'

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
      icon: '&#xe660;'
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
    path: '/resumeDetails',
    name: 'resumeDetails',
    component: resumeDetails,
    hidden: true,
    meta: {
      title: '简历详情',
      icon: 'file-protect',
      hideChildrenInMenu: true,
    },
  },
  {
    path: '/resumeAdd',
    name: 'resumeAdd',
    component: resumeAdd,
    hidden: true,
    meta: {
      title: '添加简历',
    },
  },
  {
    path: '/resumeUpload',
    name: 'resumeUpload',
    component: resumeUpload,
    hidden: true,
    meta: {
      title: '上传简历',
    },
  },
  {
    path: '/talentReport',
    name: 'talentReport',
    component: talentReport,
    hidden: true,
    meta: {
      title: '人才推荐报告',
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
    path: '/customerDetails',
    name: 'customerDetails',
    component: customerDetails,
    hidden: true,
    meta: {
      title: '客户详情',
      icon: 'file-protect',
      hideChildrenInMenu: true,
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
    children: [ 
      {
        path: '/resources',
        name: 'resources',
        component: resources,
        meta: {
          title: '资源管理',
        },
      },
      {
        path: '/companyManage',
        name: 'companyManage',
        component: companyManage,
        meta: {
          title: '公司管理',
        },
      },
      {
        path: '/organizationalStructure',
        name: 'organizationalStructure',
        component: organizationalStructure,
        meta: {
          title: '组织架构',
        },
      },
      {
        path: '/accountManage',
        name: 'accountManage',
        component: accountManage,
        meta: {
          title: '账号管理',
        },
      },
      {
        path: '/MoneyDetails',
        name: 'MoneyDetails',
        component: MoneyDetails,
        meta: {
          title: '鉴赏金明细',
        },
      },
     ]
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
    name: '登录',
    component: login
  },
  {
    path: '/register',
    name: '注册',
    component: register
  },
  {
    path: '/applyUse',
    name: '申请试用',
    component: applyUse
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
