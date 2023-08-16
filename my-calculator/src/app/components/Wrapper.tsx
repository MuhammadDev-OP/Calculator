import React, { FC } from "react";
import { ReactNode } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-80 items-center p-10 mt-16 rounded-2xl shadow-lg">
      {children}
    </div>
  );
};

export default Wrapper;
