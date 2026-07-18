<script lang="ts">
	import { ArrowRight, Award, Phone, Truck } from '@lucide/svelte';
	import { onDestroy, onMount } from 'svelte';

	let ctx: any;
	let leftEl: HTMLElement; // bag image
	let rightEl: HTMLElement; // truck image
	let middleEl: HTMLElement; // wrapper for text column

	onMount(() => {
		(async () => {
			const { gsap } = await import('gsap');

			ctx = gsap.context(() => {
				const middleChildren = middleEl.children; // h1, p, div, div

				const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

				tl.from(
					middleChildren,
					{
						opacity: 0,
						y: 20,
						stagger: 0.15,
						duration: 0.5
					},
					'start'
				)
					.from(
						leftEl,
						{
							x: -80,
							opacity: 0,
							duration: 0.6
						},
						'start+=0.2'
					)
					.from(
						rightEl,
						{
							x: 80,
							opacity: 0,
							duration: 0.6
						},
						'start+=0.2'
					); // same position as left = they animate together
			});
		})();
	});

	onDestroy(() => ctx?.revert());
</script>

<div class="relative overflow-x-clip">
	<div class="decor-layer" aria-hidden="true">
		<div class="left-decor"></div>
		<div class="right-decor"></div>
	</div>

	<section class="relative pt-10 pb-10 lg:pb-0">
		<div class="mx-2 relative">
			<div
				class="flex flex-col lg:flex-row control gap-8 sm:gap-10 lg:gap-6 xl:gap-12 2xl:gap-16 items-center"
			>
				<div
					bind:this={leftEl}
					class="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[340px] lg:w-[22%] lg:max-w-[240px] xl:max-w-[340px] 2xl:max-w-[450px] shrink-0"
				>
					<img src="SRC Bag.png" alt="" width="600" height="1080" class="w-full h-auto" />
				</div>

				<div
					class="max-w-[500px] w-full min-w-0 flex-1 flex flex-col gap-4 sm:gap-5 lg:gap-6 items-center lg:items-start text-center lg:text-left"
					bind:this={middleEl}
				>
					<h1
						class="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl 2xl:text-7xl leading-tight lg:leading-[1.1] capitalize"
					>
						welcome to <span class="text-brand-500 font-heading"> united cement </span> company
					</h1>

					<p class="text-sm sm:text-base px-2 sm:px-0">
						Premium quality cement for residential, commercial, and infrastructure projects.
						Lab-tested, and delivered on time — every time.
					</p>

					<div
						class="flex flex-col sm:flex-row gap-3 sm:gap-6 lg:gap-4 xl:gap-10 w-full sm:w-auto px-4 sm:px-0"
					>
						<a
							href="/products"
							class="flex gap-2 bg-brand-500 items-center justify-center text-white py-3 rounded capitalize font-heading font-semibold px-6 whitespace-nowrap"
						>
							browse all <ArrowRight size={20} />
						</a>

						<a
							href="/contact"
							class="flex gap-2 bg-gold-500 items-center justify-center py-3 rounded capitalize font-heading font-semibold px-6 whitespace-nowrap"
						>
							<Phone size={20} /> contact sales
						</a>
					</div>

					<div class="flex flex-col sm:flex-row gap-3 sm:gap-6 lg:gap-4 xl:gap-10">
						<span class="flex items-center justify-center gap-2 text-sm sm:text-base">
							<Award class="text-brand-500 shrink-0" size={20} />
							Premium Quality Materials
						</span>

						<span class="flex items-center justify-center gap-2 text-sm sm:text-base">
							<Truck class="text-blue-500 shrink-0" size={20} />
							Fast Nationwide Delivery
						</span>
					</div>
				</div>

				<div
					bind:this={rightEl}
					class="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[440px] lg:w-[26%] lg:max-w-[280px] xl:max-w-[420px] 2xl:max-w-[550px] shrink-0"
				>
					<img src="truck.jpeg" alt="" width="700" class="w-full h-auto rounded-2xl" />
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	/* Sits outside <section>, as a sibling layer above it, so it can bleed
	   past the section's top edge freely. overflow-x-clip on the parent
	   wrapper still guarantees zero horizontal scroll, without clipping
	   vertically (unlike overflow-hidden, which clips both axes). */
	.decor-layer {
		position: absolute;
		inset: 0;
		z-index: -1;
		pointer-events: none;
	}

	.left-decor,
	.right-decor {
		position: absolute;
		width: clamp(220px, 40vw, 640px);
		height: clamp(220px, 40vw, 640px);
		top: clamp(-120px, -12vw, -60px);
		background: radial-gradient(circle, #5a9e15 0%, #5a9e1500 70%);
		filter: blur(70px);
		opacity: 0.35;
	}

	.left-decor {
		left: clamp(-140px, -10vw, -60px);
	}

	.right-decor {
		right: clamp(-140px, -10vw, -60px);
	}

	@media (max-width: 640px) {
		.left-decor,
		.right-decor {
			opacity: 0.25;
			filter: blur(50px);
		}
	}
</style>
