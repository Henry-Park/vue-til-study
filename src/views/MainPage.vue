<template>
	<div>
		<div class="main list-container contents">
			<h1 class="page-header">Today I Learned</h1>
			<LoadingSpinner v-if="isLoading"></LoadingSpinner>
			<ul v-else>
				<PostListItem
					v-for="postItem in postItems"
					:key="postItem._id"
					:postItem="postItem"
				></PostListItem>
				<!-- <li v-for="postItem in postItems" :key="postItem._id">
					<div class="post-title">
						{{ postItem.title }}
					</div>
					<div class="post-contents">
						{{ postItem.contents }}
					</div>
					<div class="post-time">
						{{ postItem.createdAt }}
					</div>
				</li> -->
			</ul>
		</div>
		<router-link to="/add" class="create-button">
			<i class="ion-md-add"></i>
		</router-link>
	</div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { fetchPosts } from '@/api/posts';

export default {
	components: {
		PostListItem,
		LoadingSpinner,
	},
	data() {
		return {
			postItems: [],
			isLoading: false,
		};
	},
	methods: {
		async ferchData() {
			this.isLoading = true;
			const { data } = await fetchPosts();
			this.isLoading = false;
			this.postItems = data.posts;
		},
	},
	created() {
		this.ferchData();
	},
};
</script>

<style></style>
