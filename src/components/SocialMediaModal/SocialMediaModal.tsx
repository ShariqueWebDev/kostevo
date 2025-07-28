import {
  Facebook,
  InstagramIcon,
  TwitterIcon,
  X,
  Youtube,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { SetStateAction } from "react";

interface SocialMediaModalProps {
  showModal: string;
  setShowModal: React.Dispatch<React.SetStateAction<string>>;
}

const SocialMediaModal: React.FC<SocialMediaModalProps> = ({
  showModal,
  setShowModal,
}) => {
  return (
    <>
      <div
        className={` max-sm:hidden fixed p-10 max-w-[400px] w-full border bg-white top-0 ${showModal} z-[150] h-screen transition-all duration-500`}
      >
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src={"/kostevo-logo.png"}
              width={130}
              height={130}
              alt="Kostevo"
              className="cursor-pointer"
            />
          </Link>
          <div
            className="cursor-pointer bg-gray-300 rounded-full h-12 w-12 flex justify-center items-center"
            onClick={() => {
              setShowModal("-right-[100%]");
            }}
          >
            <X color="#4b5563 " />
          </div>
        </div>
        <div className="space-y-7 mt-10">
          <div className="flex gap-5 items-center cursor-pointer">
            <Facebook size={33} />
            <p className="text-xl">Facebook</p>
          </div>
          <div className="flex gap-5 items-center cursor-pointer">
            <InstagramIcon size={33} />
            <p className="text-xl">Instagram</p>
          </div>
          <div className="flex gap-5 items-center cursor-pointer">
            <TwitterIcon size={33} />
            <p className="text-xl">Twitter</p>
          </div>
          <div className="flex gap-5 items-center cursor-pointer">
            <YoutubeIcon size={33} />
            <p className="text-xl">Youtube</p>
          </div>
        </div>
        <hr className="my-10 " />
        <div className="">
          <div className="">
            <a href="tel:+919867219867" className="text-2xl font-semibold ">
              +91 9867 21 9867
            </a>
          </div>
          <div className="text-gray-600 my-2">
            <a href="mailto:sales@kostevo.com">sales@kostevo.com</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaModal;
