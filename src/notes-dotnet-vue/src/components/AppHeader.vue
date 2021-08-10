<template>
	<header class="p-2 ex-shadow sticky-top" :class="toggleVisibility">
		<div class="container">
			<div class="d-flex flex-wrap align-items-center justify-content-around my-1">
				<div class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto">
					<img class="icon" src="@/assets/img/Logo.svg" alt="Notes.NET" width="48" />
					<button @click="darkMode = !darkMode" class="bulb no-border transparent ms-5 p-1">
						<img class="icon" src="@/assets/img/Bulb.svg" alt="Bulb" width="19" />
					</button>
					<refresh-button :num="notesCanFetch" @refresh="refresh" />
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
	import RefreshButton from '@/components/UI/RefreshButton.vue';

	export default {
		components: {
			InputText,
			InputDate,
			RefreshButton,
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
				darkMode: false,
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
		mounted() {
			let htmlElement = document.documentElement;
			let theme = localStorage.getItem('theme');

			if (theme === 'dark') {
				htmlElement.setAttribute('theme', 'dark');
				this.darkMode = true;
			} else {
				htmlElement.setAttribute('theme', 'light');
				this.darkMode = false;
			}
		},
		created() {
			window.addEventListener('scroll', this.handleScroll);
		},
		beforeDestroy() {
			window.removeEventListener('scroll', this.handleScroll);
		},
		watch: {
			darkMode() {
				const htmlElement = document.documentElement;

				if (this.darkMode) {
					localStorage.setItem('theme', 'dark');
					htmlElement.setAttribute('theme', 'dark');
				} else {
					localStorage.setItem('theme', 'light');
					htmlElement.setAttribute('theme', 'light');
				}
			},
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

	.bulb {
		transition: all 0.3s ease;
	}

	.bulb:hover {
		transform: scale(1.1);
	}
</style>
