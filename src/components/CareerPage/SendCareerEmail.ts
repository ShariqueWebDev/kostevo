"use server";
import { sendmail } from "../../lib/nodemailer/nodemailer";

export const SendCareerEmail = async (
  name: string,
  location: string,
  phone: string,
  email: string,
  qualification: string,
  applyingFor: string
): Promise<boolean> => {
  try {
    await sendmail({
      to: ["info@kostevo.com"],
      name: name,
      subject: "Job Submission Form - Kostevo",
      body: `
          <div>
            <h3>Name: ${name}</h3>
            <h3>Location: ${location}</h3>
            <h3>Email: ${email}</h3>
            <h3>Phone: ${phone}</h3>
            <h3>Qualification: ${qualification}</h3>
            <h3>Applied For: ${applyingFor}</h3>
          </div>
        `,
    });

    return true; // Email sent successfully
  } catch (error) {
    console.error("Error sending email:", error);
    return false; // Failed to send email
  }
};
