<template>
	<div>
		<app-header @fetch-by-search-query="fetchBySearchQuery" />
		<loading-spinner v-if="!isDataLoaded" />
		<error-msg v-else-if="networkErrorOccured">We're sorry but server isn't available now. Please, come back later! </error-msg>
		<note-list @fetch-notes="fetchNotes" v-else :notes="notes" />
	</div>
</template>

<script>
	import NoteList from './components/NoteList.vue';
	import LoadingSpinner from './components/LoadingSpinner.vue';
	import AppHeader from './components/AppHeader.vue';
	import ErrorMsg from './components/ErrorMessage.vue';

	import axios from 'axios';

	export default {
		components: {
			NoteList,
			LoadingSpinner,
			AppHeader,
			ErrorMsg,
		},
		data() {
			return {
				notes: [],
				isDataLoaded: false,
				networkErrorOccured: false,
			};
		},
		methods: {
			castResponse(response) {
				return response.data.map(function (obj) {
					return {
						id: obj.id,
						author: obj.author,
						body: obj.body,
						dateModified: new Date(obj.dateModified),
					};
				});
			},
			async fetchNotes() {
				try {
					const url = this.$store.state.apiUrl;
					console.log('Trying to get from:', url);
					const response = await axios.get(url);
					this.notes = this.castResponse(response);
					console.log('Server response: success!', response);
				} catch (error) {
					console.log(error);
					if (!error.status) {
						console.log('Network error');
						this.networkErrorOccured = true;
					}
				} finally {
					this.isDataLoaded = true;
				}
			},
			async fetchBySearchQuery(author, from, to) {
				if (author.length === 0 && from.length === 0 && to.length === 0) {
					this.fetchNotes();
					return;
				}
				try {
					const url = this.$store.state.apiUrl;
					console.log('Trying to get from:', url + '/Search');
					console.log('Search query:', author, from, to);

					const response = await axios.get(url + '/Search', {
						params: {
							author: author,
							from: from,
							to: to,
						},
					});
					this.notes = this.castResponse(response);
					console.log('Server response: success!', response);
				} catch (error) {
					console.log(error);
				}
			},
		},
		mounted: function () {
			this.fetchNotes();
		},
	};
</script>

<style></style>
