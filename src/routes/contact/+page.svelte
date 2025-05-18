<script>
	import headerImage from '$lib/assets/images/company/header.jpeg';
	import Icon from '@iconify/svelte';
	function handleSubmit() {
		// Add form submission logic here
		alert('Message sent successfully!');
	}
</script>

<svelte:head>
	<title>CONTACT | Pushpanjali Construction - Building Excellence with Precision</title>
</svelte:head>

<main>
	<div class="page-heading-wrapper contact-header" style={`background-image: url(${headerImage})`}>
		<div class="container">
			<h1 class="page-heading">Contact Us</h1>
			<p class="page-heading-paragraph">We'd love to hear from you. Reach out to us today!</p>
		</div>
	</div>

	<section class="section-padding why-contact">
		<div class="container">
			<h2 class="section-heading sh-b1">Why Contact Pushpanjali?</h2>
			<p class="section-description">
				We value every inquiry and are committed to providing prompt, professional, and personalized service. Whether you have questions about our projects, want to schedule a visit, or need support, our team is here to help you every step of the way.
			</p>
		</div>
	</section>

	<section class="section-padding">
		<div class="container">
			<div class="contact-grid">
				<div class="contact-info">
					<h2 class="section-heading sh-b1">Get in Touch</h2>
					<p class="section-description">
						Feel free to contact us through any of the following methods:
					</p>
					<ul>
						<li><strong>Phone:</strong> <a href="tel:+11234567890">+1 (123) 456-7890</a></li>
						<li><strong>Email:</strong> <a href="mailto:contact@pushpanjali.com">contact@pushpanjali.com</a></li>
						<li><strong>Address:</strong> 123 Business Street, City, State 12345</li>
					</ul>
					<div class="contact-social">
						<a href="/" aria-label="Facebook" class="social-icon"><Icon icon="gg:facebook" width="24" height="24"/></a>
						<a href="/" aria-label="Instagram" class="social-icon"><Icon icon="gg:instagram" width="24" height="24"/></a>
						<a href="/" aria-label="LinkedIn" class="social-icon"><Icon icon="uil:linkedin" width="24" height="24"/></a>
					</div>
				</div>
				<div class="contact-form">
					<h2 class="form-heading sh-b1">Send Us a Message</h2>
					<form on:submit|preventDefault={handleSubmit} autocomplete="on">
						<div class="form-group">
							<label for="name">Your Name</label>
							<input id="name" type="text" placeholder="Enter your name" required />
						</div>
						<div class="form-group">
							<label for="email">Your Email</label>
							<input id="email" type="email" placeholder="Enter your email" required />
						</div>
						<div class="form-group">
							<label for="subject">Subject</label>
							<input id="subject" type="text" placeholder="Subject" required />
						</div>
						<div class="form-group">
							<label for="message">Your Message</label>
							<textarea id="message" placeholder="Type your message here..." rows="6" required></textarea>
						</div>
						<button type="submit" class="btn btn-primary">Send Message</button>
					</form>
				</div>
			</div>
		</div>
	</section>

	<section class="section-padding map-section">
		<div class="container">
			<h2 class="section-heading sh-b1">Our Location</h2>
			<div class="map-embed">
				<iframe title="office-location" src="https://www.google.com/maps?q=123+Business+Street,+City,+State+12345&output=embed" width="100%" height="320" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</div>
	</section>
</main>

<style>

	.why-contact {
		margin-bottom: 2rem;
	}

	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2.5rem;
		align-items: flex-start;
	}
	.contact-info ul {
		list-style: none;
		padding: 0;
	}
	.contact-info ul li {
		margin-bottom: .5rem;
		font-size: 1rem;
		color: #555;
	}
	.contact-info a {
		color: #1a237e;
		text-decoration: none;
		transition: color 0.2s;
	}
	.contact-info a:hover {
		color: #3949ab;
		text-decoration: underline;
	}
	.contact-social {
		display: flex;
		gap: 1rem;
		margin-top: 1.5rem;
	}
	.social-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: .7rem;
		border-radius: 50%;
		background: #fafafa;
		transition: box-shadow 0.2s, background 0.2s;
		box-shadow: 0 2px 8px rgba(0,0,0,0.04);
	}
	.social-icon:hover {
		background: #e3e3e3;
		box-shadow: 0 4px 16px rgba(26,35,126,0.08);
	}

	.contact-form {
		background: #fffefa;
		box-shadow: 0 2px 16px rgba(0,0,0,0.04);
		padding: 2rem 2rem 1.5rem 2rem;
	}
	.form-heading {
		font-size: 1.5rem;
		margin-bottom: 1.5rem;
	}
	.contact-form .form-group {
		margin-bottom: 1.5rem;
		display: flex;
		flex-direction: column;
	}
	.contact-form label {
		font-size: 1rem;
		font-weight: 500;
		margin-bottom: 0.5rem;
	}
	.contact-form input,
	.contact-form textarea {
		width: 100%;
		padding: 0.9rem 1rem;
		border: 1px solid #e9e2c5;
		font-size: 1rem;
		background-color: #ffffff;
		transition: border-color 0.3s, background 0.3s;
		font-family: inherit;
	}
	.contact-form input:focus,
	.contact-form textarea:focus {
		border-color: #aba939;
		background-color: #fff;
		outline: none;
	}

	.map-section {
		background: #fff;
		box-shadow: 0 2px 16px rgba(0,0,0,0.04);
		margin-top: 2rem;
	}
	.map-embed {
		margin-top: 1rem;
		overflow: hidden;
	}

	@media screen and (max-width: 1024px) {
		.contact-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		.contact-form {
			padding: 1.5rem 1rem 1rem 1rem;
		}
	}
	@media screen and (max-width: 600px) {
		.page-heading {
			font-size: 2rem;
		}
		.section-heading {
			font-size: 1.3rem;
		}
		.contact-form {
			padding: 1rem 0.5rem 0.5rem 0.5rem;
		}
	}
</style>
