import transporter from "$lib/utils/email"
import { EMAIL } from "$env/static/private"

export const actions = {
    default: async({request}) => {
        try {
            const formData = await request.formData();
            const toEmail = formData.get("email");
            let html = `<h2><strong>Hi!</h2><pre>${toEmail}</pre>`;

            const message = {
                from: {
                    name: "Verifikācijas kods",
                    address: EMAIL
                },
                to: toEmail,
                subject: "test",
                text: "test",
                html: html,
            };

            const sendEmail = async (message: any) => {
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
}