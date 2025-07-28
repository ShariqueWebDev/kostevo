import nodemailer from "nodemailer";

interface SendMailProps {
  to: string | string[];
  name: string;
  subject: string;
  body: string;
}

interface SendMailResult {
  success: boolean;
  error?: string;
}

export async function sendmail({
  to,
  name,
  subject,
  body,
}: SendMailProps): Promise<SendMailResult> {
  const transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "neverlossme275@gmail.com",
      pass: "ruqt ojef obzn nedb",
    },
  });

  try {
    // Verify transporter connection
    const testResult = await transporter.verify();
  } catch (error) {
    console.error("Error verifying transporter:", error);
    return { success: false, error: "Transporter verification failed" };
  }

  try {
    // Send email
    const sendResult = await transporter.sendMail({
      from:  `${name}<neverlossme275@gmail.com>`,
      to,
      subject,
      html: body,
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: "Email sending failed" };
  }
}
