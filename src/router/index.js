import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const router = new Router({
  routes: [
    {
      name: '',
      path: '/',
      redirect: '/login'
    },
    {
      name: 'Login',
      path: '/login',
      component: resolve => require(['@/components/Login/index.vue'], resolve)
    },
     {
      path: '*',
      name: '404',
      component: resolve => require(['@/components/Common/404.vue'], resolve)
    }
  ],
  mode: 'history'
});

//全局路由守卫
router.beforeEach((to, from, next) => {
  console.log('navigation-guards');

  //to: 即将要进入的目标 路由对象
  //from: 当前导航正要离开的路由
  //next: function：一定要调用该方法来 resolve这个钩子。执行效果依赖 next 方法调用的参数
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!!localStorage.getItem('token') && localStorage.getItem('token') !== "undefined") {
      next();
    }
    else {
      next({
        path: '/',
      })
    }
  } else {
    next();
  }
})

export default router