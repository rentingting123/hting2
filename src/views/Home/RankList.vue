<template>
  <div class="rank">
    <h4 class="title">{{ title }}</h4>
    <ul class="list">
      <li :key="index" v-for="(item, index) in list" :class="index % 2 === 0 ? 'item1' : null">
        <span :class="index === 0 ? 'active1' : index === 1 ? 'active2':index === 2 ? 'active3' : null">
          {{ index + 1 }}
        </span>
        <span>{{ item.name }}</span>
        <span>{{ item.job }}</span>
        <span>{{ item.total.toFixed(2) }}元</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RankList',
  // ['title', 'list']
  props: {
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: null
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
      margin: 25px 0 0;
      padding: 0;
      height: 260px;
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
          &:first-child {
            border-radius: 20px;
            display: inline-block;
            font-size: 12px;
            font-weight: 600;
            margin-right: 10px;
            height: 20px;
            line-height: 20px;
            width: 20px;
            text-align: center;
          }
          &.active1 {
            background-color: #FF5920;
            color: #fff;
          }
          &.active2 {
            background-color: #5DDAB4;
            color: #fff;
          }
          &.active3 {
            background-color:#9694FF;
            color: #fff;
          }
          &:last-child {
            float: right;
          }
        }
      }
      .item1{
        background-color: #F3F7FF;
      }
    }
  }

  .mobile .rank {
     margin: 25px 0 0;
  }

</style>
