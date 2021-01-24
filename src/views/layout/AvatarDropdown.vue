<template>
  <a-dropdown placement="bottomRight">
    <span class="ant-pro-account-avatar">
      <a-avatar size="small" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" class="antd-pro-global-header-index-avatar" />
      <span class="name">{{ name }}</span>
    </span>
    <template v-slot:overlay>
      <a-menu class="ant-pro-drop-down menu" :selected-keys="[]">
        <a-menu-item key="center" @click="handleToCenter">
          <a-icon type="user" />
         个人中心
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="logout" @click="handleLogout">
          <a-icon type="logout" />
          退出登录
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script>
import { Modal } from 'ant-design-vue'

export default {
  name: 'AvatarDropdown',
   data () {
    return {
      name: '超级管理员'
    }
  },
  methods: {
    handleToCenter () {
      this.$router.push({ path: '/myInfo' })
    },
    handleLogout () {
      Modal.confirm({
        title: '提示',
        content: '您确定要退出登录吗？',
        cancelText: '取消',
        okText: '确定',
        onOk: () => {
          // return this.$store.dispatch('Logout').then(() => {
          //   this.$router.push({ name: 'login' })
          // })
        },
        onCancel () {}
      })
    }
  }
}
</script>

<style lang="less" scoped>
.ant-pro-account-avatar{
  margin-right: 20px;
  display: flex;
  align-items: center;
}
.ant-pro-account-avatar .name{
  margin-left: 6px;
}
.ant-pro-drop-down {
  /deep/ .action {
    margin-right: 8px;
  }
  /deep/ .ant-dropdown-menu-item {
    min-width: 160px;
  }
}
</style>
