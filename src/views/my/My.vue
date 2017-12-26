<template>
  <div class="productBox">
    我的
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import { mapGetters, mapActions } from 'vuex'

 
export default {
  name: 'My',
  data () {
    return {
      product: '',
    }
  },
  computed: {
    
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
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
