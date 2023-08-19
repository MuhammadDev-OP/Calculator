import React from "react";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const ButtonBox = ({ children }: props) => {
  return <div className="grid grid-cols-4 gap-2">{children}</div>;
};

export default ButtonBox;
