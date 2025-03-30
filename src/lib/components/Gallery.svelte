<script>
	let { project } = $props();
	const gallery = project.gallery;
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	const options = {
		arrows: false,
		rewind: true,
		type: 'loop',
		pagination: true,
		perPage: 3,
		gap: 30,
		breakpoints: {
			768: {
				perPage: 1
			}
		}
	};
</script>

<section class="gallery section-padding-bottom">
	<h4 class="section-heading sh-b2">Gallery</h4>
	<p class="section-description">A HOME THAT HARBOURS A NEW YORK STATE OF MIND</p>
	<Splide {options} aria-label="My Favorite Images">
		{#each gallery as slide}
			<SplideSlide>
				<div class="carousel">
					<img class="carousel-img" src={slide.image} alt={slide.title} />
					<h5 class="carousel-title">{slide.title}</h5>
				</div>
			</SplideSlide>
		{/each}
	</Splide>
</section>

<style>
	/* Add your custom styles here */
	.carousel {
		width: 100%;
		position: relative;
	}
	.carousel-title {
		position: absolute;
		bottom: 10px;
		left: 10px;
		color: white;
		font-size: 14px;
		text-transform: uppercase;
		background-color: rgba(0, 0, 0, 0.7);
		backdrop-filter: saturate(180%) blur(20px);
		-webkit-backdrop-filter: saturate(180%) blur(20px);
		padding: 5px;
		border-radius: 5px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
