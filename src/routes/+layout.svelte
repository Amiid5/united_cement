<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import RequestQuoteModal from '$lib/components/RequestQuoteModal.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Header />
<main class="pt-20">
	{@render children()}
</main>
<Footer />
<RequestQuoteModal />
