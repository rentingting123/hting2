<template>
  <div class="login">
    <div class="leftimg"></div>
    <div class="infobox">
      <div class="logotitle">Hello,欢迎登录Dhunting！</div>
      <a-tabs default-active-key="1" class="logintabs">
        <a-tab-pane key="1" tab="账号密码登录" >
          <loginTel class="ant-tabs-tabpane"></loginTel>
        </a-tab-pane>
        <a-tab-pane key="2" tab="验证码登录" >
         <loginCode class="ant-tabs-tabpane"></loginCode>
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
  .login{
    width:100%;
    height: 100vh;
    background:#e9edf8;
    display: flex;
 }
  .leftimg{
    width: 50%;
    height: 100%;
    background: url("../../assets/img/loginbg.png") no-repeat left center;
    background-size: cover;
  }
 .infobox{
    width: 50%;
    height: 100%;
    background: #FFFFFF url("../../assets/img/loginbottom.png") no-repeat right bottom;
    background-size: 100px;
    border-radius: 30px;
    padding: 60px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
 }
 .logotitle{
    text-align: center;
    font-size: 40px;
    font-family: Lantinghei SC;
    font-weight: 540;
    color: #3A54B6;
 }
 .logintabs{
  width: 80%;
  flex:1;
  padding-top: 40px;
 }
 .logintabs .ant-tabs-tabpane {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  height: 400px;
  padding-top: 20px;
}
</style>