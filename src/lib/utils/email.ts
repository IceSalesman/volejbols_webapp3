import { EMAIL, EMAIL_PASSWORD} from "$env/static/private";
import { createTransport } from "nodemailer";

export const transporter = createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
        user: EMAIL,
        pass: EMAIL_PASSWORD
    }
})

export async function sendVerificationCode(
    toEmail: "") {
    const info = await transporter.sendMail({
        from: "info@volejbols.id.lv",
        to: toEmail,
        subject: "Test",
        html: `test`
    })
}

transporter.verify(function (error, success) {
    if (error) {
      console.error(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  
export default transporter;
