<!-- 排名 -->
<template>
	<div class='ranking'>
		<a-tabs
			default-active-key="1"
			@change="callback"
			class="rankTitleBox"
			:tabBarStyle="{borderBottom: 'none'}">
      <a-tab-pane key="1" tab="月排名">
      </a-tab-pane>
      <a-tab-pane key="2" tab="季度排名" >
      </a-tab-pane>
      <a-tab-pane key="3" tab="年度排名">
      </a-tab-pane>
    </a-tabs>
		<a-row :gutter="24" style="margin-top:20px">
			<a-col :sm="24" :md="12" :xl="8" >
				<RankList title="业绩排名" :list="rankListdata"></RankList>
			</a-col>
			<a-col :sm="24" :md="12" :xl="8" >	
				<RankList title="推荐量排名" :list="rankListdata"></RankList>
			</a-col>
				<a-col :sm="24" :md="12" :xl="8" >
				<RankList title="通过率排名" :list="rankListdata"></RankList>
			</a-col>
		</a-row>
	</div>
</template>

<script>
import RankList from './RankList';

const rankListdata = []
for (let i = 0; i < 5; i++) {
  rankListdata.push({
		name: '张三 ' + (i + 1) ,
		job: "科技组",
    total: 1234.56 - i * 100
  })
}
export default {
	data() {
		//这里存放数据
		return {
			rankListdata
			
		};
	},
	components:{
		RankList
	},
	//监听属性 类似于data概念
	computed: {},
	//监控data中的数据变化
	watch: {},
	//方法集合
	methods: {
		callback(key) {
			console.log(key);
		},
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
	.rankTitleBox{
		height: 50px;
		background: #FFFFFF;
		box-shadow: 0px 0px 14px 0px rgba(218, 223, 255, 0.88);
		border-radius: 10px;
		margin:0;
		padding: 0 20px
	}
</style>