import { RESEND_API_KEY } from '$env/static/private';
import { Resend } from 'resend';
import { json } from '@sveltejs/kit';

const resend = new Resend(RESEND_API_KEY);

export async function POST({ request }) {
	const { contactEmail, contactName, contactMessage } = await request.json();

	if (!contactEmail || !contactName || !contactMessage) {
		return json({ error: 'Missing required fields' }, { status: 400 });
	}
	try {
		(async function () {
			const { data, error } = await resend.emails.send({
				from: 'Quang <xinchao@quang.design>',
				to: ['unkbboxer@gmail.com'],
				subject: 'Someone contacted you',
				html: `<p>Name: ${contactName}</p><p>Email: ${contactEmail}</p><p>Message: ${contactMessage}</p>`
			});

			if (error) {
				return console.error({ error });
			}

			return json({ emailSendSuccessfully: true });
		})();
	} catch (error) {
		return json({ emailSendSuccessfully: false }, { status: 500 });
	}

	return json({ emailSendSuccessfully: true });
}
