import React, { ReactNode } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
interface WrapperProps {
  children?: ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return (
    <ReactLenis root>
      <div className={`max-w-[1220px] w-full px-5 mx-auto ${className}`}>
        {children}
      </div>
    </ReactLenis>
  );
};

export default Wrapper;
