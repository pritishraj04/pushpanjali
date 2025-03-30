<script>
	let { isMenuVisible, toggleMenu } = $props();
</script>

<button class="menu-toggle" aria-label="Hamburger Menu" onclick={toggleMenu}>
	<span class="top" class:active={isMenuVisible}></span>
	<span class="bottom" class:active={isMenuVisible}></span>
</button>

<style>
	.menu-toggle {
		display: none;
		cursor: pointer;
		background-color: transparent;
		border: none;
		padding: 0;
	}
	.menu-toggle span {
		display: block;
		width: 2.3rem;
		height: 2px;
		background-color: white;
		margin-block: 0.4rem;
		transition:
			transform 0.3s ease-in-out,
			box-shadow 0.3s ease-in-out;
	}
	.menu-toggle span.top.active {
		transform: translateY(400%) rotate(45deg);
	}
	.menu-toggle span.bottom.active {
		box-shadow: 0 2px 7px 1px rgba(0, 0, 0);
		transform: translateY(-100%) rotate(-45deg);
	}
	@media screen and (max-width: 820px) {
		.menu-toggle {
			display: block;
		}
	}
</style>
