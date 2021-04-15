<template>
  <div>
   <router-view />
  </div>
</template>

<script>


export default {
  name: 'TableList',
  components: {
  },
  data () {
    return {
      showBtn: 1, 
    }
  },
  methods: {
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