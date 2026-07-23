<script lang="ts">
	const exploreLinks = [
		{ label: 'Home', href: '/' },
		{ label: 'Products', href: '/products' },
		{ label: 'Gallery', href: '/gallery' },
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' }
	];

	const branches = [
		{ name: 'Mogadishu', tag: 'Main office' },
		{ name: 'Hargeisa', tag: 'Branch' },
		{ name: 'Boosaaso', tag: 'Branch' },
		{ name: 'Berbera', tag: 'Branch' }
	];

	const socialLinks = [
		{
			name: 'Facebook',
			href: 'https://www.facebook.com/share/198k1sE7dK/?mibextid=wwXIfr',
			svg: '<path d="M22 12a10 10 0 1 0-11.5 9.87v-6.98H7.9V12h2.6V9.8c0-2.57 1.53-3.99 3.87-3.99 1.12 0 2.3.2 2.3.2v2.53h-1.3c-1.28 0-1.68.8-1.68 1.62V12h2.86l-.46 2.89h-2.4v6.98A10 10 0 0 0 22 12Z"/>'
		},
		{
			name: 'WhatsApp',
			href: 'https://wa.me/252610116288',
			svg: '<path d="M17.47 14.38c-.29-.14-1.7-.84-1.96-.93-.26-.1-.46-.14-.65.14-.2.29-.75.93-.92 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.44-.86-.76-1.44-1.7-1.6-1.99-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.51.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.51-.08-.15-.65-1.58-.9-2.16-.24-.58-.48-.5-.65-.5-.17 0-.37-.02-.56-.02-.2 0-.51.07-.78.36-.26.29-1.02 1-1.02 2.42s1.05 2.8 1.19 3c.15.2 2.06 3.15 5 4.42.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.7-.7 1.94-1.37.24-.68.24-1.25.17-1.37-.07-.12-.26-.2-.55-.34Z"/><path d="M12 2a10 10 0 0 0-8.5 15.29L2 22l4.85-1.47A10 10 0 1 0 12 2Zm0 18.2a8.15 8.15 0 0 1-4.16-1.14l-.3-.18-3.09.94.95-3-.19-.31A8.2 8.2 0 1 1 12 20.2Z"/>'
		}
	];

	const icons = {
		phone:
			'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/>',
		mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
		map: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
		whatsapp:
			'<path d="M17.47 14.38c-.29-.14-1.7-.84-1.96-.93-.26-.1-.46-.14-.65.14-.2.29-.75.93-.92 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.44-.86-.76-1.44-1.7-1.6-1.99-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.51.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.51-.08-.15-.65-1.58-.9-2.16-.24-.58-.48-.5-.65-.5-.17 0-.37-.02-.56-.02-.2 0-.51.07-.78.36-.26.29-1.02 1-1.02 2.42s1.05 2.8 1.19 3c.15.2 2.06 3.15 5 4.42.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.7-.7 1.94-1.37.24-.68.24-1.25.17-1.37-.07-.12-.26-.2-.55-.34Z"/><path d="M12 2a10 10 0 0 0-8.5 15.29L2 22l4.85-1.47A10 10 0 1 0 12 2Zm0 18.2a8.15 8.15 0 0 1-4.16-1.14l-.3-.18-3.09.94.95-3-.19-.31A8.2 8.2 0 1 1 12 20.2Z"/>'
	};
</script>

<footer class="bg-gray-50 px-2">
	<div class="control">
		<div class="py-16">
			<div class="grid grid-cols-2 lg:grid-cols-[1.1fr_0.7fr_0.9fr_1fr] gap-8 lg:gap-6">
				<div class="col-span-2 lg:col-span-1 flex flex-col gap-4">
					<div class="flex items-center gap-3">
						<div class="w-11 h-11 rounded-xl flex items-center justify-center -mt-2">
							<img src="/logo/Icon.svg" alt="" />
						</div>
						<div>
							<p class="font-bold text-[16px]">United Cement Company</p>
							<p class="text-gray-500 text-[11px] tracking-wide">STRONG · RELIABLE · TRUSTED</p>
						</div>
					</div>

					<p class="text-gray-600 text-[14px] leading-relaxed max-w-xs">
						Reinforcement steel and premium cement, supplied from port to project — operating across
						Somalia and Somaliland.
					</p>

					<div class="flex gap-2 mt-1">
						{#each socialLinks as social, i (i)}
							<a
								href={social.href}
								aria-label={social.name}
								target="_blank"
								rel="noopener noreferrer"
								class="w-9 h-9 rounded-lg border border-gray-200 bg-white flex items-center justify-center hover:border-brand-500 transition-colors"
							>
								<svg
									width="15"
									height="15"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="text-gray-700"
								>
									{@html social.svg}
								</svg>
							</a>
						{/each}
					</div>
				</div>

				<div class="flex flex-col gap-3">
					<h3 class="font-bold text-[13px] tracking-wide text-gray-900">EXPLORE</h3>
					{#each exploreLinks as link, i (i)}
						<a href={link.href} class="text-gray-600 text-[14px] hover:text-brand-600 w-fit">
							{link.label}
						</a>
					{/each}
				</div>

				<div class="flex flex-col gap-3">
					<h3 class="font-bold text-[13px] tracking-wide text-gray-900">BRANCHES</h3>
					{#each branches as b, i (i)}
						<div class="flex items-center gap-2 text-gray-600 text-[14px]">
							<svg
								width="14"
								height="14"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="text-brand-600 shrink-0"
							>
								{@html icons.map}
							</svg>
							<span>{b.name}<span class="text-gray-400"> · {b.tag}</span></span>
						</div>
					{/each}
				</div>

				<div class="flex flex-col gap-3">
					<h3 class="font-bold text-[13px] tracking-wide text-gray-900">CONTACT</h3>
					<div class="flex items-center gap-2 text-gray-600 text-[14px]">
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="text-brand-600 shrink-0"
						>
							{@html icons.phone}
						</svg>
						+252 61 011 6288
					</div>
					<div class="flex items-center gap-2 text-gray-600 text-[14px]">
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="text-brand-600 shrink-0"
						>
							{@html icons.whatsapp}
						</svg>
						+252 61 011 6288
					</div>
					<div class="flex items-center gap-2 text-gray-600 text-[14px]">
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="text-brand-600 shrink-0"
						>
							{@html icons.mail}
						</svg>
						info@united-cement.com
					</div>
				</div>
			</div>
		</div>

		<div
			class="border-t border-gray-200 py-6 flex items-center justify-between flex-wrap gap-4 text-gray-500 text-[13px]"
		>
			<p>© 2026 United Cement Company. All rights reserved.</p>
			<p>Built on quality. Delivered with trust.</p>
		</div>
	</div>
</footer>
