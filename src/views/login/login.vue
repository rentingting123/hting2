<template>
  <div class="login">
    <div class="leftimg"></div>
    <div class="infobox">
      <div class="logotitle">Hello,欢迎登录Dhunting！</div>
      <a-row class="marginTB logintabs">
        <a-space>
          <a-button
            v-for="item in userList"
            :key="item.id"
            :type="showBtn === item.id?'primary':''"
            :class="showBtn === item.id?'primarybtn':'' "
            @click="btnChange(item.id)">
            {{item.name}}
          </a-button>
        </a-space>
      </a-row>
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
      showBtn: 1,
      userList:[
        {
          id: 1,
          name: "求职者"
        },
        {
          id: 2,
          name: "猎头顾问"
        },{
          id: 3,
          name: "企业HR"
        }
      ]
    };
  },
  methods: {
    // 按钮切换
		btnChange(i){
			this.showBtn = i
		}
  },
}
</script>
<style lang="less" scoped >
@import '@/assets/css/main.less'; // 用于覆盖上面定义的变量. 全局变量
  .login{
    width:100%;
    height: 100vh;
    background:#e9edf8;
    display: flex;
 }
 .logotitle{
    text-align: center;
    font-size: @font-size-40;
    font-family: Lantinghei SC;
    font-weight: 540;
    color: @link-color; 
 }
  .leftimg{
    width: 50%;
    height: 100%;
    background: url("../../assets/img/loginbg.png") no-repeat left center;
    background-size: cover;
    // margin-left: -60px;
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

 .logintabs{
  width: 80%;
 }
 .logintabs .ant-tabs-tabpane {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  height: 400px;
}
</style>