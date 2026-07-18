<script lang="ts">
	import type { Icon as IconType } from '@lucide/svelte';
	import { Award, Calendar, MapPin, Package } from '@lucide/svelte';
	import { onDestroy, onMount } from 'svelte';

	const stats = [
		{ title: '15+', desc: 'Years in Business', icon: Calendar },
		{ title: 'A+', desc: 'Quality Rating', icon: Award },
		{ title: '500K+', desc: 'Tons Delivered', icon: Package },
		{ title: '50+', desc: 'Regions Served', icon: MapPin }
	];

	let containerEl: HTMLElement;
	let ctx: any;

	onMount(() => {
		(async () => {
			const { gsap } = await import('gsap');

			ctx = gsap.context(() => {
				gsap.from('.stat-card', {
					x: -40,
					opacity: 0,
					stagger: 0.2,
					duration: 0.5,
					ease: 'power3.out'
				});
			}, containerEl);
		})();
	});

	onDestroy(() => {
		ctx?.revert();
	});
</script>

{#snippet card(title: string, desc: string, Icon: typeof IconType)}
	<div class="stat-card flex items-center gap-4 px-4 py-6 sm:px-6">
		<span class="shrink-0 w-11 h-11 rounded-xl bg-brand-500/10 flex items-center justify-center">
			<Icon size={22} class="text-brand-500" />
		</span>
		<span class="flex flex-col items-start font-heading">
			<span class="font-bold text-[20px] sm:text-[22px] leading-tight">{title}</span>
			<span class="font-normal text-[13px] sm:text-[14px] text-gray-500">{desc}</span>
		</span>
	</div>
{/snippet}

<div class="control mt-24" bind:this={containerEl}>
	<div
		class="grid grid-cols-1 mx-2 lg:grid-cols-4 bg-white border border-black/8 rounded-2xl shadow-sm divide-x divide-y lg:divide-y-0 divide-black/8"
	>
		{#each stats as stat, i (i)}
			{@render card(stat.title, stat.desc, stat.icon)}
		{/each}
	</div>
</div>
