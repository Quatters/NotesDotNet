<template>
	<div>
		<app-header />
		<loading-spinner v-if="!isDataLoaded" />
		<network-error v-else-if="networkErrorOccured">We're sorry but server isn't available now. Please, come back later!</network-error>
		<note-list @addNote="addNote(post)" @fetchNotes="fetchNotes" v-else :notes="notes" />
	</div>
</template>

<script>
	import NoteList from './components/NoteList.vue';
	import LoadingSpinner from './components/LoadingSpinner.vue';
	import AppHeader from './components/AppHeader.vue';
	import NetworkError from './components/NetworkError.vue';

	import axios from 'axios';

	export default {
		components: {
			NoteList,
			LoadingSpinner,
			AppHeader,
			NetworkError,
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
					console.log(this.$store.state.apiUrl);
					const response = await axios.get(this.$store.state.apiUrl);
					this.notes = this.castResponse(response);
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
		},
		mounted: function () {
			this.fetchNotes();
		},
	};
</script>

<style></style>
