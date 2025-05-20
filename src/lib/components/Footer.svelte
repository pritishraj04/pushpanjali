<script>
	import logoWhite from '$lib/assets/images/logo.png';
</script>

<section class="cta-section">
	<div class="cta-container">
		<h2 class="section-heading sh-b1">Ready to find your dream home?</h2>
		<p class="section-description">Contact us today and let us help you make your dream a reality.</p>
		<a href="/contact" class="btn btn-primary cta-button">Get in Touch</a>
	</div>
</section>

<footer>
	<div class="footer-wrapper">
		<div class="container">
			<div class="footer-top">
				<div class="logo">
					<a href="/">
						<img class="company-logo" src={logoWhite} alt="Company Logo" />
					</a>
					<p class="footer-description">
						At Pushpanjali, we understand that a home is more than just an investment—it's a
						collection of dreams and emotions. Let us help you find the perfect place to call home.
					</p>
				</div>
				<div class="footer-links">
					<div class="footer-column">
						<h4 class="footer-header">Company</h4>
						<ul>
							<li><a href="/about">About Us</a></li>
							<li><a href="/team">Our Team</a></li>
							<li><a href="/careers">Careers</a></li>
							<li><a href="/contact">Contact</a></li>
						</ul>
					</div>
					<div class="footer-column">
						<h4 class="footer-header">Projects</h4>
						<ul>
							<li><a href="/projects/residential">Residential</a></li>
							<li><a href="/projects/commercial">Commercial</a></li>
							<li><a href="/projects/upcoming">Upcoming</a></li>
						</ul>
					</div>
					<div class="footer-column">
						<h4 class="footer-header">Resources</h4>
						<ul>
							<li><a href="/blog">Blog</a></li>
							<li><a href="/faq">FAQs</a></li>
							<li><a href="/terms">Terms & Conditions</a></li>
							<li><a href="/privacy">Privacy Policy</a></li>
						</ul>
					</div>
					<div class="footer-column">
						<h4 class="footer-header">Contact</h4>
						<ul>
							<li>Email: <a href="mailto:info@pushpanjali.com">info@pushpanjali.com</a></li>
							<li>Phone: <a href="tel:+1234567890">+1 234 567 890</a></li>
							<li>Address: 123 Dream Street, City, Country</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="footer-bottom">
				<div class="social-media">
					<a href="https://facebook.com" target="_blank" aria-label="Facebook">Facebook</a>
					<a href="https://twitter.com" target="_blank" aria-label="Twitter">Twitter</a>
					<a href="https://instagram.com" target="_blank" aria-label="Instagram">Instagram</a>
					<a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">LinkedIn</a>
				</div>
				<p class="copyright">
					© {new Date().getFullYear()} Pushpanjali Groups. Designed by
					<a href="https://polardot.in" target="_blank">Polardot.in</a>.
				</p>
			</div>
		</div>
	</div>
</footer>

<style>
	.cta-section {
		background-color: #f4f4f4;
		padding: 3rem 1rem;
		text-align: center;
	}
	.cta-container {
		max-width: 800px;
		margin: 0 auto;
	}
	.section-description {
		margin-bottom: 3rem;
	}
	.cta-button {
		padding: 0.8rem 2rem;
	}
	.footer-wrapper {
		background: linear-gradient(180deg, #1a1a1a, #0d0d0d);
		color: #f8f8f8;
		padding-block: 4rem;
	}
	.footer-top {
		display: flex;
		flex-wrap: wrap;
		gap: 4rem;
		justify-content: space-between;
		margin-bottom: 2rem;
	}
	.logo {
		flex: 1 1 150px;
	}
	.company-logo {
		max-width: 180px;
		margin-bottom: 1rem;
	}
	.footer-description {
		font-size: 0.9rem;
		color: #b3b3b3;
		line-height: 1.6;
	}
	.footer-links {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		flex: 2 1 300px;
	}
	.footer-column {
		flex: 1 1 150px;
	}
	.footer-header {
		font-size: 1rem;
		margin-bottom: 1rem;
		color: #f8f8f8;
		font-weight: 600;
	}
	.footer-column ul {
		list-style: none;
		padding: 0;
	}
	.footer-column ul li {
		margin-bottom: 0.5rem;
	}
	.footer-column ul li a {
		color: #b3b3b3;
		text-decoration: none;
		font-size: 0.9rem;
	}
	.footer-column ul li a:hover {
		color: #f8f8f8;
	}
	.footer-bottom {
		text-align: center;
		margin-top: 2rem;
	}
	.social-media a {
		color: #b3b3b3;
		margin: 0 0.5rem;
		text-decoration: none;
		font-size: 0.9rem;
	}
	.social-media a:hover {
		color: #f8f8f8;
	}
	.copyright {
		margin-top: 1rem;
		font-size: 0.8rem;
		color: #b3b3b3;
	}
	@media screen and (max-width: 820px) {
		.logo {
			flex: 1 1 100%;
			margin-bottom: 1.5rem;
			margin-right: 0;
		}

		.footer-top {
			flex-direction: column;
			gap: 1.5rem; /* Reduced gap between sections on mobile */
		}
		.footer-links {
			flex-direction: column;
			gap: 1rem; /* Reduced gap between links on mobile */
			flex: unset;
		}
	}
</style>
