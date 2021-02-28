<!--  -->
<template>
 <div>
	<a-card :bordered="false" class="cardBox">
		<Title title='基本信息（必填）'></Title>	
		<info-form ref="info" :showSubmit="false" />
	</a-card>
	<a-card :bordered="false" class="cardBox" >
		<Title title='求职意向（必填）'></Title>	
		<job-intention />
	</a-card>
	<a-card :bordered="false" class="cardBox">
		<Title title='教育经历（必填）'></Title>	
		<education />
	</a-card>
	<a-card :bordered="false" class="cardBox">
		<Title title='语言能力'></Title>	
		<language ref="info" :showSubmit="false" />
	</a-card>
	<a-card :bordered="false" class="cardBox">
		<Title title='工作经历'></Title>	
		<work  :showSubmit="false" />
	</a-card>
	<a-card :bordered="false" class="cardBox">
		<Title title='项目经历'></Title>	
		<project :showSubmit="false" />
	</a-card>
	<a-card :bordered="false" class="cardBox">
		<Title title='附加信息'></Title>	
		<Additional :showSubmit="false" />
	</a-card>
	<!-- <div class="optionbox">
		<a-button key="back" @click="handleCancel" class="clear-from-button1 btnR">
			取消
		</a-button>
		<a-button key="submit" type="primary" class="primarybtn btnR marginleft" :loading="loading" @click="handleOk">
			保存 
		</a-button>
	</div> -->
 </div>
</template>

<script>
import Title from '@/components/title'
import infoForm from './components/infoForm'
import jobIntention from './components/jobIntention'
import education from './components/education'
import language from './components/language'
import work from './components/work'
import project from './components/project'
import Additional from './components/Additional'

export default {
	data() {
		//这里存放数据
		return {

		};
	},
	components: {
		Title,
		infoForm,
		jobIntention,
		education,
		language,
		work,
		project,
		Additional
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

</style>