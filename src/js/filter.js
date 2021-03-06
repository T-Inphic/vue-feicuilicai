import Vue from 'vue'

Vue.filter('thousand', function(val){
	let re = /\d{1,3}(?=(\d{3})+$)/g; 
	let n1 = val.toString().replace(/^(\d+)((\.\d+)?)$/, function (s, s1, s2) { 
		return s1.replace(re, "$&,") + s2; 
	}); 
	return n1
})
Vue.filter('phone', function(val){
	let result = val.toString().slice(0,3)+'****'+val.toString().slice(-4);
	return result
})