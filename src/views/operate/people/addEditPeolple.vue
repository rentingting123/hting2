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
    <a-form
			layout="horizontal"
			:label-col="formLayout.labelCol"
      :wrapper-col="formLayout.wrapperCol">
			<a-form-item label="姓 名">
        <a-input v-model="queryParam.name" placeholder="请输入姓名" allowClear />
      </a-form-item>
			<a-form-item label="电话">
        <a-input v-model="queryParam.tel" placeholder="请输入电话" allowClear />
      </a-form-item>
      <a-form-item label="邮箱">
        <a-input v-model="queryParam.tel" placeholder="请输入邮箱" allowClear />
      </a-form-item>
      <a-form-item label="年度目标">
        <a-input v-model="queryParam.tel" placeholder="请输入年度目标" allowClear />
      </a-form-item>
      <a-form-item label="部门">
        <a-select v-model="queryParam.status" placeholder="请选择部门" default-value="0" allowClear >
          <a-select-option value="0">全部</a-select-option>
          <a-select-option value="1">关闭</a-select-option>
          <a-select-option value="2">运行中</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="职级">
        <a-select v-model="queryParam.status0" placeholder="请选择职级" default-value="0" allowClear >
          <a-select-option value="0">全部</a-select-option>
          <a-select-option value="1">关闭</a-select-option>
          <a-select-option value="2">运行中</a-select-option>
        </a-select>
      </a-form-item>
			<a-form-item label="职位">
        <a-input v-model="queryParam.tel" placeholder="请输入职位" allowClear />
      </a-form-item>
      <a-form-item label="角色">
        <a-radio-group v-model="juese" @change="onChange">
          <a-radio :value="1">
            其它
          </a-radio>
          <a-radio  :value="2">
            管理员
          </a-radio>
        </a-radio-group>
      </a-form-item>
			<a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol" class="textAC">
				<a-button key="back" @click="handleCancel" class="clear-from-button1 btnR">
					取消
				</a-button>
				<a-button key="submit" type="primary" class="primarybtn btnR marginleft" :loading="loading" @click="handleOk">
					保存 
				</a-button>
			</a-form-item>
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
			Title:'添加人员',
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
  },
};
</script>
