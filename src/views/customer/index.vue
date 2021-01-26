<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="8">
          <a-col :md="6" :sm="24">
            <a-form-item>
              <a-input v-model="queryParam.id" placeholder="请输入企业名称"/>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
            <a-form-item >
              <a-select v-model="queryParam.status" placeholder="请选择行业" default-value="0" class="slelectbox" style="width:200px">
                <a-select-option value="0">全部</a-select-option>
                <a-select-option value="1">关闭</a-select-option>
                <a-select-option value="2">运行中</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
           <a-col :md="6" :sm="24">
              <a-form-item>
                <a-select v-model="queryParam.useStatus" placeholder="请选择招聘状态" class="slelectbox" default-value="0"  style="width:200px">
                  <a-select-option value="0">全部</a-select-option>
                  <a-select-option value="1">关闭</a-select-option>
                  <a-select-option value="2">运行中</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          <template v-if="advanced">
             <a-col :md="6" :sm="24">
              <a-form-item>
                <a-select v-model="queryParam.useStatus" placeholder="请选择企业规模" class="slelectbox" default-value="0"  style="width:200px">
                  <a-select-option value="0">全部</a-select-option>
                  <a-select-option value="1">关闭</a-select-option>
                  <a-select-option value="2">运行中</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="24">
             <a-form-item>
                <a-select v-model="queryParam.useStatus" placeholder="请选择融资情况" class="slelectbox" default-value="0"  style="width:200px">
                  <a-select-option value="0">全部</a-select-option>
                  <a-select-option value="1">关闭</a-select-option>
                  <a-select-option value="2">运行中</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="6" :sm="24">
              <a-form-item label="创建时间">
                <a-date-picker v-model="queryParam.date" style="width: 100%" placeholder="请输入更新日期"/>
              </a-form-item>
            </a-col>
          </template>
          <a-col :md="!advanced && 6 || 24" :sm="24">
            <span class="table-page-search-submitButtons" :style="advanced && { float: 'right', overflow: 'hidden' } || {} ">
              <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
              <a-button style="margin-left: 8px" @click="() => this.queryParam = {}">重置</a-button>
              <a @click="toggleAdvanced" style="margin-left: 8px">
                {{ advanced ? '收起' : '展开' }}
                <a-icon :type="advanced ? 'up' : 'down'"/>
              </a>
            </span>
          </a-col>
        </a-row>
      </a-form>
      <a-table :columns="columns" :data-source="data">
        <template slot="title" >
          <div class="titleBtn">
            <router-link :to="{name:'customerAdd'}">
              <a-button>添加客户</a-button>
            </router-link>
          </div>
        </template>
        <a slot="name" slot-scope="text">{{ text }}</a>
        <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
        <span slot="tags" slot-scope="tags">
          <a-tag
            v-for="tag in tags"
            :key="tag"
            :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
        <template slot="operation" slot-scope="text, record">
          <router-link :to="{name:'customer-edit',params:{id:record.id}}">
            <a-button type="link" icon="edit" />
          </router-link>
          <router-link :to="{name:'customer-edit',params:{id:record.id}}">
            详情
          </router-link>
          <Popconfirm title="确定删除吗？" @confirm="handleDelete(record.id)">
            <a-button type="link" icon="delete" />
          </Popconfirm>
        </template>
      </a-table>
    </div>
  </a-card>
</template>

<script>
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