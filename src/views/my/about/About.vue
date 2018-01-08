<template>
  <div>
    <div class="productBox">
      <TopBar :paramdata='params'></TopBar>
      <div>
        公司介绍
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
import TopBar from '@/components/top.vue'
 
export default {
  name: 'About',
  components: {
    TopBar
  },
  data () {
    return {
      params: {
        left: true,
        title: '公司介绍',
      },
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>