<script lang="ts">
	import { ChevronLeft } from '@lucide/svelte';
	import ProductForm from '$lib/components/admin/ProductForm.svelte';
	import { products } from '$lib/data/product';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	const productId = Number(page.params.id);
	const existing = products.find((p) => p.id === productId) ?? null;

	function handleSubmit(data: any) {
		// TODO: PATCH to backend once wired up
		console.log('update product', productId, data);
		goto('/admin/products');
	}
</script>

<div class="flex flex-col gap-6 max-w-4xl">
	<a
		href="/admin/products"
		class="flex items-center gap-1.5 text-gray-500 text-[13px] font-body hover:text-brand-500 transition-colors w-fit"
	>
		<ChevronLeft size={14} />
		Back to products
	</a>

	<div>
		<h1 class="font-heading font-bold text-2xl sm:text-3xl">Edit product</h1>
		<p class="font-body text-gray-500 text-[14px] mt-1">Update product details.</p>
	</div>

	{#if existing}
		<div class="bg-white border border-black/10 rounded-2xl p-5 sm:p-6">
			<ProductForm initial={existing} onSubmit={handleSubmit} />
		</div>
	{:else}
		<p class="font-body text-gray-500">Product not found.</p>
	{/if}
</div>
