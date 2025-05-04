export const prerender = false;

import { GOOGLE_EMAIL } from '$env/static/private';
import transporter from '$lib/utils/emailSetup.server.js';

export const actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();
			const name = formData.get('name');
			const email = formData.get('email');
			const mobile = formData.get('mobile');
			const project = formData.get('project');

			let html = `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pushpanjali Email</title>
</head>
<body>
    <div style="font-family: 'Helvetica', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
        <div style="background: #f4f4f4; color: #333; padding: 25px; text-align: center;">
            <h1 style="margin: 0; font-size: 26px; font-weight: bold; letter-spacing: 1px;">Welcome to Pushpanjali</h1>
        </div>
        <div style="padding: 25px;">
            <h2 style="color: #24235c; font-size: 20px; margin-bottom: 15px;">Hello ${name},</h2>
            <p style="font-size: 14px; margin: 15px 0;">Thank you for showing interest in our project, <strong>${project}</strong>. We are thrilled to have you onboard!</p>
            <p style="font-size: 14px; margin: 15px 0;">We will get in touch with you shortly at your mobile number: <strong>${mobile}</strong>.</p>
            <p style="font-size: 14px; margin: 15px 0;">If you have any further questions, feel free to reach out to us.</p>
        </div>
        <div style="background-color: #24235c; padding: 20px; text-align: left; color: white;">
            <p style="margin: 0; font-size: 12px;">Warm regards,</p>
            <p style="font-weight: bold; margin: 5px 0; font-size: 14px;">The Pushpanjali Team</p>
            <img src="https://puspanjali-dev.netlify.app/_app/immutable/assets/logow.DzlyySZ9.svg" alt="Pushpanjali Logo" style="margin-top: 15px; width: 100px;">
        </div>
    </div>
    <div align="center" valign="top" style="line-height: 1.6; max-width: 600px; margin: auto; font-size: 13px; font-weight: 400; color: #999999; font-family: sans-serif;">
            <p style="margin: 0;">&copy; ${new Date().getFullYear()} Pushpanjali Group. All rights reserved.</p>
</div>
</body>
</html>`;

			const message = {
				from: GOOGLE_EMAIL,
				to: email,
				bcc: 'pritishraj04@gmail.com',
				subject: 'Pushpanjali Inquiry',
				text: project,
				html: html
			};

			const sendEmail = async (message) => {
				await new Promise((resolve, reject) => {
					transporter.sendMail(message, (err, info) => {
						if (err) {
							console.error(err);
							reject(err);
						} else {
							resolve(info);
						}
					});
				});
			};

			await sendEmail(message);

			return {
				success: 'Email is sent'
			};
		} catch (error) {
			console.error(error);
		}
	}
};
