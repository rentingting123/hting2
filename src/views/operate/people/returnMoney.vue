<template>
  <div>
    <a-modal
			v-model="visible"
			:title="Title"
			on-ok="handleOk"
			@cancel="handleCancel"
			:footer="null"
      width="700px"
			>
		<template slot="closeIcon">
			<a-icon type="close-circle" theme="filled" @click="handleCancel"/>
		</template>
    <div class=''>
      <a-form layout="inline">
        <a-form-item class="fromItem">
          <a-select v-model="queryParam.customerId" placeholder="请选择回款客户" default-value="0" allowClear style="width:160px">
            <a-select-option value="0">全部</a-select-option>
            <a-select-option value="1">关闭</a-select-option>
            <a-select-option value="2">运行中</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item class="fromItem">
          <a-input v-model="queryParam.amount" placeholder="请输入回款金额" allowClear />
        </a-form-item>
         <a-form-item class="fromItem">
          <a-input v-model="queryParam.receivableTime" placeholder="请选择日期" allowClear />
        </a-form-item>
        <a-form-item >
          <a-button type="danger" class="danger-from-button" @click="addMoney">添加</a-button>
        </a-form-item>
      </a-form>
      <a-table
      :columns="columns"
      :data-source="listData"
      row-key="id"
      class="marginTop">
        <template v-for="(col, i) in ['customerName', 'amount', 'receivableTime']" :slot="col" slot-scope="text, record">
          <a-input
            :key="col"
            v-if="record.editable"
            style="margin: -5px 0"
            :value="text"
            :placeholder="columns[i].title"
            @change="e => handleChange(e.target.value, record.id, col)"
          />
          <template v-else>{{ text }}</template>
        </template>
        <template  slot="operation" slot-scope="text,record">
          <template v-if="record.editable">
            <a-button type='link' @click="saveEdit(record)">保存</a-button>
            <a-popconfirm title="确定取消吗" @confirm="cancelEdit(record.id)">
              <a-button type='link'>取消</a-button>
            </a-popconfirm>
          </template>
          <template v-else>
            <a-button type='link' :disabled="editingKey !== ''" @click="toggleEdit(record.id)">编辑</a-button>
            <a-button type='link'  class="redColor" size="small" @click="deleteData(record.id)">删除</a-button>
          </template>
        </template>
      </a-table>
    </div>
    </a-modal>
  </div>
</template>
<script>
// receivableEdit
import {receivablePage, receivableEdit, receivableAdd,receivableDelete} from "@/api/Interface/operate" //接口
const columns = [
	{
    title: '回款客户',
    dataIndex: 'customerName',
    key: 'customerName',
    scopedSlots: { customRender: 'customerName' }
  },
  {
    title: '回款金额（元）',
    dataIndex: 'amount',
    key: 'amount',
    scopedSlots: { customRender: 'amount' }
  },
  {
    title: '回款时间',
    dataIndex: 'receivableTime',
    key: 'receivableTime',
    scopedSlots: { customRender: 'receivableTime' }
  },
	{
    title: '操作',
		key: 'operation',
		width: 180,
    scopedSlots: { customRender: 'operation' },
  },
];
export default {
  data() {
    return {
      listData: [],
      cacheData: [],
			columns,
      editingKey: '', // 当前编辑
			Title:'回款',
      queryParam: {},
      pageNum: 1,
      pageSize: 10
    };
  },
  props:['visible','returnMoneyId'],
  mounted(){
		this.getReceivableList();
	},
  methods: {
     // 查询列表
    getReceivableList(){
			let obj = {
        sysBackerId: this.returnMoneyId,
        pageNum: this.pageNum,
        pageSize: this.pageSize
			};
			receivablePage(obj).then(res=>{
				if(res.data.code === 1 ){
					this.listData = res.data.data.list.map(item =>{
            return {
              ...item,
              editable: false
            }
          });
          this.cacheData = this.listData.map(item => ({ ...item }));
				}else{
					this.$message.error(res.data.message);
				}
			})
		},
    handleCancel() {
      this.$emit('visibleCancel');
		},
    // 添加
    addMoney(){
        let obj = {
          ...this.queryParam,
          sysBackerId: this.returnMoneyId
        };
        receivableAdd(obj).then(res=>{
          if(res.data.code === 1 ){
            this.$message.success(res.data.message);
            this.queryParam = {}
            this.getReceivableList();
          }else{
            this.$message.error(res.data.message);
          }
        })
    },
    // 修改
    toggleEdit(id){
      const newData = [...this.listData];
      const target = this.listData.find(item => item.id === id)
      this.editingKey = id;
      if (target) {
        target.editable = true;
        this.listData = newData;
      }
    },
    // 保存
		saveEdit(record){
      const { id, customerName, amount, receivableTime } = record
      if (!customerName || !amount || !receivableTime) {
        this.$message.error('请填写完整信息。')
        return
      }
      console.log(record);
      // 
			let obj = {
        id,
        sysBackerId: this.returnMoneyId,
				customerId: record.customerId,
        amount: record.amount, //金额 
        receivableTime: record.receivableTime//回款时间
			};
      console.log(obj);
			receivableEdit(obj).then(res=>{
				if(res.data.code === 1 ){
          record.editable = false
          this.editingKey = ''
					this.$message.success(res.data.message);
					// this.$emit('visibleCancel');
					// this.getIndustryList(val);
				}else{
					console.log("修改失败")
				}
			})
		},
    // 取消
    cancelEdit (id) {
      const newData = [...this.listData];
      const target = newData.filter(item => id === item.id)[0];
      this.editingKey = '';
      if (target) {
        Object.assign(target, this.cacheData.filter(item => id === item.id)[0]);
        delete target.editable;
        this.listData = newData;
      }
      // const target = this.listData.find(item => item.id === id)
      // Object.keys(target).forEach(id => { target[id] = target._originalData[id] })
      // target._originalData = undefined
    },
    // 修改输入
    handleChange(value, id, column) {
      const newData = [...this.listData];
      const target = newData.filter(item => id === item.id)[0];
      if (target) {
        target[column] = value;
        this.listData = newData;
      }
    },
    // 删除
    deleteData(id){
			receivableDelete(id).then(res=>{
				if(res.data.code === 1 ){
					this.$message.success(res.data.message);
				}else{
					this.$message.error(res.data.message);
				}
			})
		},
  },
};
</script>
