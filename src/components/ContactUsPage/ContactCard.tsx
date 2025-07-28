import React from "react";

interface ContactCardProps {
  srNo: number;
  title: string;
  hashTag: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ srNo, title, hashTag }) => {
  return (
    <div>
      <div
        className="p-10 w-[350px] max-sm:w-full rounded-2xl relative coreValueBefore my-10 max-sm:my-5 bg-white break-inside"
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <div
          className={` w-full h-full absolute top-0 left-0 -z-10 rounded-2xl -translate-x-1`}
        ></div>
        <div className="text-5xl font-semibold space-y-5">
          <div className={` max-sm:text-4xl`}>{srNo}</div>
          <div className="leading-tight max-sm:leading-snug max-sm:text-4xl">
            {title}
          </div>
          <div
            className={` py-1 tracking-widest px-3 rounded-md text-xs font-semibold w-fit  shadow-md uppercase`}
          >
            (#{hashTag})
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
