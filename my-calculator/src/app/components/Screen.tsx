import React, { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const Screen = () => {
  const { calc } = useContext(CalcContext)!;

  return (
    <div className={`h-16 mb-16 text-2xl`}>
      {calc.num ? calc.num : calc.res}
    </div>
  );
};

export default Screen;
