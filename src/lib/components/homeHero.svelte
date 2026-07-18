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

<section class=" relative">
	<div class="left-decor"></div>
	<div class="flex control gap-20 items-center">
		<div bind:this={leftEl}>
			<img src="SRC Bag.png" alt="" width="600" height="1080" />
		</div>

		<div class="max-w-[500px] w-full flex flex-col gap-6 items-start" bind:this={middleEl}>
			<h1 class="text-8xl leading-[80px] capitalize -ml-6">
				welcome to <span class="text-brand-500 font-heading"> united cement </span>
			</h1>

			<p class="">
				Premium quality cement for residential, commercial, and infrastructure projects. Lab-tested,
				and delivered on time — every time.
			</p>

			<div class="flex gap-10">
				<a
					href="/"
					class="flex gap-2 bg-brand-500 items-center text-white py-3 rounded capitalize font-heading font-semibold px-6"
				>
					browse all <ArrowRight size={20} />
				</a>
				<a
					href="/"
					class="flex gap-2 bg-gold-500 items-center py-3 rounded capitalize font-heading font-semibold px-6"
				>
					<Phone /> contact sales
				</a>
			</div>

			<div class="flex gap-10">
				<span class="flex gap-2">
					<Award class="text-brand-500" />
					Premium Quality Materials
				</span>

				<span class="flex gap-2">
					<Truck class="text-blue-500" />
					Fast Nationwide Delivery
				</span>
			</div>
		</div>

		<div bind:this={rightEl}>
			<img src="truck.jpeg" alt="" width="700" class="rounded-2xl" />
		</div>
	</div>
	<div class="right-decor"></div>
</section>

<style>
	.left-decor {
		position: absolute;
		width: 600px;
		height: 600px;
		top: -50px;
		left: -100px;
		background: #5a9e153c;
		filter: blur(100px);
	}
	.right-decor {
		position: absolute;
		width: 600px;
		height: 600px;
		top: -50px;
		right: -100px;
		background: #5a9e151a;
		filter: blur(100px);
	}
</style>
