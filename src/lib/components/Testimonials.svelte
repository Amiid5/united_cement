<script lang="ts">
	import { Star } from '@lucide/svelte';

	interface Testimonial {
		quote: string;
		rating: number;
		name: string;
		role: string;
	}

	const testimonials: Testimonial[] = [
		{
			quote:
				'United Cement Company has been our steel and cement supplier for two years. Deliveries to our site in Hargeisa are always on time.',
			rating: 5,
			name: 'Mohamed Yusuf',
			role: 'Site Manager, Hargeisa Builders'
		},
		{
			quote:
				'The rebar quality is consistent across every batch. We use their 12mm and 16mm bars on all our foundation work.',
			rating: 5,
			name: 'Fadumo Ali',
			role: 'Project Engineer, Coastal Infra Co.'
		},
		{
			quote:
				"Best pricing we've found for OPC bulk orders this year. Their team understands contractor timelines and delivers accordingly.",
			rating: 5,
			name: 'Abdirahman Hassan',
			role: 'Procurement Lead, Al-Amin Construction'
		},
		{
			quote:
				'Sulphate Resistant Cement from UCC has held up well on our coastal foundation work in Boosaaso. Reliable supplier.',
			rating: 5,
			name: 'Ifrah Warsame',
			role: 'Owner, Warsame Builders'
		},
		{
			quote:
				'We order both steel and cement from United Cement for every project now. One supplier, no delays, straightforward pricing.',
			rating: 5,
			name: 'Xasan Cabdulle',
			role: 'Contractor, Puntland Developments'
		},
		{
			quote:
				'Their Mogadishu branch has never let us down on bulk orders. Good communication and fair pricing on every quote.',
			rating: 5,
			name: 'Sagal Mohamud',
			role: 'Site Supervisor, Banaadir Construction'
		}
	];

	function initials(name: string) {
		return name
			.split(' ')
			.map((n) => n[0])
			.join('')
			.slice(0, 2)
			.toUpperCase();
	}

	const avatarColors = ['bg-brand-500', 'bg-accent-500', 'bg-gray-700'];

	const loopedTestimonials = [...testimonials, ...testimonials];
</script>

{#snippet googleLogo()}
	<svg width="18" height="18" viewBox="0 0 24 24">
		<path
			fill="#4285F4"
			d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
		/>
		<path
			fill="#34A853"
			d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
		/>
		<path
			fill="#FBBC05"
			d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
		/>
		<path
			fill="#EA4335"
			d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
		/>
	</svg>
{/snippet}

{#snippet card(testimonial: Testimonial, index: number)}
	<div
		class="flex flex-col gap-4 bg-white border border-black/10 rounded-2xl p-6 w-[340px] sm:w-[380px] shrink-0"
	>
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-3">
				<span
					class="w-11 h-11 rounded-full flex items-center justify-center text-white font-semibold text-[14px] shrink-0 {avatarColors[
						index % avatarColors.length
					]}"
				>
					{initials(testimonial.name)}
				</span>
				<div>
					<p class="font-heading font-semibold text-[15px] leading-tight">{testimonial.name}</p>
					<p class="text-gray-500 text-[13px]">{testimonial.role}</p>
				</div>
			</div>
			{@render googleLogo()}
		</div>

		<div class="flex gap-0.5">
			{#each Array(testimonial.rating) as _, i (i)}
				<Star class="text-amber-400 fill-amber-400" size={16} />
			{/each}
		</div>

		<p class="font-body text-[14px] text-gray-600 leading-relaxed">
			{testimonial.quote}
		</p>

		<p class="text-gray-400 text-[12px] mt-auto">Posted on Google</p>
	</div>
{/snippet}

<section class="py-20 md:py-24">
	<div class="control mx-2">
		<div class="flex flex-col items-center text-center gap-3 mb-10 md:mb-12 max-w-xl mx-auto">
			<span
				class="text-brand-500 font-heading font-semibold text-[13px] md:text-[14px] tracking-wide"
			>
				TESTIMONIALS
			</span>
			<h2 class="text-3xl sm:text-4xl md:text-[36px] font-heading font-bold">
				What our clients say
			</h2>

			<div class="flex items-center gap-2 mt-1">
				{@render googleLogo()}
				<span class="font-heading font-semibold text-[15px]">4.9</span>
				<div class="flex gap-0.5">
					{#each Array(5) as _, i (i)}
						<Star class="text-amber-400 fill-amber-400" size={14} />
					{/each}
				</div>
				<span class="text-gray-500 text-[13px]">from 120+ reviews</span>
			</div>
		</div>

		<div class="marquee-wrap">
			<div class="marquee-track">
				{#each loopedTestimonials as testimonial, i (i)}
					{@render card(testimonial, i)}
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.marquee-wrap {
		overflow: hidden;
		width: 100%;
		mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
	}

	.marquee-track {
		display: flex;
		gap: 1.25rem;
		width: max-content;
		animation: marquee-scroll 40s linear infinite;
	}

	.marquee-wrap:hover .marquee-track {
		animation-play-state: paused;
	}

	@keyframes marquee-scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}
</style>
