<script>
	let { projects, filteredProjects, filters, resetFilters } = $props();

	// Predefined status options
	const statusOptions = ['new', 'ready', 'underconstruction', 'soldOut'];

	// Derived values
	const categories = $derived([...new Set(projects.map((p) => p.residentialType))]);
	const locations = $derived([...new Set(projects.map((p) => p.city))]);

	const priceRanges = [
		{ label: 'Below 1 Cr', max: 10_000_000 },
		{ label: '1 Cr - 3 Cr', min: 10_000_000, max: 30_000_000 },
		{ label: 'Above 3 Cr', min: 30_000_000 }
	];
</script>

<div class="project-filter-bar">
	<!-- Category Filter -->
	<div class="project-filter-item">
		<label for="category">Category:</label>
		<select
			id="category"
			bind:value={filters.category}
			onchange={filteredProjects}
			class="animated-select"
		>
			<option value="">All Categories</option>
			{#each categories as category}
				<option value={category}>{category}</option>
			{/each}
		</select>
	</div>

	<!-- Status Filter -->
	<div class="project-filter-item">
		<label for="status">Status:</label>
		<select
			id="status"
			bind:value={filters.status}
			onchange={filteredProjects}
			class="animated-select"
		>
			<option value="">All Statuses</option>
			{#each statusOptions as status}
				<option value={status}>{status.toUpperCase()}</option>
			{/each}
		</select>
	</div>

	<!-- Location Filter -->
	<div class="project-filter-item">
		<label for="location">Location:</label>
		<select
			id="location"
			bind:value={filters.location}
			onchange={filteredProjects}
			class="animated-select"
		>
			<option value="">All Locations</option>
			{#each locations as location}
				<option value={location}>{location}</option>
			{/each}
		</select>
	</div>

	<!-- Price Filter -->
	<div class="project-filter-item">
		<label for="price">Price Range:</label>
		<select
			id="price"
			bind:value={filters.price}
			onchange={filteredProjects}
			class="animated-select"
		>
			<option value="">All Prices</option>
			{#each priceRanges as range}
				<option value={range.label}>{range.label}</option>
			{/each}
		</select>
	</div>

	<!-- Reset Button -->
	<div class="project-filter-item reset-container">
		<button class="btn btn-primary reset-btn" onclick={resetFilters} aria-label="Reset all filters">
			Reset Filters
		</button>
	</div>
</div>

<style>
	.project-filter-bar {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1.5rem;
		padding: 2rem;
		background: #fffefa;
		box-shadow: 0 4px 12px rgba(48, 48, 48, 0.048);
		margin-bottom: 2rem;
	}

	.project-filter-item {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	label {
		font-weight: bold;
		color: #434343; /* Changed from #5e4b7b to dark blue */
	}

	.animated-select {
		padding: 0.75rem;
		border: 1px solid #d3cce3;
		background: white;
		font-size: 1rem;
		width: 100%;
		appearance: none;
		background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23003366' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e"); /* Changed stroke color to dark blue */
		background-repeat: no-repeat;
		background-position: right 1rem center;
		background-size: 1.2em;
		transition:
			border-color 0.2s ease,
			box-shadow 0.2s ease;
	}

	.animated-select:focus {
		border-color: #00509e; /* Changed from #8a6bbd to dark blue */
		box-shadow: 0 0 5px rgba(0, 80, 158, 0.3); /* Adjusted shadow color */
		outline: none;
	}

	.reset-container {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.reset-btn {
		padding: 0.75rem 1.5rem;
	}


	@media (max-width: 768px) {
		.project-filter-bar {
			grid-template-columns: 1fr;
		}

		.reset-container {
			justify-content: center;
		}

		.reset-btn {
			width: 100%;
		}
	}
</style>
