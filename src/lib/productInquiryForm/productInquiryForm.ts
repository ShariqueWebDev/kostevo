"use server";

import { sendmail } from "../nodemailer/nodemailer";
interface FormValues {
  name: string;
  last_name: string;
  work_email: string;
  phoneCode: string;
  phoneNumber: string;
  location: string;
  product: string;
}

export const ProductInquiry = async (values: FormValues): Promise<boolean> => {
  try {
    await sendmail({
      to: "sales@kostevo.com",
      name: values.name,
      subject: "Form Submission From Chilli Note",
      body: `
        <div>
          <h3>Name: ${values.name}</h3>
          <h3>Email: ${values.work_email}</h3>
          <h3>Product Name: ${values.product}</h3>
     
         
        </div>
      `,
    });

    return true; // Email sent successfully
  } catch (error) {
    console.error("Error sending email:", error);
    return false; // Failed to send email
  }
};
