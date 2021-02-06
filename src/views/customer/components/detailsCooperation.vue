<template>
  <a-card :bordered="false" class="cardBox">
    <h4 class="title">合作概览</h4>
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination='false'>
      <div slot="name" slot-scope="text">
        <span class="primColor">{{ text }}</span>
      </div>
    </a-table>
  </a-card>
</template>
<script>
const columns = [
  {
    title: '',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '已推荐',
    dataIndex: 'tag6',
    key: 'tag6',
  },
  {
    title: '已初试',
    dataIndex: 'tag7',
    key: 'tag7',
  },
  {
    title: '已复试',
    dataIndex: 'tag1',
    key: 'tag1',
  },
  {
    title: '已offer',
    dataIndex: 'tag2',
    key: 'tag2',
    scopedSlots: { customRender: 'tag2' },
  },
  {
    title: '已入职',
    dataIndex: 'tag3',
    key: 'tag3',
    scopedSlots: { customRender: 'tag2' },
  },
  {
    title: '已过保',
    dataIndex: 'tag4',
    key: 'tag4',
    scopedSlots: { customRender: 'tag2' },
  },
  {
    title: '已回款',
    dataIndex: 'tag5',
    key: 'tag5',
    scopedSlots: { customRender: 'tag2' },
  }
];
const data = [
  {
    key: '1',
    name: '本月',
		tag1: 5,
		tag2: 5,
		tag3: 5,
		tag4: 5,
		tag5: 3,
		tag6: 6,
		tag7: 4,
  },
  {
    key: '2',
    name: '本季',
		tag1: 5,
		tag2: 5,
		tag3: 5,
		tag4: 5,
		tag5: 3,
		tag6: 6,
		tag7: 4,
  },
  {
    key: '3',
    name: '本年',
		tag1: 5,
		tag2: 5,
		tag3: 5,
		tag4: 5,
		tag5: 3,
		tag6: 6,
		tag7: 4,
	},
  {
    key: '3',
    name: '全部',
		tag1: 5,
		tag2: 5,
		tag3: 5,
		tag4: 5,
		tag5: 3,
		tag6: 6,
		tag7: 4,
	}
];

export default {
  data() {
    return {
      data,
			columns,
    };
  },
  computed: {
	},
	methods: {
	}
};
</script>
<style scoped>
	.title{
		font-size: 16px;
		font-weight: 500;
		color: #282828;
		line-height: 25px;
	}
</style>