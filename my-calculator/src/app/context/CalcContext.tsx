import { ReactNode, createContext, useState } from "react";

interface props {
  children: ReactNode;
}

interface CalculatorState {
  sign: string;
  num: number;
  res: number;
}

interface CalcContextType {
  calc: CalculatorState;
  setCalc: React.Dispatch<React.SetStateAction<CalculatorState>>;
}

export const CalcContext = createContext<CalcContextType | undefined>(
  undefined
);
// export const CalcContext = createContext<
//   { calc: any; setCalc: any } | undefined
// >(undefined);

const CalcProvider = ({ children }: props) => {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const providerValue = {
    calc,
    setCalc,
  };
  return (
    <CalcContext.Provider value={providerValue}>
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
