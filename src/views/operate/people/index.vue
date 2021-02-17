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
        <a-button type="danger" class="danger-from-button">搜索</a-button>
      </a-form-item>
      <a-form-item class="fromItem2">
        <!-- <a-button  class="clear-from-button1" @click="addEditModal(1)">
					<a-icon type="plus-circle" theme="filled" />
					添加部门
				</a-button>
				<a-button  class="clear-from-button1 marginleft">
					<a-icon type="edit" theme="filled" @click="addEditModal(2)"/>
					编辑部门</a-button> -->
				<a-button type="primary" class="primarybtn" @click="addEditModal(3)">
					<a-icon type="plus-circle" theme="filled" />
					添加人员
				</a-button>
      </a-form-item>
    </a-form>
    <a-card :bordered="false">
      <a-table :columns="columns" :data-source="data" :pagination="pagination" @change="handlePagination">
				<span slot="action" >
          <a-switch default-checked @change="onChange" />
					<a-button type='link' class="primColor" size="small">编辑</a-button>
					<a-button type='link' class="redColor" size="small">删除</a-button>
          <a-button type='link' class="greenColor" size="small">回款</a-button>
				</span>
      </a-table>
    </a-card> 
	<addEditDepartment :visible='visibleDepartment' @visibleCancel="visibleCancel(1)"/>
	<addEditPeolple :visible='visiblePeolple' @visibleCancel="visibleCancel(2)"/>
	
  </div>
</template>

<script>
import addEditDepartment from './addEditDepartment'
import addEditPeolple from './addEditPeolple'

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
    // width: 300
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
			visibleDepartment: false, //展示添加部门
			visiblePeolple: false, // 展示添加人员
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
	components: {
		addEditDepartment,
		addEditPeolple
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
		},
		// 添加部门
		addEditModal(i){
			if(i === 1 || i === 2){
				this.visibleDepartment = true
			}else if(i === 3){
				this.visiblePeolple = true 
			}
		},
		// 挂麻痹部门
		visibleCancel(i){
			if(i === 1){
				this.visibleDepartment = false 
			}else if(i === 2){
				this.visiblePeolple = false 
			}
		},
    // 改变
    onChange(checked) {
      console.log(`a-switch to ${checked}`);
    },
	},
}
</script>
<style scoped>
/* @import url(); 引入公共css类 */

</style>