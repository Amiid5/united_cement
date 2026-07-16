<script>
	import { ArrowRight, Award, Phone, Truck } from '@lucide/svelte';
</script>

<section class="control px-3 sm:px-4 md:mt-10">
	<div class="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 sm:gap-10 lg:gap-8 items-center">
		<div class="flex flex-col gap-4 sm:gap-5">
			<span
				class="font-medium font-heading text-[12px] sm:text-[13px] md:text-[14px] text-brand-500 bg-brand-500/10 w-fit px-2.5 sm:px-3 py-1.5 rounded-full"
			>
				Trusted by 1,200+ contractors nationwide
			</span>

			<h1
				class="font-bold text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading capitalize leading-[1.15] sm:leading-[1.1] lg:leading-[1.05]"
			>
				Strong foundations <span class="text-brand-500">start here</span>
			</h1>

			<p
				class="text-[14px] sm:text-[15px] md:text-[16px] font-body text-gray-600 max-w-lg leading-relaxed"
			>
				Premium quality cement for residential, commercial, and infrastructure projects. Lab-tested,
				and delivered on time — every time.
			</p>

			<div class="flex flex-wrap items-center gap-2.5 sm:gap-3 md:gap-4 mt-1">
				<a
					href="/"
					class="group bg-brand-500 w-full md:w-fit hover:bg-brand-600 text-white text-[13px] sm:text-[14px] font-semibold font-heading flex gap-2 justify-center md:items-center px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg transition-colors"
				>
					Browse Products
					<ArrowRight
						strokeWidth={1.8}
						size={16}
						class="transition-transform group-hover:translate-x-0.5"
					/>
				</a>
				<a
					href="/"
					class="flex gap-2 justify-center md:items-center w-full md:w-fit border-2 px-4 py-[9px] sm:px-5 sm:py-[10px] rounded-lg text-accent-500 border-accent-500 hover:bg-accent-500 hover:text-white font-heading font-semibold text-[13px] sm:text-[14px] transition-colors duration-300"
				>
					<Phone strokeWidth={1.8} size={16} />
					Contact Sales
				</a>
			</div>

			<div
				class="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2.5 sm:gap-y-3 items-center text-[13px] sm:text-[14px] font-body text-gray-700 mt-2 sm:mt-3"
			>
				<span class="flex gap-2 items-center">
					<Award size={16} class="text-brand-500 shrink-0" />
					Premium Quality Materials
				</span>
				<span class="flex gap-2 items-center">
					<Truck size={16} class="text-accent-500 shrink-0" />
					Fast Nationwide Delivery
				</span>
			</div>
		</div>

		<div
			class="relative w-full h-[220px] xs:h-[260px] sm:h-[320px] lg:h-[460px] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100"
		>
			<div class="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300"></div>
		</div>
	</div>
</section>
