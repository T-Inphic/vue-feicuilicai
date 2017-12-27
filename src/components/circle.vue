<template>
  <canvas class="canvas" :id="id" width="40" height="40"></canvas>  
</template>

<script>
export default {
  name: 'circleCan',
  props: ['paramdata','canvasId','precentNum'],
  data () {
    return {
      param: this.paramdata,
      id: this.canvasId,
      precent: this.precentNum
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
          speed = 0,
          self = this;
          elm.setAttribute('width',this.param.width*100)
          elm.setAttribute('height',this.param.height*100)
        function backgroundCircle(){  
          context.save();  
          context.beginPath();  
          context.lineWidth = 1; //设置线宽  
          var radius = center_x - context.lineWidth;  
          context.lineCap = "round";  
          context.strokeStyle = self.param.bgBarColor;  
          context.arc(center_x, center_y, radius, 0, Math.PI*2, false);  
          context.stroke();  
          context.closePath();  
          context.restore();  
        } 
        //绘制运动圆环  
        function foregroundCircle(n){  
            context.save();  
            context.strokeStyle = self.param.color;  
            context.lineWidth = 1;  
            context.lineCap = "round";  
            var radius = center_x - context.lineWidth;  
            context.beginPath();  
            context.arc(center_x, center_y, radius , -Math.PI/2, -Math.PI/2 +n*rad, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)  
            context.stroke();  
            context.closePath();  
            context.restore();  
        }  
      
        //绘制文字  
        function text(n){  
            context.save(); //save和restore可以保证样式属性只运用于该段canvas元素  
            context.fillStyle = self.param.color;  
            var font_size = 12;
            context.font = font_size + "px Helvetica";  
            var text_width = context.measureText(n.toFixed(0)+"%").width;  
            context.fillText(n.toFixed(0)+"%", center_x-text_width/2, center_y + font_size/2);  
            context.restore();  
        }  
      
        //执行动画  
        (function drawFrame(){  
            window.requestAnimationFrame(drawFrame);  
            context.clearRect(0, 0, elm.width, elm.height);  
            backgroundCircle();
            text(speed);  
            foregroundCircle(speed);  
            if(speed >= self.precent) return;
            speed += 1;  
        }());
      }
  }
}
</script>

<style lang="scss" scoped>

</style>
