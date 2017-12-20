<template>
  <div class="homeBox">
    <div>
      <div class="head">为您准备大礼</div>
      <div class="coupon">
        <ul>
          <li>
            <div class="item">
              <div>
                <p class="fxhbIcon"></p>
                <div class="text">
                  <p>返现红包5张</p>
                  <p>可提现</p>
                </div>
              </div>
              <div><span class="number">518</span>元</div>
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
              <div><span class="number">13888</span>元</div>
            </div>
            <i class="courtesy-icon"></i>
          </li>
        </ul>
        <div class="btnBox"><button class="btn">立即注册领取</button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    
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
    }
    .btnBox{
      margin-top: 0.18rem;
      text-align: center;
    }
    .btn{
      width: 100%;
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
        justify-content: flex-start;
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
    }
    .number{
      font-size: 0.32rem;
      color: #323232;
    }
  }
  .courtesy-icon{
    position: absolute;
    top: 0;
    right: 0;
    width: 0.385rem;
    height: 0.385rem;
  }
</style>
