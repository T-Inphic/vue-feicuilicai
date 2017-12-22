import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	isLogin: false,
}

const mutations = {
	changeLoginState(state, param) {
		state.isLogin = param;
	}
}

const actions = {
	changeLoginState({commit}){
		commit('changeLoginState')
	}
}

const getters = {
	login: state => {
		return state.isLogin
	}
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
})