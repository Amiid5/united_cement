<script lang="ts">
	import Applications from '$lib/components/Applications.svelte';
	import Benifit from '$lib/components/benifit.svelte';
	import Branches from '$lib/components/Branches.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import FeaturedProducts from '$lib/components/FeaturedProducts.svelte';
	import HomeHero from '$lib/components/homeHero.svelte';
	import StatsSection from '$lib/components/StatsSection.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';

	const title = 'United Cement | Premium Cement & Steel Supplier in Somalia';
	const description =
		'United Cement supplies high-quality cement and steel reinforcement bars across Somalia and Somaliland. Trusted by contractors for reliable materials, bulk orders, and fast nationwide delivery.';
	const url = 'https://united-cement.com/';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content="https://united-cement.com/og-image.jpg" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://united-cement.com/og-image.jpg" />

	<!-- Structured data: homepage acts as the main Organization entry point -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": "United Cement",
			"url": "https://united-cement.com/",
			"logo": "https://united-cement.com/logo/LOGO-v3.svg",
			"description": "United Cement supplies high-quality cement and steel reinforcement bars across Somalia and Somaliland.",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "KM4",
				"addressLocality": "Mogadishu",
				"addressCountry": "SO"
			},
			"sameAs": []
		}
	</script>
</svelte:head>

<HomeHero />
<StatsSection />
<FeaturedProducts />
<Benifit />
<Branches />
<Applications />
<Testimonials />
<CtaBanner />
