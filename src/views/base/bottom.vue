<template>
  <div class="baseBox">
    <router-view/>
    <div class="bottom">
      <ul>
        <li>
          <router-link to="/">
            <p></p>
            <p>首页</p>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <p></p>
            <p>投资</p>
          </router-link>
          
        </li>
        <li>
          <router-link to="/">
            <p></p>
            <p>我的</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bottom',
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
.baseBox{
  padding-bottom: 0.48rem;
}
.bottom{
  box-sizing: border-box;
  @include border-1px(#e5e5e5,true);
  height: 0.48rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: $color-ffffff;
  ul{
    display: flex;
    justify-content: center;
    height: 0.48rem;
    li{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.11rem;
      color: $color-666666;
    }
  }
}
</style>
