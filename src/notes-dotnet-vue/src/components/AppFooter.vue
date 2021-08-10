<template>
	<footer>
		<div class="container f-regular">
			<div class="d-flex flex-wrap justify-content-md-between justify-content-around align-items-center content">
				<div class="d-flex">
					<p class="me-3">&copy; 2021 Notes.NET</p>
					<p>
						<a class="text-decoration-none" href="https://github.com/Quatters/NotesDotNet" target="_blank">Github</a>
					</p>
				</div>
				<div class="d-flex summary">
					<p class="mx-3">
						Total notes: <strong>{{ totalNotes }}</strong>
					</p>
					<p class="me-3">
						Most known author: <strong>{{ mostFrequentAuthor }}</strong>
					</p>
					<button @click="scrollUp" class="up p-0 no-border transparent">
						<img class="icon mb-3" src="@/assets/img/Arrow.svg" alt="Up" width="17" />
					</button>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		props: {
			mostFrequentAuthor: '',
			totalNotes: 0,
		},
		methods: {
			scrollUp() {
				const el = this.$refs.noteConstructor;
				window.scrollTo(0, 0);
			},
		},
	};
</script>

<style scoped>
	.up {
		transition: all 0.3s ease;
		opacity: 75%;
	}

	.up:hover {
		opacity: 100%;
	}

	.content {
		margin-top: 30px;
		padding: 12px 0 0 8px;
		border-top: 1px solid var(--contrast-color-sm);
	}

	footer {
		margin-top: auto;
	}

	strong {
		font-weight: 500;
	}

	.summary {
		font-size: 13px;
	}
</style>
