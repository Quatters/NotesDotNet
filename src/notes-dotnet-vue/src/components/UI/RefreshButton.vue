<template>
	<button @click="$emit('refresh'), refreshClickHandler()" :disabled="refreshClicked" class="refresh no-border transparent ms-5 p-0">
		<img class="icon" src="@/assets/img/Refresh.svg" alt="Bulb" width="23" />
	</button>
	<span v-show="num > 0" class="new-notes-text">{{ num }} new</span>
	<span v-show="refreshClicked" ref="utdText" class="utd-text">Up to date</span>
</template>

<script>
	export default {
		props: {
			num: Number,
		},
		data() {
			return {
				refreshClicked: false,
			};
		},
		methods: {
			refreshClickHandler() {
				this.refreshClicked = true;
				setTimeout(() => {
					this.$refs.utdText.style.opacity = 0;
				}, 2000);
				setTimeout(() => {
					this.refreshClicked = false;
					this.$refs.utdText.style.opacity = 100;
				}, 3000);
			},
		},
	};
</script>

<style>
	.new-notes-text {
		color: rgb(255, 60, 0);
		text-align: center;
		margin-left: 9px;
		font-size: 11px;
		margin-top: 3px;
	}

	.utd-text {
		text-align: center;
		margin-left: 9px;
		font-size: 11px;
		transition: all 1s ease;
		margin-top: 3px;
	}

	.utd-text:active {
		opacity: 0;
	}

	.refresh:hover {
		transform: rotate(360deg);
	}

	.refresh {
		margin-top: 2px;
		transition: all 1.1s ease;
	}
</style>
