<template>
  <a-radio-group v-if="listData.length>0" v-model="value" @change="onChange" class="Radiogroup">
		<a-row v-for="(item,index) in listData" :key="index" class="rowRadioStyle">
      <a-col :span="20" >
        <a-radio :value="item.id" class="radioStyle">
					<span>{{ item.name }}</span>
				</a-radio>
      </a-col>
			<a-col :span="4" class="RadioOption">
				<i class="iconfont redColor" @click="deleteData(item.id)">&#xe614;</i>
				<i class="iconfont primColor"  @click="editData(item)">&#xe615;</i>
      </a-col>
		</a-row>
  </a-radio-group>
	<a-empty v-else/>
</template>
<script>
import { industryDelete } from "@/api/Interface/operate" //接口
export default {
  data() {
    return {
			value: 1,
    };
  },
  props: ['type','listData'],
  methods: {
    onChange(e) {
			const obj = {
				value: e.target.value,
				type: this.type
			};
			this.$emit('getIndustryList',obj);
		},
		deleteData(id){
			industryDelete(id).then(res=>{
				if(res.data.code === 1 ){
					this.$message.success(res.data.message);
					this.$emit('visibleCancel');
				}else{
					console.log("修改失败")
				}
			})
		},
		editData(item){
			const obj = {
				id: item.id,
				type: this.type,
				name: item.name
			};
			this.$emit('industryEdit',obj);
		},
  },
};
</script>
