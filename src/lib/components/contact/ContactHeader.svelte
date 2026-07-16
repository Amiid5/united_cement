<script lang="ts">
	import { ChevronRight } from '@lucide/svelte';
</script>

<div class="bg-gray-50 border-b border-black/8 mb-20 -mt-16 mx-2">
	<div class="control mx-2 py-10 sm:py-12">
		<div class="flex items-center gap-1.5 text-[13px] text-gray-500 mb-4">
			<a href="/" class="hover:text-brand-500 transition-colors">Home</a>
			<ChevronRight size={14} />
			<span class="text-gray-800">Contact</span>
		</div>

		<h1 class="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold">Get in touch</h1>

		<p class="text-[14px] sm:text-[15px] font-body text-gray-600 max-w-2xl mt-3 leading-relaxed">
			Have a project coming up or need a bulk quote? Our team responds within one business day —
			usually much sooner.
		</p>
	</div>
</div>
