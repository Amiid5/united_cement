<script lang="ts">
	import { quoteModal } from '$lib/state/quoteModal.svelte';
	import {
		Target,
		Eye,
		HeartHandshake,
		ShieldCheck,
		Users,
		ArrowRight,
		Ship,
		MapPin,
		ClipboardCheck,
		Tags
	} from '@lucide/svelte';

	const values = [
		{
			icon: ShieldCheck,
			title: 'Quality first',
			desc: 'Every batch of cement and steel is checked before it leaves our warehouse — no shortcuts.',
			bg: 'bg-brand-500'
		},
		{
			icon: HeartHandshake,
			title: 'Built on trust',
			desc: 'Long-term relationships with contractors and builders across Somalia and Somaliland.',
			bg: 'bg-accent-500'
		},
		{
			icon: Ship,
			title: 'Port to project',
			desc: 'We manage the full chain — vessel discharge, warehousing, and delivery to your site.',
			bg: 'bg-brand-500'
		},
		{
			icon: Users,
			title: 'People powered',
			desc: 'A team across three branches who know construction and logistics from the ground up.',
			bg: 'bg-accent-500'
		}
	];

	const stats = [
		{ value: '3', label: 'Branches nationwide' },
		{ value: '2', label: 'Countries served' },
		{ value: '9', label: 'Products offered' },
		{ value: '2', label: 'Material categories' }
	];

	const qualitySteps = [
		{
			icon: Ship,
			title: 'Port receiving',
			desc: 'Vessels are discharged and cargo inspected on arrival at port.'
		},
		{
			icon: ClipboardCheck,
			title: 'Quality checks',
			desc: 'Cement and steel are checked for consistency before warehousing.'
		},
		{
			icon: Tags,
			title: 'Branded & bagged',
			desc: 'Products are packaged and labeled under the UCC brand for traceability.'
		}
	];
</script>

<!-- 1. Hero -->
<div class="bg-gray-50 border-b border-black/8 -mt-20 mx-2">
	<div class="control mx-2 py-16 sm:py-20 lg:py-24">
		<div class="flex flex-col items-start gap-5 max-w-2xl">
			<h1 class="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold leading-[1.1]">
				About <span class="text-brand-500">United Cement</span> Company
			</h1>
			<p class="text-[15px] sm:text-[16px] font-body text-gray-600 leading-relaxed">
				United Cement Company (UCC) supplies reinforcement steel and premium cement to contractors
				and builders — operating entirely across Somalia and Somaliland, from port to project site.
			</p>
		</div>
	</div>
</div>

<!-- 2. Story + image -->
<section class=" mx-2 py-16 sm:py-20">
	<div class="control">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
			<div
				class="relative w-full h-[260px] sm:h-[360px] lg:h-[440px] rounded-2xl overflow-hidden bg-gray-100 order-2 lg:order-1"
			>
				<div
					class="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
				>
					<img src="logo/LOGO-v1.svg" alt="" />
				</div>
			</div>

			<div class="flex flex-col gap-5 order-1 lg:order-2">
				<span class="text-brand-500 font-heading text-[13px] font-bold tracking-wide">
					OUR STORY
				</span>
				<h2 class="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold leading-tight">
					From the port to the build site
				</h2>
				<p class="text-[14px] sm:text-[15px] font-body text-gray-600 leading-relaxed">
					UCC handles the full supply chain — receiving vessels at port, warehousing cement and
					steel, and transporting materials directly to contractors across the region. Our
					operations span port handling, cargo discharge, warehouse storage, and last-mile delivery.
				</p>
				<p class="text-[14px] sm:text-[15px] font-body text-gray-600 leading-relaxed">
					Today we supply reinforcement steel bars (Grade B500B) and two grades of cement — Ordinary
					Portland Cement and Sulphate Resistant Cement — to residential, commercial, and
					infrastructure projects nationwide.
				</p>

				<div class="flex items-center gap-2 text-[14px] font-body text-gray-700 mt-2">
					<MapPin size={16} class="text-brand-500 shrink-0" />
					Main office in Mogadishu, with branches in Hargeisa and Boosaaso
				</div>

				<a
					href="/gallery"
					class="group flex items-center gap-1.5 w-fit text-accent-500 font-heading font-semibold text-[14px] hover:underline mt-1"
				>
					See our operations in photos
					<ArrowRight size={15} class="transition-transform group-hover:translate-x-0.5" />
				</a>
			</div>
		</div>
	</div>
</section>

<!-- 3. Mission / Vision -->
<section class="bg-gray-50 border-y border-black/8 mx-2">
	<div class="control mx-2 py-16 sm:py-20">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
			<div class="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-4">
				<span
					class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-500 text-white shrink-0"
				>
					<Target size={22} />
				</span>
				<h3 class="font-heading font-bold text-xl sm:text-2xl">Our mission</h3>
				<p class="text-[14px] sm:text-[15px] font-body text-gray-600 leading-relaxed">
					To supply reliable, quality-checked cement and steel to every corner of Somalia and
					Somaliland — backed by a logistics network that gets materials from port to project on
					time.
				</p>
			</div>

			<div class="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-4">
				<span
					class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-500 text-white shrink-0"
				>
					<Eye size={22} />
				</span>
				<h3 class="font-heading font-bold text-xl sm:text-2xl">Our vision</h3>
				<p class="text-[14px] sm:text-[15px] font-body text-gray-600 leading-relaxed">
					To be the most trusted supplier of construction materials in the region — known for
					consistency, reliable delivery, and materials builders can count on.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- 4. Values -->
{#snippet valueCard(title: string, desc: string, Icon: typeof Target, bgColor: string)}
	<div
		class="flex flex-col gap-3 bg-white border border-black/10 rounded-2xl hover:border-brand-500 hover:shadow-lg cursor-pointer hover:-translate-y-1 duration-300 transition-all p-6"
	>
		<span
			class="inline-flex items-center justify-center w-12 h-12 rounded-xl text-white shrink-0 {bgColor}"
		>
			<Icon size={22} />
		</span>
		<h3 class="font-heading font-semibold text-[17px]">{title}</h3>
		<p class="font-body text-[13px] text-gray-500 leading-relaxed">{desc}</p>
	</div>
{/snippet}

<section class=" mx-2 py-16 sm:py-20 flex flex-col gap-12">
	<div class="control">
		<div class="flex flex-col items-center text-center gap-3 max-w-xl mx-auto">
			<span class="text-brand-500 font-heading font-semibold text-[13px] tracking-wide">
				WHAT WE STAND FOR
			</span>
			<h2 class="text-2xl sm:text-3xl md:text-4xl font-heading font-bold leading-tight">
				Our core values
			</h2>
			<p class="text-[14px] font-body text-gray-600">
				The principles that guide every delivery, from port to project.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-10">
			{#each values as v, i (i)}
				{@render valueCard(v.title, v.desc, v.icon, v.bg)}
			{/each}
		</div>
	</div>
</section>

<!-- 5. Stats + Quality process + CTA -->
<section class="bg-gray-50 border-t border-black/8 mx-2">
	<div class="control mx-2 py-16 sm:py-20 flex flex-col gap-16">
		<!-- stats bar -->
		<div
			class="grid grid-cols-2 lg:grid-cols-4 bg-white border border-black/8 rounded-2xl shadow-sm divide-x divide-y lg:divide-y-0 divide-black/8"
		>
			{#each stats as s, i (i)}
				<div class="flex flex-col items-center justify-center text-center gap-1 px-4 py-6 sm:py-8">
					<span class="font-heading font-bold text-2xl sm:text-3xl text-brand-500">{s.value}</span>
					<span class="font-body text-[13px] text-gray-500">{s.label}</span>
				</div>
			{/each}
		</div>

		<!-- quality process -->
		<div class="flex flex-col gap-10 mx-2">
			<div class="flex flex-col items-center text-center gap-3 max-w-xl mx-auto">
				<span class="text-brand-500 font-heading font-semibold text-[13px] tracking-wide">
					QUALITY CONTROL
				</span>
				<h2 class="text-2xl sm:text-3xl md:text-4xl font-heading font-bold leading-tight">
					From vessel to warehouse
				</h2>
				<p class="text-[14px] font-body text-gray-600">
					Every shipment passes through the same checks before it reaches a project site.
				</p>
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
				{#each qualitySteps as step, i (i)}
					<div
						class="flex items-center gap-4 bg-white border border-black/10 rounded-2xl p-5 sm:p-6"
					>
						<span
							class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-500/10 text-brand-500 shrink-0"
						>
							<step.icon size={22} />
						</span>
						<div>
							<h4 class="font-heading font-semibold text-[15px]">{step.title}</h4>
							<p class="font-body text-[13px] text-gray-500 mt-0.5">{step.desc}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- CTA -->
		<div
			class="bg-[#1a1a1a] rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left mx-2"
		>
			<div class="flex flex-col gap-2">
				<h3 class="text-white text-xl sm:text-2xl font-heading font-bold">Want to work with us?</h3>
				<p class="text-gray-400 text-[14px] font-body">
					Get a custom quote for your next project — cement, steel, or both.
				</p>
			</div>
			<button
				onclick={() => quoteModal.show()}
				class="group bg-brand-500 hover:bg-brand-600 text-white font-semibold font-heading text-[14px] flex items-center gap-2 px-5 py-3 rounded-lg transition-colors shrink-0"
			>
				Get a Custom Quote
				<ArrowRight size={16} class="transition-transform group-hover:translate-x-0.5" />
			</button>
		</div>
	</div>
</section>
