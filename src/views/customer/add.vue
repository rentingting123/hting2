<!--  -->
<template>
 <div>
	<a-card :bordered="false" class="cardBox">
		<Title title='企业基本信息'></Title>	
		<info-form ref="info" :showSubmit="false" />
	</a-card>
	<a-card :bordered="false" class="cardBox" >
		<Title title='企业联系人'></Title>	
		<business />
	</a-card>
	<a-card :bordered="false" class="cardBox">
		<Title title='高管介绍'></Title>	
		<addManagement />
	</a-card>
	<a-card :bordered="false" class="cardBox">
		<Title title='企业福利'></Title>	
		<addWelfare ref="info" :showSubmit="false" />
	</a-card>
	<a-card :bordered="false" class="cardBox">
		<Title title='企业相册'></Title>	
		<addImage  :showSubmit="false" />
	</a-card>
	<a-card :bordered="false" class="cardBox">
		<Title title='营业执照'></Title>	
		<addImage :showSubmit="false" />
	</a-card>
	<div class="optionbox">
		<a-button key="back" @click="handleCancel" class="clear-from-button1 btnR">
			取消
		</a-button>
		<a-button key="submit" type="primary" class="primarybtn btnR marginleft" :loading="loading" @click="handleOk">
			保存 
		</a-button>
	</div>
 </div>
</template>

<script>
import infoForm from './components/infoForm'
import Title from '@/components/title'
import business from './components/addBusiness'
import addManagement from './components/addManagement'
import addWelfare from './components/addWelfare'
import addImage from './components/addImage'

export default {
	data() {
		//这里存放数据
		return {

		};
	},
	components: {
		infoForm,
		Title,
		business,
		addManagement,
		addWelfare,
		addImage
  },
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style scoped>
.optionbox{
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>