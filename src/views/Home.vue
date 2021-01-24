<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      v-model="collapsed"
      :trigger="null"
      collapsible
      breakpoint="lg"
      theme="light"
    >
      <div class="logo" >
        <img :src="logo" alt="" :class="collapsed?'imgsmall':'img'">
      </div>
      <Menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff' }"
      >
        <div style="height:1000px">Content</div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Menu from "./layout/menu"
import logo from "../assets/img/logo.png"

export default {
  components: { Menu },
  data() {
    return {
      collapsed: false,
      logo
    };
  },
};
</script>
<style>
#components-layout-demo-custom-trigger{
  height: 100vh;
}


#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 40px;
  background: rgba(0, 0, 0, );
  margin:  10px 20px;
  line-height: 40px;
}
#components-layout-demo-custom-trigger .logo .img{
  height: 40px;
}
#components-layout-demo-custom-trigger .logo .imgsmall{
  height: 18px;
}
</style>
