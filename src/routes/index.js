import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

// import { component } from 'vue/types/umd';
// import Home from '../views/Home.vue';
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history', //url의 #을 제거하기 위함
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/login',
			component: () => import('@/views/LoginPage.vue'),
		},
		{
			path: '/signup',
			component: () => import('@/views/SignupPage.vue'), //코드 스플릿팅
		},
		{
			path: '/main',
			component: () => import('@/views/MainPage.vue'),
			meta: { auth: true },
		},
		{
			path: '/add',
			component: () => import('@/views/PostAddPage.vue'),
			meta: { auth: true },
		},
		{
			path: '/post/:id',
			component: () => import('@/views/PostEditPage.vue'),
			meta: { auth: true },
		},
		{
			path: '*',
			component: () => import('@/views/NotFoundPage.vue'),
		},
	],
});

router.beforeEach((to, from, next) => {
	if (to.meta.auth && !store.getters.isLogin) {
		console.log('인증이 필요합니다.');
		next('/login');
		return;
	}
	next();
});

// to : 이동하려는 페이지   from : 현재페이지   next : 페이지 이동할 때 호출하는 API
export default router;
// const routes = [
// 	{
// 		path: '/',
// 		name: 'Home',
// 		component: Home,
// 	},
// 	{
// 		path: '/about',
// 		name: 'About',
// 		// route level code-splitting
// 		// this generates a separate chunk (about.[hash].js) for this route
// 		// which is lazy-loaded when the route is visited.
// 		component: () =>
// 			import(/* webpackChunkName: "about" */ '../views/About.vue'),
// 	},
// ];

// const router = new VueRouter({
// 	mode: 'history',
// 	base: process.env.BASE_URL,
// 	routes,
// });

// export default router;
