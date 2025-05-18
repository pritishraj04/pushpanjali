<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import Icon from '@iconify/svelte';

	import headerImage from '$lib/assets/images/company/header.jpeg';
	import gallery1 from '$lib/assets/images/company/gallery1.jpeg';
	import gallery2 from '$lib/assets/images/company/gallery2.jpeg';
	import gallery3 from '$lib/assets/images/company/gallery3.jpeg';
	import gallerym1 from '$lib/assets/images/company/gallerym1.jpeg';
	import gallerym2 from '$lib/assets/images/company/gallerym2.jpeg';
	import gallerym3 from '$lib/assets/images/company/gallerym3.jpeg';

	import zig1 from '$lib/assets/images/zig-images/zig1.jpeg';
	import zig2 from '$lib/assets/images/zig-images/zig2.jpeg';
	import zig3 from '$lib/assets/images/zig-images/zig3.jpeg';

	const options = {
		arrows: false,
		rewind: true
	};

	const companyGallery = [
		{
			id: 1,
			src: gallery1,
			msrc: gallerym1,
			alt: 'Img 1'
		},
		{
			id: 2,
			src: gallery2,
			msrc: gallerym2,
			alt: 'Img 2'
		},
		{
			id: 3,
			src: gallery3,
			msrc: gallerym3,
			alt: 'Img 3'
		}
	];
	let x;
</script>

<svelte:window bind:innerWidth={x} />

<svelte:head>
	<title>COMPANY | Pushpanjali Construction - Building Excellence with Precision</title>
</svelte:head>

<main>
	<div class="page-heading-wrapper company-header" style={`background-image: url(${headerImage})`}>
		<div class="container">
			<h1 class="page-heading">Company</h1>
			<p class="page-heading-paragraph">Find where you belong.</p>
		</div>
	</div>
	<section class="section-padding">
		<div class="story-wrapper">
			<div class="container">
				<h2 class="section-heading">Pushpanjali Group</h2>
				<p class="story-description section-description">
					Established in 1997, the Pushpanjali Group has its roots in India's Independence and
					Swadeshi movement. Our founder, Ardeshir Pushpanjali, a lawyer-turned-serial entrepreneur
					failed with a few ventures before he struck gold with a locks business. Today, we enjoy
					the patronage of 1.1 billion consumers globally across consumer goods, real estate,
					appliances, agriculture and many other businesses. In fact, our geographical footprint
					extends beyond Earth, with our engines now powering many of India's space missions. With a
					revenue of over USD 6 billion, we are growing fast, and have exciting, ambitious
					aspirations. But for us, it is most important that besides our strong financial
					performance and innovative, much-loved products, we remain a good company. Approximately
					23 per cent of the promoter holding in the Pushpanjali Group is held in trusts that invest
					in the environment, health and education. We are also bringing together our passion and
					purpose to make a difference through our Good & Green strategy of 'shared value' to create
					a more inclusive and greener India. At the heart of all of this is our people. We take
					much pride in fostering an inspiring workplace, with an agile and high-performance
					culture. We are also deeply committed to recognizing and valuing diversity across our
					teams.
				</p>
			</div>
		</div>
	</section>
	<section class="section-padding">
		<div class="company-gallery-wrapper">
			<div class="container-fluid">
				<Splide {options} aria-label="My Favorite Images">
					{#each companyGallery as slide}
						<SplideSlide>
							<img class="carousel-img" src={x > 1200 ? slide.src : slide.msrc} alt={slide.alt} />
						</SplideSlide>
					{/each}
				</Splide>
			</div>
		</div>
	</section>
		<section class="section-padding">
		<div class="story-wrapper">
			<div class="container">
				<h2 class="section-heading">We are</h2>
				<p class="story-description section-description">
					Established in 1997, the Pushpanjali Group has its roots in India's Independence and
					Swadeshi movement. Our founder, Ardeshir Pushpanjali, a lawyer-turned-serial entrepreneur
					failed with a few ventures before he struck gold with a locks business. Today, we enjoy
					the patronage of 1.1 billion consumers globally across consumer goods, real estate,
					appliances, agriculture and many other businesses.
				</p>
			</div>
		</div>
	</section>
	<section class="brand-why-choose-us section-padding section-alt">
		<div class="container">
			<h2 class="section-heading sh-b1">Why Choose Us</h2>
			<ul class="section-list">
				<li>
					<div class="icon-circle"><Icon icon="fluent:building-home-32-filled" width="40" height="40" /></div>
					<h3 class="choose-heading">Expertise</h3>
					<p class="choose-paragraph">Over 20 years of experience in delivering top-notch construction projects.</p>
				</li>
				<li>
					<div class="icon-circle"><Icon icon="ri:diamond-line" width="40" height="40" /></div>
					<h3 class="choose-heading">Unmatched Quality</h3>
					<p class="choose-paragraph">We adhere to the highest standards of quality and precision in every project.</p>
				</li>
				<li>
					<div class="icon-circle"><Icon icon="hugeicons:time-quarter-pass" width="40" height="40" /></div>
					<h3 class="choose-heading">Timely Delivery</h3>
					<p class="choose-paragraph">Our projects are completed on time without compromising on quality.</p>
				</li>
				<li>
					<div class="icon-circle"><Icon icon="ri:customer-service-2-fill" width="40" height="40" /></div>
					<h3 class="choose-heading">Exceptional Support</h3>
					<p class="choose-paragraph">We provide end-to-end support to ensure customer satisfaction.</p>
				</li>
			</ul>
		</div>
	</section>

	<section class="brand-achievements section-padding">
		<div class="container">
			<h2 class="section-heading sh-b1">Our Achievements</h2>
			<div class="achievements-grid">
				<div class="achievement-item">
					<h3>100+ Projects Completed</h3>
					<p>
						Successfully delivered over 100 projects across residential, commercial, and industrial sectors.
					</p>
				</div>
				<div class="achievement-item">
					<h3>50+ Awards Won</h3>
					<p>
						Recognized for excellence in construction and innovation by leading industry bodies.
					</p>
				</div>
				<div class="achievement-item">
					<h3>10,000+ Happy Customers</h3>
					<p>Building trust and satisfaction with every project we undertake.</p>
				</div>
			</div>
		</div>
	</section>
	<section class="brand-zigzag section-padding section-alt">
		<div class="container">
			<div class="zigzag-item">
				<div class="zigzag-content">
					<h2 class="zigzag-heading sh-b1">Innovative Designs</h2>
					<p class="section-description">
						We bring creativity and functionality together to create innovative designs that stand
						out.
					</p>
				</div>
				<div class="zigzag-image">
					<img src={zig1} alt="Innovative Designs" />
				</div>
			</div>
			<div class="zigzag-item reverse">
				<div class="zigzag-content">
					<h2 class="zigzag-heading sh-b1">Sustainable Practices</h2>
					<p class="section-description">
						Our commitment to sustainability ensures that our projects are environmentally friendly
						and future-ready.
					</p>
				</div>
				<div class="zigzag-image">
					<img src={zig2} alt="Sustainable Practices" />
				</div>
			</div>
			<div class="zigzag-item">
				<div class="zigzag-content">
					<h2 class="zigzag-heading sh-b1">Customer Satisfaction</h2>
					<p class="section-description">
						We prioritize our customers' needs and deliver projects that exceed expectations.
					</p>
				</div>
				<div class="zigzag-image">
					<img src={zig3} alt="Customer Satisfaction" />
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	.story-description {
		margin-top: 1.5rem;
	}
		.section-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 2rem;
		list-style: none;
		padding: 0;
	}
	.section-list li {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		background: #fff;
		box-shadow: 0 2px 8px rgba(126, 124, 26, 0.04);
		padding: 2rem 1rem 1.5rem 1rem;
		transition: box-shadow 0.2s;
	}
	.section-list li:hover {
		box-shadow: 0 4px 16px rgba(26,35,126,0.10);
	}
	.icon-circle {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: .8rem;
		border-radius: 50%;
		background: linear-gradient(120deg, #faf8e3 0%, #e9e4c5 100%);
		margin-bottom: 1rem;
	}
	.choose-heading {
		font-size: 1.2rem;
		font-weight: 600;
		margin-block: 0.7rem .4rem;
		color: #7e771a;
	}
	.choose-paragraph {
		font-size: 1rem;
		color: #555;
	}
		.achievements-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}
	.achievement-item {
		background: #f9f9f9;
		padding: 2rem 1.5rem;
		text-align: center;
		box-shadow: 0 2px 8px rgba(26,35,126,0.04);
		transition: box-shadow 0.2s;
	}
	.achievement-item:hover {
		box-shadow: 0 4px 16px rgba(26,35,126,0.10);
	}
	.achievement-item h3 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		color: #cb952b;
		font-weight: 600;
	}
	.achievement-item p {
		font-size: 1rem;
		color: #555;
	}
</style>
