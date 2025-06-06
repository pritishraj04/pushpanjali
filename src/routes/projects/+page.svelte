<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ProjectFilter from '$lib/components/ProjectFilter.svelte';

	import header from '$lib/assets/images/projects/header.jpg';
	import Icon from '@iconify/svelte';

	const { data } = $props();
	const projects = data.projects;

	let searchTerm = $state('');
	let filters = $state({
		category: '',
		status: '',
		location: '',
		price: ''
	});

	const filteredProjects = () => {
		return projects.filter((project) => {
			const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
			const matchesCategory = !filters.category || project.residentialType === filters.category;
			const matchesStatus = !filters.status || project.status === filters.status;
			const matchesLocation = !filters.location || project.city === filters.location;
			const matchesPrice =
				!filters.price ||
				(project.prices &&
					project.prices.some((unit) => {
						const range = getPriceRange(filters.price);
						if (!range) return true;
						return (
							(!range.min || unit.minimum_price >= range.min) &&
							(!range.max || unit.maximum_price <= range.max)
						);
					}));

			return matchesSearch && matchesCategory && matchesStatus && matchesLocation && matchesPrice;
		});
	};

	let toggleOverlay = $state(projects.map(() => false));
	const priceRanges = [
		{ label: 'Below 1 Cr', max: 10_000_000 },
		{ label: '1 Cr - 3 Cr', min: 10_000_000, max: 30_000_000 },
		{ label: 'Above 3 Cr', min: 30_000_000 }
	];
	const resetFilters = () => {
		filters.category = '';
		filters.status = '';
		filters.location = '';
		filters.price = '';
	};

	function getPriceRange(label) {
		return priceRanges.find((r) => r.label === label);
	}

	let showFilters = $state(false);
	const toggleFilters = () => {
		showFilters = !showFilters;
	};
</script>

<svelte:head>
	<title>PROJECTS | Pushpanjali Construction - Building Excellence with Precision</title>
</svelte:head>

<main>
	<div class="page-heading-wrapper projects-header" style={`background-image: url(${header});`}>
		<div class="container">
			<h1 class="page-heading">Projects</h1>
			<p class="page-heading-paragraph">Find where you belong.</p>
		</div>
	</div>
	<div class="container">
		<div class="project-search">
			<input
				type="text"
				bind:value={searchTerm}
				onchange={filteredProjects}
				class="project-search-input"
				placeholder="Search projects"
				aria-label="Search projects by name"
			 />
			<button class="btn btn-primary filter-toggle-btn" onclick={toggleFilters}>
				<Icon icon="uiw:filter" width="24" height="24" />
			</button>
		</div>

		<div class="filter-container {showFilters ? 'open' : ''}">
			{#if showFilters}
				<ProjectFilter bind:filters {projects} {filteredProjects} {resetFilters} />
			{/if}
		</div>

		<div class="project-list">
			{#each filteredProjects() as project, index}
				<ProjectCard {project} {toggleOverlay} {index} />
			{/each}
		</div>
	</div>
</main>

<style>
	.project-search{
		display: flex;
		justify-content: space-between;
		gap: 10px;
		align-items: center;
		margin-bottom: 14px;
	}
	.project-search-input {
		--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20px' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23999' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M10.783 18.828a8.05 8.05 0 0 0 7.439-4.955a8.03 8.03 0 0 0-1.737-8.765a8.045 8.045 0 0 0-13.735 5.68c0 2.131.846 4.174 2.352 5.681a8.05 8.05 0 0 0 5.68 2.359m5.706-2.337l4.762 4.759'/%3E%3C/svg%3E");
		background-color: #fff;
		background-image: var(--svg);
		background-position: center left 16px;
		background-repeat: no-repeat;
		border: 1px solid #d3cce3;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		color: #5e4b7b;
		font-size: 1rem;
		height: 50px;
		line-height: 1.5;
		padding-left: 50px;
		width: 100%;
		transition:
			border-color 0.2s ease,
			box-shadow 0.2s ease;
	}

	.project-search-input::placeholder {
		color: #999;
		font-style: italic;
	}

	.project-search-input:focus {
		border-color: #8a6bbd;
		box-shadow: 0 0 5px rgba(138, 107, 189, 0.3);
		outline: none;
	}

	.project-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
		gap: 20px;
		margin-bottom: 40px;
	}
	@media (max-width: 730px) {
		.project-list {
			grid-template-columns: 1fr;
		}
	}

	.filter-container {
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
		opacity: 0;
	}

	.filter-container.open {
		max-height: 700px; /* Adjust based on the content height */
		opacity: 1;
	}

	.filter-toggle-btn {
		padding: 12px 25px;
	}
</style>
