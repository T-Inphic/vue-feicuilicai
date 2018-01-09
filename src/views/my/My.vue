<template>
  <div>
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
    <div class="cateBox">
      <ul>
        <li>
          <router-link to="/invite">
            <p></p>
            <p>热门活动</p>
          </router-link>
        </li>
        <li>
          <router-link to="/invite">
            <p></p>
            <p>优惠券</p>
          </router-link>
        </li>
        <li>
          <router-link to="/invite">
            <p></p>
            <p>银行卡</p>
          </router-link>
        </li>
        <li>
          <router-link to="/invite">
            <p></p>
            <p>邀请好友</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="listBox">
      <ul>
        <li v-for="item in text" class="item"><router-link to="/about"><p><span></span>{{item}}</p><span class="arrow-icon"></span></router-link></li>
      </ul>
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
      data: {},
      text: ['公司介绍','信息披露','帮助中心','联系我们','意见反馈'],
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
      background: url('/static/assets/images/logo-icon.png') no-repeat;
      background-size: cover;
      margin-left: 0.14rem;
      &.active{
        background: url('/static/assets/images/logo-icon.png') no-repeat;
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
.cateBox{
  margin: 0.1rem 0;
  ul{
    height: 0.7rem;
    background-color: $color-ffffff;
    font-size: 0;
    li{
      display: inline-block;
      width: 25%;
      text-align: center;
      font-size: 0.12rem;
    }
  }
  li{
    p{
      &:first-child{
        width: 0.24rem;
        height: 0.24rem;
        margin: 0.14rem auto 0.02rem;
        background: url('/static/assets/images/category-icon.png') no-repeat;
        background-size: cover;
      }
      &:last-child{
        color: $color-666666;
      }
    }
    &:nth-child(2){
      p{
        &:first-child{
          background-position: -0.28rem 0;
        }
      }
    }
    &:nth-child(3){
      p{
        &:first-child{
          background-position: -0.56rem 0;
        }
      }
    }
    &:nth-child(4){
      p{
        &:first-child{
          background-position: -0.84rem 0;
        }
      }
    }
  }
}
.listBox{
  ul{
    margin-bottom: 0.1rem;
    background-color: $color-ffffff;
    li{
      height: 0.5rem;
      margin-left: 0.16rem;
      line-height: 0.5rem;
      position: relative;
      @include border-1px(#e5e5e5,false,true);
      &:last-child{
        @include border-1px(#ffffff,false,true);
      }
      .arrow-icon{
        position: absolute;
        top: 0;
        right: 0;
        width: 0.069rem;
        height: 0.109rem;
        margin-top: 0.1955rem;
        margin-right: 0.161rem;
        background: url('/static/assets/images/arrow_icon.png') no-repeat;
        background-size: cover;
      }
      p{
        color: $color-666666;
        &:first-child{
          span{
            display: inline-block;
            width: 0.18rem;
            height: 0.18rem;
            background: url('/static/assets/images/my-icon.png') no-repeat;
            background-size: cover;
            vertical-align: top;
            margin: 0.15rem 0.05rem 0 0;
          }
        }
      }
      &:nth-child(2){
        p{
          &:first-child{
            span{
              background-position: -0.22rem 0;
            }
          }
        }
      }
      &:nth-child(3){
        p{
          &:first-child{
            span{
              background-position: -0.46rem 0;
            }
          }
        }
      }
      &:nth-child(4){
        p{
          &:first-child{
            span{
              background-position: -0.68rem 0;
            }
          }
        }
      }
      &:nth-child(5){
        p{
          &:first-child{
            span{
              background-position: -0.88rem 0;
            }
          }
        }
      }
    }
  }
}
</style>