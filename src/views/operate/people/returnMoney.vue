<template>
  <div>
    <a-modal
			v-model="visible"
			:title="Title"
			on-ok="handleOk"
			@cancel="handleCancel"
			:footer="null"
      width="50%"
			>
		<template slot="closeIcon">
			<a-icon type="close-circle" theme="filled" @click="handleCancel"/>
		</template>
    <div class=''>
      <a-form layout="inline">
        <a-form-item class="fromItem">
          <a-select v-model="queryParam.kehu" placeholder="请选择回款客户" default-value="0" allowClear style="width:160px">
            <a-select-option value="0">全部</a-select-option>
            <a-select-option value="1">关闭</a-select-option>
            <a-select-option value="2">运行中</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item class="fromItem">
          <a-input v-model="queryParam.money" placeholder="请输入回款金额" allowClear />
        </a-form-item>
         <a-form-item class="fromItem">
          <a-input v-model="queryParam.date" placeholder="请选择日期" allowClear />
        </a-form-item>
        <a-form-item >
          <a-button type="danger" class="danger-from-button" @click="addMoney">添加</a-button>
        </a-form-item>
      </a-form>
      <a-table :columns="columns" :data-source="data" class="marginTop">
        <span slot="action" slot-scope="text,record">
          <a-button type='link' class="primColor" size="small" @click="edit(record.id)">编辑</a-button>
          <a-button type='link' class="redColor" size="small" @click="detele(record.id)">删除</a-button>
        </span>
      </a-table>
    </div>
    </a-modal>
  </div>
</template>
<script>
const columns = [
	{
    title: '回款客户',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '回款金额（元）',
    dataIndex: 'money',
    key: 'money',
  },
  {
    title: '回款时间',
    dataIndex: 'time',
    key: 'time'
  },
	{
    title: '操作',
		key: 'action',
		// width: 220,
    scopedSlots: { customRender: 'action' },
  },
];
const data = [
  {
    key: '1',
    name: '张三',
    money: '1301',
    time: '20210102',
  },
  {
    key: '2',
    name: '张三',
    money: '5678',
    time: '20210102',
  },
  {
    key: '3',
    name: '张三',
    money: '78',
    time: '20210102',
  },
];
export default {
  data() {
    return {
      data,
			columns,
			Title:'回款',
      queryParam: {}
    };
  },
  props:['visible','returnMoneyId'],
  methods: {
    handleCancel() {
      this.$emit('visibleCancel');
		},
    // 添加
    addMoney(){

    }
  },
};
</script>
