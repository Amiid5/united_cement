import type { Product } from '$lib/types';

class QuoteModalState {
	open = $state(false);
	product = $state<Product | null>(null);

	show(product: Product | null = null) {
		this.product = product;
		this.open = true;
	}

	close() {
		this.open = false;
	}
}

export const quoteModal = new QuoteModalState();
