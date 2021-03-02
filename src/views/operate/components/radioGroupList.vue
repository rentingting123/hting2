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
import { industryDelete, jobsDelete} from "@/api/Interface/operate" //接口
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
				type: this.type + 1
			};
			this.$emit('getChildrenList',obj);
		},
		deleteData(id){
			if(this.type === 1 || this.type === 2 || this.type === 3 ||this.type === 4){
				this.industryDeleteFun(id)
			}
			if(this.type === 5 || this.type === 6 || this.type === 7 ||this.type === 8){
				this.jobsDeleteFun(id)
			}
		},
		industryDeleteFun(id){
			industryDelete(id).then(res=>{
				if(res.data.code === 1 ){
					this.$message.success(res.data.message);
					this.$emit('queryList');
				}else{
					this.$message.error(res.data.message);
				}
			});
		},
		jobsDeleteFun(id){
			jobsDelete(id).then(res=>{
				if(res.data.code === 1 ){
					this.$message.success(res.data.message);
					this.$emit('queryList');
				}else{
					this.$message.error(res.data.message);
				}
			});
		},
		editData(item){
			const obj = {
				id: item.id,
				type: this.type,
				name: item.name
			};
			this.$emit('listEdit',obj);
		},
  },
};
</script>
