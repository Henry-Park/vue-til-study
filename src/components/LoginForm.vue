<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username">ID: </label>
					<input id="username" type="text" v-model="username" />
					<p class="validation-text">
						<span class="warning" v-if="!isUsernameValid && username">
							Please enter an email address
						</span>
					</p>
				</div>
				<div>
					<label for="password">PW: </label>
					<input id="password" type="text" v-model="password" />
				</div>
				<button
					v-bind:disabled="!isUsernameValid || !password"
					type="submit"
					class="btn"
					:ckass="!isUsernameValid || !password ? 'disabled' : null"
				>
					로그인
				</button>
			</form>
			<p class="log">{{ logMessage }}</p>
		</div>
	</div>
</template>

<script>
// import { loginUser } from '@/api/index';
// import { LoginPageVue } from '../views/LoginPage.vue';
import { validateEmail } from '@/utils/validation';
// import routes from '../routes';
// import { saveAuthToCookie, saveUserToCookie } from '@/utils/cookies';
export default {
	data() {
		return {
			// form values
			username: '',
			password: '',
			// log
			logMessage: '',
		};
	},
	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		},
	},
	methods: {
		async submitForm() {
			try {
				// 비즈니스 로직
				const userData = {
					username: this.username,
					password: this.password,
				};
				await this.$store.dispatch('LOGIN', userData);
				// const { data } = await loginUser(userData);
				// console.log(data.user.username);
				// console.log(data.token);
				// this.$store.commit('setToken', data.token);
				// // 메인 페이지로 이동
				// this.$store.commit('setUsername', data.user.username);
				// //Cookie에 token과 username을 저장
				// saveAuthToCookie(data.token);
				// saveUserToCookie(data.user.username);
				this.$router.push('/main');
				// this.logMessage = `${data.user.username} 님 환영합니다`;
				// this.initForm();
			} catch (error) {
				// 에러 핸들링할 코드
				console.log(error.response.data);
				this.logMessage = error.response.data;
				// this.initForm();
			} finally {
				this.initForm();
			}
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>

<style>
.btn {
	color: white;
}
</style>
