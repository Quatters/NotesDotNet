<template>
	<div class="d-flex justify-content-end align-items-center">
		<input
			:value="searchQuery"
			@input="$emit('update:search-query', $event.target.value)"
			type="text"
			:placeholder="placeholder"
			class="flex-fill f-regular"
		/>
		<button v-if="searchQuery.length !== 0" @click="$emit('clear')" class="clear-button transparent no-border p-0">
			<img class="icon" src="@/assets/img/X.svg" alt="Notes.NET" width="12" />
		</button>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		props: {
			placeholder: String,
			searchQuery: String,
		},
	};
</script>

<style scoped>
	input {
		background-color: var(--secondary-color);
		border: 1px solid var(--contrast-color-sm);
		border-radius: 3px;
		padding: 4px 10px;
		transition: all 0.3s ease;
	}

	input:hover,
	input:focus {
		background-color: var(--primary-color);
		outline: none;
	}

	.clear-button {
		/* position: absolute; */
		/* margin-right: 12px; */
		margin-left: -22px;
		margin-right: 10px;
		/* margin-inline-end: 12px; */
	}
</style>
