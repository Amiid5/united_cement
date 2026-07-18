<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import RequestQuoteModal from '$lib/components/RequestQuoteModal.svelte';
	import { afterNavigate, onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

	let gsap: any;
	let mainEl: HTMLElement;
	let gsapReady = false;

	onMount(() => {
		(async () => {
			const mod = await import('gsap');
			gsap = mod.gsap;
			gsapReady = true;
		})();
	});

	onNavigate((navigation) => {
		if (
			!gsapReady ||
			!navigation.to ||
			navigation.from?.url.pathname === navigation.to.url.pathname
		) {
			return;
		}

		return new Promise((resolve) => {
			gsap.to(mainEl, {
				opacity: 0,
				y: -20,
				duration: 0.3,
				ease: 'power2.in',
				onComplete: resolve
			});
		});
	});

	afterNavigate(() => {
		if (!gsapReady) return;

		gsap.fromTo(
			mainEl,
			{ opacity: 0, y: 20 },
			{ opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
		);
	});

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Header />
<main class="pt-20" bind:this={mainEl}>
	{@render children()}
</main>
<Footer />
<RequestQuoteModal />
