import type { Product } from '$lib/types';

export const products: Product[] = [
	// STEEL — Iron Rebar Grade B500B, 5 diameters
	{
		id: 1,
		image: '/images/products/rebar-8mm.jpg',
		badge: 'BEST SELLER',
		category: 'steel',
		title: 'Iron Rebar Grade B500B — 8mm',
		description: 'High-strength reinforcement steel for reinforced concrete structures.',
		price: 0.85,
		unit: 'kg',
		bagSize: '12m length'
	},
	{
		id: 2,
		image: '/images/products/rebar-10mm.jpg',
		badge: 'TMT',
		category: 'steel',
		title: 'Iron Rebar Grade B500B — 10mm',
		description: 'High-strength reinforcement steel for reinforced concrete structures.',
		price: 0.84,
		unit: 'kg',
		bagSize: '12m length'
	},
	{
		id: 3,
		image: '/images/products/rebar-12mm.jpg',
		badge: 'TMT',
		category: 'steel',
		title: 'Iron Rebar Grade B500B — 12mm',
		description: 'High-strength reinforcement steel for reinforced concrete structures.',
		price: 0.83,
		unit: 'kg',
		bagSize: '12m length'
	},
	{
		id: 4,
		image: '/images/products/rebar-14mm.jpg',
		badge: 'TMT',
		category: 'steel',
		title: 'Iron Rebar Grade B500B — 14mm',
		description: 'High-strength reinforcement steel for reinforced concrete structures.',
		price: 0.82,
		unit: 'kg',
		bagSize: '12m length'
	},
	{
		id: 5,
		image: '/images/products/rebar-16mm.jpg',
		badge: 'TMT',
		category: 'steel',
		title: 'Iron Rebar Grade B500B — 16mm',
		description: 'High-strength reinforcement steel for reinforced concrete structures.',
		price: 0.81,
		unit: 'kg',
		bagSize: '12m length'
	},

	// CEMENT — OPC, 2 packaging options
	{
		id: 6,
		image: '/images/products/opc-50kg.jpg',
		badge: 'BEST SELLER',
		category: 'cement',
		title: 'Ordinary Portland Cement (OPC) — 50kg Bag',
		description:
			'Premium quality cement suitable for general construction, residential builds, and masonry.',
		price: 9.2,
		unit: '50kg',
		bagSize: '50kg'
	},
	{
		id: 7,
		image: '/images/products/opc-jumbo.jpg',
		badge: 'BULK',
		category: 'cement',
		title: 'Ordinary Portland Cement (OPC) — Jumbo Bag',
		description:
			'Premium quality cement suitable for general construction, residential builds, and masonry.',
		price: 155,
		unit: 'ton',
		bagSize: 'Jumbo Bag'
	},

	// CEMENT — SRC, 2 packaging options
	{
		id: 8,
		image: '/images/products/src-50kg.jpg',
		badge: 'MARINE',
		category: 'cement',
		title: 'Sulphate Resistant Cement (SRC) — 50kg Bag',
		description: 'Engineered for structures exposed to sulphates and aggressive environments.',
		price: 10.9,
		unit: '50kg',
		bagSize: '50kg'
	},
	{
		id: 9,
		image: '/images/products/src-jumbo.jpg',
		badge: 'BULK',
		category: 'cement',
		title: 'Sulphate Resistant Cement (SRC) — Jumbo Bag',
		description: 'Engineered for structures exposed to sulphates and aggressive environments.',
		price: 160,
		unit: 'ton',
		bagSize: 'Jumbo Bag'
	}
];
