<template>
  <div>
    <a-modal
			v-model="visible"
			:title="sysDetails ? '修改人员' : ' 添加人员'"
			on-ok="handleOk"
			@cancel="handleCancel"
			:footer="null"
			>
		<template slot="closeIcon">
			<a-icon type="close-circle" theme="filled" @click="handleCancel"/>
		</template>
    <a-form-model
      ref="ruleForm"
			layout="horizontal"
			:label-col="formLayout.labelCol"
      :wrapper-col="formLayout.wrapperCol"
      :model="queryParam"
      :rules="rules">
			<a-form-model-item label="姓 名"  prop="name">
        <a-input v-model="queryParam.name" placeholder="请输入姓名" allowClear />
      </a-form-model-item>
			<a-form-model-item label="电话" prop="phoneNumber">
        <a-input v-model="queryParam.phoneNumber" placeholder="请输入电话" allowClear />
      </a-form-model-item>
      <a-form-model-item label="邮箱">
        <a-input v-model="queryParam.email" placeholder="请输入邮箱" allowClear />
      </a-form-model-item>
      <a-form-model-item label="年度目标">
        <a-input v-model="queryParam.annualTarget" placeholder="请输入年度目标" allowClear />
      </a-form-model-item>
      <a-form-model-item label="部门" prop="departmentId">
        <a-select v-model="queryParam.departmentId" placeholder="请选择部门" default-value="0" allowClear >
          <a-select-option value="0">全部</a-select-option>
          <a-select-option value="1">关闭</a-select-option>
          <a-select-option value="2">运行中</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="职级" prop="positionRank">
        <a-select v-model="queryParam.positionRank" placeholder="请选择职级" default-value="0" allowClear >
          <a-select-option value="0">全部</a-select-option>
          <a-select-option value="1">关闭</a-select-option>
          <a-select-option value="2">运行中</a-select-option>
        </a-select>
      </a-form-model-item>
			<a-form-model-item label="职位">
        <a-input v-model="queryParam.job" placeholder="请输入职位" allowClear />
      </a-form-model-item>
      <a-form-model-item label="角色" prop="roleType">
        <a-radio-group v-model="queryParam.roleType" @change="onChange">
          <a-radio :value="1">
            管理员
          </a-radio>
          <a-radio  :value="2">
            其它
          </a-radio>
        </a-radio-group>
      </a-form-model-item>
			<a-form-model-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol" class="textAC">
				<a-button @click="handleCancel" class="clear-from-button1 btnR">
					取消
				</a-button>
				<a-button
          type="primary"
          class="primarybtn btnR marginleft"
          :loading="loading"
          @click="handleOk"
          >
					保存 
				</a-button>
			</a-form-model-item>
    </a-form-model>
    </a-modal>
  </div>
</template>
<script>
import {sysBackerAdd,sysBackerEdit} from "@/api/Interface/operate" //接口
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
			formLayout,
			formTailLayout,
			queryParam:{},
			juese: 1,
      rules: { 
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
        ],
        phoneNumber: [
          { required: true,len: 11, pattern: RegExp(/^[1][3,4,5,6,7,8,9][0-9]{9}$/), message: '请输入正确的电话', trigger: 'blur' },
        ],
        departmentId: [
          { required: true, message: '请选择部门', trigger: 'change' },
        ],
        positionRank: [
          { required: true, message: '请选择职级', trigger: 'change' },
        ],
        roleType: [
          { required: true, message: '请选择角色', trigger: 'change' },
        ],
      },
    };
  },
  props:['visible','sysDetails'],
    watch: {
      sysDetails(val){
        this.queryParam =val? val : {}
      }
	},
  methods: {
    check() {
      this.form.validateFields(err => {
        if (!err) {
          console.info('success');
        }
      });
    },
    handleOk() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          if(this.details && this.details.id){
            this.submitEdit();
          }else{
            this.submitAdd()
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    // 添加
    submitAdd() {
      this.loading = true;
			let obj = {
				...this.queryParam
			};
			sysBackerAdd(obj).then(res=>{
				if(res.data.code === 1 ){
					this.loading = false;
					this.$message.success(res.data.message);
					this.$emit('visibleCancel');
					// this.getIndustryList(val);
				}else{
					this.$message.error(res.data.message);
				}
			})
    },
		// 修改
		submitEdit(){
			let obj = {
				...this.queryParam
			};
			sysBackerEdit(obj).then(res=>{
				if(res.data.code === 1 ){
					this.$message.success(res.data.message);
					this.$emit('visibleCancel');
					// this.getIndustryList(val);
				}else{
					console.log("修改失败")
				}
			})
		},
    onChange(val){
      console.log(val);
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
