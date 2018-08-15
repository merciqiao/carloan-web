// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import 'less/base.less'
import store from './store'
import axios from 'axios'
import util from './common/util'
Vue.prototype.$ajax=axios


Vue.use(ElementUI)
Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999
  }
})
Vue.use(util)
Vue.config.productionTip = false

 //刷新后加载路由
var routeParamStr=sessionStorage.getItem('routeParam');
if(routeParamStr&&routeParamStr!=''){
  var routeParam=JSON.parse(routeParamStr);
  store.dispatch('add_Routes',routeParam);
}
//刷新后加载菜单
var menuParamStr=sessionStorage.getItem('menuParam');
if(menuParamStr&&menuParamStr!=''){
  var menuParam=JSON.parse(menuParamStr);
  store.dispatch('add_Menus',menuParam);
}



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
