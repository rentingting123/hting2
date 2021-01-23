<template>
  <div class="login">
    <div class="leftimg"></div>
    <div class="infobox">
      <div class="logotitle">Hello,欢迎登陆Dhunting!</div>
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="账号密码登录">
          <loginTel></loginTel>
        </a-tab-pane>
        <a-tab-pane key="2" tab="验证码登录" >
         <loginCode></loginCode>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script>
import loginTel from "./loginTel"
import loginCode from "./loginCode"
export default {
  name: 'Home',
  components: {
    loginTel,
    loginCode
  },
  data() {
    return {

    };
  },
  methods: {
  },
}
</script>
<style scoped>
 .ant-tabs-nav .ant-tabs-tab-active{
    color: #f00;
  }
  .login{
    width:100%;
    height: 100vh;
    background:#e9edf8;
    display: flex;
    /* justify-content: flex-end; */
 }
  .leftimg{
    width: 50%;
    height: 100vh;
    background: url("../../assets/img/loginbg.png") no-repeat left top;
    background-size: 100%;

  }
 .infobox{
    width: 50%;
    height: 100vh;
    background: #FFFFFF url("../../assets/img/loginbottom.png") no-repeat right bottom;
    background-size: 140px;
    border-radius: 30px;
    padding: 100px;
    box-sizing: border-box;
 }
 .logotitle{
    text-align: center;
    font-size: 30px;
    font-family: Lantinghei SC;
    font-weight: 600;
    color: #3A54B6;
    line-height: 70px;
    margin-bottom: 10px;
 }
</style>