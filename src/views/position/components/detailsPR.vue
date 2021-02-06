<template>
  <div>
    <a-card :bordered="false" class="cardBox">
      <div>
        <Title title='公司详情' type='1'></Title>
        <div class="company">
          <img class="img" :src="data.company.img" alt="">
          <div class="infobox">
            <div  class="fontSize26 redColor">{{data.company.name}}</div>
            <div class="info">
              <div>{{data.company.address}} {{data.company.people}} {{data.company.status}}</div>
              <div class="primColor">联系人：{{data.company.contact}}</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Title title='联系人'></Title>
        <div class="contactbg">
          <a-row v-for="(item ,index) in data.contact" :key="index" class="arow">
            <a-col :lg="7" :md="12" :sm="24">
              <span>{{ item.name }}</span>
              <span class="primColor"> /{{item.job}}</span>
            </a-col>
            <a-col :lg="7" :md="12" :sm="24">
              <div class="iconbg"><i class="iconfont">&#xe660;</i></div>
              {{ item.tel }}
            </a-col>
            <a-col :lg="10" :md="12" :sm="24">
              <div class="iconbg"><i class="iconfont">&#xe605;</i></div>
              {{ item.eail }}
            </a-col>
          </a-row>
        </div>
      </div>
      <div class="marginB">
        <Title title='其它职位'></Title>
        <div class="contactbg1">
          <a-row v-for="(item ,index) in data.otherJob" :key="index" class="arow">
            <a-col>
              <span class="primColor">{{ item.name }}</span>
              <span> （{{item.introduce}}）</span>
            </a-col>
          </a-row>
        </div>
      </div>
      <div class="marginB">
        <Title title='公司介绍'></Title>
        <div class="contactbg1">
          {{ data.introduce }}
        </div>
      </div>
      <div>
        <Title title='高管介绍'></Title>
        <div class="contactbg1">
          <div class="senior" v-for="(item ,index) in data.senior" :key="index">
            <div class="seniorinfo">
              <span class="fontSize20">{{ item.name }}</span>
              <span class="primColor"> / {{item.job}}</span>  
            </div>
            <div>{{item.content}}</div>
          </div>
        </div>
      </div>
    </a-card>
    <a-card :bordered="false" class="cardBox">
      <a-textarea rows="4" placeholder="请输入文字" v-model="communicate"></a-textarea>
      <div class="addbtn">
        <a-button type="danger" @click="addCommunicate" >添加</a-button>
      </div>
      <a-radio-group
        v-model="mode"
        default-value="1"
        button-style="solid">
        <a-radio-button :value="1">
          我的沟通记录
        </a-radio-button>
        <a-radio-button :value="2">
          全部沟通记录
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
  </div>
</template>
<script>
import Title from '@/components/title'
// import * as IconSelf from '@/assets/icons/index'
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
      communicate: '', // 沟通记录内容
      mode: 1,
      communicateList
    };
  },
  components: {
    Title,
    // tel: IconSelf.tel
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