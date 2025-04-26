<script>
	function handleSubmit() {
		// Add form submission logic here
		alert('Message sent successfully!');
	}
</script>

<svelte:head>
	<title>CONTACT | Pushpanjali Construction - Building Excellence with Precision</title>
</svelte:head>

<main>
	<div class="page-heading-wrapper contact-header">
		<div class="container">
			<h1 class="page-heading">Contact Us</h1>
			<p class="page-heading-paragraph">We'd love to hear from you. Reach out to us today!</p>
		</div>
	</div>

	<section class="section-padding">
		<div class="container">
			<div class="contact-grid">
				<div class="contact-info">
					<h2 class="section-heading sh-b1">Get in Touch</h2>
					<p class="section-description">
						Feel free to contact us through any of the following methods:
					</p>
					<ul>
						<li><strong>Phone:</strong> +1 (123) 456-7890</li>
						<li><strong>Email:</strong> contact@pushpanjali.com</li>
						<li><strong>Address:</strong> 123 Business Street, City, State 12345</li>
					</ul>
				</div>
				<div class="contact-form">
					<h2 class="section-heading sh-b1">Send Us a Message</h2>
					<form on:submit|preventDefault={handleSubmit}>
						<div class="form-group">
							<input type="text" placeholder="Your Name" required />
						</div>
						<div class="form-group">
							<input type="email" placeholder="Your Email" required />
						</div>
						<div class="form-group">
							<input type="text" placeholder="Subject" required />
						</div>
						<div class="form-group">
							<textarea placeholder="Your Message" rows="6" required></textarea>
						</div>
						<button type="submit" class="btn btn-primary">Send Message</button>
					</form>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	.contact-header {
		background-image: url('https://placehold.co/1900x300/png');
	}

	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	.contact-info ul {
		list-style: none;
		padding: 0;
	}

	.contact-info ul li {
		margin-bottom: 1rem;
		font-size: 1.2rem;
		color: #666;
	}

	.contact-form .form-group {
		margin-bottom: 1.5rem;
	}

	.contact-form input,
	.contact-form textarea {
		width: 100%;
		padding: 0.8rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 1rem;
		background-color: #f9f9f9;
		transition: border-color 0.3s ease;
	}

	.contact-form input:focus,
	.contact-form textarea:focus {
		border-color: #888;
		outline: none;
		background-color: #fff;
	}

	.contact-form button {
		margin-top: 1rem;
	}

	@media screen and (max-width: 820px) {
		.contact-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
