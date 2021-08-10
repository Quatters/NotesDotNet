<template>
	<header class="p-2 ex-shadow sticky-top" :class="toggleVisibility">
		<div class="container">
			<div class="d-flex flex-wrap align-items-center justify-content-around my-1">
				<div v-if="!logoRemoved" class="d-flex align-items-center justify-content-between mb-3 mb-lg-0 me-lg-auto">
					<img class="icon" src="@/assets/img/Logo.svg" alt="Notes.NET" width="54" />
					<button class="bulb no-border transparent ms-5 p-1">
						<img class="icon" src="@/assets/img/Bulb.svg" alt="Bulb" width="20" />
					</button>
					<button @click="refresh" class="refresh no-border transparent ms-5 p-1">
						<img class="icon" src="@/assets/img/Refresh.svg" alt="Bulb" width="23" />
					</button>
					<new-notes-message :num="notesCanFetch" />
				</div>

				<div class="col-12 col-lg-5 mb-2 mb-lg-0 me-lg-3">
					<input-date v-model:dateFrom="searchFromDateQuery" v-model:dateTo="searchToDateQuery" @clear="clearDateQuery" />
				</div>
				<div class="col-12 col-lg-3">
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
	import NewNotesMessage from '@/components/UI/NewNotesMessage.vue';

	export default {
		components: {
			InputText,
			InputDate,
			NewNotesMessage,
		},
		props: {
			notesCanFetch: Number,
		},
		data() {
			return {
				searchAuthorQuery: '',
				searchFromDateQuery: '',
				searchToDateQuery: '',
				scrollPrev: 0,
				headerHidden: false,
				logoRemoved: false,
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
			handleScroll() {
				let scrolled = window.scrollY;
				if (scrolled > 200 && scrolled > this.scrollPrev) {
					this.headerHidden = true;
				} else if (scrolled < this.scrollPrev) {
					this.headerHidden = false;
				}
				this.scrollPrev = scrolled;
			},
			refresh() {
				if (this.notesCanFetch !== 0) {
					this.$emit('fetch-notes');
				}
			},
		},
		created() {
			window.addEventListener('scroll', this.handleScroll);
		},
		beforeDestroy() {
			window.removeEventListener('scroll', this.handleScroll);
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
		computed: {
			toggleVisibility() {
				return {
					'hide ': this.headerHidden,
				};
			},
		},
	};
</script>

<style scoped>
	header {
		transition: all 0.3s ease;
		background-color: var(--secondary-color);
	}

	header.hide {
		transform: translateY(-100%);
	}

	.refresh:hover {
		transform: rotate(360deg);
	}

	.refresh {
		margin-top: 2px;
		transition: all 1.1s ease;
	}

	.bulb {
		transition: all 0.3s ease;
	}

	.bulb:hover {
		transform: scale(1.1);
	}
</style>
