<script lang="ts">
	import { page } from '$app/state';
	import { quoteModal } from '$lib/state/quoteModal.svelte';
	import { X, Menu, ArrowRight } from '@lucide/svelte';

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
</script>

<header class="fixed w-full left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
	<div class="border-b border-black/8">
		<div class="control flex justify-between items-center py-3 px-4 font-heading">
			<div class="flex items-center gap-2">
				<button
					class="lg:hidden -ml-1 p-1.5 rounded-lg hover:bg-black/5 transition-colors"
					onclick={() => (isOpen = !isOpen)}
					aria-label={isOpen ? 'Close menu' : 'Open menu'}
				>
					{#if isOpen}
						<X size={24} />
					{:else}
						<Menu size={24} />
					{/if}
				</button>

				<a href="/" class="flex items-center gap-2">
					<img src="logo/Icon.svg" alt="brand-logo" class="w-9 md:w-11" />
				</a>
			</div>

			<nav class="hidden lg:flex">
				<ul class="flex items-center gap-1">
					{#each navData as item, i (i)}
						<li>
							<a
								href={item.link}
								class="capitalize font-semibold text-[14px] py-2 px-4 rounded-lg transition-all duration-200 {active(
									item.link
								)
									? 'bg-brand-500/10 text-brand-500'
									: 'text-gray-700 hover:text-brand-500 hover:bg-black/5'}"
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<button
				onclick={() => quoteModal.show()}
				class="group flex items-center gap-1.5 bg-brand-500 hover:bg-brand-600 shadow-sm text-white font-semibold text-[13px] md:text-[14px] capitalize px-3.5 py-2 md:px-5 md:py-2.5 rounded-lg transition-all"
			>
				request quote
				<ArrowRight
					size={15}
					class="hidden md:block transition-transform group-hover:translate-x-0.5"
				/>
			</button>
		</div>
	</div>

	<!-- mobile nav overlay -->
	{#if isOpen}
		<button
			class="lg:hidden fixed inset-0 top-[64px] bg-black/20 backdrop-blur-sm"
			onclick={() => (isOpen = false)}
			aria-label="Close menu"
		></button>
	{/if}

	<!-- mobile nav panel -->
	<div
		class="lg:hidden fixed left-0 right-0 top-[64px] bg-white border-b border-black/8 shadow-lg overflow-hidden transition-all duration-300 ease-out {isOpen
			? 'max-h-96 opacity-100'
			: 'max-h-0 opacity-0 pointer-events-none'}"
	>
		<nav class="flex flex-col gap-1 px-4 py-4">
			{#each navData as item, i (i)}
				<a
					href={item.link}
					onclick={() => (isOpen = false)}
					class="capitalize font-semibold text-[15px] py-2.5 px-3 rounded-lg transition-colors {active(
						item.link
					)
						? 'bg-brand-500/10 text-brand-500'
						: 'text-gray-700 hover:bg-black/5'}"
				>
					{item.label}
				</a>
			{/each}

			<a
				href="/"
				onclick={() => {
					quoteModal.show();
					isOpen = false;
				}}
				class="mt-2 text-center bg-brand-500 hover:bg-brand-600 text-white font-semibold capitalize py-2.5 rounded-lg transition-colors"
			>
				request quote
			</a>
		</nav>
	</div>
</header>

<!-- spacer to offset fixed header -->
<div class="h-[64px]"></div>
