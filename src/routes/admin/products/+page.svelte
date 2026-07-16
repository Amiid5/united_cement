<script lang="ts">
	import { Plus, Search, Pencil, Trash2, Package } from '@lucide/svelte';
	import { products } from '$lib/data/product';

	let search = $state('');
	let categoryFilter = $state('all');

	const filtered = $derived(
		products.filter((p) => {
			const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
			const matchesCategory = categoryFilter === 'all' || p.category === categoryFilter;
			return matchesSearch && matchesCategory;
		})
	);
</script>

<div class="flex flex-col gap-6">
	<div class="flex items-center justify-between flex-wrap gap-4">
		<div>
			<h1 class="font-heading font-bold text-2xl sm:text-3xl">Products</h1>
			<p class="font-body text-gray-500 text-[14px] mt-1">Manage your cement and steel catalog.</p>
		</div>
		<a
			href="/admin/products/new"
			class="flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-heading font-semibold text-[14px] px-4 py-2.5 rounded-lg transition-colors"
		>
			<Plus size={16} />
			Add product
		</a>
	</div>

	<div class="flex flex-col sm:flex-row gap-3">
		<div class="relative flex-1">
			<Search size={16} class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
			<input
				type="text"
				bind:value={search}
				placeholder="Search products..."
				class="w-full border border-black/10 rounded-lg pl-9 pr-3 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 transition-colors bg-white"
			/>
		</div>
		<select
			bind:value={categoryFilter}
			class="border border-black/10 rounded-lg px-3 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 bg-white"
		>
			<option value="all">All categories</option>
			<option value="cement">Cement</option>
			<option value="steel">Steel</option>
		</select>
	</div>

	<div class="bg-white border border-black/10 rounded-2xl overflow-hidden">
		<div class="overflow-x-auto">
			<table class="w-full text-left" style="min-width: 720px;">
				<thead>
					<tr class="border-b border-black/8 bg-gray-50">
						<th
							class="px-5 py-3 font-heading font-semibold text-[12px] text-gray-500 tracking-wide"
						>
							Product
						</th>
						<th
							class="px-5 py-3 font-heading font-semibold text-[12px] text-gray-500 tracking-wide"
						>
							Category
						</th>
						<th
							class="px-5 py-3 font-heading font-semibold text-[12px] text-gray-500 tracking-wide"
						>
							Bag size
						</th>
						<th
							class="px-5 py-3 font-heading font-semibold text-[12px] text-gray-500 tracking-wide"
						>
							Price
						</th>
						<th
							class="px-5 py-3 font-heading font-semibold text-[12px] text-gray-500 tracking-wide text-right"
						>
							Actions
						</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-black/8">
					{#each filtered as p (p.id)}
						<tr class="hover:bg-gray-50 transition-colors">
							<td class="px-5 py-3">
								<div class="flex items-center gap-3">
									<div
										class="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden"
									>
										{#if p.image}
											<img
												src={p.image}
												alt={p.title}
												class="w-full h-full object-cover"
												onerror={(e) => (e.currentTarget.style.display = 'none')}
											/>
										{:else}
											<Package size={16} class="text-gray-400" />
										{/if}
									</div>
									<div class="min-w-0">
										<p class="font-heading font-semibold text-[14px] truncate max-w-[220px]">
											{p.title}
										</p>
										<p class="font-body text-[12px] text-gray-500 truncate max-w-[220px]">
											{p.description}
										</p>
									</div>
								</div>
							</td>
							<td class="px-5 py-3">
								<span class="capitalize font-body text-[13px] text-gray-600">{p.category}</span>
							</td>
							<td class="px-5 py-3 font-body text-[13px] text-gray-600">{p.bagSize}</td>
							<td class="px-5 py-3 font-heading font-bold text-[14px] text-brand-500">
								${p.price.toFixed(2)}
								<span class="font-body font-normal text-[12px] text-gray-400">/ {p.unit}</span>
							</td>
							<td class="px-5 py-3">
								<div class="flex items-center justify-end gap-2">
									<a
										href="/admin/products/{p.id}/edit"
										class="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-600"
										aria-label="Edit"
									>
										<Pencil size={15} />
									</a>

									<a
										href="/admin/products/{p.id}/delete"
										class="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition-colors text-gray-600"
										aria-label="Delete"
									>
										<Trash2 size={15} />
									</a>
								</div>
							</td>
						</tr>
					{:else}
						<tr>
							<td colspan="5" class="px-5 py-12 text-center">
								<p class="font-heading font-semibold text-[15px] text-gray-500">
									No products found
								</p>
								<p class="font-body text-[13px] text-gray-400 mt-1">
									Try a different search or filter.
								</p>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>

	<p class="font-body text-[13px] text-gray-500">
		Showing {filtered.length} of {products.length} products
	</p>
</div>
