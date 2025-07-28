"use client";
import React, { useEffect, useState } from "react";
import TopBanner from "../TopBanner/TopBanner";
import Wrapper from "../Wrapper/Wrapper";
import PathName from "../PathName/PathName";
import { SendContactForm } from "./SendContactform";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { message, notification } from "antd";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

interface InputDataProps {
  name: string;
  email: string;
  phone: string;
  message: string;
  inquiryType: string;
}

const ContactUsPage = () => {
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, formState, setValue, trigger, reset } =
    useForm<InputDataProps>();

  const { errors } = formState;

  const onSubmit = async (data: InputDataProps) => {
    setSubmitting(true);
    try {
      await SendContactForm(
        data?.name,
        data?.email,
        data?.phone,
        data?.message,
        data?.inquiryType
      );
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      reset();
      setPhone(" ");
      message.success("Your Form has been submitted successfully");
    } catch (error) {
      console.log(error);
      message.error("There was a problem with your request");
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const breadCrumData = [
    { name: "Home", homePath: "/" },
    { name: "Contact Us" },
  ];

  return (
    <div>
      <TopBanner title="Contact Us" breadCrumb={breadCrumData} bannerImg="/contactBanner.jpg"/>
      <Wrapper>
        {/* <PathName path="Home / Contact-Us" /> */}
        <div className="">
          <div className="flex max-sm:flex-col gap-5 items-center">
            <div className="">
              {/* <p className="bg-secondary w-fit text-white text-xs p-1.5 font-medium rounded-sm">
                Contact Us
              </p> */}
            </div>
            {/* <div className="flex max-sm:items-center gap-2 items-center  w-fit">
              <h1 className="text-4xl font-bold bg-gradient-to-r uppercase from-primary to-secondary bg-clip-text text-transparent">
                Kostevo
              </h1>
              <p className="uppercase text-[9px]">
                building a better world <br />
                through engineering
              </p>
            </div> */}
          </div>
          <div className="my-5 " data-aos={"fade-right"}>
            <h3 className="uppercase text-[40px] font-medium mb-3 max-sm:text-3xl heading-all">
              get in touch
            </h3>

            <p className="text-gray-500 content-all text-sm">
              Have questions or need more information? We're here to help! Feel
              free to reach out to us through any of the contact methods below.
              Whether you’re interested in our products, have a business
              inquiry, or need assistance, our team is ready to assist you. We
              look forward to connecting with you!
            </p>
          </div>
        </div>
        <hr />
        <div
          className="flex max-sm:flex-col items-center justify-between"
          data-aos={"fade-up"}
        >
          <div
            className="w-[320px] max-sm:w-full rounded-2xl relative my-10 max-sm:my-5 bg-white break-inside"
            // style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <div
              className={` w-full h-full absolute top-0 left-0 -z-10 rounded-2xl -translate-x-1`}
            ></div>
            <div className="text-3xl font-medium space-y-5 max-sm:space-y-3">
              {/* <div className={` max-sm:text-4xl`}>1</div> */}
              <div className="leading-tight max-sm:leading-snug max-sm:text-3xl heading-all">
                Contact number
              </div>
              <hr />
              <div
                className={` tracking-widest rounded-md font-normal text-sm text-gray-500 w-fit uppercase `}
              >
                +91 9867 21 9867
              </div>
            </div>
          </div>
          <div
            className="w-[320px] max-sm:w-full rounded-2xl relative coreValueBefore my-10 max-sm:my-5 bg-white break-inside"
            // style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <div
              className={` w-full h-full absolute top-0 left-0 -z-10 rounded-2xl -translate-x-1`}
            ></div>
            <div className="text-3xl font-medium space-y-5 max-sm:space-y-3">
              {/* <div className={` max-sm:text-4xl`}>1</div> */}
              <div className="leading-tight max-sm:leading-snug max-sm:text-3xl heading-all">
                Corporate Office
              </div>
              <hr />
              <p className="text-sm text-gray-500 font-normal">
                PAP-R-259, Near Golden Garage, Rabale MIDC, Navi Mumbai 400701,
                India.
              </p>
            </div>
          </div>
          <div
            className="w-[320px] max-sm:w-full rounded-2xl relative coreValueBefore my-10 max-sm:my-5 bg-white break-inside"
            // style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <div
              className={` w-full h-full absolute top-0 left-0 -z-10 rounded-2xl -translate-x-1`}
            ></div>
            <div className="text-3xl font-medium space-y-5  max-sm:space-y-3">
              {/* <div className={` max-sm:text-4xl`}>1</div> */}
              <div className="leading-tight max-sm:leading-snug max-sm:text-3xl heading-all">
                Email Address
              </div>
              <hr />
              <div
                className={` flex flex-col gap-2 tracking-widest rounded-md font-normal text-sm text-gray-500 w-fit `}
              >
                <a href="mailto:sales@kostevo.com">sales@kostevo.com</a>
                <a href="mailto:info@kostevo.com">info@kostevo.com</a>
              </div>
            </div>
          </div>
        </div>
        <div
          className=" flex max-sm:flex-col max-sm:items-center gap-16 mt-5"
          data-aos={"fade-up"}
        >
          <div className="factory-locations space-y-6">
            <div className="location">
              <h3 className="text-lg font-semibold">
                Rabale, Navi Mumbai Factory
              </h3>
              <p className="text-sm text-gray-700">
                PAP-R-259, Near Golden Garage, Rabale MIDC, Navi Mumbai 400701,
                India.
              </p>
              <Link
                href="/manufacture-uttar-shiv"
                className="text-primary underline hover:text-primary-dark"
              >
                Show Production Unit
              </Link>
            </div>

            <div className="location mt-4">
              <h3 className="text-lg font-semibold">Uttar Shiv Factory</h3>
              <p className="text-sm text-gray-700">
                Uttar Shiv Village, Thane, Maharashtra 421204, India
              </p>
              <Link
                href="/manufacture-rabale"
                className="text-primary underline hover:text-primary-dark"
              >
                Show Production Unit
              </Link>
            </div>
            <div className="office-hours mt-6">
              <h2 className="text-lg font-bold">Office Hours</h2>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Monday to Friday:</span> 9:00 AM –
                6:00 PM IST
              </p>
            </div>
          </div>
          {/* <div className="downloadable-content space-y-6 ">
            <h2 className="text-lg font-bold">Downloadable Content</h2>

            <div className="content-item">
              <h3 className="text-md font-semibold text-gray-800">
                Product Catalogs
              </h3>
              <p className="text-sm text-gray-600">
                Download product catalogs for each category:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  <a
                    href="/downloads/catalogs/category1.pdf"
                    download
                    className="text-primary underline hover:text-primary-dark"
                  >
                    Category 1 Catalog
                  </a>
                </li>
                <li>
                  <a
                    href="/downloads/catalogs/category2.pdf"
                    download
                    className="text-primary underline hover:text-primary-dark"
                  >
                    Category 2 Catalog
                  </a>
                </li>
                <li>
                  <a
                    href="/downloads/catalogs/category3.pdf"
                    download
                    className="text-primary underline hover:text-primary-dark"
                  >
                    Category 3 Catalog
                  </a>
                </li>
   
              </ul>
            </div>

            <div className="content-item">
              <h3 className="text-md font-semibold text-gray-800">
                Company Profile
              </h3>
              <a
                href="/downloads/company-profile.pdf"
                download
                className="text-primary underline hover:text-primary-dark"
              >
                Download Company Profile
              </a>
            </div>

            <div className="content-item">
              <h3 className="text-md font-semibold text-gray-800">
                Certification Documents
              </h3>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  <a
                    href="/downloads/certificates/cert1.pdf"
                    download
                    className="text-primary underline hover:text-primary-dark"
                  >
                    Certification Document 1
                  </a>
                </li>
                <li>
                  <a
                    href="/downloads/certificates/cert2.pdf"
                    download
                    className="text-primary underline hover:text-primary-dark"
                  >
                    Certification Document 2
                  </a>
                </li>
               
              </ul>
            </div>
          </div> */}
        </div>
        <div className=" mt-10 mb-20 max-sm:mb-5" data-aos={"fade-up"}>
          <div className="mx-auto  max-lg:h-full">
            <div className="flex max-sm:flex-col-reverse max-sm:gap-8 ">
              <div className="lg:mb-0 mb-10 max-lg:h-full">
                <div className="group w-full h-full">
                  <div className="relative h-full ">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6520152586746!2d73.02576111537755!3d19.1827655870387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c09513bffda3%3A0xaabc1234567890!2sIdeal%20Market%2C%20Kausa%2C%20Mumbra!5e0!3m2!1sen!2sin!4v1633926744447!5m2!1sen!2sin"
                      className="max-sm:!h-[400px] max-sm:!w-full"
                      style={{ border: 0, height: "100%" }}
                      width={"600"}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-5 lg:p-11 w-full">
                <h2 className="text-gray-800 font-medium heading-all text-4xl max-sm:text-3xl leading-10 mb-11">
                  Send Us A Message
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className=" flex flex-col mt-5">
                    <label className="text-gray-600 text-base">
                      Full Name (Required)
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      className="border-b rounded-md p-[5px] mt-1 !bg-white bggra border border-[#e5e7eb]"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Name is required",
                        },
                        minLength: {
                          value: 3,
                          message: "Name should be atleast 3 character",
                        },
                      })}
                    />
                    <div className="text-red-500">{errors?.name?.message}</div>
                  </div>
                  <div className=" flex flex-col mt-5">
                    <label className="text-gray-600 text-base">
                      Email Address (Required)
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className="border-b rounded-md p-[5px] mt-1 border border-[#e5e7eb]"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is required",
                        },
                        pattern: {
                          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                          message: "It is not valide email",
                        },
                      })}
                    />
                    <div className="text-red-500">{errors?.email?.message}</div>
                  </div>
                  <div className=" flex flex-col mt-5 ">
                    {/* <label>Phone</label> */}
                    <PhoneInput
                      specialLabel="Phone Number (Optional)"
                      country={"in"}
                      value={phone}
                      onChange={async (value) => {
                        setPhone(value);
                        setValue(`phone`, value);
                        await trigger(`phone`);
                      }}
                      autoFormat
                      inputProps={
                        {
                          // name: `phone`,
                          // required: true,
                        }
                      }
                      inputStyle={{
                        // boxShadow:
                        //   "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 0px -1px",

                        width: "100%",
                        borderRadius: "7px",
                        padding: "5px",
                        marginTop: "5px",
                        color: "#4b5563",
                        border: "0.5px solid #e5e7eb",
                      }}
                      containerStyle={{
                        color: "#4b5563",
                      }}
                    />
                    {/* <input
                      type="hidden"
                      {...register(`phone`, {
                        // required: {
                        //   value: true,
                        //   message: "Phone number is required",
                        // },
                        validate: {
                          isValid: (value) =>
                            value.length >= 12 ||
                            "Phone number must be at least 10 digits",
                        },
                      })}
                    /> */}
                    <div className="text-red-500">{errors?.phone?.message}</div>
                  </div>
                  <div className="flex flex-col my-5">
                    <label
                      className="text-gray-600 text-base"
                      htmlFor="message"
                    >
                      Your Message (Required)
                    </label>
                    <textarea
                      id="message"
                      placeholder="Enter your message"
                      className="border-b rounded-md p-2 mt-1 resize-y border border-[#e5e7eb] focus:border-none"
                      rows={4}
                      {...register("message", {
                        required: {
                          value: true,
                          message: "Message is required",
                        },
                      })}
                    />
                    <div className="text-red-500">
                      {errors?.message?.message}
                    </div>
                  </div>
                  <label
                    htmlFor="inquiryType"
                    className="block text-gray-600 mb-1"
                  >
                    Inquiry Type (Required)
                  </label>
                  <select
                    id="inquiryType"
                    {...register("inquiryType", {
                      required: "Please select an inquiry type",
                    })}
                    className={`form-select mt-1 block w-full px-3 py-2 border bg-white rounded-md text-gray-400 shadow-sm focus:outline-none placeholder:!text-gray-400  sm:text-sm`}
                  >
                    <option value="">Select an option</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales</option>
                    <option value="support">Support</option>
                  </select>
                  {errors.inquiryType && (
                    <p className="text-red-500 mt-1">
                      {errors.inquiryType.message}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-fit px-10 py-3 mt-10  text-white bg-primary rounded-md font-medium"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ContactUsPage;
