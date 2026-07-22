<script lang="ts">
	import { Send, CheckCircle2, Loader2 } from '@lucide/svelte';
	import { onDestroy } from 'svelte';

	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let subject = $state('');
	let message = $state('');

	let status = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');
	let errorMessage = $state('');
	let successEl: HTMLElement;
	let ctx: any;

	// Required: name, email, message. Optional: phone, subject.
	let fieldErrors = $state<Record<string, string>>({});

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	function validate(): boolean {
		const errors: Record<string, string> = {};

		if (!name.trim()) errors.name = 'Full name is required';
		if (!email.trim()) errors.email = 'Email is required';
		else if (!emailRegex.test(email)) errors.email = 'Enter a valid email address';
		if (!message.trim()) errors.message = 'Message is required';

		fieldErrors = errors;
		return Object.keys(errors).length === 0;
	}

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();

		if (!validate()) return;

		status = 'submitting';
		errorMessage = '';

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, phone, subject, message })
			});

			const data = await res.json();

			if (!res.ok) {
				status = 'error';
				errorMessage = data.error ?? 'Something went wrong. Please try again.';
				return;
			}

			status = 'success';
			name = '';
			email = '';
			phone = '';
			subject = '';
			message = '';
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

	function resetForm() {
		status = 'idle';
		fieldErrors = {};
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

<div class="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 mx-2 min-h-[560px]">
	{#if status === 'success'}
		<div bind:this={successEl} class="flex flex-col items-center text-center gap-4 py-10">
			<span
				class="success-icon inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-50 text-brand-500"
			>
				<CheckCircle2 size={32} strokeWidth={2} />
			</span>
			<div class="flex flex-col gap-1.5">
				<h3 class="font-heading font-bold text-xl">Thanks — message sent!</h3>
				<p class="font-body text-[14px] text-gray-500 max-w-sm">
					We've received your message and our team will get back to you shortly.
				</p>
			</div>
			<button
				onclick={resetForm}
				class="mt-2 text-brand-500 font-heading font-semibold text-[14px] hover:underline"
			>
				Send another message
			</button>
		</div>
	{:else}
		<h2 class="font-heading font-bold text-xl sm:text-2xl mb-1">Send us a message</h2>
		<p class="font-body text-[14px] text-gray-500 mb-6">
			Fill out the form and our sales team will get back to you shortly.
		</p>

		<form class="flex flex-col gap-4" onsubmit={handleSubmit} novalidate>
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div class="flex flex-col gap-1.5">
					<label for="name" class="font-heading font-medium text-[13px] text-gray-700">
						Full name <span class="text-red-500">*</span>
					</label>
					<input
						id="name"
						type="text"
						bind:value={name}
						placeholder="John Carter"
						class={inputClass('name')}
					/>
					{#if fieldErrors.name}
						<p class="text-red-500 text-[12px] font-body">{fieldErrors.name}</p>
					{/if}
				</div>

				<div class="flex flex-col gap-1.5">
					<label for="phone" class="font-heading font-medium text-[13px] text-gray-700">
						Phone number
					</label>
					<input
						id="phone"
						type="tel"
						bind:value={phone}
						placeholder="+1 (800) 555-0199"
						class={inputClass('phone')}
					/>
				</div>
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

			<div class="flex flex-col gap-1.5">
				<label for="subject" class="font-heading font-medium text-[13px] text-gray-700">
					Subject
				</label>
				<select
					id="subject"
					bind:value={subject}
					class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 bg-white"
				>
					<option value="">Select a topic</option>
					<option value="quote">Request a quote</option>
					<option value="bulk">Bulk / wholesale order</option>
					<option value="support">Customer support</option>
					<option value="other">Other</option>
				</select>
			</div>

			<div class="flex flex-col gap-1.5">
				<label for="message" class="font-heading font-medium text-[13px] text-gray-700">
					Message <span class="text-red-500">*</span>
				</label>
				<textarea
					id="message"
					bind:value={message}
					rows="5"
					placeholder="Tell us about your project..."
					class={`${inputClass('message')} resize-none`}></textarea>
				{#if fieldErrors.message}
					<p class="text-red-500 text-[12px] font-body">{fieldErrors.message}</p>
				{/if}
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
				class="group bg-brand-500 hover:bg-brand-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-heading font-semibold text-[14px] flex items-center justify-center gap-2 px-5 py-3 rounded-lg transition-colors mt-2"
			>
				{#if status === 'submitting'}
					<Loader2 size={16} class="animate-spin" />
					Sending...
				{:else}
					Send message
					<Send size={16} class="transition-transform group-hover:translate-x-0.5" />
				{/if}
			</button>
		</form>
	{/if}
</div>
