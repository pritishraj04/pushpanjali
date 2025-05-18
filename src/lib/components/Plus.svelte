<script>
	import plusLogo from '$lib/assets/images/propertiesb.svg';
	import investmentBenefits from '$lib/assets/images/invest.jpg';
	import leasingBenefits from '$lib/assets/images/leasing.jpg';
</script>

<section class="section-padding section-alt">
	<div class="container">
		<div class="plus-wrapper">
			<div class="plus-headings">
				<h2 class="section-heading sh-b2">Discover the Plus Advantage</h2>
				<img class="plus-logo" src={plusLogo} alt="Plus Logo" />
				<p class="plus-description section-description">
					We go beyond the ordinary to bring you exceptional services. From investment benefits to
					home interiors, leasing solutions to financial assistance, explore how we make life
					simpler and better for you.
				</p>
			</div>
			<div class="plus-list">
				<div class="plus-item">
					<img src={investmentBenefits} alt="Investment Benefits" />
					<h4 class="accent">Investment Benefits</h4>
					<p class="plus-item-description">
						Maximize your returns with our expert investment solutions tailored to your needs.
					</p>
				</div>
				<div class="plus-item">
					<img src={leasingBenefits} alt="Leasing Solution" />
					<h4 class="accent">Leasing Solutions</h4>
					<p class="plus-item-description">
						Simplify leasing with our comprehensive and hassle-free services.
					</p>
				</div>
			</div>
			<div class="plus-cta">
				<a href="/brand" class="btn btn-primary btn-lg">Learn More</a>
			</div>
		</div>
	</div>
</section>

<style>
	.plus-headings {
		max-width: 800px; /* Reduced width for a more compact look */
		margin-inline: auto;
		margin-bottom: 2.5rem; /* Adjusted spacing */
		text-align: center;
	}
	.plus-logo {
		max-width: 200px; /* Reduced size for a sleeker appearance */
		margin-inline: auto;
		margin-block: 1.5rem 2rem;
	}
	.plus-description {
		font-size: 1.1rem; /* Slightly smaller font size */
		line-height: 1.6; /* Adjusted line height for better readability */
		color: #555;
		margin-bottom: 2rem;
	}
	.plus-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Reduced min size for items */
		gap: 2rem; /* Adjusted gap for better spacing */
	}
	.plus-item {
		text-align: center;
		background: #f9f9f9;
		padding: 1.5rem; /* Reduced padding for a more compact look */
		border-radius: 6px; /* Slightly smaller border radius */
		box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for a modern feel */
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}
	.plus-item:hover {
		transform: translateY(-3px); /* Reduced hover effect */
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12); /* Subtle hover shadow */
	}
	.plus-item h4 {
		text-transform: uppercase;
		font-size: 1.2rem; /* Slightly smaller font size */
		margin-top: 1rem;
		font-weight: 500;
		color: #333;
	}
	.plus-item-description {
		font-size: 0.9rem; /* Reduced font size for descriptions */
		color: #666;
		margin-top: 0.8rem; /* Adjusted spacing */
	}
	.plus-cta {
		margin-block: 2.5rem 0; /* Adjusted spacing */
		text-align: center;
	}
	.btn-lg {
		padding: 0.8rem 2rem; /* Reduced padding for a sleeker button */
		font-size: 1.1rem; /* Slightly smaller font size */
	}
</style>
