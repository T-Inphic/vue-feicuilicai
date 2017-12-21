import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import Login from '@/views/login/Login'
import Bottom from '@/views/base/bottom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'Bottom',
      component: Bottom,
      children:[
      	{
      		path: 'home',
      		component: Home,
      	}
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
