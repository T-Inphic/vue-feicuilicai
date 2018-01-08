<template>
  <div>
    <div class="productBox">
      <TopBar :paramdata='params'></TopBar>
    </div>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
import TopBar from '@/components/top.vue'
 
export default {
  name: 'Invite',
  components: {
    TopBar
  },
  data () {
    return {
      params: {
        left: true,
        title: '邀请好友',
      },
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>