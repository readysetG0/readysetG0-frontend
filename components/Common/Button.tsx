"use client"

import { ButtonProps } from "../CommonProps/ButtonProps";

export default function Button({ title, containerStyles, handleClick, btnType, textStyles, rightIcon } : ButtonProps) {
  return (
    <div className="flex justify-center py-5">
      <button
        id="button"
        type="button"
        className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        onClick={() => alert("버튼 왜눌러!!!")}
      >
        <span className={`flex-1 ${textStyles}`}>{title}</span>
      </button>
    </div>
  );
};