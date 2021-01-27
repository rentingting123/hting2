<template>
  <a-row :gutter="24">
    <a-col :sm="24" :md="12" :xl="18" >
      <a-row :gutter="24">
        <a-col :sm="24" :md="12" :xl="16" >
          <Statistics />
        </a-col>
        <a-col :sm="24" :md="12" :xl="8">
         <AnnualTarget />
        </a-col>
      </a-row>
      <Ranking />
    </a-col>
    <a-col :sm="24" :md="12" :xl="6" class="">
      <AgentNews />
    </a-col>
  </a-row>
</template>

<script>
import Statistics from "./Statistics"
import AnnualTarget from "./annualTarget"
import Ranking from "./ranking"
import AgentNews from "./AgentNews"
export default {
  data() {
    return {
      loading: true,
    }
  },
  components: {
    Statistics, //统计 上周 本周
    AnnualTarget, // 年度目标
    Ranking, // 排名
    AgentNews //代办事项
  }
}
</script>

<style>

</style>