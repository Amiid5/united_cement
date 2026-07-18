<script lang="ts">
	import { MapPin, Phone, MessageCircle, Mail, Building2 } from '@lucide/svelte';
	import { onDestroy, onMount } from 'svelte';

	const branches = [
		{
			label: 'Main office',
			name: 'Mogadishu',
			address: 'KM4, Mogadishu, Somalia',
			phones: ['+252 61 554 6444'],
			whatsapp: '+254 70 419 1971',
			email: 'Gm@united-cement.com'
		},
		{
			label: 'Branch two',
			name: 'Hargeisa, Somaliland',
			address: 'Hoobaan Business Centre – Floor 2, R1, opposite Masjid Ibrahim Dhere',
			phones: ['+252 63 418 1787', '+252 63 439 4748'],
			whatsapp: '',
			email: ''
		},
		{
			label: 'Branch three',
			name: 'Boosaaso, Puntland State of Somalia',
			address: 'Near Main Road Guursade, in front of Saabir General Co.',
			phones: [],
			whatsapp: '+252 90 773 2528 / +252 90 779 5003',
			email: ''
		}
	];

	let ctx: any;
	let headerEl: HTMLElement;
	let cardEl: HTMLElement;

	onMount(() => {
		(async () => {
			const { gsap } = await import('gsap');
			const { ScrollTrigger } = await import('gsap/ScrollTrigger');
			gsap.registerPlugin(ScrollTrigger);

			ctx = gsap.context(() => {
				gsap.set(headerEl.children, { y: -40, opacity: 0 });
				gsap.set(cardEl.children, { y: 40, opacity: 0, scale: 0.96 });

				gsap.to(headerEl.children, {
					y: 0,
					opacity: 1,
					duration: 1,
					ease: 'power3.out',
					stagger: 0.15,
					scrollTrigger: {
						trigger: headerEl,
						start: 'top 80%',
						once: true
					}
				});

				gsap.to(cardEl.children, {
					y: 0,
					opacity: 1,
					scale: 1,
					duration: 0.9,
					ease: 'power3.out',
					stagger: 0.12,
					scrollTrigger: {
						trigger: cardEl,
						start: 'top 80%',
						once: true
					}
				});
			});
		})();

		onDestroy(() => {
			ctx?.revert();
		});
	});
</script>

<section class="control mx-2 py-16 sm:py-20">
	<div class="mx-2">
		<div
			bind:this={headerEl}
			class="flex flex-col items-center text-center gap-3 max-w-xl mx-auto mb-10 sm:mb-12"
		>
			<span
				class="text-brand-500 font-heading font-semibold text-[13px] md:text-[14px] tracking-wide"
			>
				OUR LOCATIONS
			</span>
			<h2 class="text-2xl sm:text-3xl md:text-4xl font-heading font-bold leading-tight">
				Branches across Somalia and Somaliland
			</h2>
			<p class="text-[14px] font-body text-gray-600">
				Reach out to the office nearest you — our team is ready to help with orders and inquiries.
			</p>
		</div>

		<div bind:this={cardEl} class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
			{#each branches as b, i (i)}
				<div
					class="flex flex-col gap-4 bg-white border border-black/10 rounded-2xl p-5 sm:p-6 hover:border-brand-500 hover:shadow-lg transition-shadow duration-300"
				>
					<div class="flex items-center justify-between">
						<span
							class="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-500 text-white shrink-0"
						>
							<Building2 size={20} />
						</span>
						<span
							class="text-[11px] font-heading font-semibold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full"
						>
							{b.label}
						</span>
					</div>

					<div>
						<h3 class="font-heading font-bold text-[16px] sm:text-[17px]">{b.name}</h3>
					</div>

					<div class="flex flex-col gap-2.5 text-[13px] font-body text-gray-600">
						<div class="flex items-start gap-2">
							<MapPin size={15} class="text-brand-500 shrink-0 mt-0.5" />
							<p>{b.address}</p>
						</div>

						{#each b.phones as phone, i (i)}
							<div class="flex items-center gap-2">
								<Phone size={15} class="text-brand-500 shrink-0" />

								<a
									href="tel:{phone.replace(/\s/g, '')}"
									class="hover:text-brand-500 transition-colors"
								>
									{phone}
								</a>
							</div>
						{/each}

						{#if b.whatsapp}
							<div class="flex items-center gap-2">
								<MessageCircle size={15} class="text-accent-500 shrink-0" />
								<span>{b.whatsapp}</span>
							</div>
						{/if}

						{#if b.email}
							<div class="flex items-center gap-2">
								<Mail size={15} class="text-brand-500 shrink-0" />
								<a href="mailto:{b.email}" class="hover:text-brand-500 transition-colors">
									{b.email}
								</a>
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
