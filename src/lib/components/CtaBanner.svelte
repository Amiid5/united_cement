<script lang="ts">
	import { quoteModal } from '$lib/state/quoteModal.svelte';
	import { ArrowRight } from '@lucide/svelte';
	import { onDestroy, onMount } from 'svelte';

	let ctx: any;
	let textEl: HTMLElement;
	let btnEl: HTMLElement;

	onMount(() => {
		(async () => {
			const { gsap } = await import('gsap');
			const { ScrollTrigger } = await import('gsap/ScrollTrigger');
			gsap.registerPlugin(ScrollTrigger);

			ctx = gsap.context(() => {
				gsap.set(textEl, { x: -60, opacity: 0 });
				gsap.set(btnEl, { x: 60, opacity: 0 });

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: textEl,
						start: 'top 80%',
						once: true
					}
				});

				tl.to(textEl, {
					x: 0,
					opacity: 1,
					duration: 0.9,
					ease: 'power3.out'
				}).to(
					btnEl,
					{
						x: 0,
						opacity: 1,
						duration: 0.9,
						ease: 'power3.out'
					},
					'<0.15' // starts 0.15s after the previous tween begins, not after it ends
				);
			});
		})();

		onDestroy(() => {
			ctx?.revert();
		});
	});
</script>

<section class="bg-[#1a1a1a] py-16 px-4 overflow-x-hidden">
	<div class="flex items-center justify-between flex-wrap gap-6 control">
		<div bind:this={textEl} class="flex flex-col gap-2 max-w-xl">
			<h2 class="text-white text-[32px] font-extrabold">Ready to order in bulk?</h2>
			<p class="text-gray-400 text-[15px]">
				Get a custom quote today — contractor pricing, silo delivery, and dedicated account support.
			</p>
		</div>

		<button
			bind:this={btnEl}
			onclick={() => quoteModal.show()}
			class="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
		>
			Get a Custom Quote
			<ArrowRight size={18} />
		</button>
	</div>
</section>
