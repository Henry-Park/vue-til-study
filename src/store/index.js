import Vue from 'vue';
import Vuex from 'vuex';
import {
	getAuthFromCookie,
	getUserFromCookie,
	saveAuthToCookie,
	saveUserToCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		//여러 컴포넌트간에 공유되는 데이터
		username: getUserFromCookie() || '',
		token: getAuthFromCookie() || '',
	},
	getters: {
		isLogin(state) {
			return state.username !== '';
		},
	},
	mutations: {
		setUsername(state, username) {
			state.username = username;
		},
		clearUsername(state) {
			state.username = '';
		},
		setToken(state, token) {
			state.token = token;
		},
	},
	actions: {
		async LOGIN({ commit }, userData) {
			const { data } = await loginUser(userData);
			console.log(data.user.username);
			console.log(data.token);
			commit('setToken', data.token);
			// 메인 페이지로 이동
			commit('setUsername', data.user.username);
			//Cookie에 token과 username을 저장
			saveAuthToCookie(data.token);
			saveUserToCookie(data.user.username);
			return data;
		},
	},
	modules: {},
});
