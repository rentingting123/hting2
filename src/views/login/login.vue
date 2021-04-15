<template>
  <CommonLogin :userList="userList" :type='1'>
     <template v-slot:CommonTitle >
      <div class="logotitle">Hello,欢迎登录Dhunting！</div>
    </template>
    <template v-slot:CommonContent>
      <a-tabs default-active-key="1" class="logintabs">
        <a-tab-pane key="1" tab="账号密码登录" >
          <a-form
            id="form-normal-login"
            :form="formTel"
            class="login-form"
            :label-col="{ span: 3 }"
            :wrapper-col="{ span: 19 }"
            labelAlign="left"
            @submit="handleSubmit"
            :hideRequiredMark="true"
            :colon="false">
            <a-form-item label="用户名">
              <a-input
                size="large"
                v-decorator="['account', { rules: [{ required: true, message: '请输入您的用户名/手机号' }] }]"
                placeholder="请输入您的用户名/手机号"
              />
            </a-form-item>
            <a-form-item label="密码">
              <a-input-password
                size="large"
                type="password"
                v-decorator="['password', { rules: [{ required: true, message: '请输入您的密码' }] }]"
                placeholder="请输入您的密码"
              />
            </a-form-item>
            <a-form-item label="验证码">
              <a-input-search placeholder="请输入验证码"  @search="onSearch" size="large">
                <a-button slot="enterButton">
                  <img :src="codeImg" alt="" class="codeimg">
                  <a-icon type="reload" style="color: #C9C9C9;"/>
                </a-button>
              </a-input-search>
            </a-form-item>
            <a-form-item :label-col="{ span: 0 }" :wrapper-col="{ span: 22 }">
              <a-button type="danger" block html-type="submit" class="login-form-button">
                登录
              </a-button>
            </a-form-item>
          </a-form>
        </a-tab-pane>
        <a-tab-pane key="2" tab="验证码登录" >
          <a-form
            id="form-normal-login"
            :form="formCode"
            class="login-form"
            :label-col="{ span: 3 }"
            :wrapper-col="{ span: 19 }"
            labelAlign="left"
            @submit="handleSubmit"
            :hideRequiredMark="true"
            :colon="false">
            <a-form-item label="用户名">
              <a-input
                size="large"
                v-decorator="['account', { rules: [{message: '请输入您的用户名/手机号' }] }]"
                placeholder="请输入手机号"
              />
            </a-form-item>
            <a-form-item label="验证码">
              <a-input-search placeholder="请输入验证码"  @search="onSearch" size="large">
                <a-button slot="enterButton">
                  {{ codeText }}
                </a-button>
              </a-input-search>
            </a-form-item>
            <a-form-item :label-col="{ span: 0 }" :wrapper-col="{ span: 22 }">
              <a-button type="danger" block html-type="submit" class="login-form-button">
                登录
              </a-button>
            </a-form-item>
          </a-form>
        </a-tab-pane>
      </a-tabs>
    </template>
  </CommonLogin>
</template>
<script>
import CommonLogin from '@/views/login/components/common'
import {goLogin} from "@/api/Interface/index"
import codeImg from '../../assets/img/delimg/codeimg1.png'
export default {
  name: 'Home',
  components: {
    CommonLogin,
  },
  data() {
    return {
      codeText: "获取验证码",
      codeImg,
      formTel: this.$form.createForm(this, { name: 'formTelLogin' }),
      formCode: this.$form.createForm(this, { name: 'formCode' }),
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
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          let obj = {
            account: values.account,
            password: values.password
          }
          goLogin(obj).then(res=>{
            if(res.data.code === 1 ){
              this.$router.push("/Home")
              this.$message.success(res.data.message);
            }else{
              this.$message.error(res.data.message);
            }
          })
        }
      });
    },
    // 验证码点击
    onSearch(value) {
      console.log(value);
    },
  },
}
</script>
<style lang="less" scoped >
@import '@/assets/css/main.less'; // 用于覆盖上面定义的变量. 全局变量
@import '@/assets/css/page/login.less'; // 登录模块
 .logintabs{
  width: 80%;
 }
 .logintabs .ant-tabs-tabpane {
  display: flex;
  padding-top: 40px;
  // width: 100%;
  flex-direction: column;
  justify-content: space-around;
  height: 260px;
}
</style>