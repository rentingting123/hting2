<template>
<div>
  <a-form-model
    ref="dynamicValidateForm"
    :model="form"
    layout="inline">
    <a-form-model-item label="姓名">
      <a-input v-model="form.name" placeholder="请输入" class="iptName" />
    </a-form-model-item>
    <a-form-model-item label="部门">
      <a-input v-model="form.depaetant" placeholder="请输入" class="iptName"/>
    </a-form-model-item>
    <a-form-model-item label="职位">
      <a-input v-model="form.position" placeholder="请输入" class="iptName"/>
    </a-form-model-item>
    <a-form-model-item label="电话">
      <a-input v-model="form.tel" placeholder="请输入" class="iptName"/>
    </a-form-model-item>
    <a-form-model-item label="邮箱">
      <a-input v-model="form.emil" placeholder="请输入" class="iptName"/>
    </a-form-model-item>
    <a-form-model-item >
      <a-button type="link"  @click="companyPeopleAdd">
        添加
      </a-button>
    </a-form-model-item>
  </a-form-model>
  <template v-if="companyList.length>0">
    <div class="companyList" v-for="(item, index) in companyList" :key="index">
      <span> 姓名：{{item.name}}</span>
      <span> 部门：{{item.depaetant}}</span>
      <span> 职位：{{item.position}}</span>
      <span> 电话：{{item.tel}}</span>
      <span> 邮箱：{{item.emil}}</span>
      <a-button type="link"  @click="deleteData(item)">
        <i class="iconfont redColor" >&#xe614;</i>
      </a-button>
    </div>
  </template> 
</div>
</template>

<script>
export default {
  data() {
    return {
      form: { },
      companyList: [] // 企业联系人列表
    }; 
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    deleteData(item) {
      let index = this.companyList.indexOf(item);
      if (index !== -1) {
        this.companyList.splice(index, 1);
      }
    },
    companyPeopleAdd() {
      this.companyList.push({
        ...this.form,
        key: Date.now(),
      });
    },
  },
};
</script>
<style>
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}
.dynamic-delete-button:hover {
  color: #777;
}
.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
.iptName{
  width: 150px !important;
}
.companyList{
  height: 40px;
  background: #F9FAFB;
  display: flex;
  justify-content: space-between;
  /* font-size: 18px; */
  color: #282828;
  line-height: 40px;
  margin-top: 10px;
  /* padding: 0 10px; */
}
.companyList > span{
  width: 150px;
}
</style>
