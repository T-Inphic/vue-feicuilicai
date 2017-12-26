import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	isLogin: false,
	dialog: {
		dialog: false,
		text: '',
		cancel: '',
	},
}

const mutations = {
	changeLoginState(state, param) {
		state.isLogin = param;
	},
	changeDialog(state, param) {
		state.dialog.dialog = param.dialog;
		state.dialog.text = param.text||'';
		state.dialog.cancel = param.cancel||false;
	}
}

const actions = {
	changeLoginState({commit}, param){
		commit('changeLoginState',param)
	},
	changeDialog({commit}, param){
		commit('changeDialog',param)
	}
}

const getters = {
	login: state => {
		return state.isLogin
	},
	dialog: state => {
		return state.dialog
	}
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
})