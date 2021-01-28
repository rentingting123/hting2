<!--  -->
<template>
  <div class='title'>{{ title }}</div>
</template>
<script>
	export default {
		data() {
			//这里存放数据
			return {

			};
		},
		props: ['title'],
	}
</script>
<style scoped>
	.title{
		height: 30px;
		font-size: 18px;
		font-weight: 500;
		color: #2F437C;
		line-height: 25px;
		position: relative;
		margin-bottom: 10px;
	}
	.title:after{
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