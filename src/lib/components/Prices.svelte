<script>
	let { project } = $props();
	const prices = project.prices;

	import { formatPrice } from '$lib/utils/projectUtils.js';
	import EmiCalculator from './EmiCalculator.svelte';

	const getPrice = (price) => {
		if (!price.minimum_price) return 'Price available on request';

		return `INR ${formatPrice(price.minimum_price)} onwards`;
	};
</script>

<section class="prices section-padding-bottom">
	<h4 class="section-heading sh-b2">Prices</h4>
	<div class="price-emi">
		<div class="price-aside">
			<h5 class="price-aside-heading">Price</h5>
			{#each prices as price}
				<div class="price">
					<h5 class="price-name">{price.name}</h5>
					<p class="price-value">{getPrice(price)}</p>
				</div>
			{/each}
			<div class="price-note">
				*Please note that the listed prices are indicative and subject to change.
			</div>
		</div>
		<div class="emi-aside">
			<h5 class="price-aside-heading">EMI</h5>
			<EmiCalculator />
		</div>
	</div>
</section>

<style>
	.price-emi {
		display: flex;
		margin-bottom: 30px;
		gap: 20px;
		align-items: flex-start; /* Align items to the top for better layout */
	}
	.price-aside {
		border: 1px solid #f5f5f5; /* Subtle border for a cleaner look */
		overflow: hidden;
		width: 48%; /* Adjust width to reduce white space */
		background-color: #ffffff; /* Pure white for a clean look */
	}

	.price-aside-heading {
		background-color: #c8a415; /* Richer gold-like color */
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		color: #fff;
		font-size: 1.4em; /* Reduced font size for better balance */
		font-weight: 600; /* Slightly lighter for a cleaner look */
		padding: 15px;
		text-transform: uppercase;
		margin: 0;
		text-align: left;
	}

	.price {
		display: flex;
		justify-content: space-between;
		padding: 12px 18px;
		border-bottom: 1px solid #ddd; /* Slightly darker divider */
	}

	.price:last-child {
		border-bottom: none;
	}

	.price-name {
		font-size: 1.1em; /* Reduced font size for better readability */
		color: #222; /* Darker color for stronger contrast */
		font-weight: 500; /* Slightly lighter for a cleaner look */
		margin: 0;
	}

	.price-value {
		font-size: 1em; /* Reduced font size for better balance */
		color: #555; /* Subtle color for balance */
		font-weight: 400; /* Slightly lighter for a cleaner look */
		margin: 0;
	}

	.price-note {
		text-align: center;
		font-size: 0.9em; /* Reduced font size for better readability */
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
		font-style: italic;
		color: #666; /* Slightly darker for better visibility */
		padding: 12px 18px;
		background: linear-gradient(145deg, #f5f5f5, #ffffff);
	}

	.emi-aside {
		width: 48%; /* Adjust width to reduce white space */
	}

	@media (max-width: 991px) {
		.price-emi {
			flex-direction: column; /* Stack items vertically on smaller screens */
		}
		.price-aside,
		.emi-aside {
			width: 100%; /* Full width for smaller screens */
		}
	}
</style>
