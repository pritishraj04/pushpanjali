<script>
	let { project } = $props();
	const plans = project.plans;
</script>

<section class="plans section-padding-bottom">
	<h4 class="section-heading sh-b2">Plans</h4>
	<div class="plans-grid">
		{#each plans as plan}
			<div class="plan">
				<h5 class="plan-name">{plan.name}</h5>
				<img
					class="plan-image"
					src={plan.image}
					alt={plan.name}
				/>
			</div>
		{/each}
	</div>
</section>

<style>
	.plans-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 24px;
	}

	.plan-name {
		font-size: 1.25em;
		font-weight: 700;
		margin-bottom: 20px;
		position: relative;
		display: inline-block;
		color: #4a4a8e; /* Subtle purple */
		font-family: 'Poppins', sans-serif;
		letter-spacing: 0.5px;
	}

	.plan-name::after {
		content: '';
		display: block;
		position: absolute;
		width: 50%;
		height: 2px;
		background-color: #d4af37; /* Accent gold */
		margin-top: 4px;
	}

	.plan-image {
		width: 100%;
		height: 400px;
		object-fit: cover;
		border-radius: 12px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		margin-bottom: 16px; /* Adjusted for better spacing */
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		cursor: pointer;
	}

	.plan-image:hover {
		transform: scale(1.02);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
	}

	.plans {
		margin-top: 32px; /* Added space above the plans section */
	}
</style>
