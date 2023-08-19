import React, { FC } from "react";
import { ReactNode } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-80 p-10 mt-10 rounded-2xl shadow-lg">{children}</div>
    </div>
  );
};

export default Wrapper;
