"use client";
import React, { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { SendCareerEmail } from "./SendCareerEmail";
import { Form, Input, Button, Select, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
// import { BACKEND_URL } from "@/app/layout";

const { Option } = Select;
// const { Dragger } = Upload;

const CareerForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [fileList, setFileList] = useState<any[]>([]);
  const [form] = Form.useForm();

  const convertFileToBase64 = (file: File | Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!(file instanceof Blob)) {
        reject(new TypeError("The input is not a Blob or File."));
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const onFinish = async (values: any) => {

    setSubmitting(true);

    const resumeFile = values?.resume?.[0]?.originFileObj;
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("location", values.location);
    formData.append("phone", values.phone);
    formData.append("email", values.email);
    formData.append("qualification", values.qualification);
    formData.append("applyingFor", values.applyingFor);

    if (resumeFile) {
      formData.append("resume", resumeFile);
    }

    // let resumeBase64 = null;
    // if (values.resume) {
    //   resumeBase64 = await convertFileToBase64(values.resume);
    // }

    try {
      // Send data to WordPress backend
      const response = await fetch(
        `${process.env.BACKEND_URL}/wp-json/job-application/v1/submit`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send data to WordPress backend");
      }

      // If successful, send email
      await SendCareerEmail(
        values.name,
        values.location,
        values.phone,
        values.email,
        values.qualification,
        values.applyingFor
      );

      // Show success message and reset form
      message.success("Your application has been submitted successfully");
      form.resetFields();
      setFileList([]);
    } catch (error) {
      console.error("Error:", error);
      message.error("There was a problem with your request");
    } finally {
      setSubmitting(false);
    }
  };

  const handleFileChange = (info: any) => {
    setFileList(info.fileList);
  };
  return (
    <div>
      <Wrapper>
        <div className=" mt-10 max-sm:mt-0 mb-20 max-sm:mb-5">
          <div className="mx-auto  max-lg:h-full">
            <div className="flex max-sm:flex-col max-sm:gap-8 gap-5">
              <div className="w-1/2 max-sm:w-full max-sm:p-0">
                {/* <p className="bg-secondary w-fit text-white text-xs p-1.5 mb-3 font-medium rounded-sm">
                  Apply
                </p> */}
                <div className="space-y-5">
                  <h2 className="text-4xl font-medium heading-all">
                    Join Our Team
                  </h2>
                  <p className="text-gray-600 font-medium">
                    Your creativity will be in demand at Kostevo!
                  </p>
                  <p className="text-gray-500">
                    We believe in nurturing talent and fostering growth. As a
                    leading company in precision machining, valve-tube fittings, any kind of precision work and we offer a
                    dynamic work environment for professionals who thrive on
                    innovation and technical excellence. With over 15 years of
                    industry experience, we provide opportunities for skill
                    development, career advancement and hands-on learning with
                    some of the most advanced technologies.
                  </p>
                </div>
                <div className="space-y-3 my-5">
                  <div className="flex items-center gap-3">
                    {/* <img src="/icons/correct.png" className="w-4 " alt="" /> */}
                    <p className="font-medium text-sm">
                      Send your CV to the company's email or upload it here;
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* <img src="/icons/correct.png" className="w-4 " alt="" /> */}
                    <p className="font-medium text-sm">
                      Hold an interview with our HR manager;
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* <img src="/icons/correct.png" className="w-4 " alt="" /> */}
                    <p className="font-medium text-sm">
                      Join our team and start your career with us!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-5 lg:p-11 w-1/2 max-sm:w-full">
                <h2 className="text-gray-800 text-center font-medium heading-all text-4xl max-sm:text-3xl leading-10 mb-11">
                  Apply Now
                </h2>
                <Form
                  onFinish={onFinish}
                  layout="vertical"
                  className="max-w-lg mx-auto p-6 rounded-md bg-white"
                >
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Name is required" }]}
                  >
                    <Input placeholder="Name" />
                  </Form.Item>

                  <Form.Item
                    label="Location"
                    name="location"
                    rules={[
                      { required: true, message: "Location is required" },
                    ]}
                  >
                    <Input placeholder="Location" />
                  </Form.Item>

                  <Form.Item
                    label="Phone Number"
                    name="phone"
                    rules={[
                      { required: true, message: "Phone number is required" },
                      {
                        pattern: /^[0-9]{10}$/,
                        message: "Enter a valid phone number",
                      },
                    ]}
                  >
                    <Input placeholder="Phone number" />
                  </Form.Item>

                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Email is required" },
                      {
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    ]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>

                  <Form.Item
                    label="Qualification"
                    name="qualification"
                    rules={[
                      { required: true, message: "Qualification is required" },
                    ]}
                  >
                    <Input placeholder="Qualification" />
                  </Form.Item>

                  <Form.Item
                    label="Applying for"
                    name="applyingFor"
                    rules={[
                      { required: true, message: "Please select a position" },
                    ]}
                  >
                    <Select placeholder="Select a position">
                      <Option value="Engineer">Engineer</Option>
                      <Option value="Technician">Technician</Option>
                      <Option value="Quality Assurance">
                        Quality Assurance
                      </Option>
                      <Option value="Sales Executive">Sales Executive</Option>
                      <Option value="Human Resources">Human Resources</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label="Resume"
                    name="resume"
                    rules={[
                      { required: true, message: "Resume is required" },
                      {
                        validator: (_, fileList) =>
                          fileList && fileList[0]?.size <= 2 * 1024 * 1024
                            ? Promise.resolve()
                            : Promise.reject("File must be smaller than 2MB"),
                      },
                    ]}
                    valuePropName="fileList"
                    getValueFromEvent={(e) =>
                      Array.isArray(e) ? e : e?.fileList
                    }
                  >
                    <Upload
                      accept=".pdf,.doc,.docx"
                      beforeUpload={() => false} // Prevent automatic upload
                      fileList={fileList}
                      multiple={false} // Ensure single file upload
                      onChange={handleFileChange}
                    >
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag file to this area to upload
                      </p>
                      <p className="ant-upload-hint">
                        Upload your resume in .pdf, .doc, or .docx format
                      </p>
                    </Upload>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={submitting}
                      className="w-full"
                    >
                      Submit Application
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CareerForm;
