<script>
	import Icon from '@iconify/svelte';
	import Enquiry from './Enquiry.svelte';

	let isUctaActive = $state(false);
	let isPopupVisible = $state(false);

	let {
		project,
	} = $props();

	const togglePopup = () => {
		isPopupVisible = !isPopupVisible;
	};
</script>

<div class="ucta-wrapper">
	<button
		class="ucta-button"
		class:active={isUctaActive}
		onclick={() => (isUctaActive = !isUctaActive)}
		><Icon icon="qlementine-icons:plus-16" width="24" height="24" color="#749694" /></button
	>
	<ul class="ucta-menu" class:active={isUctaActive} data-role="list">
		<li class="ucta-menu-item"><a href="/" class="ucta-link">Share</a></li>
		{#if project}
			<li class="ucta-menu-item"><a href="/" class="ucta-link">Downloads</a></li>
		{:else}
			<li class="ucta-menu-item"><a href="/projects/ratna-tower#downloads" class="ucta-link">Ratna Tower Downloadables</a></li>
		{/if}
		<li class="ucta-menu-item"><button class="ucta-link" onclick={togglePopup}>Get in Touch</button></li>
	</ul>
</div>

{#if isPopupVisible}
	<Enquiry {togglePopup} />
{/if}

<style>
	.ucta-wrapper {
		position: absolute;
		right: 4rem;
		bottom: 6rem;
		z-index: 10;
	}

	.ucta-button {
		/* gradient background top white and bottom light grey */
		background: linear-gradient(to bottom, #fff, #afc6cd);
		box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
		border: none;
		color: white;
		padding: 10px;
		text-align: center;
		text-decoration: none;
		cursor: pointer;
		border-radius: 100%;
		position: relative;
		transition:
			transform 0.3s ease,
			background 0.3s ease;
	}
	.ucta-button::before {
		content: '';
		position: absolute;
		inset: -8px;
		background: linear-gradient(to right, rgb(234, 201, 17), orange, yellow); /* Rainbow gradient */
		border-radius: 50%; /* Makes it a circle */
		z-index: -1; /* Places the ring behind the button */

		/* Creates a hollow ring effect */
		mask: radial-gradient(circle, transparent calc(100% - 14px), black calc(100% - 15px));
		-webkit-mask: radial-gradient(circle, transparent calc(100% - 14px), black calc(100% - 15px));
	}
	/* Button styles when active */
	.ucta-button.active {
		background: linear-gradient(to bottom, #f0f0f0, #c8c8c8);
		color: #000;
		transform: rotate(405deg);
	}
	/* Menu styles with traslusent background and opens when active */
	.ucta-menu {
		background: rgba(0, 0, 0, 0.322);
		backdrop-filter: saturate(180%) blur(20px);
		-webkit-backdrop-filter: saturate(180%) blur(20px);
		position: absolute;
		bottom: 4rem;
		right: 0;
		width: 100%;
		z-index: 10;
		display: none;
		transition: max-height 0.3s ease-in-out;
		overflow: hidden;
		box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
		border-radius: 4px;
		padding: 0;
		max-height: 0;
	}
	.ucta-menu.active {
		max-height: 200px; /* Adjust for the number of items */
		width: auto;
		display: block;
		padding: 0.3rem 1rem;
		box-sizing: border-box; /* Corrects padding issue with border-radius */
		border-radius: 4px;
		box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
	}
	.ucta-menu-item {
		padding: 10px 0;
		cursor: pointer;
	}
	.ucta-link {
		display: block;
		width: 100%;
		cursor: pointer;
		color: #f0f0f0;
		text-transform: uppercase;
		font-weight: 400;
		font-size: .9rem;
		padding: 0.3rem 1.5rem;
		text-align: center;
		letter-spacing: 2px;
		white-space: nowrap;
		text-decoration: none;
		transition: background 0.3s ease;
	}
	.ucta-link:hover {
		background: #00000056;
	}
	.ucta-menu-item:not(:last-child) {
		border-bottom: 1px solid #f0f0f0;
	}
	@media (max-width: 768px) {
		/* make elemets small for mobile devices */
		.ucta-wrapper {
			bottom: 8rem;
			right: 2rem;
		}
		.ucta-link {
			padding: 0.25rem;
		}
		.ucta-menu-item:not(:last-child) {
			border-bottom: 1px solid #f0f0f0;
		}
		.ucta-button {
			padding: 12px;
		}
		.ucta-button::before {
			mask: radial-gradient(circle, transparent calc(100% - 17px), black calc(100% - 17px));
			-webkit-mask: radial-gradient(circle, transparent calc(100% - 17px), black calc(100% - 17px));
		}
		.ucta-menu {
			bottom: 5rem;
		}
		.ucta-link {
			font-size: 1rem;
		}
	}
</style>
