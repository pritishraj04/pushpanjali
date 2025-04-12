<script>
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import Icon from '@iconify/svelte';

	import highlight1 from '$lib/assets/images/highlight/highlight1.jpeg';
	import highlight2 from '$lib/assets/images/highlight/highlight2.jpeg';
	import highlight3 from '$lib/assets/images/highlight/highlight3.jpeg';
	import highlight4 from '$lib/assets/images/highlight/highlight4.jpeg';

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
			src: highlight1,
			alt: 'Img 1',
			projectName: 'PROJECT NAME',
			desc1: '3BHK & 4BHK FLATS',
			desc2: 'RESIDENTIAL AND COMMERCIAL SPACES',
			mapLink: 'https://maps.app.goo.gl/8yG83TWtFmRjvNot7',
			address: 'DANAPUR, PATNA'
		},
		{
			id: 2,
			src: highlight2,
			alt: 'Img 2',
			projectName: 'PROJECT NAME',
			desc1: '3BHK & 4BHK FLATS',
			desc2: 'RESIDENTIAL AND COMMERCIAL SPACES',
			mapLink: 'https://maps.app.goo.gl/8yG83TWtFmRjvNot7',
			address: 'DANAPUR, PATNA'
		},
		{
			id: 3,
			src: highlight3,
			alt: 'Img 3',
			projectName: 'PROJECT NAME',
			desc1: '3BHK & 4BHK FLATS',
			desc2: 'RESIDENTIAL AND COMMERCIAL SPACES',
			mapLink: 'https://maps.app.goo.gl/8yG83TWtFmRjvNot7',
			address: 'DANAPUR, PATNA'
		},
		{
			id: 4,
			src: highlight4,
			alt: 'Img 4',
			projectName: 'PROJECT NAME',
			desc1: '3BHK & 4BHK FLATS',
			desc2: 'RESIDENTIAL AND COMMERCIAL SPACES',
			mapLink: 'https://maps.app.goo.gl/8yG83TWtFmRjvNot7',
			address: 'DANAPUR, PATNA'
		}
	];
</script>

<section class="section-padding section-alt">
	<div class="highlight-wrapper">
		<div class="container">
			<div class="highlight-carousel-wrapper">
				<h3 class="section-heading sh-b3">Highlighted Projects</h3>
				<Splide {options} hasTrack={false} aria-label="Highlighted Prjects">
					<SplideTrack>
						{#each highlightCarousel as slide}
							<SplideSlide>
								<img src={slide.src} alt={slide.alt} />
								<div class="highlight-project-details">
									<h4>{slide.projectName}</h4>
									<p>{slide.desc1}</p>
									<p>{slide.desc2}</p>
									<div class="location">
										<a href={slide.mapLink} target="_blank" class="btn btn-skeleton">View Map</a>
										<p class="address">{slide.address}</p>
									</div>
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
				<div class="hightlight-projects">
					<h3 class="highlight-project-heading">Explore Our Portfolio</h3>
					<div class="highlight-locations">
						<p class="accent highlight-location">Patna</p>
						<p class="accent highlight-location">Begusarai</p>
						<p class="accent highlight-location">Muzzafarpur</p>
						<p class="accent highlight-location">Jharkhand</p>
					</div>
				</div>
				<div class="highlight-cta">
					<a href="/projects" class="btn btn-secondary">Explore Projects</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.highlight-project-heading {
		font-size: 1.3rem;
		text-transform: uppercase;
		text-align: center;
		margin-block: 3rem 1rem;
	}
	.highlight-cta {
		margin-block: 2.4rem 0;
		text-align: center;
	}
	.highlight-locations {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}
	.highlight-location {
		font-size: 1rem;
		text-transform: uppercase;
	}
	.highlight-project-details {
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
	.splide__arrow {
		background-color: transparent;
	}

	@media screen and (max-width: 820px) {
		.highlight-project-details {
			position: relative;
			padding: 1.5rem;
			background-color: #eaeaea;
			color: #777776;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			text-align: center;
		}
		.highlight-project-details .location {
			display: flex;
			gap: 0.5rem;
			justify-content: center;
			align-items: center;
		}
		.highlight-locations {
			flex-direction: column;
			gap: 1.2rem;
		}
		.highlight-project-heading {
			font-size: 1rem;
		}
		.highlight-location {
			font-size: 0.7rem;
		}
	}
</style>
