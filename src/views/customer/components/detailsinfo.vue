<template>
  <a-card :bordered="false" class="cardBox">
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
          <div class="imglist">
            <img :src="item1" class="imgitem" v-for="(item1,i) in item.img" :key="i">
          </div>
        </div>
      </div>
    </div>
    <div class="marginB">
      <Title title='企业相册'></Title>
      <div class="imglist">
        <img :src="item1" class="imgitem" v-for="(item1,i) in data.phoneList" :key="i">
      </div>
    </div>
     <div class="marginB">
      <Title title='企业执照'></Title>
      <div class="imglist">
        <img :src="item1" class="imgitem" v-for="(item1,i) in data.phoneList" :key="i">
      </div>
    </div>
	</a-card>
</template>
<script>
import Title from '@/components/title'
// import * as IconSelf from '@/assets/icons/index'
const data =  {
  introduce: '公司致力于运用科技创新的成果，用数字化技术，整合现有社会资源，为全社会提供风险管理服务和AI评估系统，整合医疗、养老、自然灾害、人为灾害等一切领域的风险管理，建立一个完整的风险管理标准、数据库和数据评价模型，对风险进行科学的精准定价咨询和投后管理…',
  senior:[
    {
      name: '马云',
      job:'创始人',
      content:'马云，男，汉族，中共党员 ，1964年9月10日生于浙江省杭州市，祖籍浙江省嵊州市谷来镇， 阿里巴巴集团主要创始人。',
      img: [
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170825%2F726d7b65bcaf4f4eaff6eab4ba03db2b.png&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614497618&t=e77cc9ab4eba49840f12865a3840bd30',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170825%2F726d7b65bcaf4f4eaff6eab4ba03db2b.png&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614497618&t=e77cc9ab4eba49840f12865a3840bd30',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170825%2F726d7b65bcaf4f4eaff6eab4ba03db2b.png&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614497618&t=e77cc9ab4eba49840f12865a3840bd30'
      ]
    },
    {
      name: '马云',
      job:'创始人',
      content:'马云，男，汉族，中共党员 ，1964年9月10日生于浙江省杭州市，祖籍浙江省嵊州市谷来镇， 阿里巴巴集团主要创始人。',
    },
  ],
  phoneList:[
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170825%2F726d7b65bcaf4f4eaff6eab4ba03db2b.png&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614497618&t=e77cc9ab4eba49840f12865a3840bd30',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170825%2F726d7b65bcaf4f4eaff6eab4ba03db2b.png&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614497618&t=e77cc9ab4eba49840f12865a3840bd30',
    ],
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