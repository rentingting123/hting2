<template>
  <CommonLogin :userList="userList" :type='3'>
     <template v-slot:CommonTitle >
      <div class="logotitle">申请试用</div>
    </template>
    <template v-slot:CommonContent>
      <a-form
        id="form-normal-login"
        :form="form"
        class="width80"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 20 }"
        labelAlign="left"
        @submit="handleSubmit"
        :hideRequiredMark="true"
        :colon="false">
        <a-form-item label="姓名">
          <a-input
            v-decorator="['name', { rules: [{message: '请输入您的姓名' }] }]"
            placeholder="请输入您的姓名"
          />
        </a-form-item>
        <a-form-item label="电话">
          <a-input
            v-decorator="['account', { rules: [{message: '请输入您的联系方式' }] }]"
            placeholder="请输入您的联系方式"
          />
        </a-form-item>
        <!-- <a-form-item label="验证码">
          <a-input-search placeholder="请输入验证码"  @search="onSearch">
            <a-button slot="enterButton">
              {{ codeText }}
            </a-button>
          </a-input-search>
        </a-form-item> -->
        <a-form-item label="邮箱">
          <a-input
            v-decorator="['name', { rules: [{message: '请输入您的邮箱' }] }]"
            placeholder="请输入您的邮箱"
          />
        </a-form-item>
        <a-form-item label="公司">
          <a-input
            v-decorator="['account', { rules: [{message: '请输入您的公司名称' }] }]"
            placeholder="请输入您的公司名称"
          />
        </a-form-item>
        <a-form-item label="职位">
          <a-input
            v-decorator="['account', { rules: [{message: '请输入您的职位名称' }] }]"
            placeholder="请输入您的职位名称"
          />
        </a-form-item>
        <a-form-item label="所在地">
          <a-input
            v-decorator="['account', { rules: [{message: '请选择您的所在地' }] }]"
            placeholder="请选择您的所在地"
          />
        </a-form-item>
        <!-- <a-form-item label="密码">
          <a-input-password
            type="password"
            v-decorator="['password', { rules: [{ required: true, message: '请输入您的密码' }] }]"
            placeholder="请输入您的密码"
          />
        </a-form-item> -->
        <a-form-item :label-col="{ span: 0 }" :wrapper-col="{ span: 24 }">
          <a-button type="danger" block html-type="submit" size="large" >
            确定
          </a-button>
        </a-form-item>
      </a-form>
    </template>
  </CommonLogin>
</template>
<script>
import CommonLogin from '@/views/login/components/common'
import {goLogin} from "@/api/Interface/index"
export default {
  name: 'Home',
  components: {
    CommonLogin,
  },
  data() {
    return {
      codeText: "获取验证码",
      form: this.$form.createForm(this, { name: 'formRegister' }),
      userList:[
        {
          id: 1,
          name: "猎头"
        },
        {
          id: 2,
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
@import '@/assets/css/page/login.less'; // 登录模块

</style>