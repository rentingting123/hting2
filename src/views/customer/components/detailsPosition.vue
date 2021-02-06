<template>
  <div class="rank">
    <h4 class="title">在招职位</h4>
    <ul class="list">
      <li :key="index" v-for="(item, index) in list" :class="index % 2 === 0 ? 'item1' : null">
        <span class="primColor">{{ item.name }}</span>
        <span>{{ item.pm }}</span>
        <span>{{ item.rc }}</span>
      </li>
      <div class="lookMore" @click="lookMore">查看全部</div>
    </ul>
  </div>
</template>

<script>
const list = [
    {
      name: '运营总监' ,
      pm: "PM：张三 ",
      rc: 'RC：李四'
    },
    {
      name: '运营总监' ,
      pm: "PM：张三 ",
      rc: 'RC：王呜呜'
    },
    {
      name: '运营总监' ,
      pm: "PM：张三 ",
      rc: 'RC：李四'
    },
    {
      name: '运营总监' ,
      pm: "PM：张三 ",
      rc: 'RC：王呜呜'
    }
  ]
export default {
  name: 'RankList',
  data(){
    return {
      list
    }
  },
  methods: {
    lookMore(){
      console.log("产看更多")
    }
  }
}
</script>

<style lang="less" scoped>
  .rank {
	padding: 20px;
	background: #FFFFFF;
	box-shadow: 0px 0px 14px 0px rgba(218, 223, 255, 0.88);
	border-radius: 24px;

	.list {
		margin: 12px 0 0;
		padding: 0;
		height: 280px;
		list-style: none;
		overflow: auto;
		li {
			height: 50px;
			padding: 0 10px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			span {
				color: #282828;
				font-size: 14px;
				line-height: 50px;
			}
		}
		.item1{
			background-color: #F3F7FF;
		}
	}
}

.lookMore{
	height: 30px;
	font-size: 12px;
	font-weight: 500;
	color: #2F437C;
	text-align: center;
	line-height: 30px;
	cursor: pointer;
}
</style>
