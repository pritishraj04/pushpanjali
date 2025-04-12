<script>
	let { project } = $props();
</script>

<section class="project-overview section-padding">
	<h4 class="section-heading sh-b1">Overview</h4>
	<p class="project-description">{project.description}</p>
	<div class="project-walkthrough" style={`background-image: url(${project.walkthrough.image})`}>
		<button class="btn btn-secondary walkthrough-btn">Walkthrough</button>
	</div>
</section>

<style>
	.project-description {
		max-width: 800px;
		margin-inline: auto;
		text-align: center;
		margin-bottom: 30px;
		font-size: 1.1rem;
		line-height: 1.6;
		color: #555;
		letter-spacing: 0.5px;
	}
	.project-walkthrough {
		width: 100%;
		height: 450px;
		background-position: center;
		background-size: cover;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.walkthrough-btn {
		margin-bottom: 20px;
		font-size: 1rem;
		padding: 12px 24px;
		border: none;
		background-color: #111;
		color: #fff;
		text-decoration: none;
		cursor: pointer;
		border-radius: 5px;
		transition: background-color 0.3s ease, transform 0.3s ease;
	}
	.walkthrough-btn:hover {
		background-color: rgb(114, 114, 114);
		transform: scale(1.05);
	}
	@media (max-width: 768px) {
		.project-description {
			font-size: 1rem;
			margin-bottom: 20px;
		}
		.project-walkthrough {
			height: 300px;
		}
	}
</style>
