<!--  -->
<template>
    <div class='annualTarget'>
      <div class="kpibox">
				<span class="kpitit">年度目标</span>
				<div class="kpitext">{{ kpi }}万</div>
			</div> 
			<div id="main" ref="main"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
	data() {
		return {
			kpi: 200., //年度目标
			option: null //图表配置
		};
	},
	// 生命周期 - 创建完成（可以访问当前this实例）
	created() {
		this.drawChart()
	},
	// 方法集合
	methods: {
		drawChart(){
			this.$nextTick(()=>{
				const chartDom = this.$refs.main;
				const myChart = echarts.init(chartDom);
				this.option = {
					tooltip: {
						trigger: 'item'
					},
					color:['#56C8E9','#435EBE'],
					legend: {
						bottom: '1%',
						// left: 'center'
					},
					grid:{
						y:-20,
					},
					series: [
						{
							name: '年度目标',
							type: 'pie',
							radius: ['40%', '70%'],
							avoidLabelOverlap: false,
							label: {
								show: false,
								position: 'center'
							},
							emphasis: {
								label: {
									show: true,
									fontSize: '20',
									fontWeight: 'bold'
								}
							},
							labelLine: {
								show: false
							},
							data: [
								{value: 300, name: '未完成'},
								{value: 700, name: '已完成'},
							]
						}
					]
				};
				this.option && myChart.setOption(this.option);
			})
		}
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
	padding: 16px 16px 0;
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
#main{
	width: 100%;
	height: 310px;
	margin-top:-20px ;
	/* background: #f00; */
}
</style>