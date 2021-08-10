<template>
	<div class="col-xxl-3 col-xl-4 col-md-6 col-12">
		<div class="d-flex flex-row justify-content-center">
			<div class="note ex-shadow d-flex flex-column" :class="createModeClasses">
				<button v-if="!createModeEnabled" class="create-button no-border transparent" @click="createModeEnabled = true">
					<img class="icon" src="@/assets/img/Plus.svg" alt="Add" width="45" />
				</button>

				<div v-else class="d-flex flex-column note-body">
					<div class="mb-2">
						{{ new Date().toLocaleDateString() }}
						<button @click="createModeEnabled = false" class="control-buttons no-border transparent">
							<img class="icon" width="16" src="@/assets/img/X.svg" alt="Discard" />
						</button>
						<button @click="createNote" class="control-buttons no-border transparent">
							<img class="icon" width="16" src="@/assets/img/Check.svg" alt="Submit" />
						</button>
					</div>

					<textarea
						v-model="bodyText"
						:placeholder="placeholder"
						maxlength="256"
						class="no-border transparent f-regular"
						ref="textarea"
					></textarea>

					<input v-model="author" :placeholder="authorPlaceholder" maxlength="16" class="text-end no-border transparent" />
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
				} else */ if (this.bodyText.length !== 0) {
					this.createModeEnabled = false;
					this.sendPostRequest();
					this.bodyText = '';
				} else {
					this.setRandomPlaceholderText();
				}
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
			createModeClasses() {
				return {
					'd-flex align-items-center justify-content-center cursor-pointer note-hover': !this.createModeEnabled,
					'scaled-note': this.createModeEnabled,
				};
			},
		},
		watch: {
			createModeEnabled() {
				if (this.createModeEnabled) {
					this.placeholder = 'Type something awesome!';
					setTimeout(() => {
						this.$refs.textarea.focus();
					}, 10);
				}
			},
		},
	};
</script>

<style scoped>
	.note-body {
		flex: 1 1 auto;
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

	textarea {
		height: 100%;
		resize: none;
		overflow: auto;
	}

	.control-buttons {
		margin: 0;
		padding: 0;
		transition: all 0.3s ease;
		float: right;
		margin-left: 14px;
	}

	.control-buttons:hover {
		transform: scale(1.15);
	}

	.create-button {
		padding: 126px;
	}
</style>
