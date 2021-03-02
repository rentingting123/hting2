<!--  -->
<template>
    <a-row :gutter="16">
      <a-col :xs="24" :md="12" :xl="6"
				v-for="(item, index) in cardList"
				:key="index">
        <a-card
					:title="item.title"
					:bordered="false"
					:hoverable='true'
					class="cardBox maxHeight"
					:headStyle='headStyle'
					:bodyStyle='bodyStyle'>
          <a class="primColor" slot="extra" @click="addIndustry(item.type)">+新建</a>
					<radioGroupList
						:type='item.type'
						:listData="item.listData"
						@queryList="queryList"
						@getChildrenList="getChildrenList"
						@listEdit="industryEdit"
						/>
        </a-card>
      </a-col>
			<addEdit
				:visible='visible'
				@queryList="queryList"
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
const cardList = [
	{
		type: 1,
		title:'行业一级类目',
		listData: []
	},
		{
		type: 2,
		title:'行业二级类目',
		listData: []
	},
		{
		type: 3,
		title:'行业三级类目',
		listData: []
	},
		{
		type: 4,
		title:'行业四级类目',
		listData: []
	},
]
export default {
	data() {
		return {
			cardList,// card列表
			headStyle,
			bodyStyle,
			visible: false,
			type: 1,// 页面类型
			details: undefined,// ID
		};
	},
	components: {
		radioGroupList,
		addEdit
	},
	mounted(){
		this.getIndustryList(1);
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
		queryList(){
			this.visibleCancel()
			this.getIndustryList(1);
		},
		// 查询子列表
		getChildrenList(obj){
			this.getIndustryList(obj.type,obj.value);
		},
		industryEdit(val){
			this.type = val.type;
			this.visible = true
			this.details = {...val}
		},
		getIndustryList(type,value){
				console.log(type,value,3434);
			let obj = {
				parentId: value ? value : 0
			};
			industryPage(obj).then(res=>{
				if(res.data.code === 1 ){
					this.cardList[type-1].listData =res.data.data.list
					console.log(type,this.cardList,res.data.data.list);
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