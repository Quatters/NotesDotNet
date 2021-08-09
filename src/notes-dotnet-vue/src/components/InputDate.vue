<template>
	<div class="input-group input-group-sm align-items-center align-items-end">
		<span class="input-group-text from" :class="isFromActive">From</span>
		<input
			:value="dateFrom"
			@input="$emit('update:dateFrom', $event.target.value)"
			class="form-control shadow-none"
			type="date"
			aria-describedby="from-text"
		/>
		<span class="input-group-text to">To</span>
		<input
			:value="dateTo"
			@input="$emit('update:dateTo', $event.target.value)"
			class="form-control shadow-none"
			type="date"
			aria-describedby="to-text"
		/>
		<button v-if="dateFrom.length !== 0 || dateTo.length !== 0" @click="$emit('clear')" class="clear-button">
			<img class="icon" src="@/assets/img/X.svg" alt="Notes.NET" width="12" />
		</button>
	</div>
</template>

<script>
	export default {
		props: {
			dateFrom: String,
			dateTo: String,
		},
		data() {
			return {
				isToActive: false,
				isFromActive: false,
			};
		},
	};
</script>

<style scoped>
	input {
		background-color: #fff;
		border: 1px solid rgba(0, 0, 0, 0.25);
		border-radius: 5px;
		padding: 6px 10px;
		transition: all 0.3s ease;
	}

	input:hover,
	input:focus {
		background-color: var(--primary-color);
		outline: none !important;
		border: 1px solid rgba(0, 0, 0, 0.25);
	}

	.input-group-text {
		background-color: var(--primary-color);
	}

	.from,
	.to {
		border: 1px solid rgba(0, 0, 0, 0.25);
		border-right: none;
	}

	.to {
		border-left: none;
	}

	.clear-button {
		background-color: var(--primary-color);
		border: 1px solid rgba(0, 0, 0, 0.25);
		border-left: none;
		border-radius: 0 2px 2px 0;
		padding: 4px 8px 4px 9px;
		transition: all 0.5s ease;
	}
</style>
