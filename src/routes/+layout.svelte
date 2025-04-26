<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '@splidejs/splide/dist/css/themes/splide-default.min.css';
	import '$lib/assets/css/style.css';
	import '../app.css';
</script>

<Header />
<slot />
<Footer />
