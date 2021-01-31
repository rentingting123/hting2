<template>
  <a-radio-group v-model="value" @change="onChange" class="Radiogroup">
		<a-row v-for="(item,index) in list" :key="index" class="rowRadioStyle">
      <a-col :span="20" >
        <a-radio :value="item.id" class="radioStyle">
					<span>{{ item.name }}</span>
				</a-radio>
      </a-col>
			<a-col :span="4" class="RadioOption">
				<i class="iconfont redColor" @click="deleteData(item.id)">&#xe614;</i>
				<i class="iconfont primColor"  @click="editData(item.id)">&#xe615;</i>
      </a-col>
		</a-row>
  </a-radio-group>
</template>
<script>
const list = [
	{
		id: 1,
		name: '互联网/软件/游戏'
	},
	{
		id: 2,
		name: '电子/通信/硬件'
	},
	{
		id: 3,
		name: '电子/通信/硬件'
	}
];
export default {
  data() {
    return {
			value: 1,
			list,
    };
  },
  props: ['type'],
  methods: {
    onChange(e) {
      console.log('radio checked', e.target.value);
		},
		deleteData(id){
			console.log(id);
		},
		editData(id){
			console.log(id);
		},
  },
};
</script>
