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
        v-decorator="['account', { rules: [{ required: true, message: '请输入您的用户名' }] }]"
        placeholder="请输入您的用户名"
      />
    </a-form-item>
      <a-form-item label="密码">
      <a-input
        size="large"
        type="password"
        v-decorator="['password', { rules: [{ required: true, message: '请输入您的密码' }] }]"
        placeholder="请输入您的密码"
      />
    </a-form-item>
    <a-form-item>
      <a-checkbox v-decorator="[
        'remember',
        {
          valuePropName: 'checked',
          initialValue: true,
        },
        ]">
        记住密码
      </a-checkbox>
    </a-form-item>
    <a-form-item :label-col="{ span: 0 }" :wrapper-col="{ span: 22 }">
       <a-button type="danger" block html-type="submit" class="login-form-button">
        登录
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script>
import {goLogin} from "@/api/Interface/index"
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
            console.log(res);
            if(res.data.code === 1 ){
              this.$router.push("/Home")
            }else if(res.data.code  === 4){
              this.$router.push("/Login")
            }else{
              console.log("登录失败")
            }
          })
        }
      });
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
    height: 60px;
    background: #FF6D6B;
    border-radius: 6px;
    font-size: 24px;
  }
</style>