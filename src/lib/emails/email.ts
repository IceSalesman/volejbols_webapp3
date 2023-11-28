import { SecretClient } from "@azure/keyvault-secrets";
import { DefaultAzureCredential } from "@azure/identity";
import { VAULT, SECRET1, SECRET2 } from "$env/static/private";
import { createTransport } from "nodemailer";
import { render } from "svelte-email";
import VerificationCodeEmail from "$lib/emails/VerificationCodeEmail.svelte";

const keyVaultName = VAULT;
const emailSecret = SECRET1;
const emailPasswordSecret = SECRET2;
const vaultUrl = `https://${keyVaultName}.vault.azure.net`;
const credential = new DefaultAzureCredential();
const client = new SecretClient(vaultUrl, credential);

let email = ""
let emailPassword = "" 

async function getSecret() {
  try {
      // Get the secret
      let email = await client.getSecret(emailSecret);
      let emailPassword = await client.getSecret(emailPasswordSecret);
      // Access the secret value
      console.log(`Email value: ${email.value}`);
      console.log(`Email value: ${emailPassword.value}`);
  } catch (err: any) {
      console.error("Error fetching secret:", err.message);
  }
}

export const transporter = createTransport({
    host: "smtppro.zoho.eu",
    port: 587,
    auth: {
        user: email,
        pass: emailPassword
    }
})

export async function sendVerificationCode(toEmail: string, verificationCode: string) {
  await transporter.sendMail({
      from: {
        name: "Verifikācijas kods",
        address: email
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

getSecret();
