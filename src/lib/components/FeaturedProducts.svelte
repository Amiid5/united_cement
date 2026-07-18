<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { featuredProducts } from '$lib/data/product';
	import { onDestroy, onMount } from 'svelte';

	let ctx: any;
	let headerBlockEl: HTMLElement;
	let gridEl: HTMLElement;

	onMount(() => {
		(async () => {
			const { gsap } = await import('gsap');
			const { ScrollTrigger } = await import('gsap/ScrollTrigger');
			gsap.registerPlugin(ScrollTrigger);

			ctx = gsap.context(() => {
				const headerItems = headerBlockEl.children;
				const cardItems = gridEl.children;

				gsap.set(headerItems, { opacity: 0, y: 30 });
				gsap.set(cardItems, { opacity: 0, y: 50, scale: 0.94 });

				gsap.to(headerItems, {
					opacity: 1,
					y: 0,
					duration: 1,
					ease: 'power3.out',
					stagger: 0.15,
					scrollTrigger: {
						trigger: headerBlockEl,
						start: 'top 75%', // fires later — element must be well into view first
						once: true
					}
				});

				gsap.to(cardItems, {
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 1.1,
					ease: 'power3.out',
					stagger: 0.12, // slightly bigger gap between cards = more deliberate reveal
					scrollTrigger: {
						trigger: gridEl,
						start: 'top 75%',
						once: true
					}
				});
			});
		})();

		onDestroy(() => {
			ctx?.revert();
		});
	});
</script>

<section class="mt-24 control flex flex-col gap-10">
	<div class="mx-2 flex flex-col gap-10">
		<div
			bind:this={headerBlockEl}
			class="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6"
		>
			<div class="flex flex-col gap-3">
				<span
					class="text-brand-500 font-heading text-[13px] md:text-[14px] font-bold tracking-wide"
				>
					OUR RANGE
				</span>
				<h2 class="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold">
					Steel & Cement Products
				</h2>
				<p class="text-[14px] font-body text-gray-600 max-w-[550px] leading-relaxed">
					Reinforcement steel bars and premium cement grades — supplied from port to project across
					Somalia and Somaliland.
				</p>
			</div>

			<a
				href="/products"
				class="group flex gap-1.5 mb-4 items-center w-fit text-accent-500 border-2 border-accent-500 hover:bg-accent-500 hover:text-white font-semibold capitalize font-heading text-[14px] px-4 py-2.5 rounded-lg transition-colors duration-300"
			>
				View all products
				<ArrowRight
					size={16}
					class="transition-transform group-hover:translate-x-0.5"
					strokeWidth={3}
				/>
			</a>
		</div>

		<div bind:this={gridEl} class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
			{#each featuredProducts as item (item.id)}
				<ProductCard {item} />
			{/each}
		</div>
	</div>
</section>
