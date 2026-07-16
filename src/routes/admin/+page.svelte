<script lang="ts">
	import { Package, TrendingUp, Users, ArrowUpRight, Plus } from '@lucide/svelte';
	import { products } from '$lib/data/product';

	const stats = [
		{ label: 'Total products', value: products.length, icon: Package, bg: 'bg-brand-500' },
		{
			label: 'Cement items',
			value: products.filter((p) => p.category === 'cement').length,
			icon: TrendingUp,
			bg: 'bg-accent-500'
		},
		{
			label: 'Steel items',
			value: products.filter((p) => p.category === 'steel').length,
			icon: Users,
			bg: 'bg-brand-500'
		}
	];
</script>

<div class="flex flex-col gap-6">
	<div class="flex items-center justify-between flex-wrap gap-4">
		<div>
			<h1 class="font-heading font-bold text-2xl sm:text-3xl">Dashboard</h1>
			<p class="font-body text-gray-500 text-[14px] mt-1">Overview of your product catalog.</p>
		</div>

		<a
			href="/admin/products/new"
			class="flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-heading font-semibold text-[14px] px-4 py-2.5 rounded-lg transition-colors"
		>
			<Plus size={16} />
			Add product
		</a>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
		{#each stats as s}
			<div class="bg-white border border-black/10 rounded-2xl p-5 flex flex-col gap-3">
				<span
					class="inline-flex items-center justify-center w-10 h-10 rounded-xl text-white shrink-0 {s.bg}"
				>
					<s.icon size={18} />
				</span>
				<div>
					<p class="font-heading font-bold text-2xl">{s.value}</p>
					<p class="font-body text-[13px] text-gray-500">{s.label}</p>
				</div>
			</div>
		{/each}
	</div>

	<div class="bg-white border border-black/10 rounded-2xl p-5 sm:p-6">
		<div class="flex items-center justify-between mb-4">
			<h2 class="font-heading font-bold text-[16px]">Recent products</h2>
			<a
				href="/admin/products"
				class="text-brand-500 text-[13px] font-semibold flex items-center gap-1 hover:underline"
			>
				View all <ArrowUpRight size={14} />
			</a>
		</div>
		<div class="flex flex-col divide-y divide-black/8">
			{#each products.slice(0, 6) as p}
				<div class="flex items-center justify-between py-3">
					<div class="min-w-0">
						<p class="font-heading font-semibold text-[14px] truncate">{p.title}</p>
						<p class="font-body text-[12px] text-gray-500 capitalize">{p.category} · {p.bagSize}</p>
					</div>
					<p class="font-heading font-bold text-brand-500 text-[14px] shrink-0 ml-4">
						${p.price.toFixed(2)}
					</p>
				</div>
			{/each}
		</div>
	</div>
</div>
