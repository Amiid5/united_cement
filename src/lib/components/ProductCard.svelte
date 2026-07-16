<script lang="ts">
	import type { Product } from '$lib/types';
	import { quoteModal } from '$lib/state/quoteModal.svelte';

	let { item }: { item: Product } = $props();

	let failed = $state(false);
</script>

<div
	class="group bg-white border border-black/10 rounded-2xl overflow-hidden relative flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
>
	<div class="relative bg-gray-100 w-full h-[170px] overflow-hidden">
		{#if item.image && !failed}
			<img
				src={item.image}
				alt={item.title}
				class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
				onerror={() => (failed = true)}
			/>
		{:else}
			<div
				class="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
			>
				<span class="text-gray-400 text-[12px] font-heading font-medium capitalize">
					{item.category}
				</span>
			</div>
		{/if}

		<span
			class="absolute top-3 left-3 text-[10px] font-semibold capitalize font-heading text-white rounded-full px-3 py-1 bg-brand-500 shadow-sm"
		>
			{item.badge}
		</span>
	</div>

	<div class="flex flex-col gap-4 px-4 pb-4 pt-4 flex-1">
		<div class="flex-1">
			<h3 class="text-[14px] font-heading font-semibold leading-snug">{item.title}</h3>
			<p class="font-body text-[13px] text-gray-500 mt-1">{item.description}</p>
			<p class="font-body text-[12px] text-gray-400 mt-1.5">{item.bagSize}</p>
		</div>

		<div class="flex justify-between items-center">
			<p class="font-bold text-brand-500 font-heading text-[19px]">${item.price.toFixed(2)}</p>
			<p class="font-medium font-heading text-[13px] text-gray-500">/ {item.unit}</p>
		</div>

		<button
			onclick={() => quoteModal.show(item)}
			class="py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-heading text-[14px] font-semibold rounded-lg w-full transition-colors"
		>
			Request quote
		</button>
	</div>
</div>
