<script lang="ts">
	import ProductsHeader from '$lib/components/products/ProductsHeader.svelte';
	import RebarInfoCard from '$lib/components/products/RebarInfoCard.svelte';
	import OpcInfoCard from '$lib/components/products/OpcInfoCard.svelte';
	import SrcInfoCard from '$lib/components/products/SrcInfoCard.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { products } from '$lib/data/product';
	import { onMount } from 'svelte';

	const title = 'Cement & Steel Products | United Cement';
	const description =
		'Browse our full range of TMT steel rebar (8mm–16mm) and Portland cement grades — Ordinary Portland Cement, Sulphate Resistant Cement, and Jumbo Bags. Bulk pricing available across Somalia and Somaliland.';
	const url = 'https://united-cement.com/products';

	const itemListJson = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		itemListElement: products.map((p, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			item: {
				'@type': 'Product',
				name: p.title,
				description: p.description,
				category: p.category
			}
		}))
	};

	onMount(() => {
		const el = document.createElement('script');
		el.type = 'application/ld+json';
		el.textContent = JSON.stringify(itemListJson);
		document.head.appendChild(el);

		return () => {
			document.head.removeChild(el);
		};
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content="https://united-cement.com/og-image.jpg" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://united-cement.com/og-image.jpg" />
</svelte:head>

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
