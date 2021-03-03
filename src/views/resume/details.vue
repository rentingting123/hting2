<!--  -->
<template>
	<div class=''>
		<div class="searchForm flexSpace deatilsbox" >
			<div class="infoleft">
				<div class="img"><img :src="data.info.img?data.img:logom" alt="" ></div>
				<div class="infoR">
					<div class="xinxi">
						<span class="name">{{data.info.name}} </span>
						<span> / {{data.info.job}}（{{data.info.company}}） </span>
						<a-tag class="tags">
							{{ data.info.tags }}
						</a-tag>
					</div>
					<div class="primColor infom">
						<span>{{data.info.sex}}</span>
						<span>{{ data.info.age }}岁</span>
						<span>{{ data.info.address }}</span>
						<span>{{ data.info.school }}</span>
						<span>{{ data.info.education }}</span>
						<span>{{ data.info.year }}</span>
					</div>
					<div class="infom">
						<span>
							<div class="iconbg"><i class="iconfont">&#xe660;</i></div>
							{{data.info.tel}}
						</span>
						<span>
							<div class="iconbg"><i class="iconfont">&#xe605;</i></div>
							{{data.info.emil}}
						</span>
					</div>
				</div>
			</div>
			<div class="inforight">
				<div class="timeTop infom">
					<span>简历更新时间：{{ data.info.time }}</span>
					<span>简历来源：{{ data.info.come }}</span>
					<span>操作人：{{ data.info.optionpeople }}</span>
				</div>
				<div class="optionGroup">
            <a-button :type="data.info.sc ==1?'danger':''" :class="data.info.sc ==1?'danger-from-button':'clear-from-button' ">
              <a-icon type="star" theme="filled"/>已收藏
            </a-button>
						<detailsForward :status="data.info.zf" />
						<detailsJoinposition :status="data.info.jlfx" />
						<detailsGruop :status="data.info.jrzw" />
          </div>
			</div>
		</div>
		<div class="marginTB">
			<a-button
				:type="showBtn === 1?'primary':''"
				:class="showBtn === 1?'primarybtn':'' "
				@click="btnChange(1)">
				推荐详情
			</a-button>
      <a-button
				:type="showBtn === 2?'primary':''"
				:class="showBtn === 2?'primarybtn':'' "
				class="marginleft"
				@click="btnChange(2)">
				职位详情
			</a-button>
		</div>
		<a-tabs v-if="showBtn === 1" class="tabs" :tabBarStyle="{borderBottom: 'none'}" >
      <a-tab-pane key="1" tab="全部(26)">
        <detailsTable />
      </a-tab-pane>
      <a-tab-pane key="2" tab="待处理(26)">
       <detailsTable />
      </a-tab-pane>
      <a-tab-pane key="3" tab="推荐(26)">
        <detailsTable />
      </a-tab-pane>
      <a-tab-pane key="4" tab="初试(26)">
        <detailsTable />
      </a-tab-pane>
			<a-tab-pane key="5" tab="复试(26)">
        <detailsTable />
      </a-tab-pane>
      <a-tab-pane key="6" tab="offer(26)">
       <detailsTable />
      </a-tab-pane>
      <a-tab-pane key="7" tab="入职(26)">
        <detailsTable />
      </a-tab-pane>
      <a-tab-pane key="8" tab="过保(26)">
        <detailsTable />
      </a-tab-pane>
			<a-tab-pane key="9" tab="不合适(26)">
        <detailsTable />
      </a-tab-pane>
    </a-tabs>
		<a-row v-if="showBtn === 2" :gutter="24">
			<a-col :sm="24" :md="12" :xl="14" >
				<detailsPL />
			</a-col>
			<a-col :sm="24" :md="12" :xl="10">
				<detailsPR />
			</a-col>
		</a-row>
	</div>
</template>

<script>
import detailsForward from './components/detailsForward' //转发
import detailsJoinposition from './components/detailsJoinposition' //加入职位
import detailsGruop from './components/detailsGruop' //简历分组

import detailsTable from './components/detailsTable'
import detailsPL from './components/detailsPL'
import detailsPR from './components/detailsPR'

import logom from '@/assets/img/logom.png'
import logof from '@/assets/img/logof.png'

const data={
    info: {
      img: '',
      name: "张飞",
			job: "CTO",
			company: "京东信息科技有限公司",
			tags: "在职 观望新机会",
      sex: '男',
      age: '38',
			address:"北京",
      school: '北京师范大学',
			education: "硕士 ",
			year: "14年工作经验",
			tel: "13012345678",
			emil: "13012345678@163.com",
      time: "2020年12月31日 16:30",
			come: "上传",
      optionpeople: '张三',
			sc: 1,
      zf: 1,
      jlfx: 1,
      jrzw: 1,
    }
}

export default {
	data() {
		return {
			showBtn: 1,
			data,
			logom,
      logof,
		};
	},
	components:{
		detailsForward,
		detailsJoinposition,
		detailsGruop,

		detailsTable,
		detailsPL,
		detailsPR
	},
	methods: {
		// 按钮切换
		btnChange(i){
			this.showBtn = i
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
/* @import url(); 引入公共css类 */
	.deatilsbox{
		height: 130px;
	}
	.infoleft{
		display: flex;
		align-items: center;
	}
	.img{
		width: 100px;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #f3f3f3;
	}
	.img img{
		width: 100%;
	}
	.infoR{
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		justify-content: space-around;
		margin-left: 20px;
		height: 100%;
	}
	.infom>span{
		margin-right: 10px;
	}
	.xinxi{
    font-size: 14px;
    color: #282828;
    margin-bottom: 5px;
  }
  .xinxi .name{
    font-size: 20px;
  }
	.inforight{
		display: flex;
		height: 100%;
    flex-direction: column;
    justify-content: space-between;
	}
</style>