export const prerender = false;

import { GOOGLE_EMAIL } from "$env/static/private";
import transporter from "$lib/utils/emailSetup.server.js";


export const actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const name = formData.get("name");
            const email = formData.get("email");
            const mobile = formData.get("mobile");
			const project = formData.get("project");

            let html = `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <h2 style="color: #4CAF50;">Hello ${name},</h2>
                    <p>Thank you for showing interest in our project, <strong>${project}</strong>. We are thrilled to have you onboard!</p>
                    <p>We will get in touch with you shortly at your mobile number: <strong>${mobile}</strong>.</p>
                    <p>If you have any further questions, feel free to reach out to us.</p>
                    <p style="margin-top: 20px;">Warm regards,</p>
                    <p style="font-weight: bold;">The Pushpanjali Team</p>
                </div>`;

            const message = {
                from: GOOGLE_EMAIL,
                to: email,
                bcc: "pritishraj04@gmail.com",
                subject: "Pushpanjali Inquiry",
                text: project,
                html: html,
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
                success: "Email is sent",
            };
        } catch (error) {
            console.error(error);
        }
    }
};