<!--  -->
<template>
    <a-row :gutter="16">
      <a-col :xs="24" :md="12" :xl="6">
        <a-card
					title="岗位一级类目"
					:bordered="false"
					:hoverable='true'
					class="cardBox maxHeight"
					:headStyle='headStyle'
					:bodyStyle='bodyStyle'>
          <a class="primColor" slot="extra" @click="addJobs(5)">+新建</a>
					<radioGroupList
						:type='5'
						:listData="listData1"
						@getList="getJobsList"
						@listEdit="jobEdit"/>
        </a-card>
      </a-col>
      <a-col :xs="24" :md="12" :xl="6">
				<a-card
					title="岗位二级类目"
					:bordered="false"
					:hoverable='true'
					class="cardBox maxHeight"
					:headStyle='headStyle'
					:bodyStyle='bodyStyle'>
           <a class="primColor" slot="extra" @click="addJobs(6)">+新建</a>
					<radioGroupList
						:type='6'
						:listData="listData2"
						@getList="getJobsList"
						@listEdit="jobEdit"/>
        </a-card>
      </a-col>
      <a-col :xs="24" :md="12" :xl="6">
				<a-card
					title="岗位三级类目"
					:bordered="false"
					:hoverable='true'
					class="cardBox maxHeight"
					:headStyle='headStyle'
					:bodyStyle='bodyStyle'>
           <a class="primColor" slot="extra" @click="addJobs(7)">+新建</a>
					<radioGroupList
						:type='7'
						:listData="listData3"
						@getList="getJobsList"
						@listEdit="jobEdit"/>
        </a-card>
      </a-col>
      <a-col :xs="24" :md="12" :xl="6">
				<a-card
					title="岗位四级类目"
					:bordered="false"
					:hoverable='true'
					class="cardBox maxHeight"
					:headStyle='headStyle'
					:bodyStyle='bodyStyle'>
           <a class="primColor" slot="extra" @click="addJobs(8)">+新建</a>
					<radioGroupList
						:type='8'
						:listData="listData4"
						@listEdit="jobEdit"/>
        </a-card>
      </a-col>
			<addEdit
				:visible='visible'
				@visibleCancel="visibleCancel()"
				:type="type"
				:details="details"/>
    </a-row>
</template>

<script>
import radioGroupList from '../components/radioGroupList.vue'
import addEdit from '../components/addEdit'
import {jobsPage} from "@/api/Interface/operate" //接口

const headStyle = {
	borderBottom: 'none',
	padding: '0 14px',
}
const bodyStyle = {
	padding: '14px',
}
export default {
	data() {
		return {
			headStyle,
			bodyStyle,
			visible: false,
			type: 5,// 页面类型
			details: undefined,//ID
			listData1: [],// 列表数据 一级
			listData2: [],// 列表数据 二级
			listData3: [],// 列表数据 三级
			listData4: []// 列表数据 四级
		};
	},
	components: {
		radioGroupList,
		addEdit
	},
	mounted(){
		this.getJobsList();
	},
	methods: {
		addJobs(i){
			this.type = i
			this.visible = true 
		},
		visibleCancel(){
			this.visible = false 
			this.details = undefined
		},
		jobEdit(val){
			this.type = val.type;
			this.visible = true
			this.details = {...val}
		},
		getJobsList(val){
			let obj = {
				parentId: val ? val.value : 0
			};
			jobsPage(obj).then(res=>{
				console.log(res);
				if(res.data.code === 1 ){
					if(val && val.type === 5){
						this.listData2 = res.data.data.list;
					}else if(val && val.type === 6){
						this.listData3 = res.data.data.list;
					}else if(val && val.type === 7){
						this.listData4 = res.data.data.list;
					}else{
						this.listData1 = res.data.data.list;
					}
				}else{
					console.log("查询失败")
				}
			})
		}
	},
}
</script>
<style scoped>
/* @import url(); 引入公共css类 */

</style>