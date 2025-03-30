<script>
	import Icon from '@iconify/svelte';
	import { getPrice } from '$lib/utils/projectUtils.js';
	import { getStatus } from '$lib/utils/projectUtils.js';

	let { project, toggleOverlay, index } = $props();
</script>

<div class="project-card">
	<div class="project-image-container">
		<img class="project-card-image" src={project.images[0] ? project.images[0] : "https://placehold.co/1200x700/png"} alt={project.name} />
		<div class="project-overlay" class:active={toggleOverlay[index]}>
			<h5 class="project-overlay-heading">Connect with us to enquire about this property</h5>
			<div class="project-overlay-ctas">
				<button class="btn btn-skeleton overlay-cta">
					<Icon icon="ic:baseline-whatsapp" width="16" height="16" />
					<p class="project-cta-text">Enquire Now</p></button
				>
				<button class="btn btn-skeleton overlay-cta">
					<Icon icon="ic:baseline-whatsapp" width="16" height="16" />
					<p class="project-cta-text">Schedule a Visit</p></button
				>
				<button class="btn btn-skeleton overlay-cta">
					<Icon icon="ic:baseline-whatsapp" width="16" height="16" />
					<p class="project-cta-text">Call us</p></button
				>
				<button class="btn btn-skeleton overlay-cta">
					<Icon icon="ic:baseline-whatsapp" width="16" height="16" />
					<p class="project-cta-text">Whatsapp</p></button
				>
			</div>
		</div>
	</div>
	<div class="project-card-content">
		<div class="name">
			<button
				class="project-cta btn btn-skeleton"
				class:active={toggleOverlay[index]}
				onclick={() => (toggleOverlay[index] = !toggleOverlay[index])}
				><Icon icon="ei:plus" width="32" height="32" /></button
			>
			<h5 class="project-card-location">{project.location}, {project.city}</h5>
			<h3 class="project-card-title">{project.name}</h3>
		</div>
		<div class="project-status">
			<span class="status-icon">
				<Icon
					icon={getStatus(project).icon}
					width="16"
					height="16"
					color={getStatus(project).color}
				/>
			</span>
			<p class="status-text">
				{getStatus(project).name}
			</p>
		</div>
		<div class="price-possession">
			<span class="price-possession-amount">{getPrice(project)} |</span>
			<span class="price-possession-status">
				<span class="possession-title"> Possession Date</span>
				<span class="possession-time">{project.time_of_possession}</span>
			</span>
		</div>
		<div class="bhk">
			{#each project.prices as price, index}
				{price.name}
				{#if index < project.prices.length - 2}
					&#44;&nbsp;
				{:else if index === project.prices.length - 2}
					&amp;&nbsp;
				{/if}
			{/each}
		</div>
		<a href={`/projects/${project.slug}`} class="btn btn-skeleton veiw-project"
			>View Project <Icon icon="ant-design:double-right-outlined" width="14" height="14" /></a
		>
	</div>
</div>

<style>
	.project-card {
		text-decoration: none;
		color: inherit;
		border: transparent 1px solid;
	}
	.project-card:hover {
		border: #ebebeb 1px solid;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
		transition: border 0.2s ease-in-out;
	}
	.project-image-container {
		position: relative;
	}
	.project-card-image {
		width: 100%;
		height: 400px;
		object-fit: cover;
		border-radius: 4px;
	}
	.project-overlay {
		background-clip: padding-box;
		background-color: rgba(255, 255, 255, 0.84);
		border-bottom: 40px solid rgba(255, 255, 255, 0.84);
		border-right: 15px solid rgba(255, 255, 255, 0.84);
		border-top: 40px solid rgba(255, 255, 255, 0.84);
		bottom: 0;
		left: 0;
		opacity: 0;
		overflow: auto;
		padding-top: 0;
		padding: 1rem 0.5rem;
		position: absolute;
		right: 0;
		top: 100%;
		z-index: -99;
		transition: all 0.25s ease-in-out 0s;
	}
	.project-overlay.active {
		opacity: 1;
		top: 0;
		z-index: 99;
		transition: all 0.25s ease-in-out 0.25s;
	}
	.project-overlay-heading {
		font-size: 0.9rem;
		font-weight: 600;
		line-height: 1;
		margin-bottom: 12px;
	}
	.project-overlay-ctas {
		display: flex;
		gap: 12px;
		flex-direction: column;
		justify-content: start;
	}
	.overlay-cta {
		display: flex;
		gap: 8px;
		align-self: flex-start;
	}
	.project-cta-text {
		white-space: nowrap;
		font-size: 0.9rem;
		font-weight: 600;
		text-transform: capitalize;
	}

	.project-card-content {
		padding: 20px;
		background-color: rgba(255, 255, 255, 0.7);
		border-radius: 0 0 4px 4px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.project-card-location {
		font-size: 0.75rem;
		font-weight: 300;
		line-height: 1;
		color: #7e7e7e;
		margin-bottom: 4px;
	}

	.project-card-title {
		font-size: 1rem;
		font-weight: 500;
		color: #666;
		line-height: 1.2;
		margin-bottom: 4px;
	}
	.project-cta {
		float: right;
		width: fit-content;
		transition: transform ease-in-out 0.2s;
	}
	.project-cta.active {
		transform: rotate(45deg);
	}
	.project-status {
		display: flex;
		align-self: flex-start;
		align-items: center;
		gap: 8px;
		margin-bottom: 4px;
		border: #e4e4e4 1px solid;
		border-radius: 4px;
		padding: 2px 4px;
	}
	.status-text {
		font-size: 14px;
		color: #222222;
		font-weight: 500;
	}

	.price-possession {
		margin-bottom: 4px;
	}
	.price-possession-amount {
		font-size: 0.75rem;
		font-weight: 500;
		line-height: 1;
	}
	.price-possession-status {
		font-size: 0.75rem;
	}
	.bhk {
		font-size: 14px;
		font-weight: 300;
		line-height: 1;
		margin-bottom: 8px;
		color: #7e7e7e;
		font-weight: 400;
		margin-bottom: 14px;
	}
	.veiw-project {
		font-size: 14px;
		font-weight: 800;
		text-decoration: none;
		color: #666;
		display: flex;
		gap: 4px;
		align-self: flex-end;
		justify-content: end;
		align-items: center;
		white-space: nowrap;
	}
	@media (max-width: 730px) {
		.project-card-location,
		.project-card-title {
			font-size: 0.9rem;
		}
		.price-possession-amount,
		.price-possession-status {
			font-size: 0.8rem;
		}
	}
</style>
