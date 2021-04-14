<template>
  <div class="login">
    <div class="infobox">
      <slot name='CommonTitle'></slot>
      <div class="role">
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
      </div>
      <slot name='CommonContent'></slot>
      <div class="width80" v-if='type !== 3'>
        <a-checkbox v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
          ]">
          记住密码
        </a-checkbox>
        <a-button  v-if='type === 1' type="link" class="loginForgot" @click="loginForgot">
          忘记密码？
        </a-button>
      </div>
      <div>
        <router-link to="/applyUse"  v-if='type !== 3'>
          <a-button type="link" >申请试用 </a-button>
        </router-link>
        <span v-if='type !== 3' class="ft14">
          或
        </span>
        <router-link to="/register" v-if='type !== 2'>
          <a-button type="link" >立即注册 </a-button>
        </router-link>
        <span v-if='type !== 2 && type !== 1' class="ft14">
          或
        </span>
        <router-link to="/login" v-if='type !== 1'>
          <a-button type="link" >立即登录 </a-button>
        </router-link>
      </div>
    </div>
    <ForgotPassword :visible="visibleForgot"/>
  </div>
</template>
<script>
import ForgotPassword from './forgotPassword'
export default {
  name: 'Home',
  components: {
    ForgotPassword
  },
  props: {
    userList: {
      type: Array
    },
    type: {
      type: Number,
      require: true
    },
  },
  data() {
    return {
      showBtn: 1,
      visibleForgot: false
    };
  },
  methods: {
    // 按钮切换
		btnChange(i){
			this.showBtn = i
		},
    // 添加部门
		loginForgot(){
			this.visibleForgot = true
		},
  },
}
</script>
<style lang="less" scoped >
@import '@/assets/css/main.less'; // 用于覆盖上面定义的变量. 全局变量
@import '@/assets/css/login.less'; // 登录模块
  .login{
    width:100%;
    height: 100vh;
    background:#e9edf8 url("../../../assets/img/loginbg.png") no-repeat left center;
    background-size: 58% 100%;
    display: flex; 
    justify-content:flex-end
 }
.infobox{
    width: 46%;
    height: 100%;
    background: #FFFFFF url("../../../assets/img/loginbottom.png") no-repeat right bottom;
    background-size: 100px;
    border-radius: 30px;
    padding: 60px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: space-around;
 }
  @media screen and (max-width: 1200px) and (min-width:768px) {
    .infobox {
      width: 60%;
    }
}
 @media screen and (max-width: 768px) {
    .infobox {
      width: 100%;
    }
}
.ft14{
  font-size: 14px;
}
.role{
  width: 80%;
  margin:20px 0;
  text-align: left;
}
.loginForgot{
  float: right;
}
</style>