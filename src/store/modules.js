import login_store from './components/login_store'
import orderInfo_store from './components/orderInfo_store'
import historyMatch_store from './components/historyMatch_store'
import myTask_store from './components/myTask_store'
import addRoutes_store from './components/addRoutes.js'
import addMenus_store from './components/addMenus.js'

export default {
    login: login_store,
    orderInfo: orderInfo_store,
    historyMatch: historyMatch_store,
    myTask: myTask_store,
    route:addRoutes_store,
    menu:addMenus_store
}