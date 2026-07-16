<script lang="ts">
	import {
		Layers,
		Home,
		Building2,
		Landmark,
		Milestone,
		Layers3,
		Columns3,
		Factory,
		Zap,
		Wrench,
		ShieldCheck,
		Activity,
		Globe
	} from '@lucide/svelte';

	const applications = [
		{ label: 'Residential buildings', icon: Home },
		{ label: 'Commercial buildings', icon: Building2 },
		{ label: 'High-rise structures', icon: Landmark },
		{ label: 'Roads and bridges', icon: Milestone },
		{ label: 'Foundations', icon: Layers3 },
		{ label: 'Columns and beams', icon: Columns3 },
		{ label: 'Industrial construction', icon: Factory }
	];

	const features = [
		{ label: 'High tensile strength', icon: Zap },
		{ label: 'Excellent weldability', icon: Wrench },
		{ label: 'Corrosion resistance', icon: ShieldCheck },
		{ label: 'Earthquake-resistant performance', icon: Activity },
		{ label: 'Manufactured to international standards', icon: Globe }
	];
</script>

<div class="bg-white border border-black/10 rounded-2xl overflow-hidden">
	<div class="bg-[#1a1a1a] px-5 py-5 flex flex-col gap-2 relative">
		<div class="flex items-center justify-between">
			<span
				class="bg-white/10 text-white text-[11px] font-heading font-semibold px-3 py-1 rounded-full w-fit"
			>
				Steel · Grade B500B
			</span>
			<span class="text-white/50 text-[11px] font-heading font-semibold">01 / 03</span>
		</div>
		<h3 class="text-white font-heading font-bold text-[17px] leading-snug">
			Reinforcement steel bars
		</h3>
		<p class="text-white/70 font-body text-[12px] leading-relaxed">
			High-strength reinforcement steel manufactured to Grade B500B standards, suitable for all
			reinforced concrete structures.
		</p>
		<Layers size={18} class="text-white/40 absolute top-5 right-5" />
	</div>

	<div class="p-5 flex flex-col gap-5">
		<div class="flex flex-col gap-2.5">
			<div class="flex items-center gap-2">
				<span class="w-4 h-px bg-brand-500"></span>
				<h4 class="font-heading font-semibold text-[13px] text-brand-600">Applications</h4>
			</div>
			<div class="flex flex-wrap gap-1.5">
				{#each applications as a}
					<span
						class="flex items-center gap-1.5 bg-amber-50 text-amber-900 text-[12px] font-body font-medium px-2.5 py-1.5 rounded-full"
					>
						<a.icon size={13} class="shrink-0" />
						{a.label}
					</span>
				{/each}
			</div>
		</div>

		<div class="flex flex-col gap-2.5">
			<div class="flex items-center gap-2">
				<span class="w-4 h-px bg-brand-500"></span>
				<h4 class="font-heading font-semibold text-[13px] text-brand-600">Features</h4>
			</div>
			<div class="flex flex-col gap-2">
				{#each features as f}
					<div class="flex items-center gap-2.5">
						<span
							class="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0"
						>
							<f.icon size={14} />
						</span>
						<p class="font-body text-[12.5px] text-gray-700">{f.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
