import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

import { EMAIL, EMAIL_PASSWORD} from "$env/static/private";
import { createTransport } from "nodemailer";
import { render } from "svelte-email";
import VerificationCodeEmail from "$lib/emails/VerificationCodeEmail.svelte";

const credential = new DefaultAzureCredential();
const client = new SecretClient("https://volejbolaatsleguseifs.vault.azure.net/", credential)
const url =`https://VolejbolaAtsleguSeifs.vault.azure.net`;

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


