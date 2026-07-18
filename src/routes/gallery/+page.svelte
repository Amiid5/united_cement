<script lang="ts">
	import { ChevronRight, X, ImageOff } from '@lucide/svelte';

	interface Photo {
		src: string;
		alt: string;
	}

	interface Block {
		id: number;
		title: string;
		category: string;
		photos: Photo[];
	}

	function photos(start: number, end: number, alt: string): Photo[] {
		const list: Photo[] = [];
		for (let i = start; i <= end; i++) {
			list.push({ src: `/report/image${i}.jpg`, alt: `${alt} — photo ${i}` });
		}
		return list;
	}

	const blocks: Block[] = [
		{
			id: 1,
			title: 'Port operations & warehousing',
			category: 'Port',
			photos: photos(1, 5, 'Port operations and warehousing')
		},
		{
			id: 2,
			title: 'Vessel discharge & loading operations',
			category: 'Vessel',
			photos: photos(6, 10, 'Vessel discharge and loading')
		},
		{
			id: 3,
			title: 'Port & vessel activities',
			category: 'Port',
			photos: photos(11, 15, 'Port and vessel activities')
		},
		{
			id: 4,
			title: 'Cargo handling & warehousing',
			category: 'Cargo',
			photos: photos(16, 19, 'Cargo handling and warehousing')
		},
		{
			id: 5,
			title: 'Cement bale transport',
			category: 'Transport',
			photos: photos(20, 24, 'Cement bale transport')
		},
		{
			id: 6,
			title: 'Loading & office operations',
			category: 'Cargo',
			photos: photos(25, 28, 'Loading and office operations')
		},
		{
			id: 7,
			title: 'Site facilities & steel materials',
			category: 'Facilities',
			photos: photos(29, 33, 'Site facilities and steel materials')
		},
		{
			id: 8,
			title: 'Reinforcement steel & cement bags',
			category: 'Facilities',
			photos: photos(34, 37, 'Reinforcement steel and cement bags')
		},
		{
			id: 9,
			title: 'Quality control & branded cement bags',
			category: 'Quality',
			photos: photos(38, 42, 'Quality control and branded cement bags')
		},
		{
			id: 10,
			title: 'UCC merchandise & bagging',
			category: 'Quality',
			photos: photos(43, 46, 'UCC merchandise and bagging')
		},
		{
			id: 11,
			title: 'Warehouse storage & cement stock',
			category: 'Warehouse',
			photos: photos(47, 52, 'Warehouse storage and cement stock')
		},
		{
			id: 12,
			title: 'Transport & vessel hold operations',
			category: 'Transport',
			photos: photos(53, 57, 'Transport and vessel hold operations')
		},
		{
			id: 13,
			title: 'Cargo hold & warehouse interior',
			category: 'Warehouse',
			photos: photos(58, 61, 'Cargo hold and warehouse interior')
		},
		{
			id: 14,
			title: 'Warehouse stock & cement delivery',
			category: 'Warehouse',
			photos: photos(62, 65, 'Warehouse stock and cement delivery')
		},
		{
			id: 15,
			title: 'Steel rebar transport',
			category: 'Transport',
			photos: photos(66, 69, 'Steel rebar transport')
		}
	];

	const categories = [
		'All',
		'Port',
		'Vessel',
		'Cargo',
		'Transport',
		'Facilities',
		'Quality',
		'Warehouse'
	];

	let activeCategory = $state('All');
	let lightboxSrc = $state<string | null>(null);
	let lightboxAlt = $state('');
	let failedImages = $state(new Set<string>());
	let lightboxFailed = $state(false);

	const filteredBlocks = $derived(
		activeCategory === 'All' ? blocks : blocks.filter((b) => b.category === activeCategory)
	);

	function openLightbox(src: string, alt: string) {
		lightboxSrc = src;
		lightboxAlt = alt;
		lightboxFailed = failedImages.has(src);
	}

	function closeLightbox() {
		lightboxSrc = null;
	}

	function markFailed(src: string) {
		failedImages.add(src);
		failedImages = new Set(failedImages);
	}
</script>

<div class="bg-gray-50 border-b border-black/8 mx-2">
	<div class="control mx-2 py-10 sm:py-12">
		<div class="flex items-center gap-1.5 text-[13px] text-gray-500 mb-4">
			<a href="/" class="hover:text-brand-500 transition-colors">Home</a>
			<ChevronRight size={14} />
			<span class="text-gray-800">Gallery</span>
		</div>

		<h1 class="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold">Our operations</h1>

		<p class="text-[14px] sm:text-[15px] font-body text-gray-600 max-w-2xl mt-3 leading-relaxed">
			United Cement Company (UCC) — operating entirely across Somalia and Somaliland. A look at our
			ports, warehouses, transport, and quality control in action.
		</p>
	</div>
</div>

<section class="control mx-2 py-10 sm:py-12">
	<div class="mx-2">
		<div class="flex items-center gap-2 mb-10 overflow-x-auto pb-1">
			{#each categories as cat, i (i)}
				<button
					onclick={() => (activeCategory = cat)}
					class="shrink-0 px-4 py-2 rounded-lg text-[14px] font-heading font-semibold transition-colors {activeCategory ===
					cat
						? 'bg-brand-500 text-white'
						: 'border border-black/10 text-gray-600 hover:bg-gray-50'}"
				>
					{cat}
				</button>
			{/each}
		</div>

		<div class="flex flex-col gap-12 sm:gap-14">
			{#each filteredBlocks as block (block.id)}
				<div class="flex flex-col gap-4">
					<div class="flex items-center gap-3">
						<span
							class="w-8 h-8 rounded-lg bg-brand-500/10 text-brand-600 font-heading font-bold text-[13px] flex items-center justify-center shrink-0"
						>
							{block.id}
						</span>
						<h2 class="font-heading font-bold text-[17px] sm:text-[18px]">{block.title}</h2>
					</div>

					<div class="columns-2 sm:columns-3 lg:columns-5 gap-3 sm:gap-4">
						{#each block.photos as photo, i (i)}
							<button
								onclick={() => openLightbox(photo.src, photo.alt)}
								class="group relative w-full mb-3 sm:mb-4 rounded-xl overflow-hidden bg-gray-100 border border-black/8 block break-inside-avoid"
							>
								{#if !failedImages.has(photo.src)}
									<img
										src={photo.src}
										alt={photo.alt}
										class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
										onerror={() => markFailed(photo.src)}
										loading="lazy"
									/>
								{:else}
									<div
										class="w-full aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
									>
										<ImageOff size={22} class="text-gray-400" />
									</div>
								{/if}
								<div
									class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
								></div>
							</button>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

{#if lightboxSrc}
	<div
		class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4 sm:p-8 mx-2"
		onclick={closeLightbox}
		onkeydown={(e) => e.key === 'Escape' && closeLightbox()}
		role="button"
		tabindex="0"
		aria-label="Close image"
	>
		<button
			onclick={(e) => {
				e.stopPropagation();
				closeLightbox();
			}}
			class="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
			aria-label="Close"
		>
			<X size={20} />
		</button>

		<div
			class="max-w-4xl max-h-[85vh] w-full flex items-center justify-center"
			onclick={(e) => e.stopPropagation()}
			role="presentation"
		>
			{#if !lightboxFailed}
				<img
					src={lightboxSrc}
					alt={lightboxAlt}
					class="max-w-full max-h-[85vh] object-contain rounded-lg"
					onerror={() => (lightboxFailed = true)}
				/>
			{:else}
				<div
					class="w-full aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center"
				>
					<ImageOff size={32} class="text-gray-400" />
				</div>
			{/if}
		</div>
	</div>
{/if}
