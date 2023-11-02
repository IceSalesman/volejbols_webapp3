import { EMAIL, EMAIL_PASSWORD} from "$env/static/private";
import { createTransport } from "nodemailer";

export const transporter = createTransport({
    host: "smtppro.zoho.eu",
    port: 587,
    auth: {
        user: EMAIL,
        pass: EMAIL_PASSWORD
    }
})

transporter.verify(function (error, success) {
    if (error) {
      console.error(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  
export default transporter;
