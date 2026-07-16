<script lang="ts">
	import { Plus, Minus } from '@lucide/svelte';

	const faqs = [
		{
			q: 'What products do you supply?',
			a: 'We supply reinforcement steel bars (Iron Rebar Grade B500B) in sizes from 8mm to 16mm, along with Ordinary Portland Cement (OPC) and Sulphate Resistant Cement (SRC), available in 50kg bags or jumbo bags.'
		},
		{
			q: 'Do you deliver outside Mogadishu?',
			a: 'Yes — we operate branches in Mogadishu, Hargeisa, and Boosaaso, and can arrange delivery to other regions across Somalia and Somaliland on request.'
		},
		{
			q: 'What is your minimum order quantity?',
			a: 'For bagged cement, there is no strict minimum. For bulk or jumbo bag orders, quantities are confirmed directly with our sales team based on your project size.'
		},
		{
			q: 'Can I order steel and cement together?',
			a: 'Yes — many contractors order both reinforcement steel and cement in the same request. Mention both materials and quantities when you contact us for a quote.'
		},
		{
			q: 'How do I get a quote or place an order?',
			a: 'Use the Request Quote form on this site, or contact your nearest branch directly by phone or WhatsApp. Our team will confirm pricing and delivery details.'
		}
	];

	let openIndex = $state<number | null>(0);

	function toggle(i: number) {
		openIndex = openIndex === i ? null : i;
	}
</script>

<div class="flex flex-col gap-3 mx-2">
	{#each faqs as faq, i}
		<div class="bg-white border border-black/10 rounded-xl overflow-hidden">
			<button
				onclick={() => toggle(i)}
				class="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
			>
				<span class="font-heading font-semibold text-[14px] sm:text-[15px]">{faq.q}</span>
				<span
					class="shrink-0 w-7 h-7 rounded-full flex items-center justify-center border border-black/10 text-gray-600"
				>
					{#if openIndex === i}
						<Minus size={14} />
					{:else}
						<Plus size={14} />
					{/if}
				</span>
			</button>

			{#if openIndex === i}
				<div class="px-5 pb-4">
					<p class="font-body text-[13px] sm:text-[14px] text-gray-600 leading-relaxed">
						{faq.a}
					</p>
				</div>
			{/if}
		</div>
	{/each}
</div>
