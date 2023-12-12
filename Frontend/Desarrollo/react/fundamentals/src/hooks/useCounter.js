import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const setZero = () => setCounter(0);
  const increase = () => setCounter((prev)=>prev + 1);
  const decrease = () => setCounter((prev)=>prev - 1);

  return { counter, setZero, increase, decrease };
};
