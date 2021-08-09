<template>
	<header class="p-2 ex-shadow sticky-top">
		<div class="container-fluid">
			<div class="d-flex flex-wrap align-items-center justify-content-around my-1">
				<div class="logo d-flex align-items-center justify-content-between mb-3 mb-lg-0 me-lg-auto">
					<img class="icon" src="@/assets/img/Logo.svg" alt="Notes.NET" width="56" />
					<button class="bulb btn ms-4">
						<img class="icon" src="@/assets/img/Bulb.svg" alt="Bulb" width="20" />
					</button>
				</div>

				<div class="col-12 col-lg-5 mb-2 mb-lg-0 me-lg-3">
					<input-date v-model:dateFrom="searchFromDateQuery" v-model:dateTo="searchToDateQuery" @clear="clearDateQuery" />
				</div>
				<div class="col-12 col-lg-3 me-lg-3">
					<input-text
						v-model:search-query="searchAuthorQuery"
						@clear="clearSearchAuthorQuery"
						:placeholder="'Search for somebody...'"
					/>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	import InputText from '@/components/InputText.vue';
	import InputDate from '@/components/InputDate.vue';

	export default {
		components: {
			InputText,
			InputDate,
		},
		data() {
			return {
				searchAuthorQuery: '',
				searchFromDateQuery: '',
				searchToDateQuery: '',
			};
		},
		methods: {
			search() {
				if (this.timer) {
					clearTimeout(this.timer);
					this.timer = null;
				}
				this.timer = setTimeout(() => {
					this.$emit('fetch-by-search-query', this.searchAuthorQuery, this.searchFromDateQuery, this.searchToDateQuery);
				}, 800);
			},
			clearSearchAuthorQuery() {
				this.searchAuthorQuery = '';
			},
			clearDateQuery() {
				this.searchToDateQuery = '';
				this.searchFromDateQuery = '';
			},
		},
		watch: {
			searchAuthorQuery() {
				this.search();
			},
			searchFromDateQuery() {
				this.search();
			},
			searchToDateQuery() {
				this.search();
			},
		},
	};
</script>

<style scoped>
	header {
		transition: transform 0.3s ease;
		background-color: rgba(253, 253, 253, 0.527);
	}

	header.hide {
		transform: translateY(-100%);
	}

	.bulb {
		transition: all 0.3s ease;
	}

	.bulb:hover {
		transform: scale(1.1);
	}
</style>
