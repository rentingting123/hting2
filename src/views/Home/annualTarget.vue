<!--  -->
<template>
    <div class='annualTarget'>
      <div class="kpibox">
				<span class="kpitit">年度目标</span>
				<div class="kpitext">{{ kpi }}万</div>
			</div> 
    </div>
</template>

<script>

export default {
	data() {
		return {
			kpi: 200 //年度目标
		};
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
.annualTarget{
	width: 100%;
	height: 360px;
	background: #FFFFFF;
	box-shadow: 0px 0px 14px 0px rgba(218, 223, 255, 0.88);
	border-radius: 24px;
}
.kpibox{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
}
.kpitit{
	font-size: 16px;
	font-weight: 500;
	color: #282828;
}
.kpitext{
	font-size: 22px;
	font-weight: 600;
	color: #435EBE;
}
</style>