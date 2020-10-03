<template>
	<div class="form-container">
		<!-- 뿌려주고(표시하는) -->
		<PostAddForm></PostAddForm>
	</div>
</template>

<script>
// import로 컴포넌트 들고오고
import PostAddForm from '@/components/posts/PostAddForm.vue';

// 등록하고
export default {
	components: {
		PostAddForm,
	},
};
</script>

<style></style>
