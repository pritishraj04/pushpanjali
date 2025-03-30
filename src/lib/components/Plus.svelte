<script>
	import plusLogo from '$lib/assets/images/propertiesb.svg'
</script>

<section class="section-padding section-alt">
	<div class="container">
		<div class="plus-wrapper">
			<div class="plus-headings">
				<h3 class="section-heading sh-b3">EXPLORING</h3>
				<img class="plus-logo" src={plusLogo} alt="plus Logo" />
				<p class="plus-description section-description">
					Count on us to take care of all the little things. From investment Benefits to your home
					interiors, leasing services to financial assistance, browse the list to see how we can
					help make life easy for you
				</p>
			</div>
			<div class="plus-list">
				<div class="plus-item">
					<img src="https://placehold.co/400x400/png" alt="investment Benefits" />
					<h4 class="accent">Investment Benefits</h4>
				</div>
				<div class="plus-item">
					<img src="https://placehold.co/400x400/png" alt="Leasing Solution" />
					<h4 class="accent">Leasing Solution</h4>
				</div>
			</div>
			<div class="plus-cta">
				<a href="/brand" class="btn btn-primary">Know More</a>
			</div>
		</div>
	</div>
</section>

<style>
	.plus-headings {
		max-width: 1200px;
		margin-inline: auto;
		margin-bottom: 3rem;
	}
	.plus-logo {
		max-width: 500px;
		margin-inline: auto;
		margin-block: 0 2.4rem;
	}
	.plus-description {
		text-align: center;
		margin-bottom: 1.4rem;
	}
	.plus-list {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5rem;
	}
	.plus-item h4 {
		text-align: center;
		text-transform: uppercase;
		font-size: 1.3rem;
	}
	.plus-cta {
		margin-block: 2.4rem 0;
		text-align: center;
	}
</style>
