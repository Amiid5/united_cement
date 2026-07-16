<script lang="ts">
	import { ChevronLeft, AlertTriangle, Package } from '@lucide/svelte';
	import { products } from '$lib/data/product';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	const productId = Number(page.params.id);
	const existing = products.find((p) => p.id === productId) ?? null;

	function handleDelete() {
		// TODO: DELETE to backend once wired up
		console.log('delete product', productId);
		goto('/admin/products');
	}
</script>

<div class="flex flex-col gap-6 max-w-lg">
	<a
		href="/admin/products"
		class="flex items-center gap-1.5 text-gray-500 text-[13px] font-body hover:text-brand-500 transition-colors w-fit"
	>
		<ChevronLeft size={14} />
		Back to products
	</a>

	{#if existing}
		<div class="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-5">
			<div class="flex items-center gap-3">
				<span
					class="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0"
				>
					<AlertTriangle size={22} />
				</span>
				<div>
					<h1 class="font-heading font-bold text-xl">Delete product</h1>
					<p class="font-body text-[13px] text-gray-500">This action can't be undone.</p>
				</div>
			</div>

			<div class="flex items-center gap-3 bg-gray-50 border border-black/8 rounded-xl p-4">
				<div
					class="w-12 h-12 rounded-lg bg-white border border-black/8 flex items-center justify-center shrink-0 overflow-hidden"
				>
					{#if existing.image}
						<img
							src={existing.image}
							alt={existing.title}
							class="w-full h-full object-cover"
							onerror={(e) => (e.currentTarget.style.display = 'none')}
						/>
					{:else}
						<Package size={18} class="text-gray-400" />
					{/if}
				</div>
				<div class="min-w-0">
					<p class="font-heading font-semibold text-[14px] truncate">{existing.title}</p>
					<p class="font-body text-[12px] text-gray-500 capitalize">
						{existing.category} · ${existing.price.toFixed(2)} / {existing.unit}
					</p>
				</div>
			</div>

			<p class="font-body text-[14px] text-gray-600">
				Are you sure you want to permanently remove this product from your catalog?
			</p>

			<div class="flex gap-3">
				<a
					href="/admin/products"
					class="flex-1 text-center border border-black/10 font-heading font-semibold text-[14px] py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
				>
					Cancel
				</a>
				<button
					onclick={handleDelete}
					class="flex-1 bg-red-500 hover:bg-red-600 text-white font-heading font-semibold text-[14px] py-2.5 rounded-lg transition-colors"
				>
					Delete product
				</button>
			</div>
		</div>
	{:else}
		<p class="font-body text-gray-500">Product not found.</p>
	{/if}
</div>
