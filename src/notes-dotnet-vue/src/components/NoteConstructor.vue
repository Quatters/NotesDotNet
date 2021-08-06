<template>
	<div class="col-xxl-3 col-xl-4 col-md-6 col-12">
		<div class="d-flex flex-row justify-content-center">
			<div class="card note shadow-sm border-dark" v-bind:class="createModeClasses">
				<button v-if="!createModeEnabled" class="create-button" @click="toggleCreateMode">
					<img src="@/assets/Plus.svg" alt="Add" width="45" />
				</button>

				<div v-else class="card-body border-dark d-flex flex-column justify-content-between">
					<p class="card-text date mb-2">
						{{ new Date().toLocaleDateString() }}
						<button @click="toggleCreateMode" class="control-buttons">
							<img width="18" src="@/assets/X.svg" alt="Discard" />
						</button>
						<button @click="createNote()" class="control-buttons">
							<img width="18" src="@/assets/Check.svg" alt="Submit" />
						</button>
					</p>

					<textarea v-model="body" ref="textArea" maxlength="256" :placeholder="placeholder"></textarea>

					<p class="card-text text-end author">{{ author }}</p>
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
				author: 'user',
				body: '',
				placeholder: 'Type something awesome!',
			};
		},
		methods: {
			createNote() {
				if (this.body.length !== 0) {
					this.toggleCreateMode();
					this.sendPostRequest();
					this.body = '';
				} else {
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
				}
			},
			toggleCreateMode() {
				this.createModeEnabled = !this.createModeEnabled;
				this.placeholder = 'Type something awesome!';
			},
			async sendPostRequest() {
				console.log('POST Request to', this.$store.state.apiUrl);
				console.log('Sending data:', this.body);
				try {
					const response = await axios({ method: 'post', url: this.$store.state.apiUrl, params: { body: this.body } });
					console.log('Server response: success!', response.data);
				} catch (error) {
					console.log(error);
					if (!error.status) {
						console.log('Network error');
						// this.networkErrorOccured = true; --emit
					}
				} finally {
					this.$emit('fetchNotes');
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
	.cursor-pointer {
		cursor: pointer;
	}

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
		border: none;
		height: 100%;
		display: flex;
		resize: none;
		overflow: hidden;
	}

	textarea:focus {
		border: none;
		outline: none;
	}

	input {
		text-align: end;
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
