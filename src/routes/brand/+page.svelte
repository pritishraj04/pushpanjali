<script>
	import headerImage from '$lib/assets/images/company/header.jpeg';

</script>

<svelte:head>
    <title>BRAND STORY | Pushpanjali Construction - Building Excellence with Precision</title>
</svelte:head>
<main>
	<div class="page-heading-wrapper company-header" style={`background-image: url(${headerImage})`}>
		<div class="container">
			<h1 class="page-heading">Brand Story</h1>
			<p class="page-heading-paragraph">Find where you belong.</p>
		</div>
	</div>

    <section class="brand-introduction section-padding">
        <div class="container">
            <h2 class="section-heading sh-b1">About Us</h2>
            <p class="section-description">Pushpanjali Construction has been a pioneer in delivering excellence in construction for over two decades. Our commitment to precision and quality has made us a trusted name in the industry.</p>
        </div>
    </section>

    <section class="brand-mission section-padding-bottom">
        <div class="container">
            <h2 class="section-heading sh-b1">Our Mission</h2>
            <p class="section-description">To build spaces that inspire and empower communities, while maintaining the highest standards of quality and sustainability.</p>
        </div>
    </section>

    <section class="brand-vision section-padding-bottom">
        <div class="container">
            <h2 class="section-heading sh-b1">Our Vision</h2>
            <p class="section-description">To be a global leader in construction, known for innovation, integrity, and excellence.</p>
        </div>
    </section>

    <section class="brand-values section-padding-bottom">
        <div class="container">
            <h2 class="section-heading sh-b1">Our Values</h2>
            <ul class="section-list">
                <li>
                    <img src="https://placehold.co/48x48" alt="Integrity Placeholder" class="value-icon" />
                    <span>Integrity</span>
                </li>
                <li>
                    <img src="https://placehold.co/48x48" alt="Innovation Placeholder" class="value-icon" />
                    <span>Innovation</span>
                </li>
                <li>
                    <img src="https://placehold.co/48x48" alt="Customer-Centricity Placeholder" class="value-icon" />
                    <span>Customer-Centricity</span>
                </li>
                <li>
                    <img src="https://placehold.co/48x48" alt="Sustainability Placeholder" class="value-icon" />
                    <span>Sustainability</span>
                </li>
            </ul>
        </div>
    </section>

    <section class="brand-history section-padding">
        <div class="container">
            <h2 class="section-heading sh-b1">Our History</h2>
            <p class="section-description">Founded in 2000, Pushpanjali Construction started as a small family business. Over the years, we have grown into a leading construction company, completing numerous landmark projects.</p>
        </div>
    </section>

    <section class="brand-zigzag section-padding">
        <div class="container">
            <div class="zigzag-item">
                <div class="zigzag-content">
                    <h2 class="section-heading sh-b1">Innovative Designs</h2>
                    <p class="section-description">We bring creativity and functionality together to create innovative designs that stand out.</p>
                </div>
                <div class="zigzag-image">
                    <img src="https://placehold.co/600x400/png" alt="Innovative Designs" />
                </div>
            </div>
            <div class="zigzag-item reverse">
                <div class="zigzag-content">
                    <h2 class="section-heading sh-b1">Sustainable Practices</h2>
                    <p class="section-description">Our commitment to sustainability ensures that our projects are environmentally friendly and future-ready.</p>
                </div>
                <div class="zigzag-image">
                    <img src="https://placehold.co/600x400/png" alt="Sustainable Practices" />
                </div>
            </div>
            <div class="zigzag-item">
                <div class="zigzag-content">
                    <h2 class="section-heading sh-b1">Customer Satisfaction</h2>
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
    .section-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        list-style: none;
        padding: 0;
    }

    .section-list li {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }

    .value-icon {
        width: 48px;
        height: 48px;
        margin-bottom: 0.5rem;
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