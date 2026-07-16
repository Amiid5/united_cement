<script lang="ts">
	import { Home, Building2, Landmark, Factory } from '@lucide/svelte';
	import type { Icon as IconType } from '@lucide/svelte';

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
</script>

{#snippet card(Icon: typeof IconType, title: string, desc: string)}
	<div
		class="relative overflow-hidden border border-gray-200 rounded-2xl p-6 flex flex-col gap-3 hover:border-brand-500/40 transition-colors"
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
		<div class="flex flex-col mb-10">
			<span class="text-brand-600 font-semibold text-[13px] tracking-wide">APPLICATIONS</span>
			<h2 class="text-[32px] font-extrabold">Wherever you build, we deliver.</h2>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
			{#each applications as app}
				{@render card(app.icon, app.title, app.desc)}
			{/each}
		</div>
	</div>
</section>
