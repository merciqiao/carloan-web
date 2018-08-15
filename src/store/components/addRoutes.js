import ConvertRoutes from './convertRoutes'
import router from '../../router'

/**
 * 动态添加路由
 * author:qlx
 */
const addRoutes = {
  state: {
    routeData: [],
    rootRoute:[]
  },
  mutations: {
    add_Routes(state, routeParam) {
      let routeList = []
      ConvertRoutes(routeList, routeParam) // 将后台的路由数据components转化成组件

      var rootRoute= [{
        path: '/',
        component: resolve => require(['@/components/common/Home.vue'], resolve),
        meta: { title: '自述文件' },
        children:routeList
      }]
      //保存到store中
      state.rootRoute=rootRoute;
      sessionStorage.setItem('routeParam',JSON.stringify(routeParam));
      //动态添加路由
      router.addRoutes(rootRoute)
    }
    
  },
  actions: {
    add_Routes({commit}, routeParam) {
      commit('add_Routes', routeParam)
    }
  }
}
export default addRoutes