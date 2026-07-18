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
			href: '#',
			svg: '<path d="M22 12a10 10 0 1 0-11.5 9.87v-6.98H7.9V12h2.6V9.8c0-2.57 1.53-3.99 3.87-3.99 1.12 0 2.3.2 2.3.2v2.53h-1.3c-1.28 0-1.68.8-1.68 1.62V12h2.86l-.46 2.89h-2.4v6.98A10 10 0 0 0 22 12Z"/>'
		},
		{
			name: 'Twitter',
			href: '#',
			svg: '<path d="M22 5.9c-.74.33-1.53.55-2.36.65a4.1 4.1 0 0 0 1.8-2.27c-.8.47-1.68.82-2.6 1a4.1 4.1 0 0 0-7 3.74A11.6 11.6 0 0 1 3.4 4.7a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5v.05a4.1 4.1 0 0 0 3.29 4.02c-.6.16-1.24.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.57 11.6 11.6 0 0 0 8.29 20.4c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.35 8.35 0 0 0 22 5.9Z"/>'
		},
		{
			name: 'Instagram',
			href: '#',
			svg: '<path d="M12 2c-2.72 0-3.06.01-4.12.06-1.07.05-1.79.22-2.43.46a4.9 4.9 0 0 0-1.77 1.15A4.9 4.9 0 0 0 2.52 5.44c-.24.64-.4 1.36-.46 2.43C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.07.22 1.79.46 2.43a4.9 4.9 0 0 0 1.15 1.77 4.9 4.9 0 0 0 1.77 1.15c.64.24 1.36.4 2.43.46 1.06.05 1.4.06 4.12.06s3.06-.01 4.12-.06c1.07-.05 1.79-.22 2.43-.46a4.9 4.9 0 0 0 1.77-1.15 4.9 4.9 0 0 0 1.15-1.77c.24-.64.4-1.36.46-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.07-.22-1.79-.46-2.43a4.9 4.9 0 0 0-1.15-1.77A4.9 4.9 0 0 0 18.56 2.5c-.64-.24-1.36-.4-2.43-.46C15.06 2.01 14.72 2 12 2Zm0 1.8c2.67 0 2.99.01 4.04.06.97.04 1.5.2 1.85.34.47.18.8.4 1.15.75.35.35.57.68.75 1.15.14.35.3.88.34 1.85.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.97-.2 1.5-.34 1.85-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.35.14-.88.3-1.85.34-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.97-.04-1.5-.2-1.85-.34a3.1 3.1 0 0 1-1.15-.75 3.1 3.1 0 0 1-.75-1.15c-.14-.35-.3-.88-.34-1.85-.05-1.05-.06-1.37-.06-4.04s.01-2.99.06-4.04c.04-.97.2-1.5.34-1.85.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.35-.14.88-.3 1.85-.34C9.01 3.81 9.33 3.8 12 3.8Zm0 3.06a5.14 5.14 0 1 0 0 10.28 5.14 5.14 0 0 0 0-10.28Zm0 8.48a3.34 3.34 0 1 1 0-6.68 3.34 3.34 0 0 1 0 6.68Zm6.54-8.68a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z"/>'
		},
		{
			name: 'LinkedIn',
			href: '#',
			svg: '<path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48Z"/>'
		},
		{
			name: 'WhatsApp',
			href: '#',
			svg: '<path d="M17.47 14.38c-.29-.14-1.7-.84-1.96-.93-.26-.1-.46-.14-.65.14-.2.29-.75.93-.92 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.44-.86-.76-1.44-1.7-1.6-1.99-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.51.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.51-.08-.15-.65-1.58-.9-2.16-.24-.58-.48-.5-.65-.5-.17 0-.37-.02-.56-.02-.2 0-.51.07-.78.36-.26.29-1.02 1-1.02 2.42s1.05 2.8 1.19 3c.15.2 2.06 3.15 5 4.42.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.7-.7 1.94-1.37.24-.68.24-1.25.17-1.37-.07-.12-.26-.2-.55-.34Z"/><path d="M12 2a10 10 0 0 0-8.5 15.29L2 22l4.85-1.47A10 10 0 1 0 12 2Zm0 18.2a8.15 8.15 0 0 1-4.16-1.14l-.3-.18-3.09.94.95-3-.19-.31A8.2 8.2 0 1 1 12 20.2Z"/>'
		}
	];

	const icons = {
		phone:
			'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/>',
		mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
		map: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>'
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
						+252 61 554 6444
					</div>
					<div class="flex items-center gap-2 text-gray-600 text-[14px]">
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="text-brand-600 shrink-0"
						>
							{@html socialLinks[4].svg}
						</svg>
						+254 70 419 1971
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
						Gm@united-cement.com
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
