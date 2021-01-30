<!--  -->
<template>
  <div class=''>
    <a-form layout="inline" class="searchForm fromMargin">
      <a-form-item class="fromItem">
        <a-select v-model="queryParam.status" placeholder="请选择部门" default-value="0" allowClear style="width:160px">
          <a-select-option value="0">全部</a-select-option>
          <a-select-option value="1">关闭</a-select-option>
          <a-select-option value="2">运行中</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item class="fromItem">
        <a-select v-model="queryParam.status0" placeholder="请选择角色" default-value="0" allowClear style="width:160px">
          <a-select-option value="0">全部</a-select-option>
          <a-select-option value="1">关闭</a-select-option>
          <a-select-option value="2">运行中</a-select-option>
        </a-select>
      </a-form-item>
			<a-form-item class="fromItem">
        <a-input v-model="queryParam.positionName" placeholder="请输入姓名" allowClear />
      </a-form-item>
			<a-form-item class="fromItem">
        <a-button  class="clear-from-button">清除</a-button>
        <a-button type="danger" class="danger-from-button marginleft">搜索</a-button>
      </a-form-item>
      <a-form-item class="fromItem2">
        <a-button  class="clear-from-button1">
					<a-icon type="plus-circle" theme="filled" />
					添加部门
				</a-button>
				<a-button  class="clear-from-button1 marginleft">
					<a-icon type="edit" theme="filled" />
					编辑部门</a-button>
				<a-button  class="clear-from-button1 marginleft">
					<a-icon type="plus-circle" theme="filled" />
					添加人员
				</a-button>
      </a-form-item>
    </a-form>
    <a-card :bordered="false">
      <a-table :columns="columns" :data-source="data" :pagination="pagination" @change="handlePagination">
				<span slot="action" >
					<a-button type='link' class="primColor" size="small">编辑</a-button>
					<a-button type='link' class="redColor" size="small">删除</a-button>
					<a-popover placement="bottomRight">
						<template slot="content">
							<a-form
							:form="form"
							:label-col="{ span: 10 }" :wrapper-col="{ span: 14 }" @submit="handleSubmit"
							:hideRequiredMark="true"
							:colon='false'
							>
								<a-form-item label="年度目标">
									<a-input
										v-decorator="['note', { rules: [{ required: true, message: '请输入年度目标' }] }]"
										placeholder="请输入"
									/>
								</a-form-item>
								<a-form-item label="回 款 数">
									<a-input
										v-decorator="['number', { rules: [{ required: true, message: '请输入回款数' }] }]"
										placeholder="请输入"
									/>
								</a-form-item>
								<a-form-item :wrapper-col="{ span: 24, offset: 8 }">
									<!-- <a-button class="clear-from-button1" @click="hide">
										取消
									</a-button> -->
									<a-button type="primary"  html-type="submit" class="primarybtn marginleft">
										确定
									</a-button>
								</a-form-item>
							</a-form>
						</template>
							<a-button type='link' class="greenColor" size="small">设置</a-button>
					</a-popover>
				</span>
      </a-table>
    </a-card> 
  </div>
</template>

<script>
const columns = [
  {
    title: '序号',
    dataIndex: 'key',
    key: 'key',
	},
	{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '联系方式',
    dataIndex: 'hangye',
    key: 'hangye',
  },
  {
    title: '部门',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: '小组',
    key: 'position',
    dataIndex: 'position',
  },
  {
    title: '角色',
    key: 'people',
    dataIndex: 'people',
  },
  {
    title: '年度目标',
    key: 'comncont',
    dataIndex: 'comncont',
    width: 300
  },
  {
    title: '回款',
    key: 'time',
    dataIndex: 'time'
	},
	{
    title: '操作',
		key: 'action',
		width: 220,
    scopedSlots: { customRender: 'action' },
  },
];
const data = [
  {
    key: '1',
    name: '张三',
    hangye: '13012345678',
    status: '市场部',
    position:'科技组',
    people: '总监',
    comncont: '12300000',
    time: '1000',
  },
  {
    key: '2',
		name: '张三',
    hangye: '13012345678',
    status: '市场部',
    position:'科技组',
    people: '总监',
    comncont: '12300000',
    time: '1000',
  },
  {
    key: '3',
		name: '张三',
    hangye: '13012345678',
    status: '市场部',
    position:'科技组',
    people: '总监',
    comncont: '12300000',
    time: '1000',
  },
];
export default {
	data() {
		return {
			data,
			columns,
			queryParam: {},  // 查询参数
			formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
			pagination: {
					showQuickJumper :true,
					total: 0,
					current: 1,
					pageSize: 10,
					size: 'small',
					showTotal: (total) => `共${total}条`
				},
		};
	},
	// 方法集合
	methods: {
		handlePagination(pagination){
			console.log(pagination.current);
		},
		handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
		}
	},
}
</script>
<style scoped>
/* @import url(); 引入公共css类 */

</style>