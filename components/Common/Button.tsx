"use client"

import { ButtonProps } from "../CommonProps/ButtonProps";

export default function Button({ title, containerStyles, handleClick, btnType, textStyles, rightIcon } : ButtonProps) {
  return (
    <button
        id="button"
        type="button"
        className="w-full h-10 flex justify-center items-center rounded-3xl bg-rsgGreen-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rsgGreen-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        onClick={() => alert("버튼 왜눌러!!!")}
      >
        <span className={`flex-1 ${textStyles}`}>{title}</span>
      </button>
    // <div className="container flex justify-center min-h-6">
      
    // </div>
  );
};