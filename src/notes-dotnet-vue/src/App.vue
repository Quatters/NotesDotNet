<template>
	<app-header @fetch-by-search-query="fetchBySearchQuery" :notesCanFetch="notesCanFetch" @fetch-notes="fetchNotes" />
	<loading-spinner v-if="!isDataLoaded" />
	<error-msg v-else-if="networkErrorOccured">We're sorry but server isn't available now. Please, come back later! </error-msg>
	<note-list @fetch-notes="fetchNotes" v-else :notes="notes" />
	<app-footer :totalNotes="notesMaxLength" :mostFrequentAuthor="mostFrequentAuthor" />
</template>

<script>
	import NoteList from './components/NoteList.vue';
	import LoadingSpinner from './components/UI/LoadingSpinner.vue';
	import AppHeader from './components/AppHeader.vue';
	import ErrorMsg from './components/UI/ErrorMessage.vue';
	import AppFooter from './components/AppFooter.vue';
	import { getNotes, searchNotes } from './api-services';

	export default {
		components: {
			NoteList,
			LoadingSpinner,
			AppHeader,
			ErrorMsg,
			AppFooter,
		},
		data() {
			return {
				notes: [],
				isDataLoaded: false,
				networkErrorOccured: false,
				notesCanFetch: -1,
				notesMaxLength: 0,
				mostFrequentAuthor: '',
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
					const response = await getNotes();
					this.notes = this.castResponse(response);
					this.notesMaxLength = this.notes.length;
					this.notesCanFetch = response.data.length - this.notesMaxLength;
					this.computeMostFrequentAuthor();
				} catch (error) {
					if (error.status !== 304)
					this.networkErrorOccured = true;
				} finally {
					this.isDataLoaded = true;
				}
			},
			async fetchSilently() {
				try {
					const response = await getNotes();
					this.notesCanFetch = response.data.length - this.notesMaxLength;
					if (this.networkErrorOccured) {
						this.notes = this.castResponse(response);
						this.notesMaxLength = this.notes.length;
						this.notesCanFetch = 0;
						this.networkErrorOccured = false;
						this.isDataLoaded = true;
					}
				} catch (error) {
					this.networkErrorOccured = true;
				}
			},
			async fetchBySearchQuery(author, from, to) {
				if (author.length === 0 && from.length === 0 && to.length === 0) {
					this.fetchNotes();
					return;
				}
				const response = await searchNotes(author, from, to);
				this.notes = this.castResponse(response);
			},
			authorComparer(note1, note2) {
				if (note1.author > note2.author) return 1;
				if (note1.author < note2.author) return -1;
				return 0;
			},
			computeMostFrequentAuthor() {
				let sortedNotes = this.notes.slice().sort(this.authorComparer);
				let maxCount = 1,
					res = sortedNotes[0],
					currCount = 1;

				for (let i = 1; i < sortedNotes.length; i++) {
					if (this.authorComparer(sortedNotes[i], sortedNotes[i - 1]) == 0) {
						currCount++;
					} else {
						if (currCount > maxCount) {
							maxCount = currCount;
							res = sortedNotes[i - 1];
						}
						currCount = 1;
					}
				}

				if (currCount > maxCount) {
					maxCount = currCount;
					res = sortedNotes[sortedNotes.length - 1];
				}

				return (this.mostFrequentAuthor = res.author);
			},
		},
		mounted() {
			this.fetchNotes();
			setInterval(() => {
				this.fetchSilently();
			}, 15000);
		},
	};
</script>
