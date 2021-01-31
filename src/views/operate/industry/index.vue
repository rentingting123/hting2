<!--  -->
<template>
    <a-row :gutter="16">
      <a-col :span="6">
        <a-card
					title="行业一级类目"
					:bordered="false"
					:hoverable='true'
					class="cardBox"
					:headStyle='headStyle'
					:bodyStyle='bodyStyle'>
          <a class="primColor" slot="extra" @click="addIndustry(1)">+新建</a>
					<radioGroupList :type='1'/>
        </a-card>
      </a-col>
      <a-col :span="6">
				<a-card
					title="行业二级类目"
					:bordered="false"
					:hoverable='true'
					class="cardBox"
					:headStyle='headStyle'
					:bodyStyle='bodyStyle'>
           <a class="primColor" slot="extra" @click="addIndustry(2)">+新建</a>
					<radioGroupList :type='1'/>
        </a-card>
      </a-col>
      <a-col :span="6">
				<a-card
					title="行业三级类目"
					:bordered="false"
					:hoverable='true'
					class="cardBox"
					:headStyle='headStyle'
					:bodyStyle='bodyStyle'>
           <a class="primColor" slot="extra" @click="addIndustry(3)">+新建</a>
					<radioGroupList :type='1'/>
        </a-card>
      </a-col>
      <a-col :span="6">
				<a-card
					title="行业四级类目"
					:bordered="false"
					:hoverable='true'
					class="cardBox"
					:headStyle='headStyle'
					:bodyStyle='bodyStyle'>
           <a class="primColor" slot="extra" @click="addIndustry(4)">+新建</a>
					<radioGroupList :type='1'/>
        </a-card>
      </a-col>
			<addEdit :visible='visible' @visibleCancel="visibleCancel(2)" :type="type" />
    </a-row>
</template>

<script>
import radioGroupList from '../components/radioGroupList.vue'
import addEdit from '../components/addEdit'
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
		};
	},
	components: {
		radioGroupList,
		addEdit
	},
	methods: {
		addIndustry(i){
			this.type = i
			this.visible = true 
		},
		visibleCancel(){
			this.visible = false 
		}
	},
}
</script>
<style scoped>
/* @import url(); 引入公共css类 */

</style>