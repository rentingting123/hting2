<!--  -->
<template>
	<a-row :gutter="16">
		<a-col
			v-for="(item, index) in resourcesList"
			:key="index"
			:xs="24"
			:md="12"
			:xl="8"
		>
			<div class='annualTarget'>
				<div class="kpibox">{{ item.title }}</div> 
				<div
					class="resourceEchart"
					:id="'main'+index"
					:ref="'main'+index">
				</div>
				<div class="descript">
					<a-space >
						<span>{{ item.desc1 }}</span>
						<span>{{ item.desc2 }}</span>
					</a-space>
				</div>
			</div>
		</a-col>
	</a-row>
</template>

<script>
import * as echarts from 'echarts';

export default {
	data() {
		return {
			resourcesList:[
				{
					title: "账号到期日期",
					noUse:'70%',
					toUse:'30%',
					name:'剩余可用天数',
					number:'758',
					unit:'天',
					desc1:"开始日期：2020-04-22",
					desc2:'结束日期：2023-04-22'
				},
				{
					title: "账号使用情况",
					noUse:'70%',
					toUse:'30%',
					name:'剩余可用账号',
					number:'58',
					unit:'个',
					desc1:"已购买账号数：1",
					desc2:'已使用账号数：100'
				},
				{
					title: "通话时长情况",
					noUse:'70%',
					toUse:'30%',
					name:'剩余通话分钟数',
					number:'158',
					unit:'分钟',
					desc1:"已购买分钟数：0 min",
					desc2:'已使用分钟数：100min'
				},
			],
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
  			// const resourceEchart = document.getElementsByClassName('resourceEchart');
				// const chartDom = this.$refs.main1;
				// const myChart = echarts.init(chartDom);
				// this.option = {
				// 	tooltip: {
				// 		trigger: 'item'
				// 	},
				// 	color:['#56C8E9','#435EBE'],
				// 	legend: {
				// 		bottom: '1%',
				// 		// left: 'center'
				// 	},
				// 	grid:{
				// 		y:-20,
				// 	},
				// 	series: [
				// 		{
				// 			name: '年度目标',
				// 			type: 'pie',
				// 			radius: ['40%', '70%'],
				// 			avoidLabelOverlap: false,
				// 			label: {
				// 				show: false,
				// 				position: 'center'
				// 			},
				// 			emphasis: {
				// 				label: {
				// 					show: true,
				// 					fontSize: '20',
				// 					fontWeight: 'bold'
				// 				}
				// 			},
				// 			labelLine: {
				// 				show: false
				// 			},
				// 			data: [
				// 				{value: 300, name: '未完成'},
				// 				{value: 700, name: '已完成'},
				// 			]
				// 		}
				// 	]
				// };
				// this.option && myChart.setOption(this.option);
			})
		}
	},
}
</script>
<style scoped>
.annualTarget{
	width: 100%;
	height: 420px;
	background: #FFFFFF;
	box-shadow: 0px 0px 14px 0px rgba(218, 223, 255, 0.88);
	border-radius: 24px;
}
.kpibox{
	padding: 16px;
	font-size: 16px;
	font-weight: 500;
	color: #282828;
}
.resourceEchart{
	width: 100%;
	height: 310px;
	margin-top:-20px ;
	/* background: #f00; */
}
.descript{
	text-align: center;
	line-height: 50px;
}
</style>