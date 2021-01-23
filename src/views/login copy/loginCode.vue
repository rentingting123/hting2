<template>
  <a-form
    :form="form"
    :label-col="{ span: 5 }"
    :wrapper-col="{ span: 19 }"
    :colon="false"
    @submit="handleSubmit">
    <a-form-item label="用户名">
      <a-input
        size="large"
        v-decorator="['account', { rules: [{message: '请输入您的用户名/手机号' }] }]"
        placeholder="请输入手机号"
      />
    </a-form-item>
    <a-form-item label="验证码">
      <!-- <a-input-search
        placeholder="请输入验证码"
        enter-button="获取验证码"
        size="large"
        @search="onSearch"
      /> -->
      <a-input-search placeholder="请输入验证码" size="large" @search="onSearch">
        <a-button slot="enterButton">
          {{ codeText }}
        </a-button>
      </a-input-search>
    </a-form-item>
    <a-form-item >
      <a-button type="danger" block html-type="submit">
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

</style>