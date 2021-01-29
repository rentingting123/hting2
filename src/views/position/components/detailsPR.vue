<template>
  <a-card :bordered="false" class="cardBox">
    <div>
      <Title title='职位详情' type='1'></Title>
      <a-row class="detailsposition">
        <a-col>
          <span class="fontSize26 primColor">{{ data.job }}</span>
          <span  class="redColor">{{data.money}}<span> /年薪范围</span></span>
        </a-col>
        <a-col class="info">
          <span>
            <div class="iconbg"><i class="iconfont">&#xe646;</i></div>
            {{data.job}}
          </span>
          <span>
            <div class="iconbg"><i class="iconfont">&#xe647;</i></div>
            {{data.year}}
          </span>
          <span>
            <div class="iconbg"><i class="iconfont">&#xe611;</i></div>
            {{data.school}}
          </span>
        </a-col>
        <a-col v-html="data.other"></a-col>
      </a-row>
    </div>
    <div class="marginB">
      <Title title='岗位职责'></Title>
      <div v-html="data.responsibilities" class="contentText">
      </div>
    </div>
    <div class="marginB">
      <Title title='任职要求'></Title>
      <div v-html="data.responsibilities" class="contentText">
      </div>
    </div>
    <div class="marginB">
      <Title title='任职要求'></Title>
      <div v-html="data.responsibilities" class="contentText">
      </div>
    </div>
	</a-card>
</template>
<script>
import Title from '@/components/title'
// import * as IconSelf from '@/assets/icons/index'
const data =  {
    responsibilities: `1、架构设计：全面主持公司技术研发与数据平台规划与管理工作，负责整体技术系统（平台、数据库、应用架构、客户端软件等）发展规划、设计与实现；<br/>
                      2、实施：带领技术团队设计与实现产品的技术架构<br/>
                      （服务端架构设计、数据结构定义、服务端API定义及实现、客户端架构、系统运维等)，并负责核心代码开发<br/>
                      3、深度挖掘行业需求，探索产业数据模型和需求，负责数据体系的布局、规划与开发；<br/>
                      4、保证公司技术和数据产品的安全性，制定技术部门保密方案和计划；<br/>
                      5、建立规范、高效的部门管理体系并优化完善，实现效率不断提升，完成团队梯队化建设、培养及管理；<br/>
                      6、结合公司业务，不断完善人工智能与算法布局，提升公司人工智能与算法在大数据的应用场景及落地；`,
    job: '技术总监CTO',
    money: '100万-200万',
    address: '上海市徐汇区云峰路500号',
    year: '5-10年',
    school: '本科及以上',
    other: '所属部门：技术研发部 &nbsp; &nbsp;汇报对象：CEO  &nbsp; &nbsp;下属规模：25人&nbsp; &nbsp; 面试流程：HR-业务部门-CEO'
  }

export default {
  data() {
    return {
      data,
      
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