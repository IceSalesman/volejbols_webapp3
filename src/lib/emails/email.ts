import { createTransport } from "nodemailer";
import { render } from "svelte-email";
import VerificationCodeEmail from "$lib/emails/VerificationCodeEmail.svelte";

const EMAIL: string = process.env.EMAIL;
const EMAIL_PASSWORD: string = process.env.EMAIL_PASSWORD;

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


