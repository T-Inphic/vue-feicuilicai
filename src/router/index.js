import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import Invest from '@/views/invest/Invest'
import My from '@/views/my/My'
import About from '@/views/my/about/About'
import Invite from '@/views/my/invite/Invite'
import Login from '@/views/login/Login'
import Bottom from '@/views/base/bottom'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
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
      	},
      	{
      		path: 'invest',
      		name: 'invest',
      		component: Invest,
      	},
      	{
      		path: 'my',
      		name: 'my',
      		component: My,
      	}
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/invite',
      name: 'invite',
      component: Invite,
      meta: {
      	requireAth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
	if(to.meta.requireAth){
		if(!router.app.$store.getters.login){
			next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
		}else{
			next()
		}
	}else{
		next()
	}
})

export default router
