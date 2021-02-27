<!--  -->
<template>
    <a-row :gutter="16">
      <a-col :xs="24" :md="12" :xl="6">
        <a-card
					title="行业一级类目"
					:bordered="false"
					:hoverable='true'
					class="cardBox maxHeight"
					:headStyle='headStyle'
					:bodyStyle='bodyStyle'>
          <a class="primColor" slot="extra" @click="addIndustry(1)">+新建</a>
					<radioGroupList
					:type='1'
					:listData="listData1"
					@getList="getIndustryList"
					@listEdit="industryEdit"
					/>
        </a-card>
      </a-col>
      <a-col :xs="24" :md="12" :xl="6">
				<a-card
					title="行业二级类目"
					:bordered="false"
					:hoverable='true'
					class="cardBox maxHeight"
					:headStyle='headStyle'
					:bodyStyle='bodyStyle'>
           <a class="primColor" slot="extra" @click="addIndustry(2)">+新建</a>
					<radioGroupList
					:type='2'
					:listData="listData2"
					@getList="getIndustryList"
					@listEdit="industryEdit"/>
        </a-card>
      </a-col>
      <a-col :xs="24" :md="12" :xl="6">
				<a-card
					title="行业三级类目"
					:bordered="false"
					:hoverable='true'
					class="cardBox maxHeight"
					:headStyle='headStyle'
					:bodyStyle='bodyStyle'>
           <a class="primColor" slot="extra" @click="addIndustry(3)">+新建</a>
					<radioGroupList
						:type='3'
						:listData="listData3"
						@getList="getIndustryList"
						@listEdit="industryEdit"
					/>
        </a-card>
      </a-col>
      <a-col :xs="24" :md="12" :xl="6">
				<a-card
					title="行业四级类目"
					:bordered="false"
					:hoverable='true'
					class="cardBox maxHeight"
					:headStyle='headStyle'
					:bodyStyle='bodyStyle'>
           <a class="primColor" slot="extra" @click="addIndustry(4)">+新建</a>
					<radioGroupList
						:type='4'
						:listData="listData4"
						@listEdit="industryEdit"/>
        </a-card>
      </a-col>
			<addEdit
				:visible='visible'
				@visibleCancel="visibleCancel(2)"
				:type="type"
				:details="details"/>
    </a-row>
</template>

<script>
import radioGroupList from '../components/radioGroupList.vue'
import addEdit from '../components/addEdit'
import {industryPage} from "@/api/Interface/operate" //接口


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
			type: 1,// 页面类型
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
		this.getIndustryList();
	},
	methods: {
		addIndustry(i){
			this.type = i
			this.visible = true 
		},
		visibleCancel(){
			this.visible = false
			this.details = undefined
		},
		industryEdit(val){
			this.type = val.type;
			this.visible = true
			this.details = {...val}
		},
		getIndustryList(val){
				console.log(val);
			let obj = {
				parentId: val ? val.value : 0
			};
			industryPage(obj).then(res=>{
				console.log(res,val);
				if(res.data.code === 1 ){
					if(val && val.type === 1){
						this.listData2 = res.data.data.list;
					}else if(val && val.type === 2){
						this.listData3 = res.data.data.list;
					}else if(val && val.type === 3){
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