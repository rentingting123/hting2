<!--  -->
<template>
	<div class='Statistics'>
		<a-row :gutter="10">
			<a-col :sm="24" :md="10" :xl="11" >
				<a-radio-group
					v-model="mode"
					default-value="1"
					button-style="solid">
					<a-radio-button :value="1">
						上周
					</a-radio-button>
					<a-radio-button :value="2">
						本周
					</a-radio-button>
					<a-radio-button :value="3">
						本月
					</a-radio-button>
					<a-radio-button :value="4">
						本季
					</a-radio-button>
				</a-radio-group>
			</a-col>
			<a-col :sm="24" :md="8" :xl="9">
				<a-range-picker @change="onChange">
					<a-icon slot="suffixIcon" type="schedule" />
				</a-range-picker>
			</a-col>
			<a-col :sm="24" :md="4" :xl="4">
				<a-select default-value="lucy" @change="handleChange" style="width:100%">
					<a-select-option value="jack">
						组员1李四
					</a-select-option>
				</a-select>
			</a-col>
		</a-row>
		<div class="statisList">
			<a-row :gutter="[10,20]">
				<a-col :span="6" :key="i" v-for="(item, i) in projects">
					<div class="cardbox">
						<img :src="item.cover" alt="" class="cover">
						<div>
							<div class="title">{{ item.title }}</div>
							<div class="number">{{ item.number }}</div>
						</div>
					</div>
				</a-col>
			</a-row>
		</div>
	</div>
</template>

<script>
import { icon } from "@/assets/img/index.js"
const projects = [
	{
		title: '简历推荐',
		number: 222,
		cover: icon.Statistics1
	},
	{
		title: '初试',
		number: 222,
		cover: icon.Statistics2
	},
	{
		title: '复试',
		number: 222,
		cover: icon.Statistics3
	},
	{
		title: 'offer',
		number: 222,
		cover: icon.Statistics4
	},
	{
		title: '入职',
		number: 222,
		cover: icon.Statistics5
	},
	{
		title: '过保',
		number: 222,
		cover: icon.Statistics6
	},
	{
		title: '客户录入',
		number: 222,
		cover: icon.Statistics7
	},
	{
		title: '客户签约',
		number: 222,
		cover: icon.Statistics8
	},
	{
		title: '职位发布',
		number: 222,
		cover: icon.Statistics9
	},
	{
		title: '录入简历',
		number: 222,
		cover: icon.Statistics10
	},
	{
		title: '回款',
		number: 222,
		cover: icon.Statistics11
	},
	{
		title: '风险提醒',
		number: 222,
		cover: icon.Statistics12
	}
]
export default {
	data() {
	//这里存放数据
		return {
			mode: 1,
			projects
		};
	},
	//监听属性 类似于data概念
	computed: {},
	//监控data中的数据变化
	watch: {},
	methods: {
		onChange(date, dateString) {
      console.log(date, dateString);
		},
		handleChange(){
			console.log("组员选择")
		}
	},
	created() {

	},
	mounted() {
		
	},
}
</script>
<style  scoped>
.Statistics{
    height: 360px;
    /* background: turquoise; */
}

.cardbox{
	background: #fff;
	display: flex;
	flex-direction: row;
	border-radius: 8px;
	align-items: center;
	height: 88px;
	padding: 12px;
	box-sizing: border-box;
	box-shadow: 0px 0px 14px 0px rgba(218, 223, 255, 0.88);
}
.cardbox .cover{
	width: 44px;
	height: 44px;
	margin-right: 8px;
}
.statisList{
	margin: 20px 0 0;
}
.title{
	color: #282828;
	font-size: 13px;
	letter-spacing: 1px;
}
.number{
	font-size: 20px;
	font-weight: 500;
	color: #2F437C;
	line-height: 33px;
	letter-spacing: 1px;
}
</style>