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
		style={`background-image: url(${getHeaderImage(project)});`}
	>
		<div class="container">
			<div class="project-details">
				<h3 class="project-name">{project.name}</h3>
				<h5 class="project-location">{project.location}, {project.city}</h5>
				<div class="project-additionals">
					<p class="project-price">{getPrice(project)}</p>
					<p class="project-possession"><strong>Possession</strong> {project.time_of_possession}</p>
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
	}
	/* .projects-details-header {
		padding-block: 600px 60px;
	} */

	.project-details {
		position: absolute;
		bottom: 4rem;
		background-color: hsla(0, 0%, 0%, 0.301);
		padding: 0.8rem 2rem;
		display: flex;
		flex-direction: column;
		gap: 4px;
		margin-bottom: 0;
		margin-right: 7rem;
	}
	.project-name {
		font-size: 1.4rem;
		font-weight: 600;
		line-height: 1.3;
		color: #f1f1f1;
	}
	.project-location {
		font-size: 1rem;
		font-weight: 500;
		line-height: 1.3;
		color: #e6e6e6;
	}
	.project-additionals {
		display: flex;
		gap: 10px;
	}
	.project-additionals *:not(:last-child) {
		padding-right: 10px;
		border-right: #e0e0e0 solid 1px;
	}
	.project-price {
		font-size: 0.9rem;
		font-weight: 400;
		color: #e0e0e0;
	}
	.project-possession {
		font-size: 0.9rem;
		font-weight: 400;
		color: #e0e0e0;
	}
	.project-bhk {
		font-size: 0.9rem;
		font-weight: 400;
		color: #e0e0e0;
	}
</style>
