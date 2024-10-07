"use client"

import { ButtonProps } from "../CommonProps/ButtonProps";

export default function Button({ title, btnType="ok", handleClick } : ButtonProps) {

  const checkBtnType = () => {
    if (btnType === "cancel") return "bg-white border-2 border-rsgYellow-primary text-black active:border-rsgYellow-accent";
    else return "bg-rsgGreen-primary active:bg-rsgGreen-accent text-white";
  }

  return (
    <button
        id="button"
        className={`w-full h-10 flex justify-center items-center rounded-3xl px-3 py-1.5 text-base font-semibold leading-6 shadow-sm ${checkBtnType()}`}
        onClick={(e) => handleClick?.(e)}
      >
        <span className={`flex-1`}>{title}</span>
      </button>
    // <div className="container flex justify-center min-h-6">
      
    // </div>
  );
};