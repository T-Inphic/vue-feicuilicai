<template>
  <div class="baseBox">
    <router-view/>
    <div class="bottom">
      <ul>
        <li>
          <router-link to="/home">
            <p></p>
            <p>首页</p>
          </router-link>
        </li>
        <li>
          <router-link to="/invest">
            <p></p>
            <p>投资</p>
          </router-link>
        </li>
        <li>
          <router-link to="/my">
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
  @include border-1px(#e5e5e5,true,false);
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
      &:nth-child(2){
        a{
          p{
            &:first-child{
              background-position: -0.22rem 0;
            }
          }
          &.active{
            color: $color-0F85FF;
            p{
              &:first-child{
                background-position: -0.22rem -0.22rem;
              }
            }
          }
        }
      }
      &:last-child{
        a{
          p{
            &:first-child{
              background-position: -0.44rem 0;
            }
          }
          &.active{
            color: $color-0F85FF;
            p{
              &:first-child{
                background-position: -0.44rem -0.22rem;
              }
            }
          }
        }
      }
      a{
        display: block;
        color: $color-666666;
        p{
          &:first-child{
            width: 0.22rem;
            height: 0.22rem;
            background: url('/static/assets/images/tab_icon.png') no-repeat;
            background-size: 300%;
            margin-bottom: 0.02rem;
          }
        }
        &.active{
          color: $color-0F85FF;
          p{
            &:first-child{
              background-position: 0 -0.22rem;
            }
          }
        }
      }
    }
  }
}
</style>
