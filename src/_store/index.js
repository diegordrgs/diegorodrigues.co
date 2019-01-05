import Vue from 'vue'
import Vuex from 'vuex'
import state from './states'
import actions from './actions'
import mutations from './mutations'
import modules from './modules'
Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  state,
  mutations,
  actions
})