<script lang="ts">
	import { Upload, X } from '@lucide/svelte';
	import type { Product } from '$lib/types';

	let {
		initial = null,
		onSubmit
	}: { initial?: Product | null; onSubmit?: (data: Omit<Product, 'id'>) => void } = $props();

	let title = $state(initial?.title ?? '');
	let description = $state(initial?.description ?? '');
	let category = $state<'cement' | 'steel'>(initial?.category ?? 'cement');
	let badge = $state(initial?.badge ?? '');
	let price = $state(initial?.price?.toString() ?? '');
	let unit = $state(initial?.unit ?? '');
	let bagSize = $state(initial?.bagSize ?? '');
	let image = $state(initial?.image ?? '');

	function handleSubmit(e: Event) {
		e.preventDefault();
		onSubmit?.({
			title,
			description,
			category,
			badge,
			price: parseFloat(price) || 0,
			unit,
			bagSize,
			image
		});
	}
</script>

<form onsubmit={handleSubmit} class="flex flex-col gap-5">
	<div class="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-5">
		<div class="flex flex-col gap-5">
			<div class="flex flex-col gap-1.5">
				<label for="title" class="font-heading font-medium text-[13px] text-gray-700">
					Product title
				</label>
				<input
					id="title"
					type="text"
					bind:value={title}
					placeholder="Ordinary Portland Cement — Grade 43"
					class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 transition-colors"
				/>
			</div>

			<div class="flex flex-col gap-1.5">
				<label for="description" class="font-heading font-medium text-[13px] text-gray-700">
					Description
				</label>
				<textarea
					id="description"
					bind:value={description}
					rows="3"
					placeholder="Everyday strength for residential builds"
					class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 transition-colors resize-none"
				></textarea>
			</div>

			<div class="grid grid-cols-2 gap-4">
				<div class="flex flex-col gap-1.5">
					<label for="category" class="font-heading font-medium text-[13px] text-gray-700">
						Category
					</label>
					<select
						id="category"
						bind:value={category}
						class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 bg-white"
					>
						<option value="cement">Cement</option>
						<option value="steel">Steel</option>
					</select>
				</div>

				<div class="flex flex-col gap-1.5">
					<label for="badge" class="font-heading font-medium text-[13px] text-gray-700">
						Badge
					</label>
					<input
						id="badge"
						type="text"
						bind:value={badge}
						placeholder="BEST SELLER"
						class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 transition-colors"
					/>
				</div>
			</div>

			<div class="grid grid-cols-3 gap-4">
				<div class="flex flex-col gap-1.5">
					<label for="price" class="font-heading font-medium text-[13px] text-gray-700">
						Price
					</label>
					<input
						id="price"
						type="number"
						step="0.01"
						bind:value={price}
						placeholder="9.20"
						class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 transition-colors"
					/>
				</div>

				<div class="flex flex-col gap-1.5">
					<label for="unit" class="font-heading font-medium text-[13px] text-gray-700">
						Unit
					</label>
					<input
						id="unit"
						type="text"
						bind:value={unit}
						placeholder="50kg"
						class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 transition-colors"
					/>
				</div>

				<div class="flex flex-col gap-1.5">
					<label for="bagSize" class="font-heading font-medium text-[13px] text-gray-700">
						Bag / unit size
					</label>
					<input
						id="bagSize"
						type="text"
						bind:value={bagSize}
						placeholder="50kg"
						class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 transition-colors"
					/>
				</div>
			</div>
		</div>

		<div class="flex flex-col gap-1.5">
			<span class="font-heading font-medium text-[13px] text-gray-700">Product image</span>
			<div
				class="border-2 border-dashed border-black/15 rounded-xl aspect-square flex flex-col items-center justify-center gap-2 text-gray-400 relative overflow-hidden"
			>
				{#if image}
					<img src={image} alt="Preview" class="absolute inset-0 w-full h-full object-cover" />
					<button
						type="button"
						onclick={() => (image = '')}
						class="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center shadow-sm"
						aria-label="Remove image"
					>
						<X size={14} class="text-gray-700" />
					</button>
				{:else}
					<Upload size={24} />
					<p class="text-[12px] text-center px-4">Drop an image here or paste a URL below</p>
				{/if}
			</div>
			<input
				type="text"
				bind:value={image}
				placeholder="/images/products/opc-43.jpg"
				class="border border-black/10 rounded-lg px-3.5 py-2 text-[13px] font-body outline-none focus:border-brand-500 transition-colors mt-1"
			/>
		</div>
	</div>

	<div class="flex items-center gap-3 pt-2 border-t border-black/8">
		<button
			type="submit"
			class="bg-brand-500 hover:bg-brand-600 text-white font-heading font-semibold text-[14px] px-5 py-2.5 rounded-lg transition-colors"
		>
			{initial ? 'Save changes' : 'Add product'}
		</button>
		<a
			href="/admin/products"
			class="border border-black/10 font-heading font-semibold text-[14px] px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
		>
			Cancel
		</a>
	</div>
</form>
