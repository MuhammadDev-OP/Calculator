import React, { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const specVal = ["+-", "%", "/", "x", "-", "+", "="];

const Button = ({ value }: any) => {
  const { calc, setCalc } = useContext(CalcContext)!;

  // User click comma
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };
  // User click C
  const resetClick = () => {
    setCalc({ sign: "", num: 0, res: 0 });
  };
  // User click number
  const handleClickButton = () => {
    const numberString = value.toString();

    let numberValue: any;
    if (numberString === "0" && calc.num === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(calc.num + numberString);
    }

    setCalc({
      ...calc,
      num: numberValue,
    });
  };
  // User click operation
  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalsClick = () => {
    if (calc.res && calc.num) {
      const math = (a: number, b: number, sign: string) => {
        const result: any = {
          "+": (a: number, b: number) => a + b,
          "-": (a: number, b: number) => a - b,
          x: (a: number, b: number) => a * b,
          "/": (a: number, b: number) => a / b,
        };
        return result[sign](a, b);
      };
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: "",
        num: 0,
      });
    }
  };
  // User click persen
  const persenClick = () => {
    setCalc({
      num: calc.num / 100,
      res: calc.res / 100,
      sign: "",
    });
  };
  // User click invert button
  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: "",
    });
  };
  const isSpecialValue = specVal.includes(value);
  const isEqualsButton = value === "=";

  const handleClick = () => {
    const results: any = {
      ".": commaClick,
      C: resetClick,
      "/": signClick,
      x: signClick,
      "-": signClick,
      "+": signClick,
      "=": equalsClick,
      "%": persenClick,
      "+-": invertClick,
    };
    if (results[value]) {
      return results[value]();
    } else {
      return handleClickButton();
    }
  };

  return (
    <button
      className={`
      shadow-md
    flex
    h-14 p-2.5
    items-center 
    justify-center
    rounded-full
    text-2xl
    hover:outline-dashed 
    ${
      isSpecialValue
        ? "text-green-500 font-bold"
        : "text-orange-500 bg-slate-700"
    }
    ${isEqualsButton ? "bg-green-500 text-white" : ""}
    ${
      isEqualsButton &&
      "bg-lime-500 hover:bg-rose-600 hover:text-3xl col-span-2"
    }`}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default Button;
