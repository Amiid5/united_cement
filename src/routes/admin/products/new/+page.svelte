<script lang="ts">
	import { ChevronLeft } from '@lucide/svelte';
	import ProductForm from '$lib/components/admin/ProductForm.svelte';
	import { goto } from '$app/navigation';

	function handleSubmit(data: any) {
		// TODO: POST to backend once wired up
		console.log('create product', data);
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
		<h1 class="font-heading font-bold text-2xl sm:text-3xl">Add product</h1>
		<p class="font-body text-gray-500 text-[14px] mt-1">Create a new cement or steel listing.</p>
	</div>

	<div class="bg-white border border-black/10 rounded-2xl p-5 sm:p-6">
		<ProductForm onSubmit={handleSubmit} />
	</div>
</div>
