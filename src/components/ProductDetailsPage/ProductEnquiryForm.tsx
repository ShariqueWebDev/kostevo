"use client";
import {
  Button,
  ConfigProvider,
  Form,
  Input,
  // InputNumber,
  message,
  // Modal,
  // Space,
} from "antd";
import { FormProps, useForm } from "antd/es/form/Form";
import React, { useContext, useEffect, useState } from "react";
import { ProductInquiry } from "@/lib/productInquiryForm/productInquiryForm";
// import Swal from "sweetalert2";
// import TextArea from "antd/es/input/TextArea";
// import { Toast } from "@radix-ui/react-toast";
// import { Toaster } from "../ui/toaster";
import Wrapper from "../Wrapper/Wrapper";
import TopBanner from "../TopBanner/TopBanner";
import { AppContexts } from "../context";

type FieldType = {
  name: string;
  last_name: string;
  work_email: string;
  phoneCode: string;
  phoneNumber: string;
  location: string;
  product_title: string;
  product: string;
};

const ProductEnquiryForm = ({
  buttonTitle,
  className,
  onSubmit,
  title = "Get Product Details",
  description = "Please fill out the form, Our team will reach out to you!",
  product_title_name,
}: {
  buttonTitle: string;
  className?: string;
  fields?: any[]; // Array of fields for form configuration
  onSubmit?: (values: any) => void; // onSubmit callback passed dynamically
  title?: string; // Dynamic title for form
  description?: string; // Dynamic description for form
  product_title_name: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = useForm();
  const { resetFields } = form;

  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { inputValue }: { inputValue: string } = useContext(AppContexts);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setLoading(true);
    try {
      await ProductInquiry(values);
      if (onSubmit) {
        onSubmit(values);
      }
      resetFields();
      handleCancel();
      message.success("Your form has been submitted!");
    } catch (error) {
      console.log(error);
      message.error("There was a problem with your request");
    } finally {
      setLoading(false);
    }
  };

  const breadCrumData = [
    { name: "Home", homePath: "/" },
    { name: "Request Quotation Form" },
  ]

  return (
    <div className="">
      <TopBanner
        title="Request For Quotation"
        breadCrumb={breadCrumData}
        bannerImg="/rfqBanner.jpg"
      />
      <Wrapper>
        {/* <PathNme path="" /> */}
        <div className=" w-full mt-10 mb-16">
          <div className="  mb-10 flex gap-10 max-sm:flex-col max-sm:items-center rounded-md">
            {/* <button
        className="group relative inline-block px-[1px] py-[1px] bg-white font-medium text-white bg-transparent rounded-md"
        onClick={showModal}
        >
        <span
        className={`border-black ${className} border relative block transition-all  duration-300 hover:text-white text-gray-900 font-medium rounded-md`}
        >
        {buttonTitle}
        </span>
        </button> */}
            <div className="w-[60%] max-sm:w-full rounded-md overflow-hidden">
              <img
                src="/img201.webp"
                alt="Gear"
                className="object-cover object-center w-full h-full"
              />
            </div>

            <div className="w-[35%] max-sm:w-full p-5 border rounded-md">
              <div>
                <div className="mb-5  ">
                  <h2 className="text-[1.7rem] heading-all">{title}</h2>
                  <p className="text-xs text-gray-600 heading-all ">
                    {description}
                  </p>
                </div>
                <Form
                  name="Contact Sales"
                  onFinish={onFinish}
                  form={form}
                  size="large"
                  style={{ width: "100%" }}
                  labelCol={{ span: 6 }}
                  layout="horizontal"
                  initialValues={{ product: inputValue }}
                >
                  <div className="gap-4 w-full max-sm:flex-col max-sm:gap-0">
                    <label className="text-gray-600">Name (Required)</label>
                    <Form.Item<FieldType>
                      // label="Name (Required)"
                      name="name"
                      rules={[
                        { required: true, message: "Please input name!" },
                      ]}
                      className="w-full mt-2"
                    >
                      <Input
                        className="focus:border-gray-400 hover:border-gray-200"
                        placeholder="Name"
                      />
                    </Form.Item>
                  </div>
                  <div className=" max-sm:gap-0">
                    {/* <Row>
              <Col> */}
                    <label className="text-gray-600">
                      Email Address (Required)
                    </label>
                    <Form.Item<FieldType>
                      name="work_email"
                      // style={{ width: "97%" }}
                      rules={[
                        {
                          required: true,
                          message: "Please input email",
                          type: "email",
                        },
                      ]}
                      className="w-full mt-2"
                    >
                      <Input
                        className="focus:border-gray-400 hover:border-gray-200"
                        placeholder="Email"
                      />
                    </Form.Item>
                  </div>

                  <label className="text-gray-600">
                    Product or Servies (Required)
                  </label>
                  <Form.Item<FieldType>
                    name="product"
                    className="mt-2"
                    rules={[
                      {
                        required: true,
                        message: "Please input your product name!",
                      },
                    ]}
                  >
                    <Input
                      className="focus:border-gray-400 hover:border-gray-200"
                      placeholder="Product Name"
                    />
                  </Form.Item>

                  <Form.Item>
                    <p className="text-[12px] text-gray-500 content-all">
                      By filling out the form, users can specify their product
                      requirements, ask questions and receive detailed
                      information from our team.
                    </p>
                  </Form.Item>

                  <Form.Item>
                    <ConfigProvider
                      theme={{
                        components: {
                          // Button: {
                          //   colorPrimary: `linear-gradient(135deg, ${colors.join(
                          //     ", "
                          //   )})`,
                          //   colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
                          //     colors
                          //   ).join(", ")})`,
                          //   colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
                          //     colors
                          //   ).join(", ")})`,
                          //   lineWidth: 0,
                          // },
                        },
                      }}
                    >
                      <Button
                        loading={loading}
                        htmlType="submit"
                        size="middle"
                        className=""
                      >
                        <span className=" px-3 tracking-wide font-medium">
                          Submit
                        </span>
                      </Button>
                    </ConfigProvider>
                  </Form.Item>
                  <div className="">
                    <p className="my-3 font-medium">
                      Also you Can Share your Enquiry Below Mail Ids
                    </p>
                    <div className="text-sm text-gray-600">
                      <div className="mailto:info@kostevo.com">
                        <a href="">info@kostevo.com</a>
                      </div>
                      <div className="mailto:sales@kostevo.com">
                        <a href="">sales@kostevo.com</a>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductEnquiryForm;
