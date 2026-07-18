<script lang="ts">
	import { page } from '$app/state';
	import { ArrowLeft, Home, TriangleAlert } from '@lucide/svelte';
	import { onDestroy, onMount } from 'svelte';

	let ctx: any;
	let iconEl: HTMLElement;
	let codeEl: HTMLElement;
	let textEl: HTMLElement;
	let btnEl: HTMLElement;

	// Friendly fallback messages depending on status code
	const status = $derived(page.status);
	const message = $derived(
		page.error?.message ??
			(status === 404
				? "This page doesn't exist — it may have been moved or removed."
				: 'Something went wrong on our end. Please try again shortly.')
	);

	onMount(() => {
		(async () => {
			const { gsap } = await import('gsap');

			ctx = gsap.context(() => {
				gsap.set(iconEl, { scale: 0.5, opacity: 0, rotate: -15 });
				gsap.set(codeEl, { y: 30, opacity: 0 });
				gsap.set(textEl.children, { y: 20, opacity: 0 });
				gsap.set(btnEl.children, { y: 20, opacity: 0 });

				const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

				tl.to(iconEl, {
					scale: 1,
					opacity: 1,
					rotate: 0,
					duration: 0.7,
					ease: 'back.out(1.7)' // slight overshoot bounce — feels playful, fits a 404 page
				})
					.to(
						codeEl,
						{
							y: 0,
							opacity: 1,
							duration: 0.6
						},
						'-=0.3' // overlaps the previous tween by 0.3s
					)
					.to(
						textEl.children,
						{
							y: 0,
							opacity: 1,
							duration: 0.6,
							stagger: 0.1
						},
						'-=0.3'
					)
					.to(
						btnEl.children,
						{
							y: 0,
							opacity: 1,
							duration: 0.5,
							stagger: 0.1
						},
						'-=0.25'
					);
			});
		})();

		onDestroy(() => {
			ctx?.revert();
		});
	});
</script>

<svelte:head>
	<title>{status === 404 ? 'Page Not Found' : 'Error'} | United Cement</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="min-h-[80vh] flex items-center justify-center px-4 py-16 relative overflow-hidden">
	<div class="error-decor" aria-hidden="true"></div>

	<div class="flex flex-col items-center text-center gap-6 max-w-lg relative">
		<div
			bind:this={iconEl}
			class="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-brand-50 text-brand-500"
		>
			<TriangleAlert size={36} strokeWidth={2} />
		</div>

		<span
			bind:this={codeEl}
			class="font-heading font-extrabold text-brand-500 text-7xl sm:text-8xl leading-none"
		>
			{status}
		</span>

		<div bind:this={textEl} class="flex flex-col gap-2">
			<h1 class="font-heading font-bold text-2xl sm:text-3xl text-ink">
				{status === 404 ? 'Page not found' : 'Something went wrong'}
			</h1>
			<p class="font-body text-[15px] text-gray-500 leading-relaxed">
				{message}
			</p>
		</div>

		<div bind:this={btnEl} class="flex flex-col sm:flex-row gap-3 mt-2 w-full sm:w-auto">
			<a
				href="/"
				class="flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-heading font-semibold text-[14px] px-6 py-3 rounded-lg transition-colors"
			>
				<Home size={18} />
				Back to home
			</a>

			<button
				onclick={() => history.back()}
				class="flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-brand-500 hover:text-brand-500 text-gray-600 font-heading font-semibold text-[14px] px-6 py-3 rounded-lg transition-colors"
			>
				<ArrowLeft size={18} />
				Go back
			</button>
		</div>
	</div>
</section>

<style>
	.error-decor {
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at 50% 30%, #5a9e1512 0%, transparent 60%);
		pointer-events: none;
		z-index: -1;
	}
</style>
