import { shallowMount } from '@vue/test-utils';
// import Vue from 'vue';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
	test('컴포넌트가 마운팅되면 username이 존재하고 초기값으로 설정되어 있어야 한다.', () => {
		// const instance = new Vue(LoginFrom).$mount();
		const wrapper = shallowMount(LoginForm);
		// wrapper.vm.username
		expect(wrapper.vm.username).toBe('');
	});
});
