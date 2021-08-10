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
					<p class="me-3">
						Total notes: <strong>{{ totalNotes }}</strong>
					</p>
					<p>
						Most known author: <strong>{{ mostFrequentAuthor }}</strong>
					</p>
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
	};
</script>

<style scoped>
	.content {
		margin-top: 30px;
		padding: 12px 0 0 8px;
		border-top: 1px solid rgb(199, 199, 199);
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
