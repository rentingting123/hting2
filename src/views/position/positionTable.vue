<template>
  <a-table :columns="columns" :data-source="data" :pagination="pagination" @change="handlePagination">
    <div slot="positionname" slot-scope="text,scord">
      {{ text }}
      <a-badge v-if="scord.key == 1" count="急" :numberStyle="numberStyle"></a-badge>
    </div>
    <div slot="tag2" slot-scope="text">
      <span class="primColor">{{ text }}</span>
    </div>
    <div slot="tag3" slot-scope="text">
      <span class="redColor">{{ text }}</span>
    </div>
    <span slot="action" slot-scope="text">
      <a-dropdown>
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          推荐简历{{text.name}}
        </a>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;">职位设置</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">发起快递</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">分享职位</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </span>
  </a-table>
</template>
<script>
const columns = [
  {
    title: '职位名称',
    dataIndex: 'positionname',
    key: 'positionname',
    scopedSlots: { customRender: 'positionname' },
  },
  {
    title: '公司名称',
    dataIndex: 'companyname',
    key: 'companyname',
  },
  {
    title: 'PM',
    dataIndex: 'PM',
    key: 'PM',
  },
  {
    title: '目标',
    dataIndex: 'tag1',
    key: 'tag1',
  },
  {
    title: '推荐',
    dataIndex: 'tag2',
    key: 'tag2',
    scopedSlots: { customRender: 'tag2' },
  },
  {
    title: '初试',
    dataIndex: 'tag3',
    key: 'tag3',
    scopedSlots: { customRender: 'tag2' },
  },
  {
    title: '复试',
    dataIndex: 'tag4',
    key: 'tag4',
    scopedSlots: { customRender: 'tag2' },
  },
  {
    title: 'offer',
    dataIndex: 'tag5',
    key: 'tag5',
    scopedSlots: { customRender: 'tag2' },
  },
  {
    title: '入职',
    dataIndex: 'tag6',
    key: 'tag6',
    scopedSlots: { customRender: 'tag2' },
  },
   {
    title: '过保',
    dataIndex: 'tag7',
    key: 'tag7',
    scopedSlots: { customRender: 'tag2' },
  },
  {
    title: '不合适',
    dataIndex: 'tag8',
    key: 'tag8',
    scopedSlots: { customRender: 'tag2' },
  },
  {
    title: '投递',
    dataIndex: 'tag9',
    key: 'tag9',
    scopedSlots: { customRender: 'tag2' },
  },
  {
    title: '待处理',
    dataIndex: 'tag10',
    key: 'tag10',
    scopedSlots: { customRender: 'tag3' },
  },
   {
    title: '职位发布时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '操作',
    key: 'action',
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
    positionname: 'CTO',
    companyname: '阿里巴巴',
    PM: '张三三',
		tag1: 5,
		tag2: 5,
		tag3: 5,
		tag4: 5,
		tag5: 3,
		tag6: 6,
		tag7: 4,
		tag8: 5,
		tag9: 5,
		tag10: 5,
		tag11: 5,
		time:'2020/12/12'
  },
  {
    key: '2',
    positionname: 'CTO',
    companyname: '阿里巴巴',
    PM: '张三三',
		tag1: 5,
		tag2: 5,
		tag3: 5,
		tag4: 5,
		tag5: 5,
		tag6: 5,
		tag7: 5,
		tag8: 5,
		tag9: 5,
		tag10: 5,
		tag11: 5,
		time:'2020/12/12'
  },
  {
    key: '3',
    positionname: 'CTO',
    companyname: '阿里巴巴',
    PM: '张三三',
		tag1: 5,
		tag2: 5,
		tag3: 5,
		tag4: 5,
		tag5: 5,
		tag6: 5,
		tag7: 5,
		tag8: 5,
		tag9: 5,
		tag10: 5,
		tag11: 5,
		time:'2020/12/12'
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
	}
};
</script>
