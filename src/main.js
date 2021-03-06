import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less'; // 引入官方提供的 less 样式入口文件


import  '@/assets/icons/iconfont.css';
import ProLayout from '@ant-design-vue/pro-layout'
Vue.component('pro-layout', ProLayout)

Vue.config.productionTip = false
Vue.use(Antd);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
