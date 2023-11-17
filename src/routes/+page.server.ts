import { sendVerificationCode } from "$lib/emails/email"
import { otpSent } from "../stores";


export const actions = {
    sendVerificationCode: async ({ request }) => {
        const formData = await request.formData();
        const toEmail = String(formData.get("email"));
        const testValue = "Test123"

        await sendVerificationCode(toEmail, testValue);

        otpSent.set(true);
    }
}
