<!--  -->
<template>
	<div class=''>
		<div class="searchForm flexSpace">
			<div class="titlebox"> 
				<span>
					CTO
					<a-badge count="急" :numberStyle="numberStyle"></a-badge>
				</span>
				<span class="redColor">BD:白玉 </span>
				<span>PM:张三</span>
				<span>RC:李四</span>
				<span>HC:1</span>
				<span>发布时间:2020/12/31</span>
				<span>本周推荐目标:2</span>                        
			</div>
			<div>
        <a-button type="danger" class="danger-from-button">
					<a-icon type="plus-circle" theme="filled" />推荐简历
				</a-button>
				<a-button  class="clear-from-button marginleft"><a-icon type="setting" />职位设置</a-button>
			</div>
		</div>
		<div class="marginTB">
			<a-button
				:type="showBtn === 1?'primary':''"
				:class="showBtn === 1?'primarybtn':'' "
				@click="btnChange(1)">
				推荐详情
			</a-button>
      <a-button
				:type="showBtn === 2?'primary':''"
				:class="showBtn === 2?'primarybtn':'' "
				class="marginleft"
				@click="btnChange(2)">
				职位详情
			</a-button>
		</div>
		<a-tabs v-if="showBtn === 1" class="tabs" :tabBarStyle="{borderBottom: 'none'}" >
      <a-tab-pane key="1" tab="全部(26)">
        <detailsTable />
      </a-tab-pane>
      <a-tab-pane key="2" tab="待处理(26)">
       <detailsTable />
      </a-tab-pane>
      <a-tab-pane key="3" tab="推荐(26)">
        <detailsTable />
      </a-tab-pane>
      <a-tab-pane key="4" tab="初试(26)">
        <detailsTable />
      </a-tab-pane>
			<a-tab-pane key="5" tab="复试(26)">
        <detailsTable />
      </a-tab-pane>
      <a-tab-pane key="6" tab="offer(26)">
       <detailsTable />
      </a-tab-pane>
      <a-tab-pane key="7" tab="入职(26)">
        <detailsTable />
      </a-tab-pane>
      <a-tab-pane key="8" tab="过保(26)">
        <detailsTable />
      </a-tab-pane>
			<a-tab-pane key="9" tab="不合适(26)">
        <detailsTable />
      </a-tab-pane>
    </a-tabs>
		<a-row v-if="showBtn === 2" :gutter="24">
			<a-col :sm="24" :md="12" :xl="14" >
				<detailsPL />
			</a-col>
			<a-col :sm="24" :md="12" :xl="10">
				<detailsPR />
			</a-col>
		</a-row>
	</div>
</template>

<script>
import detailsTable from './components/detailsTable'
import detailsPL from './components/detailsPL'
import detailsPR from './components/detailsPR'

const numberStyle = {
  borderRadius: '1px',
  width: '16px',
  height: '16px',
  fontSize: '12px',
  textAlign: 'center',
	padding: 0,
  lineHeight:'16px',
  background: '#FF3333'
}
export default {
	data() {
		return {
			numberStyle,
			showBtn: 1
		};
	},
	components:{
		detailsTable,
		detailsPL,
		detailsPR
	},
	//方法集合
	methods: {
		//按钮切换
		btnChange(i){
			this.showBtn = i
		}
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
/* @import url(); 引入公共css类 */

</style>