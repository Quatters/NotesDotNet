<template>
	<div class="col-xxl-3 col-xl-4 col-md-6 col-12">
		<div class="d-flex flex-row justify-content-center">
			<div class="note ex-shadow d-flex flex-column">
				<p class="mb-2">
					{{ dateModified.toLocaleDateString() }}
				</p>
				<p class="mb-auto f-regular body-text">{{ body }}</p>
				<p class="text-end m-0">{{ author }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			id: Number,
			author: String,
			body: String,
			dateModified: Date,
		},
	};
</script>

<style>
	.body-text {
		overflow: hidden;
	}

	.note {
		padding: 1rem;
		height: 300px;
		width: 300px;
		transition: all 0.3s ease;
		background: var(--secondary-color);
		word-wrap: break-word;
		overflow: hidden;
		border: 2px solid var(--contrast-color);
		border-radius: 10px;
		display: inline-block;
	}
</style>
