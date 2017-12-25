<template>
  <div id="app">
    <router-view/>
    <Alert></Alert>
  </div>
</template>

<script>
import Alert from '@/components/alert.vue'
export default {
  name: 'app',
  data(){
  	return{

  	}
  },
  components: {
	Alert
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'PingFang SC','STHeitiSC-Light','Helvetical-Light',arial,sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
