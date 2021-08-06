<template>
	<div class="col-xxl-3 col-xl-4 col-md-6 col-12">
		<div class="d-flex flex-row justify-content-center">
			<div class="card note border-dark shadow-sm">
				<div class="card-body d-flex flex-column justify-content-between">
					<p class="card-text date mb-2">
						{{ dateModified.toLocaleDateString() }}
					</p>
					<p class="card-text mb-auto">{{ body }}</p>
					<p class="card-text text-end author">{{ author }}</p>
				</div>
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
		data() {
			return {};
		},
	};
</script>

<style scoped>
	.note {
		height: 300px;
		width: 300px;
		border-radius: 10px;
		border-width: 1.8px;
		font-weight: 400;
		transition: all 0.3s ease;
	}

	/* .note:hover {
		transform: scale(1.02);
	} */

	.author,
	.date {
		font-weight: 500;
	}
</style>
