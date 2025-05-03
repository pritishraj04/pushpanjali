<script>
	import Icon from "@iconify/svelte";

</script>
<svelte:head>
	<title>Success | Pushpanjali Construction - Building Excellence with Precision</title>
</svelte:head>

<section class="success-section">
	<div class="container">
		<div class="success-wrapper">
			<Icon
				icon="qlementine-icons:success-32"
				style="color: #4caf50; width: 100px; height: 100px;" />
			<h1>Thank You!</h1>
			<p>Your submission has been received successfully. We appreciate your interest and will get back to you shortly.</p>
			<a href="/projects" class="btn-primary">Explore Our Projects</a>
			<a href="/" class="btn-secondary">Return to Homepage</a>
		</div>
	</div>
</section>

<style>
	.success-section {
		background: linear-gradient(135deg, #e0f7fa, #e8f5e9);
		color: #333;
		font-family: 'Arial', sans-serif;
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
		margin-bottom: 10px;
		color: #2e7d32;
	}
	p {
		margin-bottom: 20px;
		font-size: 18px;
		color: #555;
	}
	.btn-primary, .btn-secondary {
		display: inline-block;
		padding: 12px 30px;
		margin: 10px;
		border-radius: 0;
		text-decoration: none;
		font-size: 18px;
		font-weight: bold;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
	}
	.btn-primary {
		background: linear-gradient(90deg, #4caf50, #388e3c);
		color: #fff;
		border: none;
	}
	.btn-primary:hover {
		background: linear-gradient(90deg, #388e3c, #2e7d32);
		transform: translateY(-2px);
		box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
	}
	.btn-secondary {
		background: linear-gradient(90deg, #e0f2f1, #b2dfdb);
		color: #333;
		border: 1px solid #ccc;
	}
	.btn-secondary:hover {
		background: linear-gradient(90deg, #b2dfdb, #80cbc4);
		transform: translateY(-2px);
		box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
	}
	@media (max-width: 768px) {
		h1 {
			font-size: 36px;
		}
		p {
			font-size: 16px;
		}
		.success-wrapper {
			padding: 10px;
		}
	}
</style>
