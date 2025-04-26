<script>
	let loanAmount = $state(15000000);
	let advancePaymentPercent = $state(20);
	let durationYears = $state(25);
	let interestRate = $state(7);

	// Derived values
	let advancePayment = $derived((loanAmount * advancePaymentPercent) / 100);
	let monthlyEMI = $derived(calculateEMI(loanAmount - advancePayment, durationYears, interestRate));

	function calculateEMI(principal, years, rate) {
		const monthlyRate = rate / (12 * 100);
		const n = years * 12;
		return Math.round(
			(principal * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1)
		);
	}

	function updateSliderLabelPosition(input, label) {
		const value = input.value;
		const min = input.min || 0;
		const max = input.max || 100;
		const percent = ((value - min) / (max - min)) * 100;
		label.style.left = `calc(${percent}% - 8px)`; // Adjust for label width
		input.style.setProperty('--value', `${percent}%`); // Update slider color
	}
</script>

<div class="calculator">
	<div class="section">
		<label for="loanAmount">Loan Amount</label>
		<input id="loanAmount" class="loan-input" type="number" bind:value={loanAmount} min="0" />
	</div>

	<div class="section">
		<label for="advancePaymentSlider">Advance Payment</label>
		<div class="value-display">
			<span>{advancePayment.toLocaleString()} ₹</span>
		</div>
		<div class="slider-container">
			<input
				id="advancePaymentSlider"
				type="range"
				bind:value={advancePaymentPercent}
				min="0"
				max="50"
				step="1"
				oninput={(e) => updateSliderLabelPosition(e.target, e.target.nextElementSibling)}
				style="--value: 40%;"
			/>
			<div class="slider-label">{advancePaymentPercent}%</div>
		</div>
	</div>

	<div class="section">
		<label for="durationSlider">Duration</label>
		<div class="value-display">
			<span>{durationYears} Years</span>
		</div>
		<div class="slider-container">
			<input
				id="durationSlider"
				type="range"
				bind:value={durationYears}
				min="1"
				max="30"
				step="1"
				oninput={(e) => updateSliderLabelPosition(e.target, e.target.nextElementSibling)}
				style="--value: 40%;"
			/>
			<div class="slider-label">{durationYears} Years</div>
		</div>
	</div>

	<div class="section">
		<label for="interestRateSlider">Interest Rate</label>
		<div class="value-display">
			<span>{interestRate}%</span>
		</div>
		<div class="slider-container">
			<input
				id="interestRateSlider"
				type="range"
				bind:value={interestRate}
				min="1"
				max="20"
				step="0.1"
				oninput={(e) => updateSliderLabelPosition(e.target, e.target.nextElementSibling)}
				style="--value: 40%;"
			/>
			<div class="slider-label">{interestRate}%</div>
		</div>
	</div>

	<div class="emi-display">
		<span>{monthlyEMI.toLocaleString()} ₹</span>
		<span class="emi-metrics">/ month</span>
	</div>
</div>

<style>
	.calculator {
		padding: 20px;
		border: 1px solid #f5f5f5; /* Subtle border for a cleaner look */
		border-bottom-right-radius: 10px;
		border-bottom-left-radius: 10px;
		background: linear-gradient(145deg, #f5f5f5, #ffffff);
		color: #333;
	}

	.section {
		margin-bottom: 20px;
	}

	.section label {
		display: block;
		font-size: 0.9em;
		color: #555;
		font-weight: 400;
	}

	.value-display {
		display: flex;
		justify-content: space-between;
		margin-bottom: 25px;
		font-size: 1em;
		font-weight: bold;
		color: #222;
	}

	.slider-container {
		margin-top: 8px;
		position: relative;
	}

	.slider-container input[type='range'] {
		width: 100%;
		appearance: none;
		height: 6px;
		background: linear-gradient(
			to right,
			#e0e0e0 0%,
			#e0e0e0 var(--value),
			#f7f7f7 var(--value),
			#f7f7f7 100%
		);
		border-radius: 3px;
		outline: none;
		position: relative;
	}

	.slider-container input[type='range']::-webkit-slider-thumb {
		appearance: none;
		width: 40px;
		height: 20px;
		background: #f0f0f0;
		border-radius: 10px;
		cursor: pointer;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		color: #555;
		font-size: 0.75em;
		font-weight: bold;
	}

	.slider-label {
		position: absolute;
		top: -25px;
		left: 50%;
		transform: translateX(-50%);
		background: #f0f0f0;
		color: #555;
		padding: 4px 8px;
		border-radius: 8px;
		font-size: 0.75em;
		font-weight: bold;
		white-space: nowrap;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
		transition:
			left 0.1s ease,
			transform 0.1s ease;
	}

	.slider-container input[type='range']:hover + .slider-label {
		transform: translateX(-50%) scale(1.05);
	}

	.emi-display {
		font-size: 1.5em;
		font-weight: bold;
		margin-top: 20px;
		text-align: center;
		color: #555;
	}

	.emi-metrics {
		font-size: 0.8em;
		color: #777;
		margin-left: 5px;
	}

	.loan-input {
		width: 100%;
		padding: 8px;
		font-size: 0.9em;
		border: 1px solid #ddd;
		border-radius: 6px;
		box-sizing: border-box;
		background: #f9f9f9;
	}

	@media (max-width: 820px) {
		.calculator {
			padding: 15px;
		}

		.section label {
			font-size: 0.8em;
		}

		.value-display {
			font-size: 0.9em;
		}

		.slider-label {
			font-size: 0.7em;
		}

		.emi-display {
			font-size: 1.2em;
		}
	}
</style>
