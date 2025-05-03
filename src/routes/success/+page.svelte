

<section class="success-section">
	<div class="container">
		<div class="success-wrapper">
			<h1>Success</h1>
			<p>Your form has successfully submitted.</p>
			<a href="/">Return to Homepage</a>
		</div>
	</div>
</section>

<style>
	.success-section {
		background-color: #27c64443;
	}
	.success-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		padding: 20px;
		text-align: center;
	}
	h1 {
		font-size: 48px;
	}
	p {
		margin-bottom: 10px;
	}
	a {
		color: #007bff;
		text-decoration: none;
	}
	@media (max-width: 768px) {
		h1 {
			font-size: 36px;
		}
		p {
			font-size: 18px;
		}
		a {
			font-size: 16px;
		}
		.success-wrapper {
			padding: 10px;
		}
	}
</style>
