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
	}
	.price-aside {
		border: 1px solid #ddd;
		border-radius: 8px;
		overflow: hidden;
		width: 100%;
		align-self: start;
	}

	.price-aside-heading {
		background-color: #ddbc19; /* Gold-like color */
		color: #fff;
		font-size: 1.2em;
		font-weight: bold;
		padding: 15px;
		text-transform: uppercase;
		margin: 0;
		text-align: left;
	}

	.price {
		display: flex;
		justify-content: space-between;
		padding: 10px 15px;
		border-bottom: 1px solid #ddd;
	}

	.price:last-child {
		border-bottom: none;
	}

	.price-name {
		font-size: 1em;
		color: #333;
		font-weight: bold;
		margin: 0;
	}

	.price-value {
		font-size: 1em;
		color: #666;
		font-weight: normal;
		margin: 0;
	}

	.price-note {
		text-align: center;
		font-size: 0.9em;
		font-style: italic;
		color: #888;
		padding: 10px 15px;
		background-color: #f9f9f9;
	}
	.emi-aside {
		width: 100%;
	}

	@media (max-width: 991px) {
		.price-emi {
			flex-direction: column;
		}
		.price-aside {
			width: 100%;
		}
		.emi-aside {
			width: 100%;
			background-image: none;
		}
	}
</style>
