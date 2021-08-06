<template>
	<header class="p-2 text-dark shadow-sm sticky-top">
		<div class="container-fluid">
			<div class="d-flex flex-wrap align-items-center justify-content-around my-1">
				<div class="logo d-flex align-items-center justify-content-between mb-3 mb-lg-0 me-lg-auto">
					<img src="@/assets/Notes.NET.svg" alt="Notes.NET" width="56" />
					<button class="bulb btn ms-4 shadow-none">
						<img src="@/assets/Bulb.svg" alt="Bulb" width="20" />
					</button>
					<a href="#" class="nav-link text-dark fs-6">Quatters</a>
				</div>

				<div class="col-12 col-lg-5 mb-2 mb-lg-0 me-lg-3">
					<div class="input-group input-group-sm">
						<span class="input-group-text" id="from-text">From</span>
						<input class="form-control shadow-none" type="date" aria-describedby="from-text" />
						<span class="input-group-text" id="to-text">To</span>
						<input class="form-control shadow-none" type="date" aria-describedby="to-text" />
					</div>
				</div>
				<div class="col-12 col-lg-3 me-lg-3">
					<div class="input-group">
						<input type="search" class="form-control shadow-none" placeholder="Type here..." aria-label="Search" />
						<button class="btn btn-sm btn-outline-dark shadow-none" type="button">Search</button>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	export default {};
</script>

<style scoped>
	header {
		transition: transform 0.3s ease;
		background-color: rgb(245, 245, 245);
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

	input,
	.input-group-text,
	button {
		border-width: 1.5px !important;
	}

	input:focus {
		border-color: black !important;
	}
</style>
