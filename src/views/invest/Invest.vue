<template>
  <div class="productBox">
    <TopBar :paramdata='params'></TopBar>
    <div class="productBox">
      <ul>
        <li v-for="(item, $index) in product" :class="{'raise': item.status != 5}">
          <p class="babelIcon" v-if="item.smallLabelStr"><span>{{item.smallLabelStr}}</span></p>
          <div class="top">
            <p>{{item.name}}</p>
            <p><span v-for="item in item.labelList">{{item.name}}</span></p>
          </div>
          <div class="bottom">
            <div>
              <p><span class="rate">{{item.rate}}</span>%<span v-if="item.activityrate">+</span><span v-if="item.activityrate" class="activity">{{item.activityrate}}</span><span v-if="item.activityrate">%</span></p>
              <p>预期年化收益率</p>
            </div>
            <div>
              <div>
                <p><span class="day">{{item.deadline}}</span>天</p>
                <p>投资期限</p>
              </div>
              <div>
                <CircleCan :paramdata="circle" :canvasId="'canvas_'+$index"></CircleCan>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <p class="warn">市场有风险，投资需谨慎</p>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/top.vue'
import CircleCan from '@/components/circle.vue'

 
export default {
  name: 'Invest',
  data () {
    return {
      product: '',
      params: {
        left: '',
        title: '翡翠计划',
      },
      circle: {

      }
    }
  },
  components: {
    TopBar,
    CircleCan
  },
  computed: {
    
  },
  created() {
    let self = this;
    this.circleInfo();
    this.$http.get('/home').then(function(res){
      self.product = res.data.data.productList;
    })
  },
  methods: {
    circleInfo() {
      let fontSize = 100 * document.documentElement.clientWidth /375;
      this.circle.width = 40/fontSize;
      this.circle.height = 40/fontSize;
      this.circle.color = "#FF6300";
      this.circle.textColor = "#FF6300";
      this.circle.bgBarColor = "#e5e5e5";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  li{
    box-sizing: border-box;
    padding: 0.19rem 0.16rem;
    margin: 0.16rem 0.16rem 0;
    border-radius: 0.05rem;
    height: 1.4rem;
    background-color: $color-ffffff;
    overflow: hidden;
    position: relative;
    .babelIcon{
      position: absolute;
      top: 0;
      left: 0;
      width: 0.379rem;
      height: 0.385rem;
      background: url('/src/assets/images/babel_icon.png') no-repeat;
      background-size: cover;
      span{
        display: block;
        box-sizing: border-box;
        padding-top: 0.04rem;
        height: 0.385rem;
        white-space: nowrap;
        color: $color-ffffff;
        overflow: hidden;
        text-align: center;
        font-size: 0.1rem;
        transform: rotate(-45deg);
      }
    }
    .top{
      white-space: nowrap;
      margin-bottom: 0.2rem;
      p{
        height: 0.21rem;
        font-size: 0.15rem;
        display: inline-block;
        vertical-align: top;
        &:last-child{
          font-size: 0.1rem;
          overflow: hidden;
          span{
            color: $color-0F85FF;
            display: inline-block;
            border: 1px solid $color-0F85FF;
            border-radius: 0.2rem;
            padding: 0 0.05rem;
            margin: 0.02rem 0.05rem 0;
          }
        }
      }
    }
    &.raise{
      color: $color-c8c8c8;
      .top{
        p{
          &:last-child{
            span{
              color: $color-c8c8c8;
              border-color: $color-c8c8c8;
            }
          }
        }
      }
      .bottom{
        >div{
          &:first-child{
            p{
              color: $color-c8c8c8;
            }
          }
          &:last-child{
            p{
              color: $color-c8c8c8;
            }
          }
        }
      }
      .babelIcon{
        background-position: -0.379rem 0;
      }
    }
  }
  .warn{
    text-align: center;
    padding: 0.14rem 0;
    color: $color-c8c8c8;
  }
  .bottom{
    display: flex;
    >div{
      flex: 1;
      font-size: 0;
      p{
        font-size: 0.11rem;
      }
      .day{
        font-size: 0.22rem;
      }
      &:first-child{
        p{
          color: $color-999999;
          .rate{
            font-size: 0.32rem;
          }
          .activity{
            font-size: 0.22rem;
          }
          &:first-child{
            color: $color-FF6300;
          }
        }
      }
      &:last-child{
        display: flex;
        >div{
          flex: 1;
          &:last-child{
            display: flex;
            justify-content: center;
            align-items: center;
          }
            
        }
        p{
          &:first-child{
            height: 0.48rem;
            line-height: 0.48rem;
          }
          &:last-child{
            color: $color-999999;
          }          
        }
      }
    }
  }
</style>