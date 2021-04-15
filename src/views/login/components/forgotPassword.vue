<template>
  <div>
    <a-modal
			v-model="visible"
			title="忘记密码"
      :footer="null"
			>
		<template slot="closeIcon">
			<a-icon type="close-circle" theme="filled" @click="handleCancel"/>
		</template>
     <a-form
      id="form-normal-login"
      :form="form"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 20 }"
      labelAlign="left"
      :hideRequiredMark="true"
      :colon="false">
      <a-form-item label="账号">
        <a-input
          size="large"
          v-decorator="['account', { rules: [{message: '请输入手机号' }] }]"
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
      <a-form-item label="密码">
        <a-input-password
          size="large"
          type="password"
          v-decorator="['password', { rules: [{ required: true, message: '请输入您的密码' }] }]"
          placeholder="请输入您的密码"
        />
      </a-form-item>
      <a-form-model-item class="buttonCenter" :wrapper-col="{ span: 24 }">
        <a-space>
          <a-button @click="handleCancel">
            取消
          </a-button>
          <a-button
            type="primary"
            @click="handleOk"
            >
            确定
          </a-button>
        </a-space>
			</a-form-model-item>
    </a-form>
    </a-modal>
  </div>
</template>
<script>
  import {goLogin} from "@/api/Interface/index"
  export default {
    data() {
      return {
        codeText: "获取验证码",
        form: this.$form.createForm(this, { name: 'formRegister' }),
      };
    },
    props:['visible'],
    methods: {
      handleOk() {
        setTimeout(() => {
          this.$emit('visibleCancel');
        }, 0);
      },
      handleCancel() {
        this.$emit('visibleCancel');
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
      // 验证码点击
      onSearch(value) {
        console.log(value);
      },
    },
  };
</script>
<style  lang="less">
  @import '@/assets/css/modules/modal.less'; // 登录模块
</style>