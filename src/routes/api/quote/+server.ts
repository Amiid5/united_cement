import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';
import { quoteInternalEmail, quoteCustomerEmail } from '$lib/server/email/templates';
import type { RequestHandler } from './$types';

const resend = new Resend(RESEND_API_KEY);

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	const { material, fullName, companyName, phone, email, city, quantity, notes, productTitle } =
		body;

	if (!fullName?.trim() || !phone?.trim() || !email?.trim() || !city?.trim()) {
		return json(
			{ error: 'Full name, phone, email, and city/region are required.' },
			{ status: 400 }
		);
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		return json({ error: 'Please enter a valid email address.' }, { status: 400 });
	}

	const data = {
		material,
		fullName,
		companyName,
		phone,
		email,
		city,
		quantity,
		notes,
		productTitle
	};

	try {
		// Internal notification to the sales team
		await resend.emails.send({
			from: 'United Cement Quotes <forms@united-cement.com>',
			to: 'info@united-cement.com',
			replyTo: email,
			subject: `New Quote Request — ${material === 'steel' ? 'Steel' : 'Cement'}${productTitle ? ` (${productTitle})` : ''}`,
			html: quoteInternalEmail(data)
		});

		// Auto-reply to the customer. Sent as a separate call rather than
		// bundled into the internal email's recipients, so a failure here
		// (e.g. malformed customer address) doesn't affect internal delivery
		// and is reported independently below.
		try {
			await resend.emails.send({
				from: 'United Cement <info@united-cement.com>',
				to: email,
				subject: 'We received your quote request — United Cement',
				html: quoteCustomerEmail({ fullName, material, productTitle })
			});
		} catch (autoReplyErr) {
			console.error('Resend error (quote auto-reply):', autoReplyErr);
		}

		return json({ success: true });
	} catch (err) {
		console.error('Resend error (quote internal):', err);
		return json(
			{ error: 'Something went wrong sending your request. Please try again.' },
			{ status: 500 }
		);
	}
};
