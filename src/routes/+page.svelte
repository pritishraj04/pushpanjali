<script>
	import Exclusive from '$lib/components/Exclusive.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import Values from '$lib/components/Values.svelte';
	import Plus from '$lib/components/Plus.svelte';
	import Legal from '$lib/components/Legal.svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import Ucta from '$lib/components/Ucta.svelte';

	import hero1 from '$lib/assets/images/hero/hero1.jpeg';
	import hero2 from '$lib/assets/images/hero/hero2.jpeg';
	import hero3 from '$lib/assets/images/hero/hero3.jpeg';
	import herom1 from '$lib/assets/images/hero/herom1.jpeg';
	import herom2 from '$lib/assets/images/hero/herom2.jpeg';
	import herom3 from '$lib/assets/images/hero/herom3.jpeg';

	const options = {
		arrows: false,
		rewind: true,
		type: 'fade', // Change animation to fade for a smoother transition
		speed: 800, // Adjust speed for better visual effect
		pagination: true, // Enable pagination
		classes: {
			pagination: 'splide__pagination flat-pagination', // Updated class for flat design
			page: 'splide__pagination__page flat-page' // Updated class for flat page design
		}
	};

	const heroCarousel = [
		{
			id: 1,
			src: hero1,
			msrc: herom1,
			alt: 'Img 1'
		},
		{
			id: 2,
			src: hero2,
			msrc: herom2,
			alt: 'Img 2'
		},
		{
			id: 3,
			src: hero3,
			msrc: herom3,
			alt: 'Img 3'
		}
	];

	let x;
</script>

<svelte:window bind:innerWidth={x} />

<svelte:head>
	<title>HOME | Pushpanjali Construction - Building Excellence with Precision</title>
</svelte:head>

<main>
	<div class="container-fluid">
		<div class="hero-wrapper">
			<Splide {options} aria-label="My Favorite Images">
				{#each heroCarousel as slide}
					<SplideSlide>
						<div class="carousel-slide">
							<img class="carousel-img" src={x > 1200 ? slide.src : slide.msrc} alt={slide.alt} />
							<div class="gradient-overlay"></div>
						</div>
					</SplideSlide>
				{/each}
			</Splide>
			<Ucta />
			<p class="hero-bottom-bar">REAL ESTATE • INTERIOR DESIGN • TURNKEY CONSTRUCTION</p>
		</div>
	</div>
	<Values />
	<Highlight />
	<Exclusive />
	<Plus />
	<Legal />
</main>

<style>
	.hero-wrapper {
		position: relative;
	}

	.carousel-slide {
		position: relative;
	}

	.carousel-img {
		max-height: 800px;
		object-fit: cover;
		object-position: center;
		width: 100%;
	}

	.gradient-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(315deg, rgba(0, 0, 0, 0.6) 5%, rgba(0, 0, 0, 0) 25%);
		pointer-events: none;
	}

	.hero-bottom-bar {
		font-size: 1rem;
		text-align: center;
		padding: 0.5rem 0.7rem;
		background: #f8f9fa;
		color: #6c757d;
		letter-spacing: 0.03rem;
		text-transform: uppercase;
	}
</style>
