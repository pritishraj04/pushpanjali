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
		<select id="category" bind:value={filters.category} onchange={filteredProjects}>
			<option value="">All Categories</option>
			{#each categories as category}
				<option value={category}>{category}</option>
			{/each}
		</select>
	</div>

	<!-- Status Filter -->
	<div class="project-filter-item">
		<label for="status">Status:</label>
		<select id="status" bind:value={filters.status} onchange={filteredProjects}>
			<option value="">All Statuses</option>
			{#each statusOptions as status}
				<option value={status}>{status.toUpperCase()}</option>
			{/each}
		</select>
	</div>

	<!-- Location Filter -->
	<div class="project-filter-item">
		<label for="location">Location:</label>
		<select id="location" bind:value={filters.location} onchange={filteredProjects}>
			<option value="">All Locations</option>
			{#each locations as location}
				<option value={location}>{location}</option>
			{/each}
		</select>
	</div>

	<!-- Price Filter -->
	<div class="project-filter-item">
		<label for="price">Price Range:</label>
		<select id="price" bind:value={filters.price} onchange={filteredProjects}>
			<option value="">All Prices</option>
			{#each priceRanges as range}
				<option value={range.label}>{range.label}</option>
			{/each}
		</select>
	</div>

	<!-- Reset Button -->
	<div class="project-filter-item">
		<button class="reset-btn" onclick={resetFilters} aria-label="Reset all filters">
			Reset Filters
		</button>
	</div>
</div>

<style>
	.project-filter-bar {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 1rem;
		padding: 1.5rem;
		background: #ffffff;
		border-radius: 8px;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
		margin-bottom: 2rem;
	}

	.project-filter-item {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	select {
		padding: 0.75rem;
		border: 1px solid #e0e0e0;
		border-radius: 6px;
		background: white;
		font-size: 1rem;
		width: 100%;
		appearance: none;
		background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
		background-repeat: no-repeat;
		background-position: right 0.75rem center;
		background-size: 1.2em;
	}

	.reset-btn {
		padding: 0.75rem 1.5rem;
		background: #f8f9fa;
		border: 1px solid #e0e0e0;
		border-radius: 6px;
		cursor: pointer;
		transition: all 0.2s ease;
		align-self: flex-end;
	}

	.reset-btn:hover {
		background: #e9ecef;
		border-color: #d0d0d0;
	}

	@media (max-width: 768px) {
		.project-filter-bar {
			grid-template-columns: 1fr;
		}

		.reset-btn {
			width: 100%;
			align-self: center;
		}
	}
</style>
