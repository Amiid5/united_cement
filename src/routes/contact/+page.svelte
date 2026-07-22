<script lang="ts">
	import ContactHeader from '$lib/components/contact/ContactHeader.svelte';
	import ContactInfoCards from '$lib/components/contact/ContactInfoCards.svelte';
	import ContactForm from '$lib/components/contact/ContactForm.svelte';
	import ContactMap from '$lib/components/contact/ContactMap.svelte';
	import ContactFaq from '$lib/components/contact/ContactFaq.svelte';
	import { onMount } from 'svelte';

	const siteUrl = 'https://united-cement.com';
	const pageUrl = `${siteUrl}/contact`;
	const title = 'Contact Us | United Cement';
	const description =
		'Get in touch with United Cement for bulk orders, quotes, and inquiries. Branches in Mogadishu, Hargeisa, and Boosaaso — reach us by phone, WhatsApp, or email.';
	const shareImage = `${siteUrl}/og-image.jpg`;

	onMount(() => {
		const contactJson = {
			'@context': 'https://schema.org',
			'@type': 'ContactPage',
			name: title,
			description,
			url: pageUrl,
			mainEntity: {
				'@type': 'Organization',
				name: 'United Cement',
				url: siteUrl,
				logo: `${siteUrl}/logo/LOGO-v3.svg`,
				contactPoint: [
					{
						'@type': 'ContactPoint',
						contactType: 'sales',
						telephone: '+252-61-554-6444',
						areaServed: ['SO'],
						availableLanguage: ['en', 'so', 'ar']
					}
				]
			}
		};

		const breadcrumbJson = {
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: [
				{ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
				{ '@type': 'ListItem', position: 2, name: 'Contact', item: pageUrl }
			]
		};

		const els = [contactJson, breadcrumbJson].map((json) => {
			const el = document.createElement('script');
			el.type = 'application/ld+json';
			el.textContent = JSON.stringify(json);
			document.head.appendChild(el);
			return el;
		});

		return () => {
			els.forEach((el) => document.head.removeChild(el));
		};
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={pageUrl} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="United Cement" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:image" content={shareImage} />
	<meta property="og:image:alt" content="Contact United Cement" />
	<meta property="og:locale" content="en_US" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={shareImage} />
</svelte:head>

<ContactHeader />
<ContactInfoCards />

<section class="control mx-2 py-16 sm:py-20">
	<div class="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-8">
		<ContactForm />
		<ContactMap />
	</div>
</section>

<section class="bg-gray-50 border-t border-black/8">
	<div class="control mx-2 py-16 sm:py-20">
		<div class="flex flex-col items-center text-center gap-3 max-w-xl mx-auto mb-10">
			<span class="text-brand-500 font-heading font-semibold text-[13px] tracking-wide"> FAQ </span>
			<h2 class="text-2xl sm:text-3xl md:text-4xl font-heading font-bold leading-tight">
				Common questions
			</h2>
			<p class="text-[14px] font-body text-gray-600">
				Answers to what contractors and buyers ask us most.
			</p>
		</div>

		<div class="max-w-2xl mx-auto">
			<ContactFaq />
		</div>
	</div>
</section>
