<script lang="ts">
	import ProductsHeader from '$lib/components/products/ProductsHeader.svelte';
	import RebarInfoCard from '$lib/components/products/RebarInfoCard.svelte';
	import OpcInfoCard from '$lib/components/products/OpcInfoCard.svelte';
	import SrcInfoCard from '$lib/components/products/SrcInfoCard.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { products } from '$lib/data/product';
	import { onMount } from 'svelte';

	const title = 'Cement & Steel Rebar Prices | OPC, SRC, TMT B500B | United Cement';
	const description =
		'Iron Rebar Grade B500B (8mm–16mm), Ordinary Portland Cement (OPC), and Sulphate Resistant Cement (SRC) — 50kg bags & jumbo bags. Bulk supply across Mogadishu, Hargeisa & Boosaaso, Somalia.';
	const url = 'https://united-cement.com/products';

	const itemListJson = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'United Cement Company — Cement & Steel Products',
		itemListElement: products.map((p, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			item: {
				'@type': 'Product',
				name: p.title,
				description: p.description,
				category: p.category === 'steel' ? 'Steel Reinforcement Bar' : 'Cement',
				brand: {
					'@type': 'Brand',
					name: 'United Cement'
				},
				additionalProperty: [
					{
						'@type': 'PropertyValue',
						name: 'Packaging / Length',
						value: p.bagSize
					},
					{
						'@type': 'PropertyValue',
						name: 'Sold by',
						value: p.unit
					}
				]
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
	<meta
		name="keywords"
		content="Iron Rebar Grade B500B Somalia, B500B rebar Somalia, 8mm rebar Somalia, 10mm rebar Somalia, 12mm rebar Somalia, 14mm rebar Somalia, 16mm rebar Somalia, TMT steel bars Somalia, TMT rebar Mogadishu, reinforcement steel Somalia, steel rebar 12m length, Ordinary Portland Cement Somalia, OPC cement Somalia, OPC 50kg bag, OPC jumbo bag, Sulphate Resistant Cement Somalia, SRC cement Somalia, SRC 50kg bag, SRC jumbo bag, marine cement Somalia, cement for coastal construction, bulk cement Somalia, wholesale cement Somalia, cement price Somalia, steel price Somalia, buy rebar Somalia, buy cement Somalia"
	/>
	<meta name="robots" content="noindex, nofollow" />
	<link rel="canonical" href={url} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="United Cement Company" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content="https://united-cement.com/og-image.jpg" />
	<meta property="og:locale" content="en_US" />

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
