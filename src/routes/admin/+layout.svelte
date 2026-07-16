<script lang="ts">
	import { LayoutDashboard, Package, Contact, Menu, X, LogOut } from '@lucide/svelte';
	import { page } from '$app/state';

	let { children } = $props();
	let sidebarOpen = $state(false);

	const navItems = [
		{ label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
		{ label: 'Products', href: '/admin/products', icon: Package },
		{ label: 'Contact info', href: '/admin/contact', icon: Contact }
	];

	function isActive(href: string) {
		if (href === '/admin') return page.url.pathname === '/admin';
		return page.url.pathname.startsWith(href);
	}
</script>

<div class="min-h-screen bg-gray-50 flex">
	{#if sidebarOpen}
		<button
			class="lg:hidden fixed inset-0 bg-black/30 z-40"
			onclick={() => (sidebarOpen = false)}
			aria-label="Close sidebar"
		></button>
	{/if}

	<aside
		class="fixed lg:sticky top-0 left-0 h-screen w-[260px] bg-white border-r border-black/8 z-50 flex flex-col transition-transform duration-300 {sidebarOpen
			? 'translate-x-0'
			: '-translate-x-full lg:translate-x-0'}"
	>
		<div class="flex items-center justify-between gap-2 px-5 py-5 border-b border-black/8">
			<a href="/admin" class="flex items-center gap-2.5">
				<div
					class="w-9 h-9 rounded-lg bg-brand-600 text-white font-bold flex items-center justify-center text-[13px]"
				>
					UC
				</div>
				<div>
					<p class="font-heading font-bold text-[14px] leading-tight">United Cement</p>
					<p class="text-gray-400 text-[11px] leading-tight">Admin panel</p>
				</div>
			</a>
			<button
				class="lg:hidden p-1.5 rounded-lg hover:bg-gray-100"
				onclick={() => (sidebarOpen = false)}
				aria-label="Close"
			>
				<X size={18} />
			</button>
		</div>

		<nav class="flex-1 flex flex-col gap-1 px-3 py-4 overflow-y-auto">
			{#each navItems as item}
				<a
					href={item.href}
					class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-heading font-medium transition-colors {isActive(
						item.href
					)
						? 'bg-brand-500/10 text-brand-600'
						: 'text-gray-600 hover:bg-gray-100'}"
				>
					<item.icon size={18} />
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="px-3 py-4 border-t border-black/8">
			<div class="flex items-center gap-2.5 px-3 py-2 mb-2">
				<div
					class="w-8 h-8 rounded-full bg-accent-500/10 text-accent-600 font-semibold text-[12px] flex items-center justify-center shrink-0"
				>
					AD
				</div>
				<div class="min-w-0">
					<p class="font-heading font-semibold text-[13px] truncate">Admin user</p>
					<p class="text-gray-400 text-[11px] truncate">admin@unitedcement.com</p>
				</div>
			</div>
			<button
				class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-heading font-medium text-gray-600 hover:bg-gray-100 transition-colors"
			>
				<LogOut size={18} />
				Sign out
			</button>
		</div>
	</aside>

	<div class="flex-1 min-w-0 flex flex-col">
		<header
			class="lg:hidden sticky top-0 z-30 bg-white border-b border-black/8 px-4 py-3 flex items-center gap-3"
		>
			<button
				class="p-1.5 rounded-lg hover:bg-gray-100"
				onclick={() => (sidebarOpen = true)}
				aria-label="Open menu"
			>
				<Menu size={20} />
			</button>
			<p class="font-heading font-bold text-[15px]">Admin panel</p>
		</header>

		<main class="flex-1 p-4 sm:p-6 lg:p-8">
			{@render children()}
		</main>
	</div>
</div>
