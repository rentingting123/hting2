<!--  -->
<template>
  <div class=''>
    <div class="flexSpace searchForm fromMargin">
      <a-form layout="inline">
        <a-form-item class="fromItem">
          <a-select v-model="queryParam.departmentId" placeholder="请选择部门" default-value="0" allowClear style="width:160px">
            <a-select-option value="0">全部</a-select-option>
            <a-select-option value="1">关闭</a-select-option>
            <a-select-option value="2">运行中</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item class="fromItem">
          <a-select v-model="queryParam.roleType" placeholder="请选择角色" default-value="0" allowClear style="width:160px">
            <a-select-option value="1">管理员</a-select-option>
            <a-select-option value="2">其他</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item class="fromItem">
          <a-input v-model="queryParam.name" placeholder="请输入姓名" allowClear />
        </a-form-item>
        <a-form-item class="fromItem">
          <a-button type="danger" class="danger-from-button" @click="getSysBackerList">搜索</a-button>
        </a-form-item>
      
      </a-form>
      <a-button type="primary" class="primarybtn" @click="addEditModal(1,undefined)">
        <a-icon type="plus-circle" theme="filled" />
        添加人员
      </a-button>
    </div>
    <a-card :bordered="false">
      <a-table
      :columns="columns"
      :data-source="listData"
      row-key="id"
      :pagination="pagination"
      @change="handlePagination">
        <template slot="roleType" slot-scope="text">  
          {{ text === 1?'管理员':text === 2?'其他':'' }}
        </template>
				<span slot="action" slot-scope="text,record">
          <a-switch  :checked="record.status === 0? true : false" @change="onChange(record)" />
					<a-button
            type='link'
            class="primColor"
            size="small" @click="addEditModal(1,record)">编辑</a-button>
					<a-button
            type='link'
            class="redColor"
            size="small" @click="deleteData(record.id)">删除</a-button>
          <a-button type='link' class="greenColor" size="small"
           @click="addEditModal(2,record.id)">回款</a-button>
				</span>
      </a-table>
    </a-card> 
	<addEditPeolple :visible='visiblePeolple' :sysDetails='sysDetails' @visibleCancel="visibleCancel(1)"/>
	<returnMoney :visible='visibleReturnMoney' :returnMoneyId='returnMoneyId'  @visibleCancel="visibleCancel(2)"/>
  </div>
</template>

<script>
import addEditPeolple from './addEditPeolple'
import returnMoney from './returnMoney'
import {sysBackerPage, sysBackerDelete, sysBackerStatus} from "@/api/Interface/operate" //接口

const columns = [
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
	},
	{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '电话',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: '部门',
    dataIndex: 'departmentName',
    key: 'departmentName'
  },
  {
    title: '职级',
    key: 'creatorId',
    dataIndex: 'creatorId',
  },
  {
    title: '职位',
    key: 'job',
    dataIndex: 'job',
  },
  {
    title: '角色',
    key: 'roleType',
    dataIndex: 'roleType',
    scopedSlots: { customRender: 'roleType' },
  },
  {
    title: '年度目标',
    key: 'annualTarget',
    dataIndex: 'annualTarget',
  },
  {
    title: '回款金额',
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

export default {
	data() {
		return {
			listData: [], // 列表数据
			columns,
			queryParam: {
        departmentId: undefined,
        name: '',
        roleType: undefined
      },  // 查询参数
			formLayout: 'horizontal',
			form: this.$form.createForm(this, { name: 'coordinated' }),
			visiblePeolple: false, // 展示添加人员
      sysDetails: undefined, // 展示添加人员id
      visibleReturnMoney: false, // 展示回款
      returnMoneyId: '', // 回款id
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
		addEditPeolple,
    returnMoney
	},
  mounted(){
		this.getSysBackerList();
	},
	// 方法集合
	methods: {
    // 查询列表
    getSysBackerList(){
			let obj = {
        ...this.queryParam
			};
			sysBackerPage(obj).then(res=>{
				if(res.data.code === 1 ){
					this.listData= res.data.data.list;
          this.$message.success(res.data.message);
				}else{
					this.$message.error(res.data.message);
				}
			})
		},
		handlePagination(pagination){
			console.log(pagination.current);
		},
		// 添加部门
		addEditModal(i,item){
			if(i === 1){
        // 添加修改人员
				this.visiblePeolple = true
        this.sysDetails = item;
			}else if(i === 2){
        // 回款
				this.visibleReturnMoney = true
        this.returnMoneyId = item
			}
		},
    // 删除
    deleteData(id){
			sysBackerDelete(id).then(res=>{
				if(res.data.code === 1 ){
					this.$message.success(res.data.message);
				}else{
					this.$message.error(res.data.message);
				}
			})
		},
		// 关闭弹框
		visibleCancel(i){
       console.log('取消11');
      if(i === 1){
        // 添加人员
				this.visiblePeolple = false 
			}else if(i === 2){
        // 回款
        this.visibleReturnMoney = false 
      }
		},
    // 改变
    onChange(item) {
      // console.log(`a-switch to ${item}`);
      sysBackerStatus(item.id).then(res=>{
        if(res.data.code === 1){
          this.$message.success(res.data.message);
          this.getSysBackerList();
        }else{
          this.$message.error(res.data.message);
        }
      }).catch(err=>{
        console.log(err);
      });
    },
	},
}
</script>
<style scoped>

</style>