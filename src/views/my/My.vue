<template>
  <div class="productBox">
    <TopBar :paramdata='params'></TopBar>
    <div class="loginBox">
      <div class="left" :class="{'active' : isLogin}"></div>
      <div class="right">
        <p v-if="!isLogin">未登录</p>
        <p v-if="isLogin">{{data.name}}</p>
        <p v-if="isLogin">{{data.phone}}</p>
      </div>
    </div>  
  </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
import TopBar from '@/components/top.vue'
 
export default {
  name: 'My',
  components: {
    TopBar
  },
  data () {
    return {
      product: '',
      params: {
        title: '我的翡翠',
      },
      data: {}
    }
  },
  computed: {
    isLogin() {
      return this.$store.getters.login
    }
  },
  mounted() {
    if(this.isLogin){
      this.getdata()
    }
  },
  created() {
    
  },
  methods: {
    getdata() {
      let self = this;
      this.$http.get('/home').then(function(res){
        self.data = res.data.data.login
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.productBox{
  height: 1.3rem;
  background-color: $color-0F85FF;
  .loginBox{
    display: flex;
    flex-direction: row;
    >div{
      font-size: 0.16rem;
    }
    .left{
      width: 0.64rem;
      height: 0.64rem;
      background: url('/src/assets/images/logo-icon.png') no-repeat;
      background-size: cover;
      margin-left: 0.14rem;
      &.active{
        background: url('/src/assets/images/logo-icon.png') no-repeat;
        background-size: cover;
        background-position: -0.69rem 0;
      }
    }
    .right{
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: $color-ffffff;
      margin-left: 0.1rem;
    }
  }
}
</style>



















