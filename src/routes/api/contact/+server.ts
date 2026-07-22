import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';
import { contactInternalEmail, contactCustomerEmail } from '$lib/server/email/templates';
import type { RequestHandler } from './$types';

const resend = new Resend(RESEND_API_KEY);

const subjectLabels: Record<string, string> = {
	quote: 'Request a quote',
	bulk: 'Bulk / wholesale order',
	support: 'Customer support',
	other: 'Other'
};

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	const { name, email, phone, subject, message } = body;

	if (!name?.trim() || !email?.trim() || !message?.trim()) {
		return json({ error: 'Name, email, and message are required.' }, { status: 400 });
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		return json({ error: 'Please enter a valid email address.' }, { status: 400 });
	}

	const subjectLabel = subjectLabels[subject] ?? 'General inquiry';

	try {
		await resend.emails.send({
			from: 'United Cement Contact <forms@united-cement.com>',
			to: 'info@united-cement.com',
			replyTo: email,
			subject: `New Contact Message — ${subjectLabel}`,
			html: contactInternalEmail({ name, email, phone, subjectLabel, message })
		});

		try {
			await resend.emails.send({
				from: 'United Cement <info@united-cement.com>',
				to: email,
				subject: 'We received your message — United Cement',
				html: contactCustomerEmail({ name })
			});
		} catch (autoReplyErr) {
			console.error('Resend error (contact auto-reply):', autoReplyErr);
		}

		return json({ success: true });
	} catch (err) {
		console.error('Resend error (contact internal):', err);
		return json(
			{ error: 'Something went wrong sending your message. Please try again.' },
			{ status: 500 }
		);
	}
};
