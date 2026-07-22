<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { quoteModal } from '$lib/state/quoteModal.svelte';

	import { X, Menu } from '@lucide/svelte';
	import { onDestroy, onMount } from 'svelte';
	import { slide, fade } from 'svelte/transition';

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

	let isOpen = $state(false);
	let ctx: any;
	let headerEl: HTMLElement;

	onMount(() => {
		(async () => {
			const { gsap } = await import('gsap');

			ctx = gsap.context(() => {
				gsap.from(headerEl, { y: -30, opacity: 0, duration: 0.6, ease: 'power3.out' });
			});
		})();

		onDestroy(() => {
			ctx?.revert();
		});
	});

	// lock background scroll while mobile menu is open
	$effect(() => {
		if (typeof document === 'undefined') return;
		document.body.style.overflow = isOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	});

	async function handleNavClick(link: string) {
		isOpen = false;
		await goto(link);
	}
</script>

<header class="control relative z-50" bind:this={headerEl}>
	<div
		class="flex justify-between items-center gap-3 m-2 lg:mt-6 header-shadow bg-white px-3 sm:px-5 py-2 lg:py-3 rounded-card"
	>
		<a href="/" class="shrink-0">
			<img src="logo/LOGO-v3.svg" alt="United Cement" class="w-[90px] sm:w-[100px] lg:w-[150px]" />
		</a>

		<nav class="hidden lg:flex min-w-0 overflow-hidden">
			<ul class="flex gap-1 flex-wrap justify-end">
				{#each navData as item, i (i)}
					<li>
						<a
							href={item.link}
							class="capitalize font-semibold font-heading text-sm xl:text-base py-2 px-4 xl:px-5 rounded-badge transition-colors hover:text-brand-500 {active(
								item.link
							)
								? 'bg-brand-50 text-brand-600'
								: 'text-ink'}">{item.label}</a
						>
					</li>
				{/each}
			</ul>
		</nav>

		<button
			onclick={() => quoteModal.show()}
			class="hidden lg:flex shrink-0 bg-brand-500 text-white py-2 px-5 xl:px-6 rounded-badge font-semibold font-heading text-sm xl:text-base capitalize shadow-btn transition-transform hover:scale-[1.03] active:scale-[0.98] whitespace-nowrap"
		>
			request quote
		</button>

		<button
			class="lg:hidden shrink-0 p-1.5 -mr-1 rounded-badge transition-colors hover:bg-brand-50"
			aria-label={isOpen ? 'Close menu' : 'Open menu'}
			onclick={() => (isOpen = !isOpen)}
		>
			{#if isOpen}
				<X size={24} class="text-ink" />
			{:else}
				<Menu size={24} class="text-ink" />
			{/if}
		</button>
	</div>

	{#if isOpen}
		<div
			class="lg:hidden bg-white flex flex-col gap-1 mobile-shadow mx-2 p-4 rounded-card max-h-[calc(100vh-6rem)] overflow-y-auto"
			transition:slide={{ duration: 250 }}
		>
			<nav>
				<ul class="flex flex-col gap-1">
					{#each navData as item, i (i)}
						<li>
							<a
								href={item.link}
								onclick={(e) => {
									e.preventDefault();
									handleNavClick(item.link);
								}}
								class="capitalize font-semibold font-heading py-2.5 px-3 block rounded-badge transition-colors {active(
									item.link
								)
									? 'bg-brand-50 text-brand-600'
									: 'text-ink hover:bg-brand-50'}">{item.label}</a
							>
						</li>
					{/each}
				</ul>
			</nav>
			<button
				onclick={() => {
					quoteModal.show();
					isOpen = false;
				}}
				class="bg-brand-500 text-white py-3 px-6 mt-2 w-full rounded-badge font-semibold font-heading capitalize shadow-btn"
			>
				request quote
			</button>
		</div>
	{/if}
</header>

{#if isOpen}
	<button
		class="fixed inset-0 bg-black/30 z-40 lg:hidden"
		transition:fade={{ duration: 200 }}
		aria-label="Close menu"
		onclick={() => (isOpen = false)}
	></button>
{/if}

<style>
	.header-shadow {
		box-shadow: var(--shadow-header);
	}
	.mobile-shadow {
		box-shadow: var(--shadow-card);
	}
</style>
