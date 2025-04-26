<script>
	import Icon from '@iconify/svelte';
</script>

<section class="section-padding exclusive-section">
	<div class="exclusive-wrapper">
		<div class="container">
			<div class="exclusive-top">
				<h2 class="section-heading accent sh-b1">Pushpanjali Exclusive Features</h2>
				<p class="exclusive-description section-description">
					Discover a lifestyle that blends luxury, comfort, and innovation. Pushpanjali offers you a
					home that stands apart with unmatched features and timeless elegance.
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
						<h3 class="accent content">Timeless Design</h3>
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
					"A home is not just an investment; it's an emotion. At Pushpanjali, we redefine the
					meaning of home by delivering unparalleled living experiences."
				</p>
				<div class="exclusive-cta">
					<a href="/about" class="btn btn-primary">Learn More About Us</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.exclusive-section {
		background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
		color: #ffffff;
		padding: 4rem 1rem;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
	}
	.exclusive-description {
		text-align: center;
		color: #e0e0e0;
		max-width: 740px;
		margin-inline: auto;
		font-size: 1.1rem;
		line-height: 1.8;
		margin-bottom: 2rem;
	}
	.features {
		display: flex;
		justify-content: space-around;
		align-items: center;
		gap: 2rem;
		margin-top: 3rem;
		flex-wrap: wrap;
	}
	.feature {
		text-align: center;
		padding: 1.5rem;
	}
	.icon {
		display: inline-block;
		margin-bottom: 1rem;
	}
	.content {
		font-size: 1.5rem;
		line-height: 1.5;
		font-weight: 700;
		text-transform: uppercase;
		color: #ffd700;
	}
	.tagline {
		font-size: 6rem;
		line-height: 1;
		font-weight: 400;
		margin-bottom: 2.4rem;
		text-align: center;
		margin-inline: auto;
		font-family: 'Imperial Script', sans-serif;
		letter-spacing: 0.02em;
		color: #ffd700;
		text-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
	}
	.exclusive-cta {
		margin-block: 2.4rem 0;
		text-align: center;
	}
	.btn-primary {
		background-color: #ffd700;
		color: #1e1e2f;
		padding: 0.8rem 2rem;
		border-radius: 4px;
		text-decoration: none;
		font-weight: 600;
		transition:
			background-color 0.3s ease,
			transform 0.3s ease;
	}
	.btn-primary:hover {
		background-color: #e6c200;
		transform: translateY(-5px);
	}
	@media screen and (max-width: 820px) {
		.features {
			flex-direction: column;
			gap: 1.5rem;
		}
		.tagline {
			font-size: 4rem;
		}
		.content {
			font-size: 1.3rem;
		}
	}
</style>
