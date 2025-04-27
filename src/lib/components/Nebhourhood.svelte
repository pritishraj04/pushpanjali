<script>
	let { project } = $props();
	import Map from '$lib/components/Map.svelte';
</script>

<section class="neighourhood section-padding-bottom">
	<h4 class="section-heading sh-b2">SITE LOCATION</h4>
	<p class="section-description">{project.neighbourhood}</p>
	<div class="project-nearby-places">
		<Map {project} />
	</div>
	<a class="gmap-location" href={project.map_data.gmap_address} target="_blank" rel="noopener noreferrer">Click here to Open in maps</a>
</section>

<style>
	.neighourhood {
		padding: 2rem 1.5rem;
	}

	.section-description {
		max-width: 800px;
		margin: 0 auto 1.5rem;
		line-height: 1.6;
		color: #555;
	}

	.project-nearby-places {
		margin-top: 1.5rem;
	}
	.gmap-location{
		display: block;
		text-align: center;
		margin-top: 1rem;
		font-size: 1.2rem;
	}
</style>
