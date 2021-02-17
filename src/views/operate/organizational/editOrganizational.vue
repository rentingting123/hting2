<template>
  <div>
    <a-modal
			v-model="visible"
			:title="Title"
			on-ok="handleOk"
			@cancel="handleCancel"
			:footer="null"
			>
		<template slot="closeIcon">
			<a-icon type="close-circle" theme="filled" @click="handleCancel"/>
		</template>
    <!-- layout="horizontal"
			:label-col="formLayout.labelCol"
      :wrapper-col="formLayout.wrapperCol" -->
    <a-form	layout="inline">
      <div class="primColor ">部门设置</div>
			<a-form-item label="部门名称">
        <a-input v-model="queryParam.name1" placeholder="请输入" allowClear />
      </a-form-item>
      <a-form-item label="部门主管">
        <a-select v-model="queryParam.status1" placeholder="请选择" default-value="0" allowClear style="width:100px">
          <a-select-option value="0">全部</a-select-option>
          <a-select-option value="1">关闭</a-select-option>
          <a-select-option value="2">运行中</a-select-option>
        </a-select>
      </a-form-item>
      <div class="departbox">
        <span class="primColor">添加子部门</span> 
        <span class="redColor"  @click="addDepartant()">+添加</span></div>
      <a-form-item label="部门名称">
        <a-input v-model="queryParam.name1" placeholder="请输入" allowClear />
      </a-form-item>
      <a-form-item label="部门主管">
        <a-select v-model="queryParam.status1" placeholder="请选择" default-value="0" allowClear style="width:100px">
          <a-select-option value="0">全部</a-select-option>
          <a-select-option value="1">关闭</a-select-option>
          <a-select-option value="2">运行中</a-select-option>
        </a-select>
      </a-form-item>
      <div class="primColor marginTop">部门成员</div>

    </a-form>
    </a-modal>
  </div>
</template>
<script>
const formLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};
const formTailLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14, offset: 4 },
};
export default {
  data() {
    return {
      loading: false,
			Title:'编辑',
			formLayout,
			formTailLayout,
			queryParam:{},
			juese: 1,
    };
  },
  props:['visible'],
  methods: {
    check() {
      this.form.validateFields(err => {
        if (!err) {
          console.info('success');
        }
      });
    },
    handleOk() {
      this.loading = true;
      setTimeout(() => {
        this.$emit('visibleCancel');
        this.loading = false;
      }, 3000);
    },
    handleCancel() {
      this.$emit('visibleCancel');
		},
		handleChange(e) {
      this.juese = e.target.checked;
      this.$nextTick(() => {
        this.form.validateFields(['nickname'], { force: true });
      });
    },
    addDepartant(){

    }
  },
};
</script>
<style scoped>
  .departbox{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 14px 0 0;
  }
</style>
