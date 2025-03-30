<script>
	let { project } = $props();
	const plans = project.plans;
</script>

<section class="plans section-padding-bottom">
	<h4 class="section-heading sh-b2">Plans</h4>
	{#each plans as plan}
		<div class="plan">
			<h5 class="plan-name">{plan.name}</h5>
			<img class="plan-image" src={plan.image} alt={plan.name} />
		</div>
	{/each}
</section>

<style>
	.plan-name {
		font-size: 1.5em;
		font-weight: 600;
		margin-bottom: 12px;
		position: relative;
		display: inline-block;
	}
	.plan-name::after {
		content: '';
		display: block;
		position: absolute;
		width: 100%;
		height: 2px;
		background-image: linear-gradient(
			to right,
			rgb(255, 255, 255),
			rgba(0, 0, 0, 0.5),
			rgb(255, 255, 255)
		);
	}
	.plan-image {
		width: 100%;
		height: 800px;
		object-fit: cover;
		border-radius: 8px;
		margin-bottom: 16px;
	}
</style>
