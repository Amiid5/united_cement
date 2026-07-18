<script lang="ts">
	import { Home, Building2, Landmark, Factory } from '@lucide/svelte';
	import type { Icon as IconType } from '@lucide/svelte';
	import { onDestroy, onMount } from 'svelte';

	interface Application {
		icon: typeof IconType;
		title: string;
		desc: string;
	}

	const applications: Application[] = [
		{ icon: Home, title: 'Residential', desc: 'Homes, plaster & masonry' },
		{ icon: Building2, title: 'Commercial', desc: 'Offices, retail & mid-rise' },
		{ icon: Landmark, title: 'Infrastructure', desc: 'Bridges, roads & marine' },
		{ icon: Factory, title: 'Industrial', desc: 'Plants, silos & precast' }
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

{#snippet card(Icon: typeof IconType, title: string, desc: string)}
	<div
		class="relative overflow-hidden border border-gray-200 rounded-2xl p-6 flex flex-col gap-3 hover:border-brand-500/40 hover:shadow-lg transition-all duration-300"
	>
		<div
			class="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-yellow-50 pointer-events-none"
		></div>

		<Icon class="text-brand-500 relative z-10" size={28} />
		<h3 class="font-bold text-[17px] relative z-10">{title}</h3>
		<p class="text-gray-500 text-[14px] relative z-10">{desc}</p>
	</div>
{/snippet}

<section class="mt-24 control">
	<div class="mx-2">
		<div bind:this={headerEl} class="flex flex-col mb-10">
			<span class="text-brand-600 font-semibold text-[13px] tracking-wide">APPLICATIONS</span>
			<h2 class="text-[32px] font-extrabold">Wherever you build, we deliver.</h2>
		</div>

		<div bind:this={gridEl} class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
			{#each applications as app, i (i)}
				{@render card(app.icon, app.title, app.desc)}
			{/each}
		</div>
	</div>
</section>
