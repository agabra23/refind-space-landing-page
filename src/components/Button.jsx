import React from "react";
import { LINKS } from "../contants";

const Button = ({ children }) => {
  const handleClick = () => {
    window.location.href = LINKS.listings;
  };

  return (
    <button
      onClick={handleClick}
      className="text-xl min-h-8 min-w-max bg-slate-400 rounded flex justify-center items-center px-4 py-4"
    >
      {children}
    </button>
  );
};

export default Button;
