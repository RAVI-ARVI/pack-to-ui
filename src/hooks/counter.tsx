import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((precount) => precount + 1);
  };

  const decrement = () => {
    setCount((precount) => precount - 1);
  };

  return { increment, decrement, count };
};

export { useCounter };
