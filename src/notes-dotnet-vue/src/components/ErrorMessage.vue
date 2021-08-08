<template>
	<div class="content">
		<h4><slot></slot></h4>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	.content {
		text-align: center;
		margin: 3em 1.6em;
		display: flex;
		justify-content: center;
	}
</style>
