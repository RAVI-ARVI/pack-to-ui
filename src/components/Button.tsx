import * as React from "react";
import { ReactNode } from "react";
type propTypes = {
  children: ReactNode;
};

const Button = ({ children }: propTypes) => {
  return (
    <button
      style={{
        padding: "10px 20px",
        cursor: "pointer",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        borderRadius: "5px",
        fontSize: "1.2em",
      }}
    >
      {children}
    </button>
  );
};

export { Button };
