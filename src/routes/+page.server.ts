import transporter from "$lib/utils/email"
import {redirect} from "@sveltejs/kit"

export const actions = {
    default: async({request}) => {
        try {
            const formData = await request.formData();
            const email = formData.get("email");
            console.log(email);
            let html = `<h2><strong>Hi!</h2><pre>${email}</pre>`;

            const message = {
                from: "info@volejbols.id.lv",
                to: "zuga.eduards@gmail.com",
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
            console.log("yeey")
            return {
                success: "Email is sent",
            };
        } catch (error) {
            console.error(error);
        }
    }
}