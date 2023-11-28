import { SecretClient } from "@azure/keyvault-secrets";
import { DefaultAzureCredential } from "@azure/identity";
import { VAULT, SECRET1, SECRET2 } from "$env/static/private";

const keyVaultName = VAULT;
const emailSecret = SECRET1;
const emailPasswordSecret = SECRET2;
const vaultUrl = `https://${keyVaultName}.vault.azure.net`;
const credential = new DefaultAzureCredential();
const client = new SecretClient(vaultUrl, credential);

async function getSecret() {
    try {
        // Get the secret
        let email = await client.getSecret(emailSecret);
        let emailPassword = await client.getSecret(emailPasswordSecret);
        // Access the secret value
        console.log(`Email value: ${email.value}`);
        console.log(`Email value: ${emailPassword.value}`);
        
        return [email, emailPassword] as const
        
    } catch (err: any) {
        console.error("Error fetching secret:", err.message);
    }

  }

  getSecret();