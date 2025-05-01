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
	import ProjectHeadings from '$lib/components/ProjectHeadings.svelte';
	let x = $state(0);
</script>

<svelte:head>
	<title>{project.name} | Pushpanjali Construction - Building Excellence with Precision</title>
</svelte:head>

<svelte:window bind:innerWidth={x} />

<main>
	<div
		class="hero-wrapper projects-details-header"
		style={`background-image: 
			url(${x > 960 ? getHeaderImage(project, 'desktop') : getHeaderImage(project, 'mobile')});`}
	>
		<div class="container project-details-container">
			<div class="project-details">
				<h3 class="project-name">{project.name}</h3>
				<h5 class="project-location">{project.location}, {project.city}</h5>
				<div class="project-additionals">
					<p class="project-price">{getPrice(project)}</p>
					<p class="project-possession">
						<strong>Possession:</strong>
						{project.time_of_possession}
					</p>
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
	<ProjectHeadings />
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
	}
	.project-details-container{
		margin-bottom: -8rem;
	}
	.project-details {
		background-color: #ffffff;
		padding: 1.2rem;
		border-radius: 8px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
		max-width: 550px;
	}

	.project-name {
		font-size: 1.4rem;
		font-weight: 600;
		margin-bottom: 0.2rem;
		color: #333333;
		letter-spacing: 0.1px;
	}

	.project-location {
		font-size: 0.85rem;
		font-weight: 400;
		margin-bottom: 0.5rem;
		color: #555555;
	}

	.project-additionals {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 0.25rem;
		font-size: 0.8rem;
		color: #666666;
	}

	.project-additionals p {
		margin: 0;
	}

	.project-price {
		font-weight: 600;
		color: #444444;
		font-size: 0.9rem;
	}

	.project-possession strong {
		color: #555555;
		font-weight: 600;
	}

	.project-bhk {
		font-style: italic;
		color: #666666;
	}

	.container {
		margin-top: 2rem;
	}

	.container-fluid {
		margin-top: 2rem;
	}
</style>
