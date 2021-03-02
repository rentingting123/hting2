<template>
  <a-card :bordered="false" class="cardBox">
    <div class="talenth2">人才推荐报告</div>
		<div class="primColor infobox marginB">
			<spna>推荐职位：{{reportData.info.job}}</spna>
			<spna>推荐顾问：{{reportData.info.guwen}}</spna>
			<spna>联系方式：{{reportData.info.tel}}</spna>
			<spna>推荐时间：{{reportData.info.time}}</spna>
		</div>
    <Title title='推荐理由'></Title>
		<div class="liyou">
			<p>匹配度评估：
				<span class="redColor">{{ reportData.liyou.ppd }}</span>
			</p>
			<p>意向度评估：<span class="yellowColor">{{ reportData.liyou.yxd }}</span></p>
			<p>可面试时间：<span>{{ reportData.liyou.msTime }}</span></p>
			<p>可到岗时间：<span>{{ reportData.liyou.dgTime }}</span></p>
			<p>家庭婚育情况：<span>{{ reportData.liyou.dgTime }}</span></p>
			<p>看新机会的原因：<span>{{ reportData.liyou.reason }}</span></p>
			<p>其它offer情况：<span>{{ reportData.liyou.otheroffer }}</span></p>
		</div>
		<div class="primColor">对该职位的优/劣势：</div>
		<Title title='基本信息'></Title>
		<Title title='职业期望'></Title>	 
		<Title title='教育经验'></Title>
		<Title title='语言水平'></Title>
		<Title title='职业速览'></Title>	 
		<Title title='工作经验'></Title>
		<Title title='工作经验'></Title>
  </a-card>
</template>

<script>
import Title from '@/components/title'
const reportData={
	info:{
		job: 'COO',
		guwen: "张三三",
		tel:"13012345678",
		time:"2021.1.31"
	},
	liyou:{
		ppd:"高",
		yxd:"中",
		msTime:"提前安排即可",
		dgTime:"面谈",
		education:"定居上海 已婚已育",
		reason:"不适应新领导的风格",
		otheroffer:"有某教育公司CEO职"
	},
	youshi:[
		{
			id:1,
			text:"拥有20年的汽车行业各模块管理经验，并且在各板块均有卓越成绩；"
		},
		{
			id:2,
			text:"拥有20年的汽车行业各模块管理经验，并且在各板块均有卓越成绩；"
		},
		{
			id:3,
			text:"拥有20年的汽车行业各模块管理经验，并且在各板块均有卓越成绩；"
		},
	],
	jibeninfo:{
		name:"张三三",
		sex:"男",
		money:"50k-70k*14",
		tel:"13012345678",
		emil:"zhangsan@163.com",
		brith:"zhangsan@163.com",
		hukou:"北京市",
		city:"北京"
	},
	job:{
		job:"技术VP/首席技术官CTO/首席信息官CIO",
		address:"上海 厦门 杭州",
		money:"70k-100k  14薪",
		hangye:"互联网/移动互联网/电子商务/计算机软件"
	},
	education:{
		time:"2000.09-2004.07",
		school:"北京师范大学",
		major:"英语语言文学",
		education:'本科'
	},
	language:{
		name:"本科",
		tags:['读写清晰','听说良好']
	},
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
	experience:{
		name:"上海直猎网络技术有限公司",
		time:"2015.11-2020.12 5年1个",
		job:"副总裁-客服服务部",
		xingzhi:"外资",
		people:"37000人",
		xsnum:"40",
		object:"CEO",
		companyinfo:"公司致力于运用科技创新的成果，用数字化技术，整合现有社会资源，为全社会提供风险管理服务和AI评估系统，整合医疗、养老、自然灾害、人为灾害等一切领域的风险管理，建立一个完整的风险管理标准、数据库和数据评价模型，对风险进行科学的精准定价咨询和投后管理。",
		work:`1、架构设计：全面主持公司技术研发与数据平台规划与管理工作，负责整体技术系统（平台、数据库、应用架构、客户端软件等）发展规划、设计与实现；
					2、实施：带领技术团队设计与实现产品的技术架构（服务端架构设计、数据结构定义、服务端API定义及实现、客 户端架构、系统运维等)，并负责核心代码开发；
					3、深度挖掘行业需求，探索产业数据模型和需求，负责数据体系的布局、规划与开发；`,
		yeji:"公司致力于运用科技创新的成果，用数字化技术，整合现有社会资源，为全社会提供风险管理服务和AI评估系统，整合医疗、养老、自然灾害、人为灾害等一切领域的风险管理，建立一个完整的风险管理标准、数据库和数据评价模型，对风险进行科学的精准定价咨询和投后管理。"
	},
	peoject:{
		name:"内部生产环节APP项目",
		time:"2015.11-2020.12",
		zhiwu:`1、架构设计：全面主持公司技术研发与数据平台规划与管理工作，负责整体技术系统（平台、数据库、应用架构、客户端软件等）发展规划、设计与实现；
					2、实施：带领技术团队设计与实现产品的技术架构（服务端架构设计、数据结构定义、服务端API定义及实现、客 户端架构、系统运维等)，并负责核心代码开发；
					3、深度挖掘行业需求，探索产业数据模型和需求，负责数据体系的布局、规划与开发；`,
		miaoshu:"内部生产环节APP项目"
	}
}
export default {
	data() {
		//这里存放数据
		return {
			reportData
		};
	},
	components: {
		Title,
	}
}
</script>

<style>
	.talenth2{
		text-align: center;
		height: 56px;
		font-size: 30px;
		font-weight: 500;
		color: #282828;
		line-height: 56px;
	}
	.infobox{
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 18px;
	}
	.liyou{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		color: #282828;
	}
	.liyou p{
		min-width: 240px;
	}
	.liyou p>span{
		font-weight: 600;
	}
</style>