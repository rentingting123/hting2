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
	props:['visible','type'],
	watch: {
		type(){
			this.typeChange()
		}
	},
	mounted(){
		this.typeChange()
	},
  methods: {
		typeChange(){
			if(this.type === 1){
				this.Title = '新建一级分类';
				this.label = '一级类目名称'
			}else if(this.type === 2){
				this.Title = '新建二级分类';
				this.label = '二级类目名称'
			}else if(this.type === 3){
				this.Title = '新建三级分类';
				this.label = '三级类目名称'
			}else if(this.type === 4){
				this.Title = '新建四级分类';
				this.label = '四级类目名称'
			}else if(this.type === 5){
				this.Title = '新建岗位一级分类';
				this.label = '一级类目名称'
			}else if(this.type === 6){
				this.Title = '新建岗位二级分类';
				this.label = '二级类目名称'
			}else if(this.type === 7){
				this.Title = '新建岗位三级分类';
				this.label = '三级类目名称'
			}else if(this.type === 8){
				this.Title = '新建岗位四级分类';
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
      this.checkNick = e.target.checked;
      this.$nextTick(() => {
        this.form.validateFields(['nickname'], { force: true });
      });
    },
  },
};
</script>
