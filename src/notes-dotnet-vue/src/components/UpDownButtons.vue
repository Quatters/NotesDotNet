<template>
	<div id="up-down-container">
		<button id="up" class="transparent no-border">
			<img class="icon" src="@/assets/img/Arrow.svg" alt="Up" width="25" />
		</button>
		<button id="down" class="down transparent no-border">
			<img class="icon" style="transform: rotate(180deg)" src="@/assets/img/Arrow.svg" alt="Up" width="25" />
		</button>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	#up-down-container {
		position: fixed;
		top: 88%;
		left: 91%;
		right: 50%;
	}

	#up,
	#down {
		padding: 2px 0;
	}

	@media (min-width: 576px) and (max-width: 768px) {
		#up-down-container {
			left: 88%;
		}
	}

	@media (min-width: 768px) {
		#up-down-container {
			left: 95%;
		}
	}

	@media (min-width: 1200px) {
		#up-down-container {
			left: 96%;
		}
	}
</style>
