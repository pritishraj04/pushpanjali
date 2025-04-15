<script>
	let { project } = $props();
	const gallery = project.gallery;
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	const options = {
		arrows: true, // Enable arrows for better navigation
		rewind: true,
		type: 'loop',
		pagination: true,
		perPage: 3,
		gap: -20,
		height: '400px', // Set a uniform height for slides
		focus: 'center', // Focus the center slide
		breakpoints: {
			768: {
				perPage: 1,
				height: '300px' // Adjust height for smaller screens
			}
		}
	};
</script>

<section class="gallery section-padding-bottom gallery-slider">
	<h4 class="section-heading sh-b2">Gallery</h4>
	<p class="section-description">Explore the elegance and sophistication of our premium spaces.</p>
	<Splide {options} aria-label="Premium Gallery">
		{#each gallery as slide}
			<SplideSlide>
				<div class="carousel">
					<img class="carousel-img" src={slide.image} alt={slide.title} />
					<div class="carousel-content">
						<h5 class="carousel-title">{slide.title}</h5>
						<p class="carousel-description">{slide.description}</p>
					</div>
				</div>
			</SplideSlide>
		{/each}
	</Splide>
</section>

<style>
	/* Add your custom styles here */
	.carousel {
		width: 100%;
		height: 100%; /* Ensure the carousel fills the defined height */
		position: relative;
		overflow: hidden;
	}
	.carousel-img {
		width: 100%;
		height: 100%;
		object-fit: cover; /* Ensure images fit uniformly */
	}
	.carousel-content {
		position: absolute;
		bottom: 20px;
		left: 20px;
		color: white;
		background-color: rgba(0, 0, 0, 0.6);
		backdrop-filter: saturate(180%) blur(10px);
		-webkit-backdrop-filter: saturate(180%) blur(10px);
		padding: 10px;
		border-radius: 8px;
		max-width: 80%;
	}
	.carousel-title {
		font-weight: 500;
		text-transform: uppercase;
		margin-bottom: 5px;
	}
	.carousel-description {
		font-size: 14px;
		line-height: 1.4;
	}
</style>
