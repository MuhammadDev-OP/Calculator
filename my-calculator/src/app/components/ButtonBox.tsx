import React from "react";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const ButtonBox = ({ children }: props) => {
  return <div>{children}</div>;
};

export default ButtonBox;
