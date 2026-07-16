<script lang="ts">
	import { Package, Waves, Anchor, Layers3, Droplets, Factory, Ship } from '@lucide/svelte';

	const suitableFor = [
		{ label: 'Marine structures', icon: Waves },
		{ label: 'Ports', icon: Anchor },
		{ label: 'Foundations', icon: Layers3 },
		{ label: 'Sewage treatment plants', icon: Droplets },
		{ label: 'Underground construction', icon: Factory },
		{ label: 'Coastal developments', icon: Ship }
	];

	const packaging = ['50 Kg Bags', 'Jumbo Bags'];
</script>

<div class="bg-white border border-black/10 rounded-2xl overflow-hidden">
	<div class="bg-[#1a1a1a] px-5 py-5 flex flex-col gap-2 relative">
		<div class="flex items-center justify-between">
			<span
				class="bg-white/10 text-white text-[11px] font-heading font-semibold px-3 py-1 rounded-full w-fit"
			>
				Cement · SRC
			</span>
			<span class="text-white/50 text-[11px] font-heading font-semibold">03 / 03</span>
		</div>
		<h3 class="text-white font-heading font-bold text-[17px] leading-snug">
			Sulphate Resistant Cement
		</h3>
		<p class="text-white/70 font-body text-[12px] leading-relaxed">
			Designed for structures exposed to sulphates and aggressive environments.
		</p>
		<Package size={18} class="text-white/40 absolute top-5 right-5" />
	</div>

	<div class="p-5 flex flex-col gap-5">
		<div class="flex flex-col gap-2.5">
			<div class="flex items-center gap-2">
				<span class="w-4 h-px bg-brand-500"></span>
				<h4 class="font-heading font-semibold text-[13px] text-brand-600">Suitable for</h4>
			</div>
			<div class="flex flex-wrap gap-1.5">
				{#each suitableFor as s}
					<span
						class="flex items-center gap-1.5 bg-amber-50 text-amber-900 text-[12px] font-body font-medium px-2.5 py-1.5 rounded-full"
					>
						<s.icon size={13} class="shrink-0" />
						{s.label}
					</span>
				{/each}
			</div>
		</div>

		<div class="flex flex-col gap-2.5">
			<div class="flex items-center gap-2">
				<span class="w-4 h-px bg-brand-500"></span>
				<h4 class="font-heading font-semibold text-[13px] text-brand-600">Packaging</h4>
			</div>
			<div class="flex flex-wrap gap-1.5">
				{#each packaging as p}
					<span
						class="flex items-center gap-1.5 bg-gray-100 text-gray-700 text-[12px] font-body font-medium px-2.5 py-1.5 rounded-full"
					>
						<Package size={13} class="shrink-0" />
						{p}
					</span>
				{/each}
			</div>
		</div>
	</div>
</div>
