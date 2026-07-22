// TEMPORARY: using imgbb-hosted image for local testing since
// united-cement.com isn't deployed yet. Swap back to the line below
// once deployed: 'https://united-cement.com/logo/LOGO-v1.png'
const LOGO_URL = 'https://ik.imagekit.io/gip0dsag6/united-cement/LOGO-v1.svg';
const BRAND_GREEN = '#5a9e15';
const SITE_URL = 'https://united-cement.com';

/**
 * Wraps any inner HTML content in a branded email shell: logo header,
 * white card body, and a consistent footer. Table-based layout and inline
 * styles throughout — required for reliable rendering across email clients
 * (Gmail, Outlook, Apple Mail strip <style> blocks and modern CSS support
 * is inconsistent, so tables + inline styles is still the safest approach).
 */
function emailShell(innerHtml: string): string {
	return `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body style="margin:0; padding:0; background-color:#f4f5f2; font-family: Arial, Helvetica, sans-serif;">
	<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f2; padding: 32px 16px;">
		<tr>
			<td align="center">
				<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e7e7e7;">
					<!-- Header -->
					<tr>
						<td style="background-color: ${BRAND_GREEN}; padding: 28px 32px;" align="center">
							<img src="${LOGO_URL}" alt="United Cement" height="36" style="display:block; height: 36px; width: auto;" />
						</td>
					</tr>
					<!-- Body -->
					<tr>
						<td style="padding: 32px;">
							${innerHtml}
						</td>
					</tr>
					<!-- Footer -->
					<tr>
						<td style="padding: 20px 32px; background-color: #fafaf8; border-top: 1px solid #e7e7e7;" align="center">
							<p style="margin: 0 0 4px; font-size: 12px; color: #8a8a8a; font-family: Arial, Helvetica, sans-serif;">
								United Cement Company &middot; Mogadishu, Hargeisa, Boosaaso
							</p>
							<p style="margin: 0; font-size: 12px; font-family: Arial, Helvetica, sans-serif;">
								<a href="${SITE_URL}" style="color: ${BRAND_GREEN}; text-decoration: none;">united-cement.com</a>
							</p>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>`.trim();
}

function detailRow(label: string, value: string): string {
	return `
		<tr>
			<td style="padding: 9px 0; color: #8a8a8a; font-size: 13px; width: 140px; vertical-align: top; border-bottom: 1px solid #f0f0ee;">${label}</td>
			<td style="padding: 9px 0; color: #1a1a1a; font-size: 14px; font-weight: 600; vertical-align: top; border-bottom: 1px solid #f0f0ee;">${value}</td>
		</tr>`;
}

// ---------------------------------------------------------------------
// INTERNAL notification — sent to info@united-cement.com
// ---------------------------------------------------------------------

export function quoteInternalEmail(data: {
	material: string;
	fullName: string;
	companyName: string;
	phone: string;
	email: string;
	city: string;
	quantity: string;
	notes: string;
	productTitle: string | null;
}): string {
	const rows = [
		detailRow('Material', data.material === 'steel' ? 'Steel' : 'Cement'),
		data.productTitle ? detailRow('Product', data.productTitle) : '',
		detailRow('Full name', data.fullName),
		detailRow('Company', data.companyName || '—'),
		detailRow('Phone', data.phone),
		detailRow('Email', data.email),
		detailRow('City / region', data.city || '—'),
		detailRow('Quantity needed', data.quantity || '—')
	].join('');

	return emailShell(`
		<h2 style="margin: 0 0 4px; font-size: 20px; color: #1a1a1a;">New Quote Request</h2>
		<p style="margin: 0 0 20px; font-size: 13px; color: #8a8a8a;">Submitted via united-cement.com</p>
		<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
		${
			data.notes
				? `<p style="margin: 20px 0 6px; font-size: 13px; color: #8a8a8a;">Additional details</p>
			<p style="margin: 0; font-size: 14px; color: #1a1a1a; white-space: pre-wrap; line-height: 1.6;">${data.notes}</p>`
				: ''
		}
	`);
}

// ---------------------------------------------------------------------
// CUSTOMER auto-reply — sent to the person who submitted the form
// ---------------------------------------------------------------------

export function quoteCustomerEmail(data: {
	fullName: string;
	material: string;
	productTitle: string | null;
}): string {
	return emailShell(`
		<h2 style="margin: 0 0 12px; font-size: 22px; color: #1a1a1a;">Thanks, ${data.fullName.split(' ')[0]}!</h2>
		<p style="margin: 0 0 16px; font-size: 15px; color: #4b4b4b; line-height: 1.6;">
			We've received your quote request${data.productTitle ? ` for <strong>${data.productTitle}</strong>` : ` for ${data.material === 'steel' ? 'steel' : 'cement'}`}.
			Our sales team is reviewing the details now and will get back to you shortly with pricing and availability.
		</p>
		<table role="presentation" cellpadding="0" cellspacing="0" style="margin: 20px 0; background-color: #f1f8e9; border-radius: 10px; width: 100%;">
			<tr>
				<td style="padding: 16px 20px; font-size: 14px; color: #3e7a08;">
					<strong>What happens next?</strong><br />
					A member of our team will contact you by phone or email within 1 business day.
				</td>
			</tr>
		</table>
		<p style="margin: 0; font-size: 13px; color: #8a8a8a; line-height: 1.6;">
			Need something urgent? Call us directly at <strong style="color:#1a1a1a;">+252 61 554 6444</strong>.
		</p>
	`);
}

export function contactInternalEmail(data: {
	name: string;
	email: string;
	phone: string;
	subjectLabel: string;
	message: string;
}): string {
	const rows = [
		detailRow('Subject', data.subjectLabel),
		detailRow('Name', data.name),
		detailRow('Email', data.email),
		detailRow('Phone', data.phone || '—')
	].join('');

	return emailShell(`
		<h2 style="margin: 0 0 4px; font-size: 20px; color: #1a1a1a;">New Contact Message</h2>
		<p style="margin: 0 0 20px; font-size: 13px; color: #8a8a8a;">Submitted via united-cement.com</p>
		<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
		<p style="margin: 20px 0 6px; font-size: 13px; color: #8a8a8a;">Message</p>
		<p style="margin: 0; font-size: 14px; color: #1a1a1a; white-space: pre-wrap; line-height: 1.6;">${data.message}</p>
	`);
}

export function contactCustomerEmail(data: { name: string }): string {
	return emailShell(`
		<h2 style="margin: 0 0 12px; font-size: 22px; color: #1a1a1a;">Thanks for reaching out, ${data.name.split(' ')[0]}!</h2>
		<p style="margin: 0 0 16px; font-size: 15px; color: #4b4b4b; line-height: 1.6;">
			We've received your message and a member of our team will get back to you shortly.
		</p>
		<table role="presentation" cellpadding="0" cellspacing="0" style="margin: 20px 0; background-color: #f1f8e9; border-radius: 10px; width: 100%;">
			<tr>
				<td style="padding: 16px 20px; font-size: 14px; color: #3e7a08;">
					<strong>What happens next?</strong><br />
					Our team typically responds within 1 business day.
				</td>
			</tr>
		</table>
		<p style="margin: 0; font-size: 13px; color: #8a8a8a; line-height: 1.6;">
			Prefer to talk now? Call us at <strong style="color:#1a1a1a;">+252 61 554 6444</strong>.
		</p>
	`);
}
