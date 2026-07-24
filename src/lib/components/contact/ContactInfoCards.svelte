<script lang="ts">
	import { Phone, Mail, MapPin, MessageCircle } from '@lucide/svelte';

	const cards = [
		{
			icon: Phone,
			title: 'Call us',
			lines: ['+252 61 011 6288', 'Main office — Mogadishu'],
			bg: 'bg-brand-500'
		},
		{
			icon: MessageCircle,
			title: 'WhatsApp',
			lines: ['+252 61 011 6288', 'Quick replies during business hours'],
			bg: 'bg-accent-500'
		},
		{
			icon: Mail,
			title: 'Email us',
			lines: ['info@united-cement.com', 'Replies within 24 hours'],
			bg: 'bg-brand-500'
		},
		{
			icon: MapPin,
			title: 'Visit us',
			lines: ['KM4, Mogadishu, Somalia', '+2 more branches nationwide'],
			bg: 'bg-accent-500'
		}
	];
</script>

<section class=" mx-2 -mt-8 sm:-mt-10 relative z-10">
	<div class="control">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
			{#each cards as c, i (i)}
				<div
					class="flex flex-col gap-3 bg-white border border-black/10 rounded-2xl p-5 sm:p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
				>
					<span
						class="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl text-white shrink-0 {c.bg}"
					>
						<c.icon size={20} />
					</span>
					<h3 class="font-heading font-semibold text-[15px] sm:text-[16px]">{c.title}</h3>
					<div class="font-body text-[13px] text-gray-500 leading-relaxed">
						{#each c.lines as line, i (i)}
							<p>{line}</p>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
