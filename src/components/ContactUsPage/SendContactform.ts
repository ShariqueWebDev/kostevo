"use server";
import { sendmail } from "../../lib/nodemailer/nodemailer";

export const SendContactForm = async (
  name: string,
  email: string,
  phone: string,
  message: string,
  inquiryType:string
): Promise<boolean> => {
  try {
    await sendmail({
      to: ["sales@kostevo.com"],
      name: name,
      subject: "Contact Form Submission - Kostevo",
      body: `
          <div>
            <h3>Name: ${name}</h3>
            <h3>Email: ${email}</h3>
            <h3>Phone: ${phone}</h3>
            <h3>Message: ${message}</h3>
            <h3>Message: ${inquiryType}</h3>

          </div>
        `,
    });

    return true; // Email sent successfully
  } catch (error) {
    console.error("Error sending email:", error);
    return false; // Failed to send email
  }
};
