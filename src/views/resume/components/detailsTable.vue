<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :pagination="pagination"
    @change="handlePagination"
    :customRow="customRow">
    <div slot="tag2" slot-scope="text">
      <span class="redColor">{{ text }}</span>
    </div>
    <div slot="tag3" slot-scope="text">
      <span class="yellowColor">{{ text }}</span>
    </div>
    <div slot="tag4" slot-scope="text">
      <span class="primColor">
        {{text === 1 ? '待反馈' : text === 2 ? '推荐-待反馈' : text === 3 ? '初试-通过-入职':''}}
      </span>
      <a-icon type="edit" />
    </div>
    <span slot="action" slot-scope="text">
      <a-button
      :class="text.key !== 1?'clear-from-button':''"
      :disabled="text.key == 1"
      >提醒</a-button>
    </span>
  </a-table>
</template>
<script>
const columns = [
  {
    title: '姓名',
    dataIndex: 'positionname',
    key: 'positionname',
    width: 80,
  },
  {
    title: '性别',
    dataIndex: 'companyname',
    key: 'companyname',
    width: 80,
  },
  {
    title: '年龄',
    dataIndex: 'PM',
    key: 'PM',
    width: 80,
  },
  {
    title: '所在地',
    dataIndex: 'tag1',
    key: 'tag1',
    width: 80,
  },
  {
    title: '学历',
    dataIndex: 'tag2',
    key: 'tag2',
    width: 80,
  },
  {
    title: '学校',
    dataIndex: 'tag3',
    key: 'tag3',
    width: 80,
  },
  {
    title: '目前公司',
    dataIndex: 'tag4',
    key: 'tag4',
    width: 100
  },
  {
    title: '目前职位',
    dataIndex: 'tag5',
    key: 'tag5',
    width: 100
  },
  {
    title: '目前年薪',
    dataIndex: 'tag6',
    key: 'tag6',
    width: 100
  },
   {
    title: '匹配度',
    dataIndex: 'tag7',
    key: 'tag7',
    width: 80,
    scopedSlots: { customRender: 'tag2' },
  },
  {
    title: '意向度',
    dataIndex: 'tag8',
    key: 'tag8',
    width: 80,
    scopedSlots: { customRender: 'tag3' },
  },
  {
    title: '来源',
    dataIndex: 'tag9',
    key: 'tag9',
    width: 80,
  },
  {
    title: '当前推进状态',
    dataIndex: 'tag10',
    key: 'tag10',
    scopedSlots: { customRender: 'tag4' },
    width: 80,
  },
  {
    title: '操作',
    key: 'action',
    width: 100,
    scopedSlots: { customRender: 'action' },
  },
];
const numberStyle = {
  borderRadius: '1px',
  width: '16px',
  height: '16px',
  fontSize: '12px',
  textAlign: 'center',
  padding: 0,
  lineHeight:'16px',
  background: '#FF3333'
}
const data = [
  {
    key: '1',
    positionname: '张三三',
    companyname: '男',
    PM: '28',
		tag1: '北京',
		tag2: '本科',
		tag3: '哈尔滨大学',
		tag4: '上海直猎网络科技有限公司',
		tag5: '产品经理',
		tag6: '100万',
		tag7: '高',
		tag8: '中',
		tag9: '上传',
		tag10: 1,
  },
  {
    key: '2',
    positionname: '张三三',
    companyname: '男',
    PM: '28',
		tag1: '北京',
		tag2: '本科',
		tag3: '哈尔滨大学',
		tag4: '上海直猎网络科技有限公司',
		tag5: '产品经理',
		tag6: '100万',
		tag7: '高',
		tag8: '中',
		tag9: '上传',
		tag10: 2,
  },
  {
    key: '3',
    positionname: '张三三',
    companyname: '男',
    PM: '28',
		tag1: '北京',
		tag2: '本科',
		tag3: '哈尔滨大学',
		tag4: '上海直猎网络科技有限公司',
		tag5: '产品经理',
		tag6: '100万',
		tag7: '高',
		tag8: '中',
		tag9: '上传',
		tag10: 3,
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
      numberStyle
    //   rowClassName
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
    }
	}
};
</script>
