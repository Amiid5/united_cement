<script lang="ts">
	import ContactHeader from '$lib/components/contact/ContactHeader.svelte';
	import ContactInfoCards from '$lib/components/contact/ContactInfoCards.svelte';
	import ContactForm from '$lib/components/contact/ContactForm.svelte';
	import ContactMap from '$lib/components/contact/ContactMap.svelte';
	import ContactFaq from '$lib/components/contact/ContactFaq.svelte';
</script>

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
