import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/index'
import PricePost from '@/components/PricePost/index'
import PriceDetail from '@/components/PriceDetail/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/pricepost',
      name: 'PricePost',
      component: PricePost
    },
    {
      path: '/pricedetail',
      name: 'PriceDetail',
      component: PriceDetail
    }
  ]
})