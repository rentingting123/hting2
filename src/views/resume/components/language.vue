<template>
  <div>
    <a-form-model
      ref="ruleForm"
			:label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      :model="queryParam"
      :rules="rules">
      <a-row class="form-row" :gutter="16">
        <a-col :lg="6" :md="12" :sm="24">
          <a-form-model-item label="语言">
            <a-select v-model="queryParam.departmentId" placeholder="请选择" default-value="0" allowClear >
              <a-select-option value="0">全部</a-select-option>
              <a-select-option value="1">关闭</a-select-option>
              <a-select-option value="2">运行中</a-select-option>
            </a-select>
          </a-form-model-item>
        </a-col>
        <a-col :lg="10" :md="12" :sm="24">
          <a-form-model-item label="语言能力">
            <div class="iputbox">
              <a-select class="marginr" v-model="queryParam.departmentId" placeholder="请选择听说能力" default-value="0" allowClear >
                <a-select-option value="0">全部</a-select-option>
                <a-select-option value="1">关闭</a-select-option>
                <a-select-option value="2">运行中</a-select-option>
              </a-select>
              <a-select v-model="queryParam.departmentId" placeholder="请选择读写能力" default-value="0" allowClear >
                <a-select-option value="0">全部</a-select-option>
                <a-select-option value="1">关闭</a-select-option>
                <a-select-option value="2">运行中</a-select-option>
              </a-select>
            </div>
          </a-form-model-item>
        </a-col>
        <a-col :lg="6" :md="12" :sm="24">
          <a-form-model-item >
            <div class="iputbox">
              <i class="iconfont redColor marginr" @click="deleteData(item.id)">&#xe614;</i>
              <a class="primColor" slot="extra" @click="addJobs(8)">+添加语言能力</a>
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
