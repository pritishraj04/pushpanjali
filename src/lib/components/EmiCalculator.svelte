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
</script>

<div class="calculator">
	<h2>EMI CALCULATOR</h2>

	<div class="section">
		<label for="loanAmount">LOAN AMOUNT</label>
		<input id="loanAmount" class="loan-input" type="number" bind:value={loanAmount} min="0" />
		<hr />
	</div>

	<div class="section">
		<!-- svelte-ignore a11y_label_has_associated_control -->
		<label>ADVANCE PAYMENT</label>
		<div class="value-display">
			<span>{advancePayment.toLocaleString()} ₹</span>
		</div>
		<div class="slider-container">
			<input type="range" bind:value={advancePaymentPercent} min="0" max="50" step="1" />
			<div class="slider-label">{advancePaymentPercent}%</div>
		</div>
	</div>

	<div class="section">
		<!-- svelte-ignore a11y_label_has_associated_control -->
		<label>DURATION</label>
		<div class="value-display">
			<span>{durationYears} Years</span>
		</div>
		<div class="slider-container">
			<input type="range" bind:value={durationYears} min="1" max="30" step="1" />
			<div class="slider-label">{durationYears} Years</div>
		</div>
	</div>

	<div class="section">
		<!-- svelte-ignore a11y_label_has_associated_control -->
		<label>INTEREST RATE</label>
		<div class="value-display">
			<span>{interestRate}%</span>
		</div>
		<div class="slider-container">
			<input type="range" bind:value={interestRate} min="1" max="20" step="0.1" />
			<div class="slider-label">{interestRate}%</div>
		</div>
	</div>

	<div class="emi-display">
		{monthlyEMI.toLocaleString()} <span class="emi-metrics"> ₹/month </span>
	</div>
</div>

<style>
	.calculator {
		padding: 20px;
		border: 1px solid #ddd;
		border-radius: 4px;
		background: #fff;
	}

	.calculator h2 {
		font-size: 1.5em;
		margin-bottom: 10px;
	}

	.section {
		margin-bottom: 20px;
	}

	.section label {
		display: block;
		font-size: 0.9em;
		margin-bottom: 5px;
		color: #333;
	}

	.value-display {
		display: flex;
		justify-content: space-between;
		font-size: 1.2em;
		font-weight: bold;
	}

	.slider-container {
		margin-top: 10px;
		position: relative;
	}

	.slider-container input[type='range'] {
		width: 100%;
		appearance: none;
		height: 6px;
		background: #ddd;
		border-radius: 5px;
		outline: none;
	}

	.slider-container input[type='range']::-webkit-slider-thumb {
		appearance: none;
		width: 20px;
		height: 20px;
		background: #333;
		border-radius: 50%;
		cursor: pointer;
	}

	.slider-label {
		position: absolute;
		top: -30px;
		left: 50%;
		transform: translateX(-50%);
		background: #fff;
		padding: 5px 10px;
		border-radius: 12px;
		border: 1px solid #ddd;
		font-size: 0.8em;
		font-weight: bold;
		white-space: nowrap;
	}

	.emi-display {
		font-size: 1.5em;
		font-weight: bold;
		margin-top: 30px;
	}
	.emi-metrics {
		font-size: 0.8em;
		color: #888;
		margin-left: 5px;
	}

	.loan-input {
		width: 100%;
		padding: 8px;
		font-size: 1em;
		border: none;
		border-radius: 4px;
		box-sizing: border-box;
	}
</style>
