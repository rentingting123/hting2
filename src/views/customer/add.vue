<!--  -->
<template>
 <div>
	<a-card class="card" title="企业基本信息" :bordered="false">
		<info-form ref="info" :showSubmit="false" />
	</a-card>
	<a-card>
		<a-table
			:columns="columns"
			:dataSource="data"
			:pagination="false"
			:loading="memberLoading"
			>
			<template v-for="(col, i) in ['name', 'workId', 'department']" :slot="col" slot-scope="text, record">
				<a-input
					:key="col"
					v-if="record.editable"
					style="margin: -5px 0"
					:value="text"
					:placeholder="columns[i].title"
					@change="e => handleChange(e.target.value, record.key, col)"
				/>
				<template v-else>{{ text }}</template>
			</template>
			<template slot="operation" slot-scope="text, record">
				<template v-if="record.editable">
					<span v-if="record.isNew">
						<a @click="saveRow(record)">添加</a>
						<a-divider type="vertical" />
						<a-popconfirm title="是否要删除此行？" @confirm="remove(record.key)">
							<a>删除</a>
						</a-popconfirm>
					</span>
					<span v-else>
						<a @click="saveRow(record)">保存</a>
						<a-divider type="vertical" />
						<a @click="cancel(record.key)">取消</a>
					</span>
				</template>
				<span v-else>
					<a @click="toggle(record.key)">编辑</a>
					<a-divider type="vertical" />
					<a-popconfirm title="是否要删除此行？" @confirm="remove(record.key)">
						<a>删除</a>
					</a-popconfirm>
				</span>
			</template>
		</a-table>
		<a-button style="width: 100%; margin-top: 16px; margin-bottom: 8px" type="dashed" icon="plus" @click="newMember">新增成员</a-button>
	</a-card> 
 </div>
</template>

<script>
import infoForm from './infoForm'
export default {
	data() {
		//这里存放数据
		return {

		};
	},
	components: {
    infoForm,
  },
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

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