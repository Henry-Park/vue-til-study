import Vue from 'vue';
import VueRouter from 'vue-router';
// import { component } from 'vue/types/umd';
// import Home from '../views/Home.vue';
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
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
		},
		{
			path: '/add',
			component: () => import('@/views/PostAddPage.vue'),
		},
		{
			path: '/post/:id',
			component: () => import('@/views/PostEditPage.vue'),
		},
		{
			path: '*',
			component: () => import('@/views/NotFoundPage.vue'),
		},
	],
});

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
