import React from "react";

interface SecondaryButtonProps {
  title: string;
  className: string;
}

const ButtonSecondary: React.FC<SecondaryButtonProps> = ({
  title,
  className,
}) => {
  return <div className={`w-fit px-10 py-3  text-white ${className}`}>{title}</div>;
};

export default ButtonSecondary;
