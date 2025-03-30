<script>
	let { project } = $props();
	import Map from '$lib/components/Map.svelte';
</script>

<section class="neighourhood section-padding-bottom">
	<h4 class="section-heading sh-b2">Neighbourhood</h4>
	<p class="section-description">{project.neighbourhood}</p>
	<div class="project-nearby-places">
		<Map {project} />
	</div>
</section>

<style>
</style>
