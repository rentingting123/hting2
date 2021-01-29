<!--  -->
<template>
  <div :class="type == 1?'title1':'title0'" class="title">{{ title }}</div>
</template>
<script>
	export default {
		data() {
			//这里存放数据
			return {

			};
		},
		props: ['title','type'],
	}
</script>
<style scoped>
	.title{
		height: 30px;
		font-weight: 500;
		color: #2F437C;
		line-height: 25px;
		position: relative;
		margin-bottom: 10px;
	}
	.title1{
		font-size: 20px;
	}
	.title0{
		font-size: 18px;
	}
	.title0:after{
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 30px;
		height: 2px;
		background: #FF6864;
		border-radius: 2px;
	}
</style>