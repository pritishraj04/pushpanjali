<svelte:head>
    <title>BRAND STORY | Pushpanjali Construction - Building Excellence with Precision</title>
</svelte:head>
<main>
    <div class="hero-section">
        <div class="hero-overlay">
            <div class="container">
                <h1 class="hero-heading">Brand Story</h1>
                <p class="hero-subheading">Find where you belong.</p>
            </div>
        </div>
    </div>

    <section class="brand-introduction section-padding">
        <div class="container">
            <h2 class="section-heading">About Us</h2>
            <p class="section-description">Pushpanjali Construction has been a pioneer in delivering excellence in construction for over two decades. Our commitment to precision and quality has made us a trusted name in the industry.</p>
        </div>
    </section>

    <section class="brand-mission section-padding-bottom">
        <div class="container">
            <h2 class="section-heading">Our Mission</h2>
            <p class="section-description">To build spaces that inspire and empower communities, while maintaining the highest standards of quality and sustainability.</p>
        </div>
    </section>

    <section class="brand-vision section-padding-bottom">
        <div class="container">
            <h2 class="section-heading">Our Vision</h2>
            <p class="section-description">To be a global leader in construction, known for innovation, integrity, and excellence.</p>
        </div>
    </section>

    <section class="brand-values section-padding-bottom">
        <div class="container">
            <h2 class="section-heading">Our Values</h2>
            <ul class="section-list">
                <li>
                    <img src="/icons/integrity.svg" alt="Integrity Icon" class="value-icon" />
                    <span>Integrity</span>
                </li>
                <li>
                    <img src="/icons/innovation.svg" alt="Innovation Icon" class="value-icon" />
                    <span>Innovation</span>
                </li>
                <li>
                    <img src="/icons/customer-centricity.svg" alt="Customer-Centricity Icon" class="value-icon" />
                    <span>Customer-Centricity</span>
                </li>
                <li>
                    <img src="/icons/sustainability.svg" alt="Sustainability Icon" class="value-icon" />
                    <span>Sustainability</span>
                </li>
            </ul>
        </div>
    </section>

    <section class="brand-history section-padding">
        <div class="container">
            <h2 class="section-heading">Our History</h2>
            <p class="section-description">Founded in 2000, Pushpanjali Construction started as a small family business. Over the years, we have grown into a leading construction company, completing numerous landmark projects.</p>
        </div>
    </section>

    <section class="brand-zigzag section-padding">
        <div class="container">
            <div class="zigzag-item">
                <div class="zigzag-content">
                    <h2 class="section-heading">Innovative Designs</h2>
                    <p class="section-description">We bring creativity and functionality together to create innovative designs that stand out.</p>
                </div>
                <div class="zigzag-image">
                    <img src="https://placehold.co/600x400/png" alt="Innovative Designs" />
                </div>
            </div>
            <div class="zigzag-item reverse">
                <div class="zigzag-content">
                    <h2 class="section-heading">Sustainable Practices</h2>
                    <p class="section-description">Our commitment to sustainability ensures that our projects are environmentally friendly and future-ready.</p>
                </div>
                <div class="zigzag-image">
                    <img src="https://placehold.co/600x400/png" alt="Sustainable Practices" />
                </div>
            </div>
            <div class="zigzag-item">
                <div class="zigzag-content">
                    <h2 class="section-heading">Customer Satisfaction</h2>
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
    .hero-section {
        position: relative;
        background-image: url('https://placehold.co/1900x600/png');
        background-size: cover;
        background-position: center;
        height: 60vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .hero-overlay {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
        color: white;
        text-align: center;
        padding: 2rem;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .hero-heading {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    .hero-subheading {
        font-size: 1.5rem;
        font-weight: 300;
    }

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
</style>