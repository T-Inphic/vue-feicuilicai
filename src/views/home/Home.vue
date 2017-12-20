<template>
  <div class="homeBox">
    <div>
      <div class="head">为您准备大礼</div>
      <div class="coupon">
        <ul>
          <li>
            <div class="item">
              <div>
                <p>返现红包5张</p>
                <p>可提现</p>
              </div>
              <div><span class="number">518</span>元</div>
            </div>
          </li>
          <li>
            <div class="item">
              <div>
                <p>返现红包5张</p>
                <p>可提现</p>
              </div>
              <div><span class="number">518</span>元</div>
            </div>
          </li>
        </ul>
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
  }
  .item{
    display: flex;
    >div{
      flex: 1;
      &:last-child{
        text-align: right;
      }
    }
  }
</style>
