<template>
  <pro-layout
    :menus="menus"
    :collapsed="collapsed"
    :theme="theme"
    :layout="layout"
    :contentWidth="contentWidth"
    :auto-hide-header="autoHideHeader"
    :footer-render="footerRender"
    :mediaQuery="query"
    :isMobile="isMobile"
    :handleMediaQuery="handleMediaQuery"
    :handleCollapse="handleCollapse"
  >
    <template v-slot:menuHeaderRender>
      <div>
        <img src="@/assets/img/logo.png" alt="" :class="collapsed?'img':'imgsmall'">
      </div>
    </template>
    <template v-slot:rightContentRender>
      <div :class="['ant-pro-global-header-index-right', layout === 'topmenu' && `ant-pro-global-header-index-${theme}`]">
        <AvatarDropdown />
      </div>
    </template>
    <router-view />
  </pro-layout>
</template>

<script>
import ProLayout from '@ant-design-vue/pro-layout'
import {pageRouter} from '@/router'
import logo from "@/assets/img/logo.png"
import AvatarDropdown from '@/views/layout/AvatarDropdown'
export default {
  name: 'BasicLayout',
  data () {
    return {
      menus: [],
      collapsed: false,
      autoHideHeader: false,
      footerRender: false,
      query: {},
      layout: 'sidemenu',
      contentWidth: 'Fluid',
      theme: 'light',
      isMobile: false,
      logo,
    }
  },
  created () {
    this.menus = pageRouter ? pageRouter : []
  },
  methods: {
    handleMediaQuery (query) {
      this.query = query
      if (this.isMobile && !query['screen-xs']) {
        this.isMobile = false
        return
      }
      if (!this.isMobile && query['screen-xs']) {
        this.isMobile = true
        this.collapsed = false
      }
    },
    handleCollapse (collapsed) {
      this.collapsed = collapsed
    }
  },
  components: {
    ProLayout,
    AvatarDropdown
  }
}
</script>
<style scoped>
.ant-pro-basicLayout-content{
  background: #F2F7FF;
  margin: 0;
  padding: 20px;
}
.img{
  height: 18px;
}
.imgsmall{
  width: 150px;
  height: 56px;
}
</style>