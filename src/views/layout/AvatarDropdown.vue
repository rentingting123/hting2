<template>
  <div class="avatarRight">
    <a-dropdown>
      <a class="ant-dropdown-link" @click="e => e.preventDefault()">
        上传简历
      </a>
      <a-menu slot="overlay">
        <a-menu-item>
          <a href="javascript:;">新增简历</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">新增职位</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">新增客户</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
    <span class="ant-pro-account-avatar">
      <a-avatar size="small" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" class="antd-pro-global-header-index-avatar" />
      <span class="name">{{ name }} / 猎头顾问-AC2</span>
    </span>
    <div  @click="handleLogout" class="exitbtn">
      <a-icon type="poweroff" class="primColor" />
      退出
    </div>
  </div>
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
  margin-left: 70px;
}
.ant-pro-account-avatar .name{
  margin-left: 8px;
  color: #282828;
}
.antd-pro-global-header-index-avatar{
   width: 40px;
  height: 40px;
  background: #206BFF;
}
.ant-pro-drop-down {
  /deep/ .action {
    margin-right: 8px;
  }
  /deep/ .ant-dropdown-menu-item {
    min-width: 160px;
  }
}
.avatarRight{
  display: flex;
}
.exitbtn{
  margin-right: 20px;
}
</style>
