<script lang="ts">
	import { X, Send } from '@lucide/svelte';
	import { quoteModal } from '$lib/state/quoteModal.svelte';

	let material = $state('cement');
	let fullName = $state('');
	let companyName = $state('');
	let phone = $state('');
	let email = $state('');
	let city = $state('');
	let quantity = $state('');
	let notes = $state('');

	$effect(() => {
		if (quoteModal.product) {
			material = quoteModal.product.category;
		}
	});
</script>

{#if quoteModal.open}
	<button
		class="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
		onclick={() => quoteModal.close()}
		aria-label="Close modal"
	></button>

	<div
		class="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-4 pointer-events-none"
	>
		<div
			class="pointer-events-auto bg-white w-full sm:max-w-[520px] sm:rounded-2xl rounded-t-2xl max-h-[92vh] overflow-y-auto shadow-2xl"
		>
			<div
				class="flex items-start justify-between gap-4 px-5 sm:px-6 pt-5 sm:pt-6 pb-4 border-b border-black/8 sticky top-0 bg-white z-10"
			>
				<div>
					<h2 class="font-heading font-bold text-xl sm:text-2xl">Request a quote</h2>
					<p class="font-body text-[13px] text-gray-500 mt-1">
						{#if quoteModal.product}
							For {quoteModal.product.title}
						{:else}
							Tell us what you need and we'll get back to you.
						{/if}
					</p>
				</div>
				<button
					onclick={() => quoteModal.close()}
					class="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
					aria-label="Close"
				>
					<X size={20} />
				</button>
			</div>

			<form class="flex flex-col gap-4 px-5 sm:px-6 py-5 sm:py-6">
				<div class="flex flex-col gap-1.5">
					<span class="font-heading font-medium text-[13px] text-gray-700">Material</span>
					<div class="grid grid-cols-2 gap-2">
						<button
							type="button"
							onclick={() => (material = 'cement')}
							class="py-2.5 rounded-lg text-[14px] font-heading font-semibold border-2 transition-colors {material ===
							'cement'
								? 'bg-brand-500 border-brand-500 text-white'
								: 'border-black/10 text-gray-600'}"
						>
							Cement
						</button>
						<button
							type="button"
							onclick={() => (material = 'steel')}
							class="py-2.5 rounded-lg text-[14px] font-heading font-semibold border-2 transition-colors {material ===
							'steel'
								? 'bg-brand-500 border-brand-500 text-white'
								: 'border-black/10 text-gray-600'}"
						>
							Steel
						</button>
					</div>
				</div>

				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div class="flex flex-col gap-1.5">
						<label for="fullName" class="font-heading font-medium text-[13px] text-gray-700">
							Full name
						</label>
						<input
							id="fullName"
							type="text"
							bind:value={fullName}
							placeholder="Mohamed Ali"
							class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 transition-colors"
						/>
					</div>

					<div class="flex flex-col gap-1.5">
						<label for="companyName" class="font-heading font-medium text-[13px] text-gray-700">
							Company name
						</label>
						<input
							id="companyName"
							type="text"
							bind:value={companyName}
							placeholder="Al-Amin Construction"
							class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 transition-colors"
						/>
					</div>
				</div>

				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div class="flex flex-col gap-1.5">
						<label for="phone" class="font-heading font-medium text-[13px] text-gray-700">
							Phone number
						</label>
						<input
							id="phone"
							type="tel"
							bind:value={phone}
							placeholder="+252 61 234 5678"
							class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 transition-colors"
						/>
					</div>

					<div class="flex flex-col gap-1.5">
						<label for="email" class="font-heading font-medium text-[13px] text-gray-700">
							Email
						</label>
						<input
							id="email"
							type="email"
							bind:value={email}
							placeholder="you@company.com"
							class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 transition-colors"
						/>
					</div>
				</div>

				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div class="flex flex-col gap-1.5">
						<label for="city" class="font-heading font-medium text-[13px] text-gray-700">
							City / region
						</label>
						<input
							id="city"
							type="text"
							bind:value={city}
							placeholder="Hargeisa, Somalia"
							class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 transition-colors"
						/>
					</div>

					<div class="flex flex-col gap-1.5">
						<label for="quantity" class="font-heading font-medium text-[13px] text-gray-700">
							Quantity needed
						</label>
						<input
							id="quantity"
							type="text"
							bind:value={quantity}
							placeholder="e.g. 500 bags or 10 tons"
							class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 transition-colors"
						/>
					</div>
				</div>

				<div class="flex flex-col gap-1.5">
					<label for="notes" class="font-heading font-medium text-[13px] text-gray-700">
						Additional details
					</label>
					<textarea
						id="notes"
						bind:value={notes}
						rows="3"
						placeholder="Delivery timeline, port of entry, or any other details..."
						class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 transition-colors resize-none"
					></textarea>
				</div>

				<button
					type="submit"
					class="group bg-brand-500 hover:bg-brand-600 text-white font-heading font-semibold text-[14px] flex items-center justify-center gap-2 px-5 py-3 rounded-lg transition-colors mt-1"
				>
					Submit request
					<Send size={16} class="transition-transform group-hover:translate-x-0.5" />
				</button>
			</form>
		</div>
	</div>
{/if}
