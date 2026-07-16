<script lang="ts">
	import { Phone, Mail, MapPin, Clock, Save } from '@lucide/svelte';

	// TODO: replace with server load() fetching the single contact-info row from DB
	let phone = $state('+1 (800) 555-0199');
	let email = $state('sales@unitedcement.com');
	let address = $state('Industrial Park Rd 14, Portland Sector, USA');
	let hours = $state('Mon–Sat: 8am – 6pm');
	let facebook = $state('https://facebook.com/unitedcement');
	let twitter = $state('https://twitter.com/unitedcement');
	let instagram = $state('https://instagram.com/unitedcement');
	let linkedin = $state('https://linkedin.com/company/unitedcement');

	let saved = $state(false);

	function handleSubmit(e: Event) {
		e.preventDefault();
		// TODO: PATCH to backend once wired up
		console.log('save contact info', {
			phone,
			email,
			address,
			hours,
			facebook,
			twitter,
			instagram,
			linkedin
		});
		saved = true;
		setTimeout(() => (saved = false), 2500);
	}
</script>

<div class="flex flex-col gap-6 max-w-3xl">
	<div>
		<h1 class="font-heading font-bold text-2xl sm:text-3xl">Contact info</h1>
		<p class="font-body text-gray-500 text-[14px] mt-1">
			This information is pulled from the database and shown across your site's header, footer, and
			contact page.
		</p>
	</div>

	<form onsubmit={handleSubmit} class="flex flex-col gap-6">
		<div class="bg-white border border-black/10 rounded-2xl p-5 sm:p-6 flex flex-col gap-5">
			<h2 class="font-heading font-bold text-[16px]">General details</h2>

			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div class="flex flex-col gap-1.5">
					<label
						for="phone"
						class="font-heading font-medium text-[13px] text-gray-700 flex items-center gap-1.5"
					>
						<Phone size={14} class="text-brand-500" />
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

				<div class="flex flex-col gap-1.5">
					<label
						for="email"
						class="font-heading font-medium text-[13px] text-gray-700 flex items-center gap-1.5"
					>
						<Mail size={14} class="text-brand-500" />
						Email address
					</label>
					<input
						id="email"
						type="email"
						bind:value={email}
						placeholder="sales@company.com"
						class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 transition-colors"
					/>
				</div>
			</div>

			<div class="flex flex-col gap-1.5">
				<label
					for="address"
					class="font-heading font-medium text-[13px] text-gray-700 flex items-center gap-1.5"
				>
					<MapPin size={14} class="text-brand-500" />
					Address
				</label>
				<input
					id="address"
					type="text"
					bind:value={address}
					placeholder="Industrial Park Rd 14, Portland Sector, USA"
					class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 transition-colors"
				/>
			</div>

			<div class="flex flex-col gap-1.5">
				<label
					for="hours"
					class="font-heading font-medium text-[13px] text-gray-700 flex items-center gap-1.5"
				>
					<Clock size={14} class="text-brand-500" />
					Business hours
				</label>
				<input
					id="hours"
					type="text"
					bind:value={hours}
					placeholder="Mon–Sat: 8am – 6pm"
					class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 transition-colors"
				/>
			</div>
		</div>

		<div class="bg-white border border-black/10 rounded-2xl p-5 sm:p-6 flex flex-col gap-5">
			<h2 class="font-heading font-bold text-[16px]">Social media</h2>

			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div class="flex flex-col gap-1.5">
					<label
						for="facebook"
						class="font-heading font-medium text-[13px] text-gray-700 flex items-center gap-1.5"
					>
						Facebook URL
					</label>
					<input
						id="facebook"
						type="url"
						bind:value={facebook}
						placeholder="https://facebook.com/yourpage"
						class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 transition-colors"
					/>
				</div>

				<div class="flex flex-col gap-1.5">
					<label
						for="twitter"
						class="font-heading font-medium text-[13px] text-gray-700 flex items-center gap-1.5"
					>
						Twitter / X URL
					</label>
					<input
						id="twitter"
						type="url"
						bind:value={twitter}
						placeholder="https://twitter.com/yourhandle"
						class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 transition-colors"
					/>
				</div>

				<div class="flex flex-col gap-1.5">
					<label
						for="instagram"
						class="font-heading font-medium text-[13px] text-gray-700 flex items-center gap-1.5"
					>
						Instagram URL
					</label>
					<input
						id="instagram"
						type="url"
						bind:value={instagram}
						placeholder="https://instagram.com/yourhandle"
						class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 transition-colors"
					/>
				</div>

				<div class="flex flex-col gap-1.5">
					<label
						for="linkedin"
						class="font-heading font-medium text-[13px] text-gray-700 flex items-center gap-1.5"
					>
						LinkedIn URL
					</label>
					<input
						id="linkedin"
						type="url"
						bind:value={linkedin}
						placeholder="https://linkedin.com/company/yourcompany"
						class="border border-black/10 rounded-lg px-3.5 py-2.5 text-[14px] font-body outline-none focus:border-brand-500 transition-colors"
					/>
				</div>
			</div>
		</div>

		<div class="flex items-center gap-3">
			<button
				type="submit"
				class="flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-heading font-semibold text-[14px] px-5 py-2.5 rounded-lg transition-colors"
			>
				<Save size={16} />
				Save changes
			</button>
			{#if saved}
				<span class="text-[13px] font-body text-green-600 font-medium">Saved.</span>
			{/if}
		</div>
	</form>
</div>
