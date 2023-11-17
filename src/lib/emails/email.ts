import { process.env.EMAIL, process.env.EMAIL_PASSWORD} from "$env/static/private";
import { createTransport } from "nodemailer";
import { render } from "svelte-email";
import VerificationCodeEmail from "$lib/emails/VerificationCodeEmail.svelte";

export const transporter = createTransport({
    host: "smtppro.zoho.eu",
    port: 587,
    auth: {
        user: EMAIL,
        pass: EMAIL_PASSWORD
    }
})

export async function sendVerificationCode(toEmail: string, verificationCode: string) {
  await transporter.sendMail({
      from: {
        name: "Verifikācijas kods",
        address: EMAIL
      },
      to: toEmail,
      subject: "Tavs verifikācijas kods",
      html: render({
        template: VerificationCodeEmail,
        props: {
          verificationCode: verificationCode
        }
      })
  });
}


