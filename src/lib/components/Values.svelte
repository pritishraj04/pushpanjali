<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import valuesLogo from '$lib/assets/images/rtp.svg';
	import value1 from '$lib/assets/images/value/value1.jpeg';
	import value2 from '$lib/assets/images/value/value2.jpeg';
	import value3 from '$lib/assets/images/value/value3.jpeg';
	import value4 from '$lib/assets/images/value/value4.jpeg';
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

	const valueCarousel = [
		{
			id: 1,
			src: value1,
			alt: 'Img 1'
		},
		{
			id: 2,
			src: value2,
			alt: 'Img 2'
		},
		{
			id: 3,
			src: value3,
			alt: 'Img 3'
		},
		{
			id: 4,
			src: value4,
			alt: 'Img 4'
		},
		{
			id: 5,
			src: value4,
			alt: 'Img 5'
		}
	];

	let splideInstance;

	function goToNext() {
		splideInstance.go('>');
	}

	function goToPrev() {
		splideInstance.go('<');
	}
</script>

<section class="section-padding">
	<div class="value-wrapper">
		<div class="container">
			<div class="parent-company">
				<img class="parent-logo" src={valuesLogo} alt="Parent Logo" />
				<p class="parent-company-desc section-description">
					We create spaces that enable Everyday Joys; one community, one family, and one home at a
					time. Start your new home with comfort and luxury.
				</p>
			</div>
			<div class="value-carousel-wrapper">
				<h3 class="section-heading sh-b3">Value we preserve</h3>
				<Splide
					{options}
					aria-label="My Favorite Images"
					class="custom-splide"
					bind:this={splideInstance}
				>
					{#each valueCarousel as slide}
						<SplideSlide>
							<img src={slide.src} alt={slide.alt} class="slide-image" />
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
				<div class="value-cta">
					<a href="/brand" class="btn btn-secondary">Brand Story</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.parent-company {
		max-width: 860px;
		margin-inline: auto;
	}
	.parent-logo {
		max-width: 500px;
		margin-inline: auto;
		margin-block: 3.4rem;
	}
	.parent-company-desc {
		text-align: center;
		margin-bottom: 1.4rem;
	}
	.value-cta {
		margin-block: 2.4rem 0;
		text-align: center;
	}

	.slide-image {
		width: 100%;
		/* border-radius: 10px; */
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
