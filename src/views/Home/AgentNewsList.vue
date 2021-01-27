<!--  -->
<template>
	<div class="containerbox">
		<div class="renderlist">
			<div class="renderItem" v-for="(item,index) in data" :key="index">
				<div class="itemmeta">
					<span slot="title" class="title">
						{{ item.name }}
					</span>
					<span slot="description" class="description">
						{{ item.time }}
					</span>
				</div>
				<div slot="actions">
					<a-checkbox @change="onChangeCheck" />
				</div>
			</div>
			<!-- <div
			v-if="showLoadingMore"
			slot="loadMore"
			:style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }"
			>
			<a-spin v-if="loadingMore" />
			<div class="lookMore" v-else @click="onLoadMore">查看更多</div>
		</div> -->
		</div>
		<div class="renderadd" v-if="type === 1">
			<p class="addtitle">新增待办事项</p>
			<a-form class="formbox">
				<a-textarea placeholder="请输入内容" :rows="2" allow-clear/>
				<a-date-picker
					placeholder="请选择日期和时间"
					format="YYYY-MM-DD HH:mm"
					:disabled-date="disabledDate"
					:disabled-time="disabledDateTime"
					@change="onChange"
					style="width: 100%" />
					<a-button type="primary">添加</a-button>
			</a-form>
		</div>
	</div>
</template>

<script>
import moment from 'moment'
import {dictPage} from "@/api/Interface";

export default {
	data() {
		//这里存放数据
		return {
			loading: true,
      loadingMore: false,
      showLoadingMore: true,
      data: [],
		};
	},
	props:['type'],
	mounted() {
    this.getData();
  },
	//方法集合
	methods: {
		getData() {
			dictPage().then(res=>{
				this.loading = false;
				if(res.data.code === 1 ){
					this.loading = false;
					// this.data = res.data.data.list;
					this.data=[
						{
							name:"业务跟进 联系候选人张三",
							time:"1月18日 9:00"
						},
							{
							name:"业务跟进 联系候选人张三业务跟进 联系候选人张三业务跟进 联系候选人张三",
							time:"1月18日 9:00"
						}
					]
				}else{
					console.log("请求失败")
				}
			})
		},
		onChange(date, dateString) {
      console.log(date, dateString);
		},
		onChangeCheck(e) {
      console.log(`checked = ${e.target.checked}`);
    },
		onLoadMore() {
      this.loadingMore = true;
      this.getData(res => {
        this.data = this.data.concat(res.results);
        this.loadingMore = false;
        this.$nextTick(() => {
          window.dispatchEvent(new Event('resize'));
        });
      });
		},
		disabledDate(current) {
      // Can not select days before today and today
      return current && current < moment().endOf('day');
    },
    disabledDateTime() {
      return {
        disabledHours: () => this.range(0, 24).splice(4, 20),
        disabledMinutes: () => this.range(30, 60),
        disabledSeconds: () => [55, 56],
      };
    },
	},
}
</script>
<style scoped>
/* @import url(); 引入公共css类 */
.AgentNews{
	width: 100%;
	/* height: 890px; */
	background: #FFFFFF;
	box-shadow: 0px 0px 14px 0px rgba(218, 223, 255, 0.88);
	border-radius: 24px;
	padding: 16px;
	box-sizing: border-box;
}
.containerbox{
	height: 700px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction:column ;
}
.renderlist{
	width: 100%;
}
.renderItem{
	width: 100%;
	background: #F1F7FF;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	box-sizing: border-box;
	margin-bottom: 10px;
}
.itemmeta{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.title{
	font-size: 14px;
	font-weight: 500;
	color: #282828;
	line-height: 25px;
	position: relative;
	padding-left: 12px ;
}
.title::after{
	content: '';
	position: absolute;
	left: 0;
	top: 8px;
	width: 8px;
	height: 8px;
	background: #FF0000;
	border-radius: 50%;
}
 .description{
	padding-left: 12px ;
	font-size: 13px;
	font-weight: 400;
	color: #525355;
	line-height: 22px;
	margin-top: 10px;
}
.renderadd{
	width: 100%;
	height: 234px;
	background: #F1F7FF;
	padding: 14px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
}
.formbox{
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
}
.addtitle{
	height: 25px;
	font-size: 18px;
	font-weight: 500;
	color: #435EBE;
	line-height: 25px;
	text-align: left;
}
</style>