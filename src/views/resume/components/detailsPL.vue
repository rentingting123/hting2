<template>
  <a-tabs class="tabs" :tabBarStyle="{borderBottom: 'none',marginTop: 0}" >  
    <a-tab-pane key="1" tab="简历详情" >
      <Title title='基本信息'></Title>
      <a-descriptions class="marginB" :column="{ xxl: 5, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }" >
        <a-descriptions-item label="出生日期">
          {{ data.birth }}
        </a-descriptions-item>
        <a-descriptions-item label="国籍">
          {{ data.country }}
        </a-descriptions-item>
        <a-descriptions-item label="户籍">
          {{ data.huji }}
        </a-descriptions-item>
        <a-descriptions-item label="政治面貌">
          {{ data.zhnegzhi }}
        </a-descriptions-item>
        <a-descriptions-item label="目前年薪">
          {{ data.money }}
        </a-descriptions-item>
      </a-descriptions>
      <Title title='职业期望'></Title>
      <a-descriptions class="marginB" :column="2">
        <a-descriptions-item label="期望职位">
          {{ data.job }}
        </a-descriptions-item>
        <a-descriptions-item label="期望地点">
          {{ data.address }}
        </a-descriptions-item>
        <a-descriptions-item label="期望薪资">
          {{ data.qwmoney }}
        </a-descriptions-item>
        <a-descriptions-item label="期望行业">
          {{ data.qwhangye }}
        </a-descriptions-item>
        <a-descriptions-item label="勿推荐企业" :span='2'>
          {{ data.nocompany }}
        </a-descriptions-item>
        <a-descriptions-item label="备注">
          {{ data.note }}
        </a-descriptions-item>
      </a-descriptions>
      <Title title='教育经验'></Title>
      <div class="language marginB" >
        {{ data.school }}
        <a-tag class="tags" v-for="(item, index) in data.schoolTags" :key="index">
          {{ item }}
        </a-tag>
      </div>
      <Title title='语言水平'></Title>
      <div class="language marginB" >
        {{ data.lanage }}
        <a-tag class="tags" v-for="(item, index) in data.lanageTags" :key="index">
          {{ item }}
        </a-tag>
      </div>
      <Title title='职业速览'></Title>
      <div  class="marginB">
			<div v-for="(item, index) in data.occupation" :key="index" class="occupation">
				<span class="primColor marginr">{{ item.time }}</span>
				<span>{{ item.job }}</span>/
				<span class="company">{{ item.company }}</span>
			</div>
		</div>
      <Title title='工作经历'></Title>
     <div class="occupation">
				<span class="primColor marginr">{{ data.work.com }}</span>
				<span class="company">{{ data.work.time }}</span>
        <div class="primColor">{{ data.work.zw }}</div>
			</div>
      
      <a-descriptions class="marginB" :column="4">
        <a-descriptions-item label="工作地点">
          {{ data.work.address }}
        </a-descriptions-item>
        <a-descriptions-item label="薪资">
          {{ data.work.money }}
        </a-descriptions-item>
        <a-descriptions-item label="下属人数">
          {{ data.work.people }}
        </a-descriptions-item>
        <a-descriptions-item label="汇报对象">
          {{ data.work.obj }}
        </a-descriptions-item>
        <a-descriptions-item label="工作职责" :span='4'>
          {{ data.work.zhize }}
        </a-descriptions-item>
        <a-descriptions-item label="工作业绩" :span='4'>
          {{ data.work.yeji }}
        </a-descriptions-item>
      </a-descriptions>
      <Title title='项目经验'></Title>
      <div class="occupation">
				<span class="primColor marginr">{{ data.project.name }}</span>
				<span class="company">{{ data.project.time }}</span>
			</div>
      <a-descriptions class="marginB" :column="2">
        <a-descriptions-item label="项目描述" :span='2'>
          {{ data.project.miaoshu }}
        </a-descriptions-item>
        <a-descriptions-item label="项目职责" :span='2'>
          {{ data.project.zhizhe }}
        </a-descriptions-item>
        <a-descriptions-item label="项目业绩" :span='2'>
          {{ data.project.yeji }}
        </a-descriptions-item>
      </a-descriptions>
      <Title title='附加信息'></Title>
      <div class="occupation">
				<span >{{ data.fujia}}</span>
			</div>
    </a-tab-pane>
    <a-tab-pane key="2" tab="原始简历">
    </a-tab-pane>
  </a-tabs>
</template>
<script>
import Title from '@/components/title'
const data =  {
    birth:'1986年12月8日',
    country:'中国',
    huji:"北京市",
    zhnegzhi:"党员",
    money:"保密",
    job: '技术VP/首席技术官CTO/首席信息官CIO',
    address: '上海 厦门 杭州',
    qwmoney: '70k-100k  14薪',
    qwhangye:"互联网/移动互联网/电子商务/计算机软件",
    nocompany:"京东信息科技有限公司   上海数码科技有限公司",
    note:"愿意考虑创业公司",
    school: '山东大学 计算机软件与理论  硕士     2000.09-2004.07',
    schoolTags:['统招','985'],
    lanage:'英语',
    lanageTags:['听说良好','读写熟练'],
    occupation:[
      {
        id:1,
        time:"2004.09-至今",
        job:"技术总监",
        company:"上海直猎网络技术有限公司"
      },
      {
        id:2,
        time:"2004.09-至今",
        job:"技术总监",
        company:"上海直猎网络技术有限公司"
      },
      {
        id:3,
        time:"2004.09-至今",
        job:"技术总监",
        company:"上海直猎网络技术有限公司"
      },
    ],
    work:{
      com:'上海直猎网络科技有限公司',
      time:'2015.11-2020.12  5年1个月',
      zw:'技术总监 | 公司管理部',
      address:'北京',
      money:'40k',
      people:'40',
      obj:'CEO',
      zhize:'公司致力于运用科技创新的成果，用数字化技术，整合现有社会资源，为全社会提供风险管理服务和AI评估系统，整合医疗、养老、自然灾害、人为灾害等一切领域的风险管理，建立一个完整的风险管理标准、数据库和数据评价模型，对风险进行科学的精准定价咨询和投后管理。',
      yeji:'公司致力于运用科技创新的成果，用数字化技术，整合现有社会资源，为全社会提供风险管理服务和AI评估系统，整合医疗、养老、自然灾害、人为灾害等一切领域的风险管理，建立一个完整的风险管理标准、数据库和数据评价模型，对风险进行科学的精准定价咨询和投后管理。'
    },
    project:{
      name:'内部生产环节APP项目',
      time:'2015.11-2020.12',
      miaoshu:'内部生产环节APP项目',
      zhizhe: `1、架构设计：全面主持公司技术研发与数据平台规划与管理工作，负责整体技术系统（平台、数据库、应用架构、   
                客户端软件等）发展规划、设计与实现；
            2、实施：带领技术团队设计与实现产品的技术架构（服务端架构设计、数据结构定义、服务端API定义及实现、客 
                户端架构、系统运维等)，并负责核心代码开发；
            3、深度挖掘行业需求，探索产业数据模型和需求，负责数据体系的布局、规划与开发；`,
      yeji:'内部生产环节APP项目',
    },
    fujia:"附加信息内容"
  }

export default {
  data() {
    return {
      data,
      mode: 1,
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
    }
	}
};
</script>
<style scoped>
.detailsposition{
  width: 100%;
  height: 160px;
  background: #F1F7FF;
  border-radius: 14px;
  padding: 20px;
  box-sizing: border-box;
  color: #435EBE;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.detailsposition .info span{
  margin-right: 12px;
}
</style>