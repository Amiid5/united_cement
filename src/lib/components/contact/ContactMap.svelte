<script lang="ts">
	import { MapPin, Navigation } from '@lucide/svelte';
</script>

<div class="bg-white border border-black/10 rounded-2xl overflow-hidden flex flex-col h-full mx-2">
	<div class="relative w-full h-[220px] sm:h-[260px] lg:flex-1 bg-gray-100 overflow-hidden">
		<div
			class="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
		>
			<MapPin size={36} class="text-gray-400" />
		</div>
	</div>

	<div class="p-5 sm:p-6 flex flex-col gap-4">
		<div>
			<h3 class="font-heading font-semibold text-[16px]">United Cement Company — Main office</h3>
			<p class="font-body text-[13px] text-gray-500 mt-1">KM4, Mogadishu, Somalia</p>
		</div>

		<a
			href="https://www.google.com/maps/search/?api=1&query=KM4+Mogadishu+Somalia"
			target="_blank"
			rel="noopener noreferrer"
			class="group flex items-center justify-center gap-2 border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white font-heading font-semibold text-[14px] px-4 py-2.5 rounded-lg transition-colors duration-300"
		>
			<Navigation size={16} />
			Get directions
		</a>
	</div>
</div>
