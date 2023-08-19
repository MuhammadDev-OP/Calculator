import React from "react";

const specVal = ["+-", "%", "/", "x", "-", "+", "="];

const Button = ({ value }: any) => {
  const isSpecialValue = specVal.includes(value);
  const isEqualsButton = value === "=";

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
    >
      {value}
    </button>
  );
};

export default Button;
