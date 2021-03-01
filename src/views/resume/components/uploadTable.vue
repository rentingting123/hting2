<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :pagination="pagination"
    @change="handlePagination"
    :customRow="customRow">

    <div slot="tag2" slot-scope="text">
      <span class="primColor">{{ text }}</span>
    </div>
    <div slot="status" slot-scope="text">
      <span v-if="text === 1" class="yellowColor">
        <a-icon type="exclamation-circle" theme='filled' /> 重复简历</span>
      <span v-else-if="text === 2" class="primColor">
        <a-icon type="check-circle" theme='filled'/> 上传成功</span>
      <span v-else-if="text === 3" class="redColor">
        <a-icon type="close-circle" theme='filled'/> 上传失败</span>
      <span v-else-if="text === 4" class="grayColor">
        <a-icon type="minus-circle" theme='filled'/> 取消上传</span>
    </div>
    <span slot="action" slot-scope="record">
      <span class="primColor" @click="contrast(record.id)">对比</span>
    </span>
  </a-table>
</template>
<script>
const columns = [
  {
    title: '简历名称',
    dataIndex: 'positionname',
    key: 'positionname',
    scopedSlots: { customRender: 'positionname' },
  },
  {
    title: '文件大小',
    dataIndex: 'companyname',
    key: 'companyname',
  },
  {
    title: '上传状态',
    dataIndex: 'status',
    key: 'status',
    scopedSlots: { customRender: 'status' },
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];
const data = [
  {
    key: '1',
    positionname: '张三的个人简历5年产品主管',
    companyname: '768.98kb',
    status: 1,
  },
  {
    key: '2',
    positionname: '张三的个人简历5年产品主管',
    companyname: '768.98kb',
    status: 2,
	},
  {
    key: '3',
    positionname: '张三的个人简历5年产品主管',
    companyname: '768.98kb',
    status: 3,
  },
  {
    key: '4',
    positionname: '张三的个人简历5年产品主管',
    companyname: '768.98kb',
    status: 4,
	}
];

export default {
  data() {
    return {
      data,
			columns,
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
  computed: {
	},
	methods: {
		handlePagination(pagination){
      console.log(pagination.current);
    },
    customRow(record){
      return {
        on: { // 事件
          click: () => {
            console.log(record);
            this.$router.push({path:'/positionDetails'});
          }, 
        },
      };
    },
    // 对比
    contrast(id){
      console.log(id);
    }
	}
};
</script>
