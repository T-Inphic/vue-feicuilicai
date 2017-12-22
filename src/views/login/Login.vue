<template>
  <div class="loginBox">
    <TopBar :paramdata='params'></TopBar>
    <div class="login">
      <div class="ipt"><label for="ipt">手机号码</label><input class="iptnostyle" id="ipt" type="text" placeholder="请输入手机号" maxlength="11"></div>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/top.vue'
export default {
  name: 'login',
  components: {
    TopBar
  },
  data () {
    return {
      params: {
        left: '返回',
        title: '登录',
      }
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .login{
    margin-top: 0.16rem;
    background-color: $color-ffffff;
    .ipt{
      height: 0.5rem;
      font-size: 0;
      label{
        display: inline-block;
        text-align: center;
        font-size: 0.16rem;
        color: $color-666666;
        width: 20%;
        height: 0.5rem;
        line-height: 0.5rem;
        vertical-align: top;
      }
      .iptnostyle{
        box-sizing: border-box;
        width: 80%;
        padding: 0 0.37rem 0 0.4rem;
        height: 0.5rem;
      }
    }
  }
</style>
