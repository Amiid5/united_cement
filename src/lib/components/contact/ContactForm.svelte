<script lang="ts">
	import { Send } from '@lucide/svelte';

	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let subject = $state('');
	let message = $state('');
</script>

<div class="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 mx-2">
	<h2 class="font-heading font-bold text-xl sm:text-2xl mb-1">Send us a message</h2>
	<p class="font-body text-[14px] text-gray-500 mb-6">
		Fill out the form and our sales team will get back to you shortly.
	</p>

	<form class="flex flex-col gap-4">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
			<div class="flex flex-col gap-1.5">
				<label for="name" class="font-heading font-medium text-[13px] text-gray-700">
					Full name
				</label>
				<input
					id="name"
					type="text"
					bind:value={name}
					placeholder="John Carter"
					class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 transition-colors"
				/>
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
					class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 transition-colors"
				/>
			</div>
		</div>

		<div class="flex flex-col gap-1.5">
			<label for="email" class="font-heading font-medium text-[13px] text-gray-700"> Email </label>
			<input
				id="email"
				type="email"
				bind:value={email}
				placeholder="you@company.com"
				class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 transition-colors"
			/>
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
				Message
			</label>
			<textarea
				id="message"
				bind:value={message}
				rows="5"
				placeholder="Tell us about your project..."
				class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 transition-colors resize-none"
			></textarea>
		</div>

		<button
			type="submit"
			class="group bg-brand-500 hover:bg-brand-600 text-white font-heading font-semibold text-[14px] flex items-center justify-center gap-2 px-5 py-3 rounded-lg transition-colors mt-2"
		>
			Send message
			<Send size={16} class="transition-transform group-hover:translate-x-0.5" />
		</button>
	</form>
</div>
