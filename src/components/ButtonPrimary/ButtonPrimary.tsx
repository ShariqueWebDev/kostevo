import { ArrowDownToLine, Download } from "lucide-react";
import React from "react";

interface PrimaryButtonProps {
  title: string | React.ReactNode;
  className?: string;
}

const ButtonPrimary: React.FC<PrimaryButtonProps> = ({ title, className }) => {
  return (
    <div className="">
      {title === "Download" ? (
        <div
          className={`w-fit px-10 py-3 flex items-center justify-center gap-1 text-white  ${className}`}
        >
          <ArrowDownToLine size={15} />
          {title}
        </div>
      ) : (
        <div className={`w-fit px-10 py-3 flex text-white ${className}`}>
          {title}
        </div>
      )}
    </div>
  );
};

export default ButtonPrimary;
