<script lang="ts">
	import { page } from '$app/state';
</script>

<section class="error-section">
	<div class="container">
		<div class="error-wrapper">
			<h1>{page.status}</h1>
			<p>{page.error.message}</p>
			<p>An error occurred while loading the page. Please try again later.</p>
			<a href="/">Return to Homepage</a>
		</div>
	</div>
</section>

<style>
	.error-section {
		background-color: #f8f9fa;
	}
	.error-wrapper {
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
		.error-wrapper {
			padding: 10px;
		}
	}
</style>
