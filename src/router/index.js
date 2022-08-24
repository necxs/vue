import Vue from 'vue'
import Router from 'vue-router'
//import Home from '../views/Home.vue'
Vue.use(Router)
const routes=[
//{path:'/',component:() => import('../components/a.vue')},
//{path:'/b',component:() => import('../components/b.vue')},
//{path:'/c',component:() => import('../components/c.vue')},
   {
      path: '/zy',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
     {
      path: '/b',
      name: 'Helloworld',
      component: () => import('@/components/Helloworld.vue')
     },
      {
      path: '/user',
      name: 'User',
      component: () => import('@/views/User.vue')
     },
]
 const router=new Router({
 mode:"history",
 routes
})
export default router
