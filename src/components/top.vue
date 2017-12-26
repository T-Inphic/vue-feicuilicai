<template>
  <div class="topBox">
    <div><span v-if="param.left" @click="back()"></span></div>
    <div>{{param.title}}</div>
    <div>{{param.right}}</div>
  </div>
</template>

<script>
export default {
  name: 'topbar',
  props: ['paramdata'],
  data () {
    return {
      param: this.paramdata
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .topBox{
    display: flex;
    height: 0.44rem;
    justify-content: center;
    background-color: $color-0F85FF;
    >div{
      flex: 1;
      line-height: 0.44rem;
      text-align: center;
      color: $color-ffffff;
      font-size: 0.18rem;
      &:first-child{
        text-align: left;
        span{
          display: inline-block;
          width: 0.095rem;
          height: 0.19rem;
          margin: 0.125rem 0 0 0.14rem;
          background: url('/src/assets/images/back.png') no-repeat;
          background-size: cover;
          vertical-align: top;
        }
      }
      &:nth-child(2){
        flex: 2;
      }
      &:last-child{
        text-align: right;
      }
    }
  }
</style>
