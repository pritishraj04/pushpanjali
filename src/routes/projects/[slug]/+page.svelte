<script>
	import Ucta from '$lib/components/Ucta.svelte';
	import ProjectWalkthrough from '$lib/components/ProjectWalkthrough.svelte';
	import Nebhourhood from '$lib/components/Nebhourhood.svelte';
	import Plans from '$lib/components/Plans.svelte';
	import Prices from '$lib/components/Prices.svelte';
	import Amenities from '$lib/components/Amenities.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Downloads from '$lib/components/Downloads.svelte';

	const { data } = $props();
	const project = data.project;
	import { getPrice, getHeaderImage } from '$lib/utils/projectUtils.js';
	import Rera from '$lib/components/RERA.svelte';
</script>

<svelte:head>
	<title>{project.name} | Pushpanjali Construction - Building Excellence with Precision</title>
</svelte:head>

<main>
	<div
		class="hero-wrapper projects-details-header"
		style={`background-image: 
			url(${getHeaderImage(project)});`}
	>
		<div class="container">
			<div class="project-details">
				<h3 class="project-name">{project.name}</h3>
				<h5 class="project-location">{project.location}, {project.city}</h5>
				<div class="project-additionals">
					<p class="project-price">{getPrice(project)}</p>
					<p class="project-possession"><strong>Possession:</strong> {project.time_of_possession}</p>
					<p class="project-bhk">
						{#each project.prices as price, index}
							{price.name}
							{#if index < project.prices.length - 2}
								&#44;&nbsp;
							{:else if index === project.prices.length - 2}
								&amp;&nbsp;
							{/if}
						{/each}
					</p>
				</div>
			</div>
		</div>
		<Ucta />
	</div>
	<div class="container">
		<ProjectWalkthrough {project} />
		<Nebhourhood {project} />
		<Plans {project} />
		<Prices {project} />
		<Amenities {project} />
	</div>
	<div class="container-fluid">
		<Gallery {project} />
	</div>
	<div class="container">
		<Downloads {project} />
	</div>
	<Rera />
</main>

<style>
	.hero-wrapper {
		position: relative;
		min-height: 800px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		align-items: flex-end;
		padding: 2rem;
		color: #fff;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
	}

	.project-details {
		background: rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(8px);
		padding: 1.5rem;
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
		max-width: 600px;
	}

	.project-name {
		font-size: 1.6rem;
		font-weight: 500;
		margin-bottom: 0.3rem;
		color: #f1f1f1;
		letter-spacing: 0.2px;
	}

	.project-location {
		font-size: 0.9rem;
		font-weight: 400;
		margin-bottom: 0.7rem;
		color: #cccccc;
	}

	.project-additionals {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
		font-size: 0.85rem;
		color: #dcdcdc;
	}

	.project-additionals p {
		margin: 0;
	}

	.project-price {
		font-weight: 500;
		color: #ffcc00;
		font-size: 0.95rem;
	}

	.project-possession strong {
		color: #1dbf73;
		font-weight: 500;
	}

	.project-bhk {
		font-style: italic;
		color: #b0b0b0;
	}

	.container {
		margin-top: 2rem;
	}

	.container-fluid {
		margin-top: 2rem;
	}
</style>
