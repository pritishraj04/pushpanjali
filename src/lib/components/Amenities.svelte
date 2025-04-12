<script>
	import Icon from '@iconify/svelte';

	let { project } = $props();
	const amenities = project.amenities;
</script>

<section class="amenities section-padding-bottom">
	<h4 class="section-heading sh-b2">Amenities</h4>
	<p class="section-description">
		Designed across 3 levels, the state-of-the-art clubhouse is where every indulgence finds its
		place.
	</p>
	<ul data-role="list" class="amemities-list">
		{#each amenities as amenity}
			<li class="amenity">
				<Icon icon={amenity.icon} width="42" height="42" />
				<h5 class="amenity-title">{amenity.title}</h5>
				<p class="amenity-description">{amenity.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.amemities-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 20px;
		list-style-type: none;
		padding: 0;
		margin: 0;
		padding-top: 20px;
	}
	.amenity {
		padding: 2rem 1rem;
		border-radius: 4px;
		background-color: #f8f8f8;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		transition: background-color 0.3s ease-in-out;
	}
	.amenity-title {
		margin-block: 0.6rem;
		font-weight: bold;
		font-size: 1.5rem;
		line-height: 1.5;
		letter-spacing: 0.05em;
		color: #363636;
		text-align: center;
	}
	.amenity-description {
		margin-block: 0.5rem;
		font-size: 1.125rem;
		line-height: 1.5;
		letter-spacing: 0.05em;
		color: #535353;
		text-align: center;
	}
	@media screen and (max-width: 820px) {
		.amenity-title {
			font-size: 1.15rem;
		}
		.amenity-description {
			font-size: 1rem;
		}
	}
</style>
