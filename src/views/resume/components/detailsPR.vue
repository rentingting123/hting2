<template>
  <div>
   <a-tabs class="tabs" :tabBarStyle="{borderBottom: 'none',marginTop: 0}" >  
    <a-tab-pane key="1" tab="沟通记录" >
      <a-card :bordered="false" class="cardBox">
        <a-textarea rows="3" placeholder="请输入沟通记录" v-model="communicate"></a-textarea>
        <div class="addbtn">
          <a-button type="danger" @click="addCommunicate" >添加</a-button>
        </div>
        <a-radio-group
          v-model="mode"
          default-value="1"
          button-style="solid">
          <a-radio-button :value="1">
             全部记录
          </a-radio-button>
          <a-radio-button :value="2">
            我的记录
          </a-radio-button>
          <a-radio-button :value="3">
            只含@我的
          </a-radio-button>
        </a-radio-group>
        <div class="communicate">
          <div v-for="(item,index) in communicateList" :key="index" class="contactbg1">
            <div class="commuitinfo">
              <span class="name">{{ item.name }}</span>
              <span class="time">{{ item.time }}</span>
            </div>
            <div>{{ item.content}}</div>
          </div>
        </div>
      </a-card>
    </a-tab-pane>
    <a-tab-pane key="2" tab="推荐记录">
      <a-button slot="tabBarExtraContent" type="danger" class="danger-from-button">
        <a-icon type="plus-circle" theme="filled" />推荐职位
      </a-button>
      <div class="marginB recordbox" v-for="(item,index) in recordlist"
          :key="index">
        <a-descriptions :column="2" >
          <a-descriptions-item label="推荐职位">
            {{ item.job }}
          </a-descriptions-item>
          <a-descriptions-item label="推荐公司">
            {{ item.com }}
          </a-descriptions-item>
          <a-descriptions-item label="匹配度">
            {{ item.ppd }}
          </a-descriptions-item>
          <a-descriptions-item label="意向度">
            {{ item.yxd }}
          </a-descriptions-item>
          <a-descriptions-item label="推荐时间" >
            {{ item.time }}
          </a-descriptions-item>
          <a-descriptions-item label="推荐顾问">
            {{ item.guwen }}
          </a-descriptions-item>
          <a-descriptions-item label="当前推进状态" :span="2">
            <span  v-if="item.status===2" class="sunColor">合适</span>
            <span v-else class="errColor">不合适</span>  
          </a-descriptions-item>
        </a-descriptions>
        <div class="textRight">
          <a-button size="small" type="primary" class="primarybtn marginr">
            导出报告
          </a-button>
          <a-button size="small" class="clear-from-button1">
            查看详情
          </a-button>
        </div>
      </div>
    </a-tab-pane>
   </a-tabs>
  </div>
</template>
<script>

const data =  {
  company:{
    img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170825%2F726d7b65bcaf4f4eaff6eab4ba03db2b.png&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614497618&t=e77cc9ab4eba49840f12865a3840bd30',
    name: '阿里巴巴',
    address: '杭州  ',
    people: '10000人以上',
    status:'上市',
    contact:'张三三'
  },
  contact:[
    {
      name: '张三',
      job: '技术总监CTO',
      tel:'13012345678',
      eail:'13012345678@163.com'
    },
    {
      name: '张三',
      job: '技术总监CTO',
      tel: '13012345678',
      eail: '13012345678@163.com'
    },
  ],
  otherJob:[
    {
      name: '新渠道零售运营经理',
      introduce: 'PM：王五'
    },
     {
      name: '新渠道零售运营经理',
      introduce: 'PM：白玉 RC：张三/李四'
    }
  ],
  introduce: '公司致力于运用科技创新的成果，用数字化技术，整合现有社会资源，为全社会提供风险管理服务和AI评估系统，整合医疗、养老、自然灾害、人为灾害等一切领域的风险管理，建立一个完整的风险管理标准、数据库和数据评价模型，对风险进行科学的精准定价咨询和投后管理…',
  senior:[
    {
      name: '马云',
      job:'创始人',
      content:'马云，男，汉族，中共党员 ，1964年9月10日生于浙江省杭州市，祖籍浙江省嵊州市谷来镇， 阿里巴巴集团主要创始人。'
    },
    {
      name: '马云',
      job:'创始人',
      content:'马云，男，汉族，中共党员 ，1964年9月10日生于浙江省杭州市，祖籍浙江省嵊州市谷来镇， 阿里巴巴集团主要创始人。'
    },
  ]
}
const recordlist = [
  {
    id:1,
    job:"CTO",
    com:'阿里巴巴',
    ppd:"高",
    yxd:"低",
    time:"2021/1/20",
    guwen:"2021/1/20",
    status:1
  },
  {
    id:2,
    job:"CTO",
    com:'阿里巴巴',
    ppd:"高",
    yxd:"低",
    time:"2021/1/20",
    guwen:"2021/1/20",
    status:2
  },
  {
    id:3,
    job:"CTO",
    com:'阿里巴巴',
    ppd:"高",
    yxd:"低",
    time:"2021/1/20",
    guwen:"2021/1/20",
    status:2
  }
];
const communicateList = [
  {
    name:'张三',
    time: '2020年1月20日 10:30',
    content: '电话沟通，专业性较高，暂时没有换工作的计划，准备年后再考虑新机会，只关注创业公司。'
  },
  {
    name:'张三',
    time: '2020年1月20日 10:30',
    content: '电话沟通，专业性较高，暂时没有换工作的计划，准备年后再考虑新机会，只关注创业公司。'
  }
];
export default {
  data() {
    return {
      data,
      recordlist,//推荐记录
      communicate: '', // 沟通记录内容
      mode: 1,
      communicateList
    };
  },
  components: {

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
    addCommunicate(){
      console.log(this.communicate);
    }
	}
};
</script>
<style scoped>
.company {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.company .img{
  width: 90px;
  height: 72px;
  margin-right: 20px;
}
.company .infobox{
  flex: 1;
}
.company .info{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
}


.seniorinfo{
  margin: 6px;
}

.addbtn{
  text-align: center;
  margin: 10px auto;
}
.commuitinfo{
  display: flex;
  justify-content: space-between;
  height: 25px;
  align-items: center;
  margin-bottom: 10px;
}
.commuitinfo .name{
  font-size: 18px;
  font-weight: 500;
  color: #282828;
}
.commuitinfo .time{
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
}
</style>