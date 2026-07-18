<script lang="ts">
	import { CircleDollarSign, type Icon as IconType, Package, Shield, Truck } from '@lucide/svelte';
	import { onDestroy, onMount } from 'svelte';

	const features = [
		{
			title: 'Quality Assured',
			desc: 'Every batch is lab-tested to meet ASTM and EN standards. ISO 9001 certified manufacturing.',
			icon: Shield,
			bg: 'bg-brand-500'
		},
		{
			title: 'Fast Delivery',
			desc: '48–72 hour delivery on bulk orders. Fleet of dedicated tankers and pallet trucks.',
			icon: Truck,
			bg: 'bg-accent-500'
		},
		{
			title: 'Orders Welcome',
			desc: 'From single pallets to full silo loads. Flexible packaging and bulk delivery options.',
			icon: Package,
			bg: 'bg-brand-500'
		},
		{
			title: 'Competitive Pricing',
			desc: 'Volume discounts and project-specific pricing. Transparent quotes with no hidden fees.',
			icon: CircleDollarSign,
			bg: 'bg-accent-500'
		}
	];

	let ctx: any;
	let headerEl: HTMLElement;
	let gridEl: HTMLElement;

	onMount(() => {
		(async () => {
			const { gsap } = await import('gsap');
			const { ScrollTrigger } = await import('gsap/ScrollTrigger');
			gsap.registerPlugin(ScrollTrigger);

			ctx = gsap.context(() => {
				gsap.set(headerEl.children, { y: -30, opacity: 0 });
				gsap.set(gridEl.children, { y: 40, opacity: 0, scale: 0.96 });

				gsap.to(headerEl.children, {
					y: 0,
					opacity: 1,
					duration: 1,
					ease: 'power3.out',
					stagger: 0.15,
					scrollTrigger: {
						trigger: headerEl,
						start: 'top 80%',
						once: true
					}
				});

				gsap.to(gridEl.children, {
					y: 0,
					opacity: 1,
					scale: 1,
					duration: 0.9,
					ease: 'power3.out',
					stagger: 0.12,
					scrollTrigger: {
						trigger: gridEl,
						start: 'top 80%',
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

{#snippet card(title: string, desc: string, Icon: typeof IconType, bgColor: string)}
	<div
		class="flex flex-col gap-3 bg-white border border-black/10 rounded-2xl hover:border-brand-500 hover:shadow-lg cursor-pointer duration-300 transition-shadow p-6"
	>
		<span
			class="inline-flex items-center justify-center w-12 h-12 rounded-xl text-white shrink-0 {bgColor}"
		>
			<Icon size={22} />
		</span>
		<h3 class="font-heading font-semibold text-[17px]">{title}</h3>
		<p class="font-body text-[13px] text-gray-500 leading-relaxed">{desc}</p>
	</div>
{/snippet}

<section class="mt-24 control mx-2 flex flex-col gap-12 md:gap-16">
	<div class="mx-2 flex flex-col gap-10">
		<div bind:this={headerEl} class="flex flex-col items-center text-center gap-3 max-w-xl mx-auto">
			<span
				class="text-brand-500 font-heading font-semibold text-[13px] md:text-[14px] tracking-wide"
			>
				WHY CHOOSE US
			</span>
			<h2 class="text-3xl sm:text-4xl md:text-[40px] font-heading font-bold leading-tight">
				The United Cement Advantage
			</h2>
			<p class="text-[14px] font-body text-gray-600">
				Four reasons contractors and distributors choose United Cement for their most demanding
				projects.
			</p>
		</div>

		<div bind:this={gridEl} class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
			{#each features as f, i (i)}
				{@render card(f.title, f.desc, f.icon, f.bg)}
			{/each}
		</div>
	</div>
</section>
