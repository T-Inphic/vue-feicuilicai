<template>
  <div class="homeBox">
    <div class="head" v-if="!isLogin">为您准备大礼</div>
    <div class="coupon" v-if="!isLogin">
      <ul>
        <li>
          <div class="item">
            <div>
              <p class="fxhbIcon"></p>
              <div class="text">
                <p>返现红包{{act.cashBackCount}}张</p>
                <p>可提现</p>
              </div>
            </div>
            <div><span class="number">{{act.cashBackAmount}}</span>元</div>
          </div>
          <i class="courtesy-icon"></i>
        </li>
        <li>
          <div class="item">
            <div>
              <p class="tyjIcon"></p>
              <div class="text">
                <p>新手体验金</p>
                <p>无需本金，坐享收益</p>
              </div>
            </div>
            <div><span class="number">{{Number(act.experienceAmount)|thousand}}</span>元</div>
          </div>
          <i class="courtesy-icon"></i>
        </li>
      </ul>
      <div class="btnBox"><router-link to="/login" class="btn">立即注册领取</router-link></div>
    </div>
    <div class="banlance" v-if="isLogin">
      <div class="top">
        <p class="title">总资产</p>
        <p class="number num">13,888.01</p>
        <p class="total">累计收益(元)：<span class="number">100.01</span></p>
      </div>
      <div class="mid">
        <div class="left">
          <div class="fctyIcon"></div>
          <div>
            <p>翡翠体验</p>
            <p class="number">200.00</p>
          </div>
          <div class="arrowIcon"></div>
        </div>
        <div class="right">
          <div class="fcjhIcon"></div>
          <div>
            <p>翡翠计划</p>
            <p class="number">20,000.00</p>
          </div>
          <div class="arrowIcon"></div>
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <p>可用余额(元)</p>
          <p class="number">200.00</p>
        </div>
        <div class="right">
          <span>提现</span>
          <span class="recharge">充值</span>
        </div>
      </div>
    </div>
    <div class="carouselBox">
      <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item in banner" :key="item.id"><img :src="item.imgUrl" alt=""></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
    <div class="planBox">
      <p class="title">翡翠计划</p>
      <div class="profit" v-if="range.length>0"><p class="big"><span>{{range[index].baseRate}}</span>%</p><p class="small" v-if="range[index].activityRate"><span>+{{range[index].activityRate}}</span>%</p></div>
      <p class="year">预期年化收益</p>
      <div class="tabBox">
        <ul class="tab">
          <li v-for="(item, $index) in day" :key="item" @click="tab($index)" :class="{active: $index == index}">
            <p>{{item}}天</p>
            <p class="logoIcon"></p>
          </li>
        </ul>
        <p class="result" v-if="range.length>0">投资10,000元，预计收益<span class="small">{{range[index].flag}}</span>元</p>
        <div class="btnBox"><router-link to="/">立即投资</router-link></div>
      </div>
    </div>
    <div class="safeBox">
      <p class="title">平台保障</p>
      <ul>
        <li>
          <p></p>
          <p>A股上市公司<br/>投资背景</p>
        </li>
        <li>
          <p></p>
          <p>银行风控标准<br/>精选优质资产</p>
        </li>
        <li>
          <p></p>
          <p>专业金牌律所<br/>保障合法合规</p>
        </li>
      </ul>
    </div>
    <p class="tipText">市场有风险，投资需谨慎</p>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import { mapGetters, mapActions } from 'vuex'

 
export default {
  name: 'Home',
  data () {
    return {
      act: '',
      banner: [],
      range: [],
      index: 0,
      swiperOption: {  
        notNextTick: true,  
        pagination: '.swiper-pagination',  
        slidesPerView: 'auto',  
        centeredSlides: true,  
        paginationClickable: true,  
        // spaceBetween: 30,
        autoplay: true,
      },
      day: [30,90,180,360]
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    isLogin() {
      return this.$store.getters.login
    }
  },
  created() {
    let self = this;
    this.$http.get('/home').then(function(res){
      self.banner = res.data.data.banner;
      self.range = res.data.data.range;
      self.act = res.data.data.act;
    })
  },
  methods: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    tab(day) {
      this.index = day;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .head{
    font-size: 0.18rem;
    text-align: center;
    padding: 0.08rem 0;
    background-color: $color-ffffff;
  }
  .coupon{
    box-sizing: border-box;
    height: 2.6rem;
    padding: 0.12rem 0.16rem;
    background-color: $color-ffffff;
    li{
      position: relative;
      margin-bottom: 0.14rem;
      &:last-child{
      .courtesy-icon{
          background-position: -0.40rem 0;
        }
      }
    }
    .btnBox{
      margin-top: 0.18rem;
      text-align: center;
    }
    .btn{
      width: 100%;
      display: block;
      line-height: 0.45rem;
    }
  }
  .item{
    box-sizing: border-box;
    padding: 0.15rem;
    display: flex;
    align-items: center;
    height: 0.8rem;
    border-radius: 0.05rem;
    box-shadow: 0 0 0.06rem rgba(0,0,0,0.1);
    >div{
      flex: 1;
      &:first-child{
        display: flex;
        align-items: center;
      };
      &:last-child{
        text-align: right;
      };
    }
    .text{
      font-size: 0.18rem;
      p{
        &:last-child{
          margin-top: 0.08rem;
          font-size: 0.12rem;
          color: $color-999999;
        };
      }
    }
    .fxhbIcon,.tyjIcon{
      width: 0.36rem;
      height: 0.36rem;
      margin-right: 0.08rem;
      background: url('/static/assets/images/home-icon-1.png') no-repeat 0 0;
      background-size: cover;
    }
    .tyjIcon{
      background-position: -0.39rem;
    }
    .number{
      font-size: 0.3rem;
      color: $color-333333;
    }
  }
  .courtesy-icon{
    position: absolute;
    top: 0;
    right: 0;
    width: 0.385rem;
    height: 0.385rem;
    background: url('/static/assets/images/home-icon-2.png') no-repeat;
    background-size: cover;
  }
  .carouselBox{
    height: 1rem;
    margin-top: 0.1rem;
    background-color: $color-ffffff;
    img{
      width: 100%;
      height: 1rem;
    }
  }
  .title{
    font-size: 0.16rem;
    font-weight: 600;
    color: $color-333333;
    text-align: center;
    padding: 0.1rem 0 0.1rem;
  }
  .planBox{
    height: 2.6rem;
    margin-top: 0.1rem;
    background-color: $color-ffffff;
    .profit{
      text-align: center;
      color: $color-ff6300;
      font-size: 0.1rem;
      p{
        display: inline-block;
      }
    }
    .big{
      span{
        font-size: 0.42rem;
      }
    }
    .small{
      span{
        font-size: 0.22rem;
      }
    }
    .year{
      font-size: 0.12rem;
      color: $color-999999;
      text-align: center;
    }
  }
  .safeBox{
    height: 1.6rem;
    margin-top: 0.1rem;
    background-color: $color-ffffff;
    ul{
      display: flex;

    }
    li{
      flex: 1;
      p{
        color: $color-aaaaaa;
        font-size: 0.11rem;
        text-align: center;
        &:first-child{
          width: 0.5rem;
          height: 0.5rem;
          margin: 0 auto 0.05rem;
          background: url('/static/assets/images/home-icon-4.png') no-repeat;
          background-size: auto 100%;
        }
      }
      &:nth-child(2){
        p{
          &:first-child{
            background-position: -0.52rem 0;
          }
        }
      }
      &:nth-child(3){
        p{
          &:first-child{
            background-position: -1.04rem 0;
          }
        }
      }
    }
  }
  .tipText{
    text-align: center;
    font-size: 0.12rem;
    color: $color-c8c8c8;
    padding: 0.1rem 0;
  }
  .tabBox{
    .result{
      text-align: center;
      margin: 0.09rem 0 0.08rem 0;
    }
    .btnBox{
      height: 0.4rem;
      @include border-1px($color-e5e5e5, true, false)
      a{
        color: $color-0F85FF;
        font-size: 0.16rem;
        display: block;
        text-align: center;
        line-height: 0.4rem;
      }
    }
  }
  .tab{
    display: flex;
    justify-content: space-between;
    color: $color-666666;
    font-size: 0.12rem;
    margin: 0 0.14rem;
    position: relative;
    &:after{
      content: '';
      position: absolute;
      bottom: 0.12rem;
      left: 50%;
      transform: translateX(-50%);
      width: 94%;
      height: 0.05rem;
      border-radius: 1rem;
      background-color: $color-0F85FF;
    }
    .logoIcon{
      
    }
    li{
      height: 0.6rem;
      position: relative;
      &.active{
        &:after{
          position: absolute;
          width: 0.28rem;
          height: 0.28rem;
          content: '';
          bottom: 0;
          left: 50%;
          margin-left: -0.14rem;
          background: url('/static/assets/images/tabBg.png') no-repeat;
          background-size: cover;
          z-index: 10;
        }
      }
      p{
        &:first-child{
          position: relative;
          &:after{
            position: absolute;
            bottom: -0.1rem;
            left: 50%;
            transform: translateX(-50%);
            content: '';
            width: 0;
            height: 0;
            border-left: 0.03rem solid transparent;
            border-right: 0.03rem solid transparent;
            border-top: 0.036rem solid $color-0F85FF;
          }
        }
      }
    }
  }
  .banlance{
    height: 2.6rem;
    background-color: $color-ffffff;
    .top{
      height: 1.4rem;
      padding-top: 0.26rem;
      background: url('/static/assets/images/topbg.png') no-repeat;
      background-size: cover;
      p{
        color: $color-ffffff;
        text-align: center;
      }
      .title{
        font-size: 0.12rem;
        font-weight: 100;
        padding: 0;
        margin: 0;
      }
      .num{
        font-size: 0.38rem;
        margin-bottom: 0.05rem;
      }
      .total{
        font-size: 0.12rem;
        font-weight: 100;
      }
    }
    .mid{
      padding: 0.1rem;
      font-size: 0;
      @include border-1px($color-e5e5e5, false, true);
      >div{
        width: 50%;
        padding: 0 0.1rem;
        &:first-child{
          border-right: 1px solid $color-e5e5e5;
        }
      }
      div{
        display: inline-block;
        font-size: 0.14rem;
      }
      .fctyIcon,.fcjhIcon{
        width: 0.3rem;
        height: 0.3rem;
        background: url('/static/assets/images/home-icon-3.png') no-repeat;
        background-size: cover;
        margin: 0.06rem 0.1rem 0 0;
        vertical-align: top;
      }
      .fctyIcon{
        background-position: -0.32rem 0;
      }
      .left,.right{
        position: relative;
      }
      .right{
        .arrowIcon{
          margin-right: 0;
        }
      }
      .arrowIcon{
        position: absolute;
        top: 50%;
        right: 0;
        width: 0.09rem;
        height: 0.13rem;
        margin: -0.065rem 0.1rem 0 0;
        background: url('/static/assets/images/arrow_icon.png') no-repeat;
        background-size: cover;
      }
    }
    .bottom{
      font-size: 0;
      padding: 0.1rem;
      >div{
        box-sizing: border-box;
        display: inline-block;
        font-size: 0.12rem;
        width: 50%;
      }
      .left{
        text-align: left;
        height: 0.4rem;
      }
      .right{
        text-align: right;
        height: 0.4rem;
        line-height: 0.4rem;
        vertical-align: top;
        span{
          padding: 0 0.1rem;
        }
        .recharge{
          color: $color-0F85FF;
          border-left: 1px solid $color-e5e5e5;
        }
      }
    }
  }
</style>
