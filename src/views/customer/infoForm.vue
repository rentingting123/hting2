<template>
  <a-form @submit="handleSubmit" :form="form" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
    <a-row class="form-row" :gutter="16">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item label="企业名称">
          <a-input
            placeholder="请输入"
            allowClear
            v-decorator="[
              'name',
              {rules: [{ required: true, message: '请输入', whitespace: true}]}
            ]" />
        </a-form-item>
      </a-col>
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item label="企业简称">
          <a-input placeholder="请输入" allowClear />
        </a-form-item>
      </a-col>
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item label="企业logo">
          <a-input
            placeholder="请输入"
             />
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row" :gutter="16">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
          label="行业类别">
          <a-select
            placeholder="请选择"
            v-decorator="[ 'owner', {rules: [{ required: true, message: '请选择'}]} ]"
            allowClear>
            <a-select-option value="王同学">王同学</a-select-option>
            <a-select-option value="李同学">李同学</a-select-option>
            <a-select-option value="黄同学">黄同学</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item  label="融资阶段">
          <a-select placeholder="请选择" allowClear>
            <a-select-option value="王同学">王同学</a-select-option>
            <a-select-option value="李同学">李同学</a-select-option>
            <a-select-option value="黄同学">黄同学</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item label="人员规模">
          <a-input
            placeholder="请输入"
            allowClear
            v-decorator="[
              'name',
              {rules: [{ required: true, message: '请输入', whitespace: true}]}
            ]" />
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row" :gutter="16">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item label="所在城市">
          <a-input
            placeholder="请输入"
            allowClear
            v-decorator="[
              'name',
              {rules: [{ required: true, message: '请输入', whitespace: true}]}
            ]" />
        </a-form-item>
      </a-col>
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item label="详细地址">
          <a-input
            placeholder="请输入"
            allowClear
            v-decorator="[
              'name',
              {rules: [{ required: true, message: '请输入', whitespace: true}]}
            ]" />
        </a-form-item>
      </a-col>
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item label="官网">
          <a-input
            allowClear
            placeholder="请输入"/>
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row" >
      <a-col :lg="24" :md="24" :sm="24">
        <a-form-item label="企业描述" :label-col="{ span: 2 }" :wrapper-col="{ span: 20 }">
          <a-textarea htmlType="submit" placeholder="请输入" :rows="4"/>
        </a-form-item>
      </a-col>
    </a-row>
    <a-form-item v-if="showSubmit">
      <a-button htmlType="submit" >提交</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  name: 'infoForm',
  props: {
    showSubmit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      form: this.$form.createForm(this)
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$notification['error']({
            message: 'Received values of form:',
            description: values
          })
        }
      })
    },
    validate (rule, value, callback) {
      const regex = /^user-(.*)$/
      if (!regex.test(value)) {
        callback(new Error('需要以 user- 开头'))
      }
      callback()
    }
  }
}
</script>

<style scoped>

</style>
