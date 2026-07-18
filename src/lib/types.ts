export interface Product {
	id: number;
	image: string;
	badge: string;
	category: 'cement' | 'steel';
	title: string;
	description: string;

	unit: string;
	bagSize: string;
}

export interface ContactInfo {
	phone: string;
	email: string;
	address: string;
	hours: string;
	facebook: string;
	twitter: string;
	instagram: string;
	linkedin: string;
}
