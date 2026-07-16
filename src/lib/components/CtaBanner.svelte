<script lang="ts">
	import { quoteModal } from '$lib/state/quoteModal.svelte';
	import { ArrowRight } from '@lucide/svelte';
</script>

<section class="bg-[#1a1a1a] py-16 px-4">
	<div class="flex items-center justify-between flex-wrap gap-6 control">
		<div class="flex flex-col gap-2 max-w-xl">
			<h2 class="text-white text-[32px] font-extrabold">Ready to order in bulk?</h2>
			<p class="text-gray-400 text-[15px]">
				Get a custom quote today — contractor pricing, silo delivery, and dedicated account support.
			</p>
		</div>

		<button
			onclick={() => quoteModal.show()}
			class="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
		>
			Get a Custom Quote
			<ArrowRight size={18} />
		</button>
	</div>
</section>
