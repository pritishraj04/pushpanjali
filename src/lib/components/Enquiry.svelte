<script>
	import { projects } from '$lib/data/projects';
	import Icon from '@iconify/svelte';
	let { file, togglePopup, fileName } = $props();

	let name = $state('');
	let email = $state('');
	let mobile = $state('');
	let project = $state('');
	let errors = $state({});
	let showSuccessPopup = $state(false);
	let showFailurePopup = $state(false);

	function validateForm() {
		errors = {};
		if (!name.trim()) errors.name = 'Name is required.';
		if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
			errors.email = 'Valid email is required.';
		if (!mobile.trim() || !/^\d{10}$/.test(mobile))
			errors.mobile = 'Valid 10-digit mobile number is required.';
		if (!project.trim()) errors.project = 'Please select a project.';
		return Object.keys(errors).length === 0;
	}

	async function handleDownload(file, fileName) {
		try {
			// Logic to download a sample file
			const link = document.createElement('a');
			link.href = file; // Replace with the actual path to the sample file file
			link.download = `${fileName}.pdf`;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} catch (error) {
			console.error('Error downloading file:', error);
		}
	}

	async function handleSubmit(event) {
		if (!validateForm()) {
			event.preventDefault(); // Prevent submission if validation fails
			showFailurePopup = true;
			setTimeout(() => (showFailurePopup = false), 3000);
			return;
		}
        
		// Allow Netlify to process the form submission
		if (file) {
			console.log(file);
			// Trigger file download after form submission
			setTimeout(() => handleDownload(file, fileName), 1000);
		}
	}
</script>

<div class="backdrop">
	<div class="bg-[#f6f6f6] shadow-lg w-full max-w-lg p-8 space-y-6 mx-4 md:mx-auto">
		<div class="flex justify-between items-center">
			<h2 class="text-xl font-semibold">{file ? `Submit the form to download` : `Get in Touch`}</h2>
			<button class="text-gray-500 hover:text-gray-700 cursor-pointer" onclick={togglePopup}>
				<Icon icon="charm:cross" height="24" width="24" />
			</button>
		</div>
		<form
			name="lead-form"
			class="space-y-3"
			method="POST"
			netlify
			netlify-honeypot="bot-field"
			action="/success"
			onsubmit={handleSubmit}
			novalidate
		>
			<input type="hidden" name="form-name" value="lead-form" />
			<div>
				<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					bind:value={name}
					placeholder="Your Name"
					required
					class="mt-1 block w-full border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-3 py-2 bg-white"
				/>
				{#if errors.name}
					<p class="error-message">{errors.name}</p>
				{/if}
			</div>
			<div>
				<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					bind:value={email}
					placeholder="Your Email"
					required
					class="mt-1 block w-full border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-3 py-2 bg-white"
				/>
				{#if errors.email}
					<p class="error-message">{errors.email}</p>
				{/if}
			</div>
			<div>
				<label for="mobile" class="block text-sm font-medium text-gray-700">Mobile Number</label>
				<div class="mt-1 flex shadow-sm">
					<span
						class="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
					>
						+91
					</span>
					<input
						type="tel"
						id="mobile"
						name="mobile"
						bind:value={mobile}
						placeholder="Your Mobile Number"
						required
						class="flex-1 block w-full border border-l-0 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-3 py-2 bg-white"
					/>
				</div>
				{#if errors.mobile}
					<p class="error-message">{errors.mobile}</p>
				{/if}
			</div>
			<div>
				<label for="project" class="block text-sm font-medium text-gray-700">Select Project</label>
				<select
					id="project"
					name="project"
					bind:value={project}
					class="mt-1 block w-full border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-3 py-2 bg-white"
				>
					<option value="">Select a project</option>
					{#each projects as project}
						<option value={project.slug}>{project.name}</option>
					{/each}
				</select>
				{#if errors.project}
					<p class="error-message">{errors.project}</p>
				{/if}
			</div>
			<div class="flex justify-center mt-10">
				{#if file}
					<button type="submit" class="btn-premium">Download File</button>
				{:else}
					<button type="submit" class="btn-premium">Submit</button>
				{/if}
			</div>
		</form>
		{#if showSuccessPopup}
			<div class="popup success">Form submitted successfully!</div>
		{/if}
		{#if showFailurePopup}
			<div class="popup failure">Failed to submit the form. Please try again.</div>
		{/if}
		<p class="text-sm text-gray-500">
			By clicking on submit you authorize Rustomjee to get in touch with you over a call, SMS,
			E-mail or any other communication channel.<br /><br />After submitting your request, we will
			get in touch with you soon.
		</p>
	</div>
</div>

<style>
	.btn-premium {
		background: linear-gradient(90deg, #ffd700, #ffc107);
		color: #2c2c2c;
		border: none;
		padding: 0.5rem 3.5rem;
		font-weight: bold;
		cursor: pointer;
		transition:
			background 0.5s ease,
			transform 0.3s,
			box-shadow 0.3s;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.btn-premium:hover {
		background: linear-gradient(90deg, #ffd900e0, #ffc107e1);
	}

	.btn-premium:active {
		transform: scale(0.95);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.error-message {
		color: red;
		font-size: 0.875rem;
		margin-top: 0.25rem;
	}

	.backdrop {
		position: fixed;
		inset: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 100;
	}

	.popup {
		position: fixed;
		top: 20px;
		left: 50%;
		transform: translateX(-50%);
		padding: 1rem 2rem;
		border-radius: 5px;
		color: white;
		font-weight: bold;
		z-index: 200;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.popup.success {
		background-color: #4caf50;
	}

	.popup.failure {
		background-color: #f44336;
	}
</style>
