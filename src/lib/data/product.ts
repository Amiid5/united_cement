import type { Product } from '$lib/types';

export const products: Product[] = [
	// STEEL — Iron Rebar Grade B500B, 5 diameters
	{
		id: 1,
		image: 'steel.png',
		badge: 'BEST SELLER',
		category: 'steel',
		title: 'Iron Rebar Grade B500B — 8mm',
		description: 'High-strength reinforcement steel for reinforced concrete structures.',

		unit: 'kg',
		bagSize: '12m length'
	},
	{
		id: 2,
		image: 'steel.png',
		badge: 'TMT',
		category: 'steel',
		title: 'Iron Rebar Grade B500B — 10mm',
		description: 'High-strength reinforcement steel for reinforced concrete structures.',

		unit: 'kg',
		bagSize: '12m length'
	},
	{
		id: 3,
		image: 'steel.png',
		badge: 'TMT',
		category: 'steel',
		title: 'Iron Rebar Grade B500B — 12mm',
		description: 'High-strength reinforcement steel for reinforced concrete structures.',

		unit: 'kg',
		bagSize: '12m length'
	},
	{
		id: 4,
		image: 'steel.png',
		badge: 'TMT',
		category: 'steel',
		title: 'Iron Rebar Grade B500B — 14mm',
		description: 'High-strength reinforcement steel for reinforced concrete structures.',

		unit: 'kg',
		bagSize: '12m length'
	},
	{
		id: 5,
		image: 'steel.png',
		badge: 'TMT',
		category: 'steel',
		title: 'Iron Rebar Grade B500B — 16mm',
		description: 'High-strength reinforcement steel for reinforced concrete structures.',

		unit: 'kg',
		bagSize: '12m length'
	},

	// CEMENT — OPC, 2 packaging options
	{
		id: 6,
		image: 'Cement Blue mockup.png',
		badge: 'BEST SELLER',
		category: 'cement',
		title: 'Ordinary Portland Cement (OPC) — 50kg Bag',
		description:
			'Premium quality cement suitable for general construction, residential builds, and masonry.',

		unit: '50kg',
		bagSize: '50kg'
	},
	{
		id: 7,
		image: 'Cement Blue mockup.png',
		badge: 'BULK',
		category: 'cement',
		title: 'Ordinary Portland Cement (OPC) — Jumbo Bag',
		description:
			'Premium quality cement suitable for general construction, residential builds, and masonry.',

		unit: 'ton',
		bagSize: 'Jumbo Bag'
	},

	// CEMENT — SRC, 2 packaging options
	{
		id: 8,
		image: 'SRC Bag.png',
		badge: 'MARINE',
		category: 'cement',
		title: 'Sulphate Resistant Cement (SRC) — 50kg Bag',
		description: 'Engineered for structures exposed to sulphates and aggressive environments.',

		unit: '50kg',
		bagSize: '50kg'
	},
	{
		id: 9,
		image: 'SRC Bag.png',
		badge: 'BULK',
		category: 'cement',
		title: 'Sulphate Resistant Cement (SRC) — Jumbo Bag',
		description: 'Engineered for structures exposed to sulphates and aggressive environments.',
		unit: 'ton',
		bagSize: 'Jumbo Bag'
	}
];

export const featuredProducts: Product[] = [
	// STEEL — Iron Rebar Grade B500B, 5 diameters
	{
		id: 1,
		image: 'steel.png',
		badge: 'BEST SELLER',
		category: 'steel',
		title: 'Iron Rebar Grade B500B — 8mm',
		description: 'High-strength reinforcement steel for reinforced concrete structures.',

		unit: 'kg',
		bagSize: '12m length'
	},
	{
		id: 2,
		image: 'steel.png',
		badge: 'TMT',
		category: 'steel',
		title: 'Iron Rebar Grade B500B — 10mm',
		description: 'High-strength reinforcement steel for reinforced concrete structures.',

		unit: 'kg',
		bagSize: '12m length'
	},

	{
		id: 3,
		image: 'Cement Blue mockup.png',
		badge: 'BULK',
		category: 'cement',
		title: 'Ordinary Portland Cement (OPC) — Jumbo Bag',
		description:
			'Premium quality cement suitable for general construction, residential builds, and masonry.',

		unit: 'ton',
		bagSize: 'Jumbo Bag'
	},

	// CEMENT — SRC, 2 packaging options
	{
		id: 4,
		image: 'SRC Bag.png',
		badge: 'MARINE',
		category: 'cement',
		title: 'Sulphate Resistant Cement (SRC) — 50kg Bag',
		description: 'Engineered for structures exposed to sulphates and aggressive environments.',

		unit: '50kg',
		bagSize: '50kg'
	}
];
