<template>
  <a-row :gutter="24">
    <a-col :sm="24" :md="12" :xl="18" >
      <a-row :gutter="24">
        <a-col :sm="24" :md="12" :xl="16" >
          <Statistics />
        </a-col>
        <a-col :sm="24" :md="12" :xl="8">
         <annualTarget />
        </a-col>
      </a-row>
      <ranking />
    </a-col>
    <a-col :sm="24" :md="12" :xl="6" class="">
      2代办事项
    </a-col>
  </a-row>
</template>

<script>
import Statistics from "./Statistics"
import annualTarget from "./annualTarget"
import ranking from "./ranking"

export default {
  data() {
    return {
      loading: true,
    }
  },
  components: {
    Statistics, //统计 上周 本周
    annualTarget, // 年度目标
    ranking, // 排名
  }
}
</script>

<style>

</style>