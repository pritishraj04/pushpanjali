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
		max-width: 1200px;
		margin-inline: auto;
		text-align: center;
		margin-bottom: 20px;
		font-size: 1.2rem;
		line-height: 1.2;
		color: #797979;
	}
	.project-walkthrough {
		width: 100%;
		height: 500px;
		background-position: center;
		background-size: cover;
		display: flex;
		justify-content: center;
		align-items: end;
	}
	.walkthrough-btn {
		margin-bottom: 20px;
		font-size: 1.2rem;
		padding: 10px 20px;
		border: none;
		background-color: #111;
		color: #fff;
		text-decoration: none;
		cursor: pointer;
		border-radius: 5px;
		transition: background-color 0.3s ease;
	}
	.walkthrough-btn:hover {
		background-color: rgb(114, 114, 114);
	}
	@media (max-width: 768px) {
		.project-description {
			font-size: 1rem;
		}
	}
</style>
