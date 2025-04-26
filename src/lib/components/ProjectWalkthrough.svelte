<script>
	let { project } = $props();
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import Icon from '@iconify/svelte';

	import render1 from '$lib/assets/images/projects/ratna-tower/ratna-render1.jpeg';
	import render2 from '$lib/assets/images/projects/ratna-tower/ratna-render2.jpeg';

	const options = {
		perMove: 1,
		arrows: true,
		gap: '3rem',
		speed: 2000,
		pagination: false,
		breakpoints: {
			820: { pagination: true, arrows: false }
		}
	};

	const highlightCarousel = [
		{
			id: 1,
			src: render1,
			alt: 'Img 1',
			projectName: 'Modern architecture meets timeless facade',
			desc1: 'Akahara Ghat',
			desc2: 'RESIDENTIAL AND COMMERCIAL SPACES',
			mapLink: 'https://maps.app.goo.gl/8yG83TWtFmRjvNot7',
			address: 'DANAPUR, PATNA'
		},
		{
			id: 2,
			src: render2,
			alt: 'Img 2',
			projectName: 'PROJECT NAME',
			desc1: '3BHK & 4BHK FLATS',
			desc2: 'RESIDENTIAL AND COMMERCIAL SPACES',
			mapLink: 'https://maps.app.goo.gl/8yG83TWtFmRjvNot7',
			address: 'DANAPUR, PATNA'
		}
	];
</script>

<section class="project-overview section-padding">
	<h4 class="section-heading sh-b1">Overview</h4>
	<p class="project-description">{project.description}</p>
	<Splide {options} hasTrack={false} aria-label="Project walkthrough">
		<SplideTrack>
			{#each highlightCarousel as slide}
				<SplideSlide>
					<img src={slide.src} alt={slide.alt} />
					<div class="walkthrough-details">
						<h4>{slide.projectName}</h4>
						<p>{slide.desc1}</p>
						<p>{slide.desc2}</p>
					</div>
				</SplideSlide>
			{/each}
		</SplideTrack>
		<div class="splide__arrows">
			<button class="splide__arrow splide__arrow--prev"
				><Icon icon="bitcoin-icons:caret-right-outline" width="24" height="24" /></button
			>
			<button class="splide__arrow splide__arrow--next"
				><Icon icon="bitcoin-icons:caret-right-outline" width="24" height="24" /></button
			>
		</div>
	</Splide>
</section>

<style>
	.project-description {
		max-width: 800px;
		margin-inline: auto;
		text-align: center;
		margin-bottom: 30px;
		font-size: 1.1rem;
		line-height: 1.6;
		color: #555;
		letter-spacing: 0.5px;
	}
	.walkthrough-details {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		background-color: rgba(0, 0, 0, 0.6);
		backdrop-filter: saturate(180%) blur(20px);
		-webkit-backdrop-filter: saturate(180%) blur(20px);
		color: #ffffff;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		text-align: center;
	}
</style>
