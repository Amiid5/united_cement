<script lang="ts">
	import { X, Send, CheckCircle2, Loader2 } from '@lucide/svelte';
	import { quoteModal } from '$lib/state/quoteModal.svelte';
	import { onDestroy } from 'svelte';

	let material = $state('cement');
	let fullName = $state('');
	let companyName = $state('');
	let phone = $state('');
	let email = $state('');
	let city = $state('');
	let quantity = $state('');
	let notes = $state('');

	let status = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');
	let errorMessage = $state('');
	let successEl: HTMLElement;
	let ctx: any;

	// Required: fullName, email, phone, city. Optional: companyName, quantity, notes.
	let fieldErrors = $state<Record<string, string>>({});

	$effect(() => {
		if (quoteModal.product) {
			material = quoteModal.product.category;
		}
	});

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	function validate(): boolean {
		const errors: Record<string, string> = {};

		if (!fullName.trim()) errors.fullName = 'Full name is required';
		if (!phone.trim()) errors.phone = 'Phone number is required';
		if (!email.trim()) errors.email = 'Email is required';
		else if (!emailRegex.test(email)) errors.email = 'Enter a valid email address';
		if (!city.trim()) errors.city = 'City / region is required';

		fieldErrors = errors;
		return Object.keys(errors).length === 0;
	}

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();

		if (!validate()) return;

		status = 'submitting';
		errorMessage = '';

		try {
			const res = await fetch('/api/quote', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					material,
					fullName,
					companyName,
					phone,
					email,
					city,
					quantity,
					notes,
					productTitle: quoteModal.product?.title ?? null
				})
			});

			const data = await res.json();

			if (!res.ok) {
				status = 'error';
				errorMessage = data.error ?? 'Something went wrong. Please try again.';
				return;
			}

			status = 'success';
			fullName = '';
			companyName = '';
			phone = '';
			email = '';
			city = '';
			quantity = '';
			notes = '';
			fieldErrors = {};

			const { gsap } = await import('gsap');
			ctx = gsap.context(() => {
				gsap.from(successEl, {
					opacity: 0,
					y: 12,
					scale: 0.97,
					duration: 0.5,
					ease: 'power3.out'
				});
				gsap.from(successEl.querySelectorAll('.success-icon'), {
					scale: 0,
					rotate: -20,
					duration: 0.5,
					delay: 0.1,
					ease: 'back.out(1.8)'
				});
			});
		} catch (err) {
			status = 'error';
			errorMessage = 'Network error — please check your connection and try again.';
		}
	}

	function handleClose() {
		quoteModal.close();
		setTimeout(() => {
			status = 'idle';
			fieldErrors = {};
		}, 300);
	}

	function inputClass(field: string) {
		return `border rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none transition-colors ${
			fieldErrors[field]
				? 'border-red-400 focus:border-red-500'
				: 'border-black/10 focus:border-brand-500'
		}`;
	}

	onDestroy(() => ctx?.revert());
</script>

{#if quoteModal.open}
	<button
		class="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
		onclick={handleClose}
		aria-label="Close modal"
	></button>

	<div
		class="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-4 pointer-events-none"
	>
		<div
			class="pointer-events-auto bg-white w-full sm:max-w-[520px] sm:rounded-2xl rounded-t-2xl max-h-[92vh] overflow-y-auto shadow-2xl"
		>
			{#if status === 'success'}
				<div bind:this={successEl} class="flex flex-col items-center text-center gap-4 px-6 py-14">
					<span
						class="success-icon inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-50 text-brand-500"
					>
						<CheckCircle2 size={32} strokeWidth={2} />
					</span>
					<div class="flex flex-col gap-1.5">
						<h3 class="font-heading font-bold text-xl">Thanks — request sent!</h3>
						<p class="font-body text-[14px] text-gray-500 max-w-sm">
							We've received your quote request and our team will reach out shortly with pricing and
							availability.
						</p>
					</div>
					<button
						onclick={handleClose}
						class="mt-2 bg-brand-500 hover:bg-brand-600 text-white font-heading font-semibold text-[14px] px-5 py-2.5 rounded-lg transition-colors"
					>
						Close
					</button>
				</div>
			{:else}
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
						onclick={handleClose}
						class="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
						aria-label="Close"
					>
						<X size={20} />
					</button>
				</div>

				<form
					class="flex flex-col gap-4 px-5 sm:px-6 py-5 sm:py-6"
					onsubmit={handleSubmit}
					novalidate
				>
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
								Full name <span class="text-red-500">*</span>
							</label>
							<input
								id="fullName"
								type="text"
								bind:value={fullName}
								placeholder="Mohamed Ali"
								class={inputClass('fullName')}
							/>
							{#if fieldErrors.fullName}
								<p class="text-red-500 text-[12px] font-body">{fieldErrors.fullName}</p>
							{/if}
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
								class={inputClass('companyName')}
							/>
						</div>
					</div>

					<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div class="flex flex-col gap-1.5">
							<label for="phone" class="font-heading font-medium text-[13px] text-gray-700">
								Phone number <span class="text-red-500">*</span>
							</label>
							<input
								id="phone"
								type="tel"
								bind:value={phone}
								placeholder="+252 61 234 5678"
								class={inputClass('phone')}
							/>
							{#if fieldErrors.phone}
								<p class="text-red-500 text-[12px] font-body">{fieldErrors.phone}</p>
							{/if}
						</div>

						<div class="flex flex-col gap-1.5">
							<label for="email" class="font-heading font-medium text-[13px] text-gray-700">
								Email <span class="text-red-500">*</span>
							</label>
							<input
								id="email"
								type="email"
								bind:value={email}
								placeholder="you@company.com"
								class={inputClass('email')}
							/>
							{#if fieldErrors.email}
								<p class="text-red-500 text-[12px] font-body">{fieldErrors.email}</p>
							{/if}
						</div>
					</div>

					<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div class="flex flex-col gap-1.5">
							<label for="city" class="font-heading font-medium text-[13px] text-gray-700">
								City / region <span class="text-red-500">*</span>
							</label>
							<input
								id="city"
								type="text"
								bind:value={city}
								placeholder="Hargeisa, Somalia"
								class={inputClass('city')}
							/>
							{#if fieldErrors.city}
								<p class="text-red-500 text-[12px] font-body">{fieldErrors.city}</p>
							{/if}
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
								class={inputClass('quantity')}
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

					<p class="text-[12px] text-gray-400 font-body -mt-1">
						<span class="text-red-500">*</span> Required fields
					</p>

					{#if status === 'error'}
						<p class="text-red-600 text-[13px] font-body -mt-1">{errorMessage}</p>
					{/if}

					<button
						type="submit"
						disabled={status === 'submitting'}
						class="group bg-brand-500 hover:bg-brand-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-heading font-semibold text-[14px] flex items-center justify-center gap-2 px-5 py-3 rounded-lg transition-colors mt-1"
					>
						{#if status === 'submitting'}
							<Loader2 size={16} class="animate-spin" />
							Sending...
						{:else}
							Submit request
							<Send size={16} class="transition-transform group-hover:translate-x-0.5" />
						{/if}
					</button>
				</form>
			{/if}
		</div>
	</div>
{/if}
