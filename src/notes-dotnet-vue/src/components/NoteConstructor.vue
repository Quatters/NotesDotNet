<template>
	<div class="col-xxl-3 col-xl-4 col-md-6 col-12">
		<div class="d-flex flex-row justify-content-center">
			<div class="card note shadow-sm border-dark" v-bind:class="createModeClasses">
				<button v-if="!createModeEnabled" class="create-button" @click="toggleCreateMode">
					<img src="@/assets/Plus.svg" alt="Add" width="45" />
				</button>

				<div v-else class="card-body border-dark d-flex flex-column justify-content-between">
					<div class="card-text date mb-2">
						{{ new Date().toLocaleDateString() }}
						<button @click="toggleCreateMode" class="control-buttons">
							<img width="18" src="@/assets/X.svg" alt="Discard" />
						</button>
						<button @click="createNote()" class="control-buttons">
							<img width="18" src="@/assets/Check.svg" alt="Submit" />
						</button>
					</div>

					<textarea v-model="bodyText" :placeholder="placeholder" class="no-border"></textarea>

					<input v-model="author" :placeholder="authorPlaceholder" maxlength="16" class="card-text text-end author no-border" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		data() {
			return {
				createModeEnabled: false,
				authorPlaceholder: 'Anonymous',
				author: '',
				bodyText: '',
				placeholder: 'Type something awesome!',
			};
		},
		methods: {
			setRandomPlaceholderText() {
				const random3 = Math.floor(Math.random() * 3);
				switch (random3) {
					case 0:
						this.placeholder = "You didn't type anything :(";
						break;
					case 1:
						this.placeholder = 'There is nothing!';
						break;
					default:
						this.placeholder = "We're very sad now. Here is a blank note.";
						break;
				}
			},
			createNote() {
				/*if (this.author.trim().toLowerCase() === 'admin') {
					this.author = '';
					this.authorPlaceholder = "You're not an admin :0";
				} else*/ if (this.bodyText.length !== 0) {
					this.toggleCreateMode();
					this.sendPostRequest();
					this.bodyText = '';
				} else {
					this.setRandomPlaceholderText();
				}
			},
			toggleCreateMode() {
				this.createModeEnabled = !this.createModeEnabled;
				this.placeholder = 'Type something awesome!';
			},
			async sendPostRequest() {
				console.log('POST Request to', this.$store.state.apiUrl + '/New');
				console.log('Sending data:', '[body]:', this.bodyText, '[author]:', this.author);
				try {
					const response = await axios({
						method: 'post',
						url: this.$store.state.apiUrl + '/New',
						data: {
							body: this.bodyText,
							author: this.author,
						},
					});
					console.log('Server response: success!', response.data);
				} catch (error) {
					console.log(error);
					if (!error.status) {
						console.log('Network error');
						// this.networkErrorOccured = true; --emit
					}
				} finally {
					this.$emit('fetch-notes');
				}
			},
		},
		computed: {
			createModeClasses: function () {
				return {
					'd-flex align-items-center justify-content-center cursor-pointer note-hover': !this.createModeEnabled,
					'scaled-note': this.createModeEnabled,
				};
			},
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
	}

	.note-hover {
		transition: all 0.3s ease;
	}

	.note-hover:hover {
		transform: scale(1.025);
	}

	.scaled-note {
		transform: scale(1.025);
	}

	.author,
	.date {
		font-weight: 500;
	}

	textarea {
		height: 100%;
		display: flex;
		resize: none;
		overflow: auto;
	}

	.control-buttons {
		margin: 0;
		padding: 0;
		border: none;
		background: transparent;
		transition: all 0.3s ease;
		float: right;
		margin-left: 14px;
	}

	.control-buttons:hover {
		transform: scale(1.15);
	}

	.create-button {
		padding: 126px;
		border: none;
		background: transparent;
	}
</style>
