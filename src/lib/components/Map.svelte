<script>
	let { project } = $props();
	const mapData = project.map_data;
</script>

<div class="map-wrapper">
	<iframe
		title="map"
		width="600"
		height="450"
		frameborder="0"
		class="mapbox"
		sandbox="allow-forms allow-same-origin allow-scripts"
		scrolling="no"
		style="border:0"
		loading="lazy"
		allowfullscreen
		referrerpolicy="no-referrer-when-downgrade"
		src={mapData.gmap_embed}
	>
	</iframe>
	<!-- <div class="map-overlay">
		<div class="map-direction"></div>
		<div class="map-info">
			<h2>Space Needle</h2>
			<p>Seattle, Washington</p>
		</div>
		<ul data-role="list" class="nearest-locations">
			<li>
				<h4>Location 1</h4>
				<p class="time-to-reach">1 min</p>
			</li>
			<li>
				<h4>Location 2</h4>
				<p class="time-to-reach">5 mins</p>
			</li>
			<li>
				<h4>Location 3</h4>
				<p class="time-to-reach">30 mins</p>
			</li>
		</ul>
	</div> -->
</div>

<style>
	.map-wrapper {
		position: relative;
	}
	.mapbox {
		width: 100%;
	}
	/* .map-overlay {
		position: absolute;
		top: 3rem;
		left: 2rem;
		padding: 1.4rem 1rem;
		background-color: rgba(255, 255, 255, 0.7);
		display: flex;
		flex-direction: column;
		justify-content: center;
	} */
</style>
