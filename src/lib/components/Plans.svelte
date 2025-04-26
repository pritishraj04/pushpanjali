<script>
	import { onMount } from 'svelte';
	let { project } = $props();
	const plans = project.plans;
	let selectedImage = $state(null);
	let showModal = $state(false);

	function openModal(image) {
		selectedImage = image;
		showModal = true;
	}

	function closeModal() {
		showModal = false;
		selectedImage = null;
	}
</script>

<section class="plans section-padding-bottom">
	<h4 class="section-heading sh-b2">Plans</h4>
	<div class="plans-grid">
		{#each plans as plan}
			<div class="plan">
				<h5 class="plan-name">{plan.name}</h5>
				<button onclick={() => openModal(plan.image)}>
					<img class="plan-image" src={plan.image} alt={plan.name} />
				</button>
			</div>
		{/each}
	</div>

	{#if showModal}
		<div class="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
			<div class="modal-content relative bg-white p-4 rounded-lg shadow-lg">
				<button class="close-button" onclick={closeModal}>&times;</button>
				<img src={selectedImage} alt="Selected Plan" class="w-full h-auto rounded" />
			</div>
		</div>
	{/if}
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
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		cursor: pointer;
	}

	.plan-image:hover {
		transform: scale(1.02);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
	}

	.plans {
		margin-top: 32px; /* Added space above the plans section */
	}

	.modal {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1000;
		opacity: 0;
		transform: scale(0.9);
		animation: fadeIn 0.3s ease forwards;
	}

	.modal-content {
		position: relative;
		background: white;
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		max-width: 90%;
		max-height: 90%;
		overflow: auto;
	}

	.modal-content img {
		max-width: 100%;
		border-radius: 8px;
	}

	.modal-content .close-button {
		position: fixed;
		top: 10px;
		right: 10px;
		background: rgba(0, 0, 0, 0.7);
		border: none;
		font-size: 2rem;
		color: white;
		cursor: pointer;
		z-index: 1001;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.modal-content .close-button:hover {
		background: rgba(0, 0, 0, 0.9);
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: scale(0.9);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}
</style>
