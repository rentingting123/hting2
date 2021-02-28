<template>
  <div>
    <a-button type="danger" class="danger-from-button">
      <a-icon type="plus-circle" theme="filled" />新增项目
    </a-button>
    <a-form-model
      ref="ruleForm"
			:label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      :model="queryParam"
      :rules="rules">
      <a-row class="form-row" :gutter="16">
        <a-col :lg="6" :md="12" :sm="24">
          <a-form-model-item label="项目名称">
            <a-input v-model="queryParam.emil" placeholder="请输入项目名称" allowClear />
          </a-form-model-item>
        </a-col>
        <a-col :lg="6" :md="12" :sm="24">
          <a-form-model-item label="公司名称">
            <a-input v-model="queryParam.emil" placeholder="请输入公司名称" allowClear />
          </a-form-model-item>
        </a-col>
        <a-col :lg="6" :md="12" :sm="24">
          <a-form-model-item label="项目职务">
            <a-input v-model="queryParam.emil" placeholder="请输入职务" allowClear />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row class="form-row" :gutter="16">
        <a-col :lg="12"  :sm="24">
          <a-form-model-item label="项目时间" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
            <div class="iputbox">
              <a-input v-model="queryParam.departmentId" class="inputsr" placeholder="开始时间"/>
              <a-input v-model="queryParam.departmentId" class="inputsr" placeholder="结束时间"/>
              <a-checkbox @change="onChange" >
                至今
              </a-checkbox>
            </div>
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row class="form-row" :gutter="16">
        <a-col :lg="24"  :sm="24">
          <a-form-model-item label="项目描述" :label-col="{ span: 2 }" :wrapper-col="{ span: 22 }">
            <a-textarea
              htmlType="submit"
              placeholder="描述该项目，展示你的项目经验立刻打动招聘方～例如：1.项目背景 2.项目目标 3.项目概述等"
              :rows="3"/>
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row class="form-row" :gutter="16">
        <a-col :lg="24"  :sm="24">
          <a-form-model-item label="项目职责" :label-col="{ span: 2 }" :wrapper-col="{ span: 22 }">
            <a-textarea
            htmlType="submit"
            placeholder="描述你在该项目中的职责，是时候展示你的工作能力了！例如：1. 你在项目中担任的角色 2. 项目中有哪些困难、难点 3. 解决问题的方法等"
            :rows="3"/>
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row class="form-row" :gutter="16">
        <a-col :lg="24"  :sm="24">
          <a-form-model-item label="项目业绩" :label-col="{ span: 2 }" :wrapper-col="{ span: 22 }">
            <a-textarea htmlType="submit"
            placeholder="描述你的项目业绩，用业绩说话让招聘方快速记住你！例如：1. 目标达成情况 2. 我的贡献 3. 我的收获等. 你在项目中担任的角色 2. 项目中有哪些困难、难点 3. 解决问题的方法等"
            :rows="3"/>
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
