<script lang="ts">
	import { page } from '$app/state';
	import { quoteModal } from '$lib/state/quoteModal.svelte';
	//import { X, Menu, ArrowRight } from '@lucide/svelte';
	import { onDestroy, onMount } from 'svelte';

	const navData = [
		{ label: 'home', link: '/' },
		{ label: 'products', link: '/products' },
		{ label: 'gallery', link: '/gallery' },
		{ label: 'about', link: '/about' },
		{ label: 'contact', link: '/contact' }
	];

	function active(href: string) {
		return page.url.pathname === href;
	}

	//let isOpen = $state(false);
	let ctx: any;
	let headerEl: HTMLElement;

	onMount(() => {
		(async () => {
			const { gsap } = await import('gsap');

			ctx = gsap.context(() => {
				gsap.from(headerEl, { y: -30, opacity: 0 });
			});
		})();

		onDestroy(() => {
			ctx?.revert();
		});
	});
</script>

<header bind:this={headerEl} class="bg-white header-shadow control mt-6 rounded-2xl py-2">
	<div class="hidden justify-between px-10 items-center lg:flex">
		<div>
			<img src="logo/LOGO-v3.svg" alt="" width="200" />
		</div>
		<nav>
			<ul class="flex">
				{#each navData as item, i (i)}
					<li>
						<a
							href={item.link}
							class="capitalize font-semibold font-heading py-2 px-6 rounded hover:text-brand-500 {active(
								item.link
							)
								? 'bg-brand-500/10 text-brand-500'
								: ''}">{item.label}</a
						>
					</li>
				{/each}
			</ul>
		</nav>
		<button
			onclick={() => quoteModal.show()}
			class="bg-brand-500 py-2 px-6 rounded font-semibold text-white capitalize font-heading header-cta-shadow"
			>request quote</button
		>
	</div>
	<div class="lg:hidden">mobile</div>
</header>

<style>
	.header-shadow {
		box-shadow:
			4px 4px 20px rgba(0, 0, 0, 0.1),
			-4px -4px 20px rgba(0, 0, 0, 0.1);
	}
	.header-cta-shadow {
		box-shadow:
			4px 4px 20px rgba(90, 158, 21, 0.2),
			-4px -4px 20px rgba(90, 158, 21, 0.2);
	}
</style>
