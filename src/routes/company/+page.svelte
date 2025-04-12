<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import headerImage from '$lib/assets/images/company/header.jpeg';
	import gallery1 from '$lib/assets/images/company/gallery1.jpeg';
	import gallery2 from '$lib/assets/images/company/gallery2.jpeg';
	import gallery3 from '$lib/assets/images/company/gallery3.jpeg';
	import gallerym1 from '$lib/assets/images/company/gallerym1.jpeg';
	import gallerym2 from '$lib/assets/images/company/gallerym2.jpeg';
	import gallerym3 from '$lib/assets/images/company/gallerym3.jpeg';

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

	<section class="brand-zigzag section-padding">
        <div class="container">
            <div class="zigzag-item">
                <div class="zigzag-content">
                    <h2 class="zigzag-heading sh-b1">Innovative Designs</h2>
                    <p class="section-description">We bring creativity and functionality together to create innovative designs that stand out.</p>
                </div>
                <div class="zigzag-image">
                    <img src="https://placehold.co/600x400/png" alt="Innovative Designs" />
                </div>
            </div>
            <div class="zigzag-item reverse">
                <div class="zigzag-content">
                    <h2 class="zigzag-heading sh-b1">Sustainable Practices</h2>
                    <p class="section-description">Our commitment to sustainability ensures that our projects are environmentally friendly and future-ready.</p>
                </div>
                <div class="zigzag-image">
                    <img src="https://placehold.co/600x400/png" alt="Sustainable Practices" />
                </div>
            </div>
            <div class="zigzag-item">
                <div class="zigzag-content">
                    <h2 class="zigzag-heading sh-b1">Customer Satisfaction</h2>
                    <p class="section-description">We prioritize our customers' needs and deliver projects that exceed expectations.</p>
                </div>
                <div class="zigzag-image">
                    <img src="https://placehold.co/600x400/png" alt="Customer Satisfaction" />
                </div>
            </div>
        </div>
    </section>
</main>

<style>
	.story-description {
		margin-top: 1.5rem;
	}

	.zigzag-item {
        display: flex;
        align-items: center;
        margin-bottom: 4rem;
    }

    .zigzag-item.reverse {
        flex-direction: row-reverse;
    }

    .zigzag-content {
        flex: 1;
        padding: 1rem;
    }

	.zigzag-heading {
		font-size: 1.3rem;
		text-transform: uppercase;
		text-align: center;
		margin-block: 3rem 1rem;
	}
    .zigzag-image {
        flex: 1;
        padding: 1rem;
    }

    .zigzag-image img {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }
	@media (max-width: 768px) {
        .zigzag-item {
            flex-direction: column;
        }

        .zigzag-item.reverse {
            flex-direction: column;
        }

        .zigzag-content,
        .zigzag-image {
            padding: 0.5rem;
        }
    }
</style>
