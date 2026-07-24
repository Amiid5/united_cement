<script lang="ts">
	import Applications from '$lib/components/Applications.svelte';
	import Benifit from '$lib/components/benifit.svelte';
	import Branches from '$lib/components/Branches.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import FeaturedProducts from '$lib/components/FeaturedProducts.svelte';
	import HomeHero from '$lib/components/homeHero.svelte';
	import StatsSection from '$lib/components/StatsSection.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';

	const title = 'United Cement Company | Cement & Steel Supplier in Somalia';
	const description =
		'United Cement Company supplies OPC & SRC cement and TMT steel rebar (B500B, 8mm–16mm) across Mogadishu, Hargeisa & Boosaaso, Somalia. Bulk orders, reliable delivery, trusted by contractors.';
	const url = 'https://united-cement.com/';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="United Cement, United Cement Company, United Cement Somalia, cement supplier Somalia, steel supplier Somalia, cement company Somalia, steel company Somalia, cement Mogadishu, cement Hargeisa, cement Boosaaso, steel Mogadishu, steel Hargeisa, steel Boosaaso, Ordinary Portland Cement Somalia, Sulphate Resistant Cement Somalia, TMT steel bars Somalia, rebar Somalia, bulk cement Somalia, construction materials Somalia, building materials Somalia, cement Somaliland, cement Puntland, buy cement Somalia, buy steel Somalia"
	/>
	<meta name="robots" content="noindex, nofollow" />
	<link rel="canonical" href={url} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="United Cement Company" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content="https://united-cement.com/og-image.jpg" />
	<meta property="og:locale" content="en_US" />

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
			"name": "United Cement Company",
			"alternateName": "United Cement",
			"url": "https://united-cement.com/",
			"logo": "https://united-cement.com/logo/LOGO-v3.svg",
			"description": "United Cement Company supplies Ordinary Portland Cement (OPC), Sulphate Resistant Cement (SRC), and TMT steel reinforcement bars across Somalia, with branches in Mogadishu, Hargeisa, and Boosaaso.",
			"email": "Gm@united-cement.com",
			"telephone": "+252 61 011 6288",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "KM4",
				"addressLocality": "Mogadishu",
				"addressCountry": "SO"
			},
			"areaServed": [
				{ "@type": "City", "name": "Mogadishu" },
				{ "@type": "City", "name": "Hargeisa" },
				{ "@type": "City", "name": "Boosaaso" },
				{ "@type": "Country", "name": "Somalia" }
			],
			"contactPoint": [
				{
					"@type": "ContactPoint",
					"telephone": "+252 61 011 6288",
					"contactType": "customer service",
					"email": "Gm@united-cement.com",
					"areaServed": "SO"
				}
			],
			"sameAs": [
				"https://www.facebook.com/share/198k1sE7dK/?mibextid=wwXIfr",
				"https://wa.me/252610116288"
			]
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
