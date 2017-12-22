import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import Login from '@/views/login/Login'
import Bottom from '@/views/base/bottom'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'Bottom',
      component: Bottom,
      children:[
      	{
      		path: 'home',
      		name: 'home',
      		component: Home,
      		meta: {
      			requireAth: true
      		}
      	}
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
	next()
	// if(to.meta.requireAth){
	// 	next()
	// }else{

	// }
})

export default router
