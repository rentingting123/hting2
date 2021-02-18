<template>
  <div>
    <a-form layout="inline">
      <a-row class="addTitle">
        <a-col :md="24" style="text-align:right">
          <router-link :to="{name:'customerAdd'}">
            <a-button type="danger" class="danger-from-button">
              <a-icon type="plus-circle" theme="filled" />添加客户
            </a-button>
          </router-link>
        </a-col>
      </a-row>
    </a-form>
     <a-form layout="inline" class="searchForm fromMargin">
        <a-form-item class="fromItem">
        <a-select v-model="queryParam.useStatus" placeholder="我维护的客户" class="slelectbox" default-value="0"  style="width:160px">
          <a-select-option value="0">全部</a-select-option>
          <a-select-option value="1">关闭</a-select-option>
          <a-select-option value="2">运行中</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item class="fromItem">
        <a-select v-model="queryParam.status" placeholder="请选择行业" default-value="0" allowClear style="width:160px">
          <a-select-option value="0">全部</a-select-option>
          <a-select-option value="1">关闭</a-select-option>
          <a-select-option value="2">运行中</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item class="fromItem">
        <a-select v-model="queryParam.status0" placeholder="企业规模" default-value="0" allowClear style="width:160px">
          <a-select-option value="0">全部</a-select-option>
          <a-select-option value="1">关闭</a-select-option>
          <a-select-option value="2">运行中</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item class="fromItem">
        <a-select v-model="queryParam.status2" placeholder="融资状况" default-value="0" allowClear style="width:160px">
          <a-select-option value="0">全部</a-select-option>
          <a-select-option value="1">关闭</a-select-option>
          <a-select-option value="2">运行中</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item class="fromItem">
        <a-input v-model="queryParam.positionName" placeholder="请输入企业名称" allowClear />
      </a-form-item>
      <a-form-item class="fromItem1">
        <a-button type="primary" class="danger-from-button1 marginleft">搜索</a-button>
      </a-form-item>
    </a-form>
    <a-card :bordered="false">
      <a-table
        :columns="columns"
        :data-source="data"
        :pagination="pagination"
        @change="handlePagination">
        <div slot="name" slot-scope="text,record" @click="customRow(record)">
          <a class="primColor">{{ text }}</a>
        </div>
        <span slot="position" slot-scope="text">
          <span class="primColor">{{text}}</span>
        </span>
      </a-table>
    </a-card> 
  </div>
</template>

<script>
const columns = [
  {
    title: '企业名称',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '行业',
    dataIndex: 'hangye',
    key: 'hangye',
  },
  {
    title: '企业规模',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '在招职位',
    key: 'position',
    dataIndex: 'position',
     scopedSlots: { customRender: 'position' },
  },
  {
    title: '维护人',
    key: 'people',
    dataIndex: 'people',
  },
  {
    title: '最后沟通内容',
    key: 'comncont',
    dataIndex: 'comncont',
    width: 300
  },
  {
    title: '最后沟通时间',
    key: 'time',
    dataIndex: 'time'
  }
];
const data = [
  {
    key: '1',
    name: '百度网络',
    hangye: 'IT互联网',
    status: '100人以上',
    position:'运营总监/技术总监',
    people: '张三',
    comncont: '职位暂停目前不需要人了， 有需要再联系,职位暂停目前不需要人了，职位暂停目前不需要人了，职位暂停目前不需要人了，职位暂停目前不需要人了，',
    time: '2020.12.31 17:30',
  },
  {
    key: '2',
    name: '百度网络',
    hangye: 'IT互联网',
    status: '100人以上',
    position:'运营总监/技术总监',
    people: '张三',
    comncont: '职位暂停目前不需要人了， 有需要再联系',
    time: '2020.12.31 17:30'
  },
  {
    key: '3',
    name: '百度网络',
    hangye: 'IT互联网',
    status: '100人以上',
    position:'运营总监/技术总监',
    people: '张三',
    comncont: '职位暂停目前不需要人了， 有需要再联系',
    time: '2020.12.31 17:30'
  },
];
export default {
  name: 'TableList',
  components: {
    // STable,
    // Ellipsis,
    // CreateForm,
    // StepByStepModal
  },
  data () {
    return {
      data,
      columns,
      advanced: false, // 高级搜索 展开/关闭
      queryParam: {},  // 查询参数
      pagination: {
        showQuickJumper :true,
        total: 0,
        current: 1,
        pageSize: 10,
        size: 'small',
        showTotal: (total) => `共${total}条`
      },
    }
  },
  methods: {
    handlePagination(pagination){
      console.log(pagination.current);
    },
    customRow(record){
      console.log(record);
      this.$router.push({path:'/customerDetails'});
    }
  }
}
</script>

<style>
  .container{
    background: #fff;
    min-height: 100%;
  }
  .slelectbox{
    width: 200px;
  }
  .titleBtn{
    display: flex;
    justify-content: flex-end;
  }
</style>