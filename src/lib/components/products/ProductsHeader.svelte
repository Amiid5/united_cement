<script lang="ts">
	import { ChevronRight } from '@lucide/svelte';
</script>

<div class="bg-gray-50 border-b border-black/8 mx-2">
	<div class="control mx-2 py-10 sm:py-12">
		<div class="flex items-center gap-1.5 text-[13px] text-gray-500 mb-4">
			<a href="/" class="hover:text-brand-500 transition-colors">Home</a>
			<ChevronRight size={14} />
			<span class="text-gray-800">Products</span>
		</div>

		<h1 class="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold">Our Products</h1>

		<p class="text-[14px] sm:text-[15px] font-body text-gray-600 max-w-2xl mt-3 leading-relaxed">
			Premium cement and steel grades engineered for every application — from residential plaster to
			bulk infrastructure supply. All prices exclude taxes; bulk discounts available on request.
		</p>
	</div>
</div>
