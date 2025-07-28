import React from 'react';

interface BorderButtonProps{
    title:string;
    className:string;
}

const ButtonBorder:React.FC<BorderButtonProps> = ({title, className}) => {
  return (
    <div className={`w-fit px-10 py-3 ${className}`}>
      {title}
    </div>
  );
}

export default ButtonBorder;