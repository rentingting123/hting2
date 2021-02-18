<!--  -->
<template>
	<div class=''>
		<div class="searchForm flexSpace">
			<div class="titlebox"> 
				<div class="company">
          <img class="img" :src="data.company.img" alt="">
          <div class="infobox">
						<div class="info1">
							<div  class="primColor fontSize20">{{data.company.name}}</div>
							<span>大地财产保险    </span>
							<span>保险行业</span>
							<span>100-500人</span>
							<span>战略融资</span>
							<span>企业福利</span>
							<span> 维护人:白玉</span>
							<span>添加时间:2020/12/31</span>
						</div>
            <div class="info">
              <div>联系地址：浙江省杭州市余杭区未来科技城      </div>
              <div>官网地址：<span class="primColor">www.dadicaichan.com</span></div>
            </div>
          </div>
        </div>
			</div>
			<div>
        <a-button type="primary" class="danger-from-button1" @click="editData()">
					<a-icon type="edit" />
					编辑
				</a-button>
				<a-button  type="danger" class="danger-from-button marginleft" @click="deleteData(item.id)">
					<i class="iconfont marginr" >&#xe614;</i>
					删除
				</a-button>
			</div>
		</div>
		<a-row :gutter="[20]">
			<a-col :sm="24" :md="7" :xl="7" >
				<detailsinfo class="height390" />
			</a-col>
			<a-col :sm="24" :md="7" :xl="6">
				<detailsPosition class="height390" />
			</a-col>
			<a-col :sm="24" :md="10" :xl="11">
				<detailsCooperation class="height390" />
			</a-col>
		</a-row>
		<a-row :gutter="[20]">
			<a-col :sm="24" :md="14" :xl="13" >
				<detailsRecord class="height466" />
			</a-col>
			<a-col :sm="24" :md="10" :xl="11">
				<detailsContact class="height466" />
			</a-col>
		</a-row>
		<addEditBusContacts :visible='visible'  @visibleCancel="visibleCancel()"></addEditBusContacts>
	</div>
</template>

<script>
import detailsinfo from './components/detailsinfo'
import detailsPosition from './components/detailsPosition'
import detailsCooperation from './components/detailsCooperation'
import detailsRecord from './components/detailsRecord'
import detailsContact from './components/detailsContact'
import addEditBusContacts from './addEditBusContacts'

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
export default {
	data() {
		return {
			data,
			showBtn: 1,
			visible: false
		};
	},
	components:{
		detailsinfo,
		detailsPosition,
		detailsCooperation,
		detailsRecord,
		detailsContact,
		addEditBusContacts
	},
	methods: {
		// 按钮切换
		btnChange(i){
			this.showBtn = i
		},
		editData(id){
			console.log(id);
			this.visible = true;
		},
		visibleCancel(){
			this.visible = false
		}
	},
	//生命周期 - 创建完成（可以访问当前this实例）
	created() {

	},
	//生命周期 - 挂载完成（可以访问DOM元素）
	mounted() {

	},
}
</script>
<style scoped>
.company {
  width: 100%;
  display: flex;
  align-items: center;
}
.company .img{
  width: 90px;
  height: 72px;
  margin-right: 4px;
}
.company .infobox{
  flex: 1;
}
.info1{
	display: flex;
	align-items: center;
	font-size: 16px;
}
.info1 span{
	margin-left: 20px;
	color: #282828;
}
.company .info{
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  font-size: 14px;
	color: #282828;
  font-weight: 500;
}
.company .info>div{
	margin-right: 20px;
}
.height390{
	height: 390px;
	overflow-y: auto;
}
.height466{
	height: 466px;
}
</style>