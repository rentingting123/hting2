<template>
  <a-form
    :form="form"
    :label-col="{ span: 5 }"
    :wrapper-col="{ span: 19 }"
    :colon="false"
    @submit="handleSubmit">
    <a-form-item label="用户名">
      <a-input
        v-decorator="['account', { rules: [{ required: true, message: '请输入您的用户名' }] }]"
        placeholder="请输入您的用户名"
      />
    </a-form-item>
      <a-form-item label="密码">
      <a-input
        v-decorator="['password', { rules: [{ required: true, message: '请输入您的密码' }] }]"
        placeholder="请输入您的密码"
      />
    </a-form-item>
    <a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
      <a-checkbox :checked="checkNick" @change="handleChange">
        记住我
      </a-checkbox>
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
      checkNick: false,
      formTailLayout,
      form: this.$form.createForm(this, { name: 'horizontal_login' })
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
      // this.$nextTick(() => {
      //   this.form.validateFields(['nickname'], { force: true });
      // });
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