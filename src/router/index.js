import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/index'
import PricePost from '@/components/PricePost/index'
import PriceDetail from '@/components/PriceDetail/index'
import FlowMonitor from '@/components/FlowMonitor/index'
import WorkPiece from '@/components/WorkPiece/index'
import SysPosition from '@/components/Admin/SysPosition'
import SysRole from '@/components/Admin/SysRole'
import SysResource from '@/components/Admin/SysResource'
import SysRoleMap from '@/components/Admin/SysRoleMap'
import SysAcl from '@/components/Admin/SysAcl'
import SysMenu from '@/components/Admin/SysMenu'
Vue.use(Router)

// const router = new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Login',
//       component: Login
//     },
//     {
//       path: '/pricepost',
//       name: 'PricePost',
//       component: PricePost,
//       meta: {
//         title: '',
//         requireAuth: true
//       }
//     },
//     {
//       path: '/pricedetail',
//       name: 'PriceDetail',
//       component: PriceDetail,
//       meta: {
//         title: '',
//         requireAuth: true
//       }
//     },
//     {
//       path: '/flowmonitor',
//       name: 'FlowMonitor',
//       component: FlowMonitor,
//       meta: {
//         title: '',
//         requireAuth: true
//       }
//     },
//     {
//       path: '/workpiece',
//       name: 'WorkPiece',
//       component: WorkPiece,
//       meta: {
//         title: '',
//         requireAuth: true
//       }
//     },
//     {
//       path: '/sysPosition',
//       name: 'SysPosition',
//       component: SysPosition,
//       meta: {
//         title: '',
//         requireAuth: true
//       }
//     },
//     {
//       path: '/SysRole',
//       name: 'SysRole',
//       component: SysRole,
//       meta: {
//         title: '',
//         requireAuth: true
//       }
//     },
//     {
//       path: '/SysRoleMap',
//       name: 'SysRoleMap',
//       component: SysRoleMap,
//       meta: {
//         title: '',
//         requireAuth: true
//       }
//     },
//     {
//       path: '/SysResource',
//       name: 'SysResource',
//       component: SysResource,
//       meta: {
//         title: '',
//         requireAuth: true
//       }
//     },
//     {
//       path: '/SysAcl',
//       name: 'SysAcl',
//       component: SysAcl,
//       meta: {
//         title: '',
//         requireAuth: true
//       }
//     },
//     {
//       path: '/SysMenu',
//       name: 'SysMenu',
//       component: SysMenu,
//       meta: {
//         title: '',
//         requireAuth: true
//       }
//     },
//   ],
//   mode: 'history'
// });
const router = new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'Login',
  //     component: Login
  //   },
  //   {
  //     path: '/pricepost',
  //     name: 'PricePost',
  //     component: PricePost,
  //     meta: {
  //       title: '',
  //       requireAuth: true
  //     }
  //   },
  //   {
  //     path: '/pricedetail',
  //     name: 'PriceDetail',
  //     component: PriceDetail,
  //     meta: {
  //       title: '',
  //       requireAuth: true
  //     }
  //   },
  //   {
  //     path: '/flowmonitor',
  //     name: 'FlowMonitor',
  //     component: FlowMonitor,
  //     meta: {
  //       title: '',
  //       requireAuth: true
  //     }
  //   },
  //   {
  //     path: '/workpiece',
  //     name: 'WorkPiece',
  //     component: WorkPiece,
  //     meta: {
  //       title: '',
  //       requireAuth: true
  //     }
  //   },
  //   {
  //     path: '/sysPosition',
  //     name: 'SysPosition',
  //     component: SysPosition,
  //     meta: {
  //       title: '',
  //       requireAuth: true
  //     }
  //   },
  //   {
  //     path: '/SysRole',
  //     name: 'SysRole',
  //     component: SysRole,
  //     meta: {
  //       title: '',
  //       requireAuth: true
  //     }
  //   },
  //   {
  //     path: '/SysRoleMap',
  //     name: 'SysRoleMap',
  //     component: SysRoleMap,
  //     meta: {
  //       title: '',
  //       requireAuth: true
  //     }
  //   },
  //   {
  //     path: '/SysResource',
  //     name: 'SysResource',
  //     component: SysResource,
  //     meta: {
  //       title: '',
  //       requireAuth: true
  //     }
  //   },
  //   {
  //     path: '/SysAcl',
  //     name: 'SysAcl',
  //     component: SysAcl,
  //     meta: {
  //       title: '',
  //       requireAuth: true
  //     }
  //   },
  //   {
  //     path: '/SysMenu',
  //     name: 'SysMenu',
  //     component: SysMenu,
  //     meta: {
  //       title: '',
  //       requireAuth: true
  //     }
  //   },
  // ],
  routes: [
    {
        name: 'Login',
        path: '/',
        redirect: '/login'
    },
    {
        path: '/',
        component: resolve => require(['../components/common/Home.vue'], resolve),
        meta: { title: '自述文件' },
        children:[
            {
              name: 'PricePost',
                path: '/pricepost',
                component: resolve => require(['../components/PricePost/index.vue'], resolve),
                meta: { title: '我的任务' }
            },
            {
              name: 'WorkPiece',
              path: '/workpiece',
              component: resolve => require(['../components/WorkPiece/index.vue'], resolve),
              meta: { title: '工作件查询' }
            },
            {
              name: 'FlowMonitor',
              path: '/flowmonitor',
              component: resolve => require(['../components/FlowMonitor/index.vue'], resolve),
              meta: { title: '业务流程监控' }
           },
            {
              name: 'SysPosition',
              path: '/sysPosition',
              component: resolve => require(['../components/Admin/SysPosition.vue'], resolve),
              meta: { title: '岗位管理' }
            },
            {
              name: 'OrganizationTree',
              path: '/organizationTree',
              component: resolve => require(['../components/Admin/OrganizationTree.vue'], resolve),
              meta: { title: '机构管理' }
            },
            {
              name: 'SysUser',
              path: '/sysUser',
              component: resolve => require(['../components/Admin/SysUser.vue'], resolve),
              meta: { title: '用户管理' }
            }
        ]
    },
    {
        name: 'PriceDetail',
        path: '/pricedetail',
        component: resolve => require(['../components/PriceDetail/index.vue'], resolve)
    },
    {
        name: 'Login',
        path: '/login',
        component: resolve => require(['../components/Login/index.vue'], resolve)
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
  if(to.matched.some(record => record.meta.requireAuth)) {
    if(!!localStorage.getItem('token') && localStorage.getItem('token')!=="undefined") {
      next();
    }else{
      next({
        path: '/',
      })
    }
  }else{
    next();
  }
})

export default router