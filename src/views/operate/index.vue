<template>
  <div>
    <div class="marginTB">
			<a-button
				:type="showBtn === 1?'primary':''"
				:class="showBtn === 1?'primarybtn':'' "
				@click="btnChange(1)">
				人员列表
			</a-button>
      <a-button
				:type="showBtn === 2?'primary':''"
				:class="showBtn === 2?'primarybtn':'' "
				class="marginleft"
				@click="btnChange(2)">
				行业列表
			</a-button>
      <a-button
				:type="showBtn === 3?'primary':''"
				:class="showBtn === 3?'primarybtn':'' "
				class="marginleft"
				@click="btnChange(3)">
				岗位列表
			</a-button>
      <a-button
				:type="showBtn === 4?'primary':''"
				:class="showBtn === 4?'primarybtn':'' "
				class="marginleft"
				@click="btnChange(4)">
				组织架构
			</a-button>
		</div>
    <people v-if="showBtn === 1"/>
    <industry v-if="showBtn === 2"/>
    <station v-if="showBtn === 3"/>
    <organizational v-if="showBtn === 4"/>
  </div>
</template>

<script>
import people from './people'
import industry from './industry'
import station from './station'
import organizational from './organizational'

export default {
  name: 'TableList',
  components: {
    people, // 人员列表
    industry, // 行业列表
    station, // 岗位
    organizational //组织架构
  },
  data () {
    return {
      showBtn: 4, 
    }
  },
  methods: {
    // 按钮切换
		btnChange(i){
			this.showBtn = i
		}
  }
}
</script>

<style>
  .container{
    background: #fff;
    min-height: 100%;
  }
  .slelectbox{
    width: 200px;
  }
  .titleBtn{
    display: flex;
    justify-content: flex-end;
  }
</style>