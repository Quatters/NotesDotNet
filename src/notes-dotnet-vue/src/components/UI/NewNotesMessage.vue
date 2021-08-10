<template>
	<span v-show="num > 0" class="new-notes-text">{{ num }} new</span>
</template>

<script>
	export default {
		props: {
			num: Number,
		},
	};
</script>

<style>
	.new-notes-text {
		color: rgb(218, 1, 1);
		text-align: center;
		margin-left: 9px;
		font-size: 11px;
	}
</style>
