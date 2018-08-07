// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import VueContextMenu from 'vue-contextmenu'
import 'vue-contextmenu/style/css/font-awesome.min.css'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import 'less/base.less'
import store from './store'
import axios from 'axios'
Vue.prototype.$ajax=axios


Vue.use(ElementUI)
Vue.use(VueContextMenu)
Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
