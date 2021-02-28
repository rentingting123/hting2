<template>
  <div>
    <a-form-model
      ref="ruleForm"
			:label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      :model="queryParam"
      :rules="rules">
      <a-row class="form-row" :gutter="16">
        <a-col :lg="8" :md="12" :sm="24">
          <a-form-model-item label="期望工作职位">
            <a-select v-model="queryParam.departmentId" placeholder="请选择行业" default-value="0" allowClear >
              <a-select-option value="0">全部</a-select-option>
              <a-select-option value="1">关闭</a-select-option>
              <a-select-option value="2">运行中</a-select-option>
            </a-select>
          </a-form-model-item>
        </a-col>
        <a-col :lg="8" :md="12" :sm="24">
          <a-form-model-item label="期望职位">
            <a-select v-model="queryParam.departmentId" placeholder="请选择职位" default-value="0" allowClear >
              <a-select-option value="0">全部</a-select-option>
              <a-select-option value="1">关闭</a-select-option>
              <a-select-option value="2">运行中</a-select-option>
            </a-select>
          </a-form-model-item>
        </a-col>
        <a-col :lg="8" :md="12" :sm="24">
          <a-form-model-item label="期望城市">
            <a-select v-model="queryParam.departmentId" placeholder="请选择城市" default-value="0" allowClear >
              <a-select-option value="0">全部</a-select-option>
              <a-select-option value="1">关闭</a-select-option>
              <a-select-option value="2">运行中</a-select-option>
            </a-select>
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row class="form-row" :gutter="16">
        <a-col :lg="24"  :sm="24">
          <a-form-model-item label="目前年薪" :label-col="{ span: 2 }" :wrapper-col="{ span: 20 }">
            <div class="iputbox">
              <a-input v-model="queryParam.departmentId" addon-after="K" class="inputsr"/>X
              <a-input v-model="queryParam.departmentId" addon-after="月" class="inputsr"/>=
              <a-input v-model="queryParam.departmentId" addon-after="K" class="inputsr"/>
              <a-checkbox @change="onChange" >
                保密
              </a-checkbox>
            </div>
          </a-form-model-item>
        </a-col>
      </a-row>
    </a-form-model>
    <div class="optionbox">
      <a-button key="back" @click="handleCancel" class="clear-from-button1 btnR">
        取消
      </a-button>
      <a-button key="submit" type="primary" class="primarybtn btnR marginleft" :loading="loading" @click="handleSubmit">
        保存 
      </a-button>
    </div>
  </div>
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
      queryParam: {},
      loading: false,
      rules: { 
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
        ],
        phoneNumber: [
          { required: true,len: 11, pattern: RegExp(/^[1][3,4,5,6,7,8,9][0-9]{9}$/), message: '请输入正确的电话', trigger: 'blur' },
        ]
      },
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
    handleCancel(){

    },
     onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
  }
}
</script>

<style scoped>
.iputbox{
  display: flex;
  align-items: center;
}
.inputsr{
  width: 100px;
  margin:0 8px;
}
</style>
