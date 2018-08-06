import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
import modules from './modules'
//import login_store from './components/login_store'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: modules,
    getters,
    actions,
    mutations
})
export default store;