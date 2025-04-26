<script>
	let { project } = $props();
	const gallery = project.gallery;
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import Icon from '@iconify/svelte';
	const options = {
		perPage: 3,
		perMove: 1,
		arrows: false,
		pagination: false,
		gap: '-0.2rem',
		type: 'loop',
		focus: 'center',
		interval: 8000,
		flickMaxPages: 3,
		updateOnMove: true,
		pagination: false,
		padding: '10%',
		throttle: 300,
		breakpoints: {
			820: {
				perPage: 1,
				type: 'loop',
				focus: 'center'
			}
		}
	};

	let splideInstance;

	function goToNext() {
		splideInstance.go('>');
	}

	function goToPrev() {
		splideInstance.go('<');
	}
</script>

<section class="gallery section-padding-bottom gallery-slider">
	<h4 class="section-heading sh-b2">Gallery</h4>
	<p class="section-description">Explore the elegance and sophistication of our premium spaces.</p>
	<Splide {options} aria-label="Premium Gallery" bind:this={splideInstance}>
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
	<div class="custom-navigation">
		<button class="nav-btn prev-btn" onclick={goToPrev}
			><Icon icon="fluent:chevron-left-48-filled" /></button
		>
		<button class="nav-btn next-btn" onclick={goToNext}
			><Icon icon="fluent:chevron-right-48-filled" /></button
		>
	</div>
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
	.custom-navigation {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-top: 1rem;
	}

	.nav-btn {
		background-color: rgba(0, 0, 0, 0.5);
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}
	.nav-btn:hover {
		background-color: rgba(0, 0, 0, 0.8);
	}
</style>
