import Vue from 'vue'

Vue.directive('numberOnly',{
    update: function(el) {
    	console.log(el.value)
        el.handler = function() {
        	el.value = el.value.replace(/[^0-9.]/g,'')
        }
        el.addEventListener('input', el.handler)
    },
    unbind: function(el) {
        el.removeEventListener('input', el.handler)
    }
})