<template>
  <canvas :id="id" width="40" height="40"></canvas>  
</template>

<script>
export default {
  name: 'circleCan',
  props: ['paramdata','canvasId'],
  data () {
    return {
      param: this.paramdata,
      id: this.canvasId
    }
  },
  mounted() {
    this.draw()
  },
  methods: {
    draw() {
      let elm = document.getElementById(this.id),
          context = elm.getContext("2d"),
          center_x = elm.width / 2,
          center_y = elm.height / 2,  
          rad = Math.PI*2/100,
          speed = 0; 
      }
  }
}
</script>

<style lang="scss" scoped>

</style>
