<script lang="ts">
	import ProductsHeader from '$lib/components/products/ProductsHeader.svelte';
	import RebarInfoCard from '$lib/components/products/RebarInfoCard.svelte';
	import OpcInfoCard from '$lib/components/products/OpcInfoCard.svelte';
	import SrcInfoCard from '$lib/components/products/SrcInfoCard.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { products } from '$lib/data/product';
</script>

<div class="mx-2">
	<ProductsHeader />
</div>

<section class="control mx-2 py-10 sm:py-12">
	<div class="mx-2">
		<div class="flex flex-col lg:flex-row gap-6 lg:gap-8">
			<aside class="lg:w-[340px] shrink-0">
				<div class="flex flex-col gap-4 lg:sticky lg:top-24">
					<RebarInfoCard />
					<OpcInfoCard />
					<SrcInfoCard />
				</div>
			</aside>

			<div class="flex-1 min-w-0">
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
					{#each products as item (item.id)}
						<ProductCard {item} />
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
