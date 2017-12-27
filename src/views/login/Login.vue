<template>
  <div class="loginBox">
    <TopBar :paramdata='params'></TopBar>
    <div v-if="loginRegister=='loginRegister'">
      <div class="login">
        <div class="ipt"><label for="ipt">手机号码</label><input class="iptnostyle" id="ipt" type="tel" v-model="user.phone" placeholder="请输入手机号" maxlength="11"></div>
        <div class="phoneText" v-if="user.phone">{{user.phone}}</div>
      </div>
      <div class="maskBox" v-if="isShow">
        <div class="mask">
          <p class="title">请完成验证码</p>
          <div class="iptBox">
            <input type="tel" placeholder="输入以上图中的字符" v-model="user.code" maxlength="4" />
            <img alt="验证码" src="data:image/png;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAeADwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1hl3Y+ZgR3BqFpJY2VWw2eAegb2Poar6nqBs9NvJ0AEsUDyJuHG5VJwa5q00axn8Lx3skiSz3EAlkv5DvkikxndvzkbSMYyPu896u2lzKELq7OsFyCzFQ3XBDKeD/APX6UsU37ncW3bSd/r161yVrrE2qaPokTvJBJdO5lkTjzFjzuGVwRuIHTpWhdRW+l3mnTWoKW08/2eS3iGFcuPlJGcBgQOepGOeKTTTsTL3W1bY3HKn9/E54IzyMHj36dqVbtGH3WLYB2rz/ACrD/wCEd0iSS5lv42kfcztO8jrtXqM84GBx+FRaRpotLe8ksVFubtCbRt5ORt+QnPTJy2DyNwHUVkpSvZr8f+AVZHRrLHM2xlHqA2Cfypqwh0BDuhHBCHAJHBNczqthFY6HFJDFjUVZDHcKuZJpGPOepJOW4JP0rfWQ5YNbmUhjyR09unrVp9xW7DrktGzvIpaIj+BSx4GfujJP4c8ce/NKuh2uhy6nb2wNpJG0/wBmacmJnxkKU3FM5wuMcEDHIrpbmYAyQHdgkHPp0NQQWenBxdiwt1uncgzLCu8sRyc4755+pq07FxdlqctZWTabpGgTXWU+zs4lxGR5YlyQXJxjGVB+p9OdW9RL/U9NstzmQTi5cgZ2ogJ554BJAz6k/jsojw3GyJhzkDPfjPP5020tYrcOtvDDDFKeURMDOM9sdqTd3cmet331MbX7tEeysHQ/6ZcKkpJP3AQGGQc98fSte+mhs7SS4mZESMb8qmD7beec/wBRUjW8fmu8kcbzRqxSQoNynGSQe2c9vSmP5VzCYDGDCxVSjqHXJOeh69KzUWm2O/YybW9sdj6lqV7azTiNjHAkynyR1KqO7nu34DitZLoeWjJI6hhnlck+5zyD7VU/sqxSXP2G0O5N4HkLg/px0rVEJkdy0jqcgEI2B0FUkxaLc//Z">
          </div>
          <div class="btnBox maskBtn">
            <button class="btn" @click="cancel()">取消</button>
            <button class="btn" :class="{'gray': !user.code}" :disabled="!user.code" @click="cofirm(user)">确定</button>
          </div>
        </div>
      </div>
      <div class="btnBox"><button class="btn" :class="{'gray': !user.phone}" :disabled="!user.phone" @click="next(user)">下一步</button></div>
    </div>
    <div v-if="loginRegister=='login'">
      <div class="imgIcon">
        <span class="logo"></span>
        <p class="phone">{{user.phone|phone}}</p>
      </div>
      <div class="loginipt">
        <label for="password">输入密码</label>
        <input id="password" type="password" placeholder="请输入密码" v-model="user.password" maxlength="20" v-if="!eyeOpen"/>
        <input id="password" type="text" placeholder="请输入密码" v-model="user.password" maxlength="20" v-if="eyeOpen"/>
        <span class="eyeIcon" :class="{'active': eyeOpen}" @click="openeye()"></span>
      </div>
      <div class="loginBtn">
        <button class="btn" :class="{'gray': !user.password}" :disabled="!user.password" @click="login(user)">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/top.vue'
// import { mapGetters,mapActions } from 'vuex'
export default {
  name: 'login',
  components: {
    TopBar
  },
  data () {
    return {
      user: {
        phone: '',
        code: '',
        password: '',
      },
      params: {
        left: '返回',
        title: '登录/注册',
      },
      loginRegister: 'loginRegister',
      isShow: false,
      eyeOpen: false,
    }
  },
  computed: {
    // ...mapActions([
    //   'changeDialog'
    // ]),
    // ...mapGetters([
    //   'dialog'
    // ]),
  },
  methods: {
    next(user) {
      let self = this;
      if(user.phone){
        if(/^1[3|4|5|7|8][0-9]{9}$/.test(user.phone)){
          this.$http.get('/home').then(function(res){
            let data = res.data.data.login
            if(user.phone == data.phone){
              self.params.title = '登录';
              self.loginRegister = 'login';
            }else{
              self.params.title = '注册';
              self.isShow = true;
            }
          })
        }else{
          let dialog = {
            dialog: true,
            text: '请输入正确的手机号',
          }
          self.$store.dispatch('changeDialog', dialog)
        }
      }
    },
    cancel() {
      this.isShow = false;
      this.params.title = '登录/注册';
      this.user.code = '';
    },
    openeye() {
      this.eyeOpen = !this.eyeOpen;
    },
    login(user) {
      let self = this;
      self.$http.get('/home').then(function(res){
        let data = res.data.data.login;
        if(user.password == data.password){
          self.$store.dispatch('changeLoginState', true);
          self.$router.go(-1);
          self.params.title = '登录/注册';
          self.loginRegister = 'loginRegister';
        }else{
          let dialog = {
            dialog: true,
            text: '密码错误',
          }
          self.$store.dispatch('changeDialog', dialog)
        }
      })
    },
    cofirm(user) {
      let self = this;
      if(user.code == 9072){
        let dialog = {
            dialog: true,
            text: '注册功能还未实现！尝试18632100000，a123456登录',
          }
        self.$store.dispatch('changeDialog', dialog)
      }else{
        let dialog = {
            dialog: true,
            text: '验证码不正确！',
          }
        self.$store.dispatch('changeDialog', dialog)
      }
    }
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
  .phoneText{
    height: 0.78rem;
    font-size: 0.36rem;
    color: $color-FF6300;
    text-align: center;
    line-height: 0.78rem;
    background-color: rgba(255,99,0,0.05);
    @include border-1px($color-FF6300,true,true);
  }
  .btnBox{
    margin-top: 0.37rem;
    text-align: center;
    button{
      width: 3rem;
    }
    &.maskBtn{
      margin: 0.37rem 0.16rem 0;
      display: flex;
      justify-content: space-between;
      button{
        width: 1.3rem;
        height: 0.44rem;
        &:first-child{
          border: 1px solid $color-0F85FF;
          background-color: $color-ffffff;
          color: $color-0F85FF;
        }
      }
    }
  }
  .maskBox{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.3);
    .mask{
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -1.15rem 0 0 -1.635rem;
      width: 3.27rem;
      height: 2.3rem;
      background-color: $color-ffffff;
      border-radius: 0.05rem;
      .title{
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: center;
        font-size: 0.16rem;
        color: $color-333333;
        margin-bottom: 0.4rem;
        @include border-1px($color-e5e5e5, false, true);
      }
    }
  }
  .iptBox{
    margin: 0 0.13rem;
    font-size: 0;
    input{
      width: 2.03rem;
      height: 0.44rem;
      padding-left: 0.09rem;
      border: 1px solid $color-e5e5e5;
      border-right-width: 0;
      border-top-left-radius: 0.05rem;
      border-bottom-left-radius: 0.05rem;
      outline: none;
      font-size: 0.14rem;
    }
    img{
      display: inline-block;
      width: 0.97rem;
      height: 0.44rem;
      vertical-align: top;
      border-top-right-radius: 0.05rem;
      border-bottom-right-radius: 0.05rem;
    }
  }
  .imgIcon{
    margin-top: 0.31rem;
    text-align: center;
    font-size: 0;
    .logo{
      display: inline-block;
      width: 0.6rem;
      height: 0.6rem;
      background: url('/src/assets/images/loginLogo.png') no-repeat;
      background-size: cover;
    }
    .phone{
      color: $color-0F85FF;
      font-size: 0.16rem;
      margin: 0.17rem 0 0.37rem 0;
    }
  }
  .loginipt{
    height: 0.5rem;
    line-height: 0.5rem;
    background-color: $color-ffffff;
    font-size: 0;
    label{
      font-size: 0.16rem;
      color: $color-666666;
      margin: 0 0.16rem;
    }
    input{
      outline: none;
      border: none;
      vertical-align: top;
      font-size: 0.16rem;
      padding-left: 0.09rem;
    }
  }
  .eyeIcon{
    position: absolute;
    right: 0;
    margin: 0.1805rem 0.24rem 0 0;
    width: 0.22rem;
    height: 0.139rem;
    background: url('/src/assets/images/eye.png') no-repeat;
    background-size: cover;
    background-position: 0 -0.12rem;
    &.active{
      background-position: 0 0;
    }
  }
  .loginBtn{
    margin-top: 0.66rem;
    text-align: center;
    .btn{
      width: 3rem;
      height: 0.44rem;
    }
  }
</style>
