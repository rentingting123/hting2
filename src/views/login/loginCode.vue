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
</template>
<script>
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
export default {
  name: 'Home',
  components: {
   
  },
  data() {
    return {
      codeText: "获取验证码",
      formTailLayout,
      form: this.$form.createForm(this, { name: 'horizontal_login' })
    };
  },
  methods: {
    onSearch(value) {
      console.log(value);
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
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