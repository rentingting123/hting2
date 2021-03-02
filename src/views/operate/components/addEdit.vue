<template>
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
			<a-form-item :label="label">
				<a-input v-model="queryParam.name" placeholder="请输入" allowClear />
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
</template>
<script>
import {industryAdd,industryEdit} from "@/api/Interface/operate" //接口
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
			Title:'新建一级分类',
			label:'一级类目名称',
			formLayout,
			formTailLayout,
			queryParam:{},
			checkNick: false,
    };
  },
	props:['visible','type','details'],
	watch: {
		type(){
			this.typeChange()
		},
		details(val){
			this.queryParam.name = val? val.name : undefined
			this.typeChange()
		}
	},
	mounted(){
		this.typeChange()
	},
  methods: {
		typeChange(){
			if(this.type === 1){
				this.Title = this.details?'修改一级分类':'新建一级分类';
				this.label = '一级类目名称'
			}else if(this.type === 2){
				this.Title = this.details?'修改二级分类':'新建二级分类';
				this.label = '二级类目名称'
			}else if(this.type === 3){
				this.Title = this.details?'修改三级分类':'新建三级分类';
				this.label = '三级类目名称'
			}else if(this.type === 4){
				this.Title = this.details?'修改四级分类':'新建四级分类';
				this.label = '四级类目名称'
			}else if(this.type === 5){
				this.Title = this.details?'修改岗位一级分类':'新建岗位一级分类';
				this.label = '一级类目名称'
			}else if(this.type === 6){
				this.Title = this.details?'修改岗位二级分类':'新建岗位二级分类';
				this.label = '二级类目名称'
			}else if(this.type === 7){
				this.Title = this.details?'修改岗位三级分类':'新建岗位三级分类';
				this.label = '三级类目名称'
			}else if(this.type === 8){
				this.Title = this.details?'修改岗位四级分类':'新建岗位四级分类';
				this.label = '四级类目名称'
			}
		},
    check() {
      this.form.validateFields(err => {
        if (!err) {
          console.info('success');
        }
      });
    },
		//提交
		handleOk() {
			if(this.details && this.details.id){
				this.submitEdit();
			}else{
				this.submitAdd()
			}
		},
		// 添加
    submitAdd() {
      this.loading = true;
			let obj = {
				name: this.queryParam.name,
				parentId: 0
			};
			industryAdd(obj).then(res=>{
				console.log(res);
				if(res.data.code === 1 ){
					this.loading = false;
					this.$message.success(res.data.message);
					this.$emit('queryList');
				}else{
					this.$message.error(res.data.message);
				}
			})
    },
		// 修改
		submitEdit(){
			let obj = {
				id: this.details.id,
				name: this.queryParam.name
			};
			industryEdit(obj).then(res=>{
				if(res.data.code === 1 ){
					this.$message.success(res.data.message);
					this.$emit('visibleCancel');
					this.$emit('queryList');
				}else{
					console.log("修改失败")
				}
			})
		},
    handleCancel() {
      this.$emit('visibleCancel');
		},
		handleChange(e) {
      this.checkNick = e.target.checked;
      this.$nextTick(() => {
        this.form.validateFields(['nickname'], { force: true });
      });
    },
  },
};
</script>
