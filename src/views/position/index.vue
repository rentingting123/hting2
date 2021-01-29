<template>
  <div>
    <a-form layout="inline" class="searchForm">
      <a-form-item>
        <a-dropdown v-model="queryParam.my">
          <a class="ant-dropdown-link" @click="e => e.preventDefault()">
            我的<a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">组员1</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown> 
      </a-form-item>
      <a-form-item class="fromItem">
        <a-input v-model="queryParam.positionName" placeholder="请输入职位名称" allowClear />
      </a-form-item>
      <a-form-item class="fromItem">
        <a-input v-model="queryParam.companyName" placeholder="请输入企业名称" allowClear />
      </a-form-item>
      <a-form-item class="fromItem">
        <a-select v-model="queryParam.status" placeholder="请选择职业顾问" default-value="0" allowClear style="width:160px">
          <a-select-option value="0">全部</a-select-option>
          <a-select-option value="1">关闭</a-select-option>
          <a-select-option value="2">运行中</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item class="fromItem">
        <a-select v-model="queryParam.status" placeholder="请选择PM姓名" default-value="0" allowClear style="width:160px">
          <a-select-option value="0">全部</a-select-option>
          <a-select-option value="1">关闭</a-select-option>
          <a-select-option value="2">运行中</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item style="width:90px">
        <a-button class="primarybtn">本周进度</a-button>
        <a-button class="marginleft">上周进度</a-button>
      </a-form-item>
      <a-form-item class="fromItem1">
        <a-button  class="clear-from-button">清除</a-button>
        <a-button type="danger" class="danger-from-button marginleft">搜索</a-button>
      </a-form-item>
    </a-form>
    <a-tabs class="tabs" :tabBarStyle="{borderBottom: 'none'}" >
      <a-tab-pane key="1" tab="全部岗位">
        <positionTable />
      </a-tab-pane>
      <a-tab-pane key="2" tab="运作中岗位">
       <positionTable />
      </a-tab-pane>
      <a-tab-pane key="3" tab="已停止岗位">
        <positionTable />
      </a-tab-pane>
      <a-tab-pane key="4" tab="已交付岗位">
        <positionTable />
      </a-tab-pane>
      <a-button slot="tabBarExtraContent" type="danger" class="danger-from-button">
        <a-icon type="plus-circle" theme="filled" />新建职位
      </a-button>
    </a-tabs>
  </div>
</template>

<script>
import positionTable from './components/positionTable';
  const columns = [
    {
      title: '行业企业名称',
      dataIndex: 'name',
      key: 'name',
      scopedSlots: { customRender: 'name' },
    },
    {
      title: '行业',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '城市',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '招聘状态',
      key: 'tags',
      dataIndex: 'tags',
      scopedSlots: { customRender: 'tags' },
    },
    {
      title: '操作',
      key: 'operation',
      scopedSlots: { customRender: 'operation' },
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  export default {
    name: 'TableList',
    components: {
      positionTable
    },
    data () {
      return {
        data,
        columns,
        advanced: false, // 高级搜索 展开/关闭
        queryParam: {},  // 查询参数
      }
    },
    methods: {
      //展开收起
      toggleAdvanced () {
        this.advanced = !this.advanced
      },
      //删除
      handleDelete(id) {
        console.log(id);
        // customDelete(id).then(res=>{
        //   if(res.data.success){
        //     message.success('删除成功');
        //     this.getCustomList();
        //   }else{
        //     message.error(res.data.msg);
        //   }
        // }).catch(err=>{
          // console.log(err);
        // });
      }
    }
  }
</script>

<style>
  
</style>