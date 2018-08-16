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
      let routeList = [];
      let routeHideList=[];
      ConvertRoutes(routeList, routeHideList,routeParam); // 将后台的路由数据components转化成组件
      var rootRoute= [{
        path: '/',
        component: resolve => require(['@/components/Common/Home.vue'], resolve),
        meta: { title: '自述文件' },
        children:routeList
      }];
      //添加新窗口打开的页面
      if(routeHideList&&routeHideList.length>0){
        rootRoute=rootRoute.concat(routeHideList);
      }
      //保存到store中
      state.rootRoute=rootRoute;
      sessionStorage.setItem('routeParam',JSON.stringify(routeParam));
      console.log('路由'+JSON.stringify(routeParam));
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