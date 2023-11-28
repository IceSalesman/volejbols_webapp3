import { createTransport } from "nodemailer";
import { render } from "svelte-email";
import VerificationCodeEmail from "$lib/emails/VerificationCodeEmail.svelte";

const EMAIL = process.env.EMAIL || "cista undefined";
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || "cista undefined";
const TEST = process.env.TEST || "cista undefined";


export const transporter = createTransport({
    host: "smtppro.zoho.eu",
    port: 587,
    auth: {
        user: EMAIL,
        pass: EMAIL_PASSWORD
    }
})

console.log(`Test value: ${TEST}`)

export async function sendVerificationCode(toEmail: string, verificationCode: string) {
  console.log(EMAIL);
  console.log(`Test value after sent email: ${TEST}`)
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


