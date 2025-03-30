<script>
	import Icon from '@iconify/svelte';
</script>

<section class="section-padding colored-section">
	<div class="exclusive-wrapper">
		<div class="container">
			<div class="exclusive-top">
				<h2 class="section-heading accent sh-b1">Pushpanjali Exclusive Features</h2>
				<p class="exclusive-description section-description">
					We brign you the smart way of living, an adobe designed to match the modern lifestyle.
					Because we understands the true meaning of home and peace of living.
				</p>
			</div>
			<div class="exclusive-middle">
				<div class="features">
					<div class="feature">
						<span class="icon">
							<Icon icon="bi:buildings-fill" class="accent" width="80" />
						</span>

						<h3 class="accent content">Spacious Rooms</h3>
					</div>
					<div class="feature">
						<span class="icon">
							<Icon icon="fluent:design-ideas-28-filled" class="accent" width="80" />
						</span>

						<h3 class="accent content">Timelless Design</h3>
					</div>
					<div class="feature">
						<span class="icon">
							<Icon icon="ph:flag-banner-fold-fill" class="accent" width="80" />
						</span>

						<h3 class="accent content">Modern Facade</h3>
					</div>
					<div class="feature">
						<span class="icon">
							<Icon icon="icon-park-solid:tree-one" class="accent" width="80" />
						</span>

						<h3 class="accent content">Green Area</h3>
					</div>
					<div class="feature">
						<span class="icon">
							<Icon icon="ic:round-high-quality" class="accent" width="80" />
						</span>
						<h3 class="accent content">Benchmark Quality</h3>
					</div>
				</div>
				<div class="seperator accent"></div>
				<h2 class="tagline accent">Simply Pushpanjali</h2>
			</div>
			<div class="exclusive-bottom">
				<h2 class="section-heading accent sh-b1">Director's Message</h2>
				<p class="exclusive-description section-description">
					A home is not just an investment it's an emotion. A collection of wishes an individual
					dreams to have. We at Pushpanjali understands the real value of what HOME means
				</p>
				<div class="exclusive-cta">
					<a href="/about" class="btn btn-primary">About Us</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.exclusive-cta {
		margin-block: 2.4rem 0;
		text-align: center;
	}
	.exclusive-description {
		text-align: center;
		color: #f0f0f0;
		max-width: 740px;
		margin-inline: auto;
	}
	.features {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 3rem;
		margin-top: 3rem;
	}
	.content {
		font-size: 1.2rem;
		line-height: 1.5;
		font-weight: 600;
		text-transform: uppercase;
	}
	.tagline {
		font-size: 7rem;
		line-height: 1;
		font-weight: 400;
		margin-bottom: 2.4rem;
		text-align: center;
		margin-inline: auto;
		font-family: 'Imperial Script', sans-serif;
		letter-spacing: 0.02em;
	}
	@media screen and (max-width: 820px) {
		.features {
			flex-direction: column;
		}
		.tagline {
			font-size: 4.3rem;
		}
	}
</style>
