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
	<ul data-role="list" class="amenities-list">
		{#each amenities as amenity}
			<li class="amenity">
				<img class="amenity-icon" src={amenity.icon} alt={amenity.title} style="width: 52px;" />
				<h5 class="amenity-title">{amenity.title}</h5>
			</li>
		{/each}
	</ul>
</section>

<style>
	.amenities-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 2fr));
		gap: 30px;
		list-style-type: none;
		padding: 0;
		margin: 0;
		padding-top: 20px;
	}
	.amenity {
		padding: 1rem 0.7rem;
		border-radius: 8px;
		/* background: linear-gradient(145deg, #ffffff, #e6e6e6); */
		/* box-shadow:
			4px 4px 8px rgba(0, 0, 0, 0.1),
			-4px -4px 8px rgba(255, 255, 255, 0.7); */
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		text-align: center;
	}
	.amenity:hover {
		transform: translateY(-10px);
		box-shadow:
			6px 6px 12px rgba(0, 0, 0, 0.2),
			-6px -6px 12px rgba(255, 255, 255, 0.8);
			background: linear-gradient(145deg, #ffffff, #e6e6e6);
	}
	.amenity-icon{
		justify-self: center;
	}
	.amenity-title {
		margin-block: 0.5rem;
		font-weight: 600;
		font-size: 1.4rem;
		line-height: 1.4;
		letter-spacing: 0.03em;
		color: #2a2a2a;
	}

	@media screen and (max-width: 820px) {
		.amenity-title {
			font-size: 1.2rem;
		}
		.section-heading {
			font-size: 1.6rem;
		}
		.section-description {
			font-size: 0.9rem;
		}
	}
</style>
