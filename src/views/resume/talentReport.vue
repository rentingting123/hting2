<template>
  <a-card :bordered="false" class="cardBox">
    <div class="talenth2">人才推荐报告</div>
		<div class="primColor infobox marginB">
			<span>推荐职位：{{reportData.info.job}}</span>
			<span>推荐顾问：{{reportData.info.guwen}}</span>
			<span>联系方式：{{reportData.info.tel}}</span>
			<span>推荐时间：{{reportData.info.time}}</span>
		</div>
    <Title title='推荐理由'></Title>
		<a-descriptions  :column="4" class="marginB">
			<a-descriptions-item label="匹配度评估">
				<span class="redColor">{{ reportData.liyou.ppd }}</span>
			</a-descriptions-item>
			<a-descriptions-item label="意向度评估">
				<span class="yellowColor">{{ reportData.liyou.yxd }}</span>
			</a-descriptions-item>
			<a-descriptions-item label="可面试时间">
				{{ reportData.liyou.msTime }}
			</a-descriptions-item>
			<a-descriptions-item label="可到岗时间" >
				{{ reportData.liyou.dgTime }}
			</a-descriptions-item>
			<a-descriptions-item label="家庭婚育情况" :span="2">
				{{ reportData.liyou.education }}
			</a-descriptions-item>
			<a-descriptions-item label="看新机会的原因" :span="2">
				{{ reportData.liyou.reason }}
			</a-descriptions-item>
			<a-descriptions-item label="其它offer情况" :span="2">
				{{ reportData.liyou.otheroffer }}
			</a-descriptions-item>
		</a-descriptions>
		<div class="primColor youshitit">对该职位的优/劣势：</div>
		<div class="marginB">
			<div v-for="(item,index) in reportData.youshi" :key="index" class="youshi">
				{{ item.text }}
			</div>
		</div>
		<Title title='基本信息'></Title>
		<a-descriptions  :column="3" class="marginB">
			<a-descriptions-item label="姓名">
				{{ reportData.jibeninfo.name }}
			</a-descriptions-item>
			<a-descriptions-item label="性别">
				{{ reportData.jibeninfo.sex }}
			</a-descriptions-item>
			<a-descriptions-item label="目前年薪">
				{{ reportData.jibeninfo.money }}
			</a-descriptions-item>
			<a-descriptions-item label="手机号码" >
				{{ reportData.jibeninfo.tel }}
			</a-descriptions-item>
			<a-descriptions-item label="邮箱" >
				{{ reportData.jibeninfo.emil }}
			</a-descriptions-item>
			<a-descriptions-item label="出生日期" >
				{{ reportData.jibeninfo.brith }}
			</a-descriptions-item>
			<a-descriptions-item label="户口" >
				{{ reportData.jibeninfo.hukou }}
			</a-descriptions-item>
			<a-descriptions-item label="所在城市">
				{{ reportData.jibeninfo.city }}
			</a-descriptions-item>
		</a-descriptions>
		<Title title='职业期望'></Title>
		<a-descriptions  :column="4" class="marginB">
			<a-descriptions-item label="期望职位" :span="2">
				{{ reportData.job.job }}
			</a-descriptions-item>
			<a-descriptions-item label="期望地点" :span="2">
				{{ reportData.job.address }}
			</a-descriptions-item>
			<a-descriptions-item label="期望薪资" :span="2">
				{{ reportData.job.money }}
			</a-descriptions-item>
			<a-descriptions-item label="期望行业" :span="2">
				{{ reportData.job.hangye }}
			</a-descriptions-item>
		</a-descriptions>
		<Title title='教育经验'></Title>
		<a-descriptions layout="vertical" :column="4" :colon="false" class="marginB">
			<a-descriptions-item label="起止时间">
				{{ reportData.education.time }}
			</a-descriptions-item>
			<a-descriptions-item label="学校名称">
				{{ reportData.education.school }}
			</a-descriptions-item>
			<a-descriptions-item label="专业">
				{{ reportData.education.major }}
			</a-descriptions-item>
			<a-descriptions-item label="学历" >
				{{ reportData.education.education }}
			</a-descriptions-item>
		</a-descriptions>
		<Title title='语言水平'></Title>
		<div class="language marginB" >
			{{ reportData.language.name }}
			<a-tag class="tags" v-for="(item, index) in reportData.language.tags" :key="index">
        {{ item }}
      </a-tag>
		</div>
		<Title title='职业速览'></Title>
		<div  class="marginB">
			<div v-for="(item, index) in reportData.occupation" :key="index" class="occupation">
				<span class="primColor marginr">{{ item.time }}</span>
				<span>{{ item.job }}</span>/
				<span class="company">{{ item.company }}</span>
			</div>
		</div>
		<Title title='工作经验'></Title>
		<div class="marginB">
			<div class="occupation">
				<span class="primColor marginr">{{ reportData.experience.name }}</span>
				<span class="company">{{ reportData.experience.time }}</span>
			</div>
			<a-descriptions  :column="3" class="marginTop">
				<a-descriptions-item label="所任职位">
					{{ reportData.experience.job }}
				</a-descriptions-item>
				<a-descriptions-item label="公司性质">
					{{ reportData.experience.xingzhi }}
				</a-descriptions-item>
				<a-descriptions-item label="公司规模">
					{{ reportData.experience.people }}
				</a-descriptions-item>
				<a-descriptions-item label="下属人数" >
					{{ reportData.experience.xsnum }}
				</a-descriptions-item>
				<a-descriptions-item label="汇报对象" :span="2">
					{{ reportData.experience.object }}
				</a-descriptions-item>
				<a-descriptions-item label="公司介绍" :span="4">
					{{ reportData.experience.companyinfo }}
				</a-descriptions-item>
				<a-descriptions-item label="工作职责" :span="4">
					{{ reportData.experience.work }}
				</a-descriptions-item>
				<a-descriptions-item label="工作业绩" :span="4">
					{{ reportData.experience.yeji }}
				</a-descriptions-item>
			</a-descriptions>
		</div>
		<Title title='工作经验'></Title>
		<div class="marginB">
			<div class="occupation">
				<span class="primColor marginr">{{ reportData.peoject.name }}</span>
				<span class="company">{{ reportData.peoject.time }}</span>
			</div>
			<a-descriptions class="marginTop">
				<a-descriptions-item label="项目职务" :span="4">
					{{ reportData.peoject.zhiwu }}
				</a-descriptions-item>
				<a-descriptions-item label="项目描述" :span="4">
					{{ reportData.peoject.miaoshu }}
				</a-descriptions-item>
			</a-descriptions>
		</div>
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
		name:"英语",
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
	.liyou p span{
		color: #111;
		/* font-weight: 600; */
	}
	.youshi{
		height: 30px;
		line-height: 30px;
		position: relative;
		padding-left: 10px;
		/* font-size: 18px; */
	}
	.youshitit{
		margin: 16px 0;
		font-size: 18px; 
	}
	.language{
		display: flex;
		align-items: center;
		font-size: 16px;
		color: #282828FF;
	}
	.youshi::after,.occupation::after{
		content: '';
		position: absolute;
		left: 0;
		top: 10px;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background-color: #FF6864FF;
	}
	.language .tags{
		background:#F1F7FFFF;
		color:#435EBEFF;
		border:none;
		margin-left: 10px;
	}
	.occupation{
		font-size: 16px;
		position: relative;
		padding-left: 10px;
	}
	.occupation .company{
		font-size: 12px;
	}
</style>