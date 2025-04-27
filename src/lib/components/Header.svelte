<script>
	import HamburgerBtn from './HamburgerBtn.svelte';
	import logo from '$lib/assets/images/logop.svg';
	import logoWhite from '$lib/assets/images/logow.svg';
	import Enquiry from './Enquiry.svelte';

	let isMenuVisible = $state(false);
	let y = $state(0);
	let isPopupVisible = $state(false);

	const toggleMenu = () => {
		isMenuVisible = !isMenuVisible;
	};

	const closeMenu = () => {
		isMenuVisible = false;
	};

	const togglePopup = () => {
		isPopupVisible = !isPopupVisible;
	};
</script>

<svelte:window bind:scrollY={y} />

<header class="header" class:header-solid-bg={isMenuVisible || y > 100}>
	<div class="container">
		<div class="header-wrapper">
			<div class="logo">
				<a href="/">
					<img
						class="company-logo"
						src={isMenuVisible || y > 100 ? logoWhite : logoWhite}
						alt="Company Logo"
					/>
				</a>
			</div>
			<div class="nav-plus-cta">
				<HamburgerBtn {isMenuVisible} {toggleMenu} />
				<nav class="header-navigation" class:is-visible={isMenuVisible}>
					<ul class="header-navs" data-role="list">
						<li class="header-nav">
							<a class="link-inverted nav-link" onclick={closeMenu} href="/brand">Brand Story</a>
						</li>
						<li class="header-nav">
							<a class="link-inverted nav-link" onclick={closeMenu} href="/company">Company</a>
						</li>
						<li class="header-nav">
							<a class="link-inverted nav-link" onclick={closeMenu} href="/projects">Projects</a>
						</li>
						<li class="header-nav">
							<a class="link-inverted nav-link" onclick={closeMenu} href="/contact">Contact</a>
						</li>
					</ul>
				</nav>
				<button class="cta-btn" onclick={togglePopup}>Get in Touch</button>
			</div>
		</div>
	</div>
</header>

{#if isPopupVisible}
	<Enquiry {togglePopup}   />
{/if}

<style>
	.header {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 100;
		background-image: linear-gradient(180deg, rgba(22, 22, 23, 0.5) 0%, rgba(22, 22, 23, 0) 100%);
	}
	.header-solid-bg {
		background-color: rgba(22, 22, 23, 0.8);
		backdrop-filter: saturate(180%) blur(20px);
		-webkit-backdrop-filter: saturate(180%) blur(20px);
		transition: background-color 0.3s ease-in-out;
	}
	.company-logo {
		width: 10rem;
	}

	.header-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 1.7rem;
		padding-bottom: 1.7rem;
	}
	.header-navs {
		display: flex;
		gap: 1.7rem;
	}
	.nav-link {
		text-transform: uppercase;
		font-size: 1.125rem;
	}
	.nav-plus-cta {
		display: flex;
		gap: 1.5rem;
		align-items: center;
	}

	.cta-btn {
		background-color: #ddbc19;
		color: white;
		padding: 0.5rem 1rem;
		border: none;
		cursor: pointer;
		font-size: 0.875rem;
		transition: all 0.3s ease;
cursor: pointer;
	}

	.cta-btn:hover {
		background-color: #caa817;
	}

	@media screen and (max-width: 820px) {
		.nav-link {
			font-size: 1rem;
		}
		.header-wrapper {
			padding-top: 1rem;
			padding-bottom: 1rem;
		}

		.header-navigation {
			opacity: 0;
			pointer-events: none;
			transform: translateY(-100%);
			position: absolute;
			top: 100%;
			left: 0;
			width: 100%;
			background-color: rgba(22, 22, 23, 0.8);
			backdrop-filter: saturate(180%) blur(20px);
			-webkit-backdrop-filter: saturate(180%) blur(20px);
			isolation: isolate;
			padding: 2rem;
			transition: all 0.3s ease-in-out;
		}
		.header-navs {
			flex-direction: column;
			gap: 1rem;
		}
		.header-navigation.is-visible {
			opacity: 1;
			pointer-events: auto;
			transform: translateY(0);
		}
		.nav-plus-cta {
			flex-direction: row-reverse;
		}
	}
</style>
