<template>
  <a-form
    id="form-normal-login"
    :form="form"
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
        确定
      </a-button>
    </a-form-item>
    <a-form-item :label-col="{ span: 0 }" :wrapper-col="{ span: 22 }">
      <a-checkbox v-decorator="[
        'remember',
        {
          valuePropName: 'checked',
          initialValue: true,
        },
        ]">
        记住密码
      </a-checkbox>
      <a-button type="link" class="login-form-forgot">
        忘记密码？
      </a-button>
    </a-form-item>
    <a-form-item :label-col="{ span: 0 }" :wrapper-col="{ span: 22 }" class="btnzhuce">
      <a-button type="link" >
        申请试用
      </a-button>或
      <a-button type="link" >
        立即注册>
      </a-button>
      
    </a-form-item>
    
  </a-form>
</template>
<script>
import {goLogin} from "@/api/Interface/index"
import codeImg from '../../assets/img/delimg/codeimg1.png'
export default {
  name: 'Home',
  components: {
   
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  data() {
    return {
      checkNick: false,
      codeImg
    };
  },
  methods: {
    check() {
      this.form.validateFields(err => {
        if (!err) {
          console.info('success');
        }
      });
    },
    handleChange(e) {
      this.checkNick = e.target.checked;
    },
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
    // 图形验证码点击
    onSearch(value) {
      console.log(value);
    },
  },
}
</script>
<style scoped>
  #form-normal-login .login-form {
    max-width: 300px;
  }
  #form-normal-login .login-form-button {
    width: 100%;
    height: 50px;
    background: #FF6D6B;
    border-radius: 6px;
    font-size: 24px;
  }
  .codeimg{
    width: 50px;
    height: 30px;
  }
  .login-form-forgot{
    float: right;
    color:#3A54B6;
  }
  .btnzhuce{
     /* width: 100%; */
    text-align: center;
    color: #000000;
  }
</style>