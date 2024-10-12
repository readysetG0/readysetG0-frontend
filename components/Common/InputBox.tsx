'use client'

import React, { useState } from "react";
import { InputBoxProps } from "../CommonProps/InputBoxProps"
import { IconType } from "react-icons";

import { MdAccessTime } from "react-icons/md";
import { FaMap } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { GrMoney } from "react-icons/gr";

const Icon: { [iconName: string]: IconType } = {
    "MdAccessTime": MdAccessTime,
    "FaMap": FaMap,
    "IoMdPricetag": IoMdPricetag,
    "MdOutlineEdit": MdOutlineEdit,
    "GrMoney": GrMoney
}

export default function InputBox({title, icon, handleChange, disabled=false, readonly=false, value=""}: InputBoxProps) {
    const [inputValue, setInputValue] = useState(value)
    const [iconBgColor, setIconBgColor] = useState(() => {
        if (disabled) return "bg-[#D9D9D9]"
        else return "bg-rsgGreen-primary"
    })

    function onFocusInput() {
        setIconBgColor("bg-rsgGreen-accent")
    }

    function onBlurInput() {
        if (disabled) {
            setIconBgColor("bg-[#D9D9D9]")
        } else {
            setIconBgColor("bg-rsgGreen-primary")
        }
    }

    function checkInputStyle(): string {
        if (disabled) {
            return "border-[#D9D9D9] text-[#D9D9D9] pointer-events-none"
        } else if (readonly) {
            return "bg-rsgGreen-primary text-white pointer-events-none"
        } else {
            return "pointer-events-auto text-rsgFont-primary border-rsgGreen-primary focus:ring-2 focus:ring-inset focus:ring-rsgGreen-accent focus:outline-none"
        }
    }

    return (
        <div id="root" className="flex justify-start items-center gap-2 w-full">
            <div
                id="icon-wrapper"
                className={`${icon ? 'flex' : 'hidden'} justify-center items-center rounded-full w-10 h-10 ${iconBgColor}`}
            >
                {icon && Icon[icon] && React.createElement(Icon[icon], { className: 'text-white font-bold', size: '1.25rem', })}
            </div>
            <div
                id="input-wrapper"
                className="flex justify-center items-center w-full"
            >
                <label
                    htmlFor="textbox"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                >
                    {title}
                </label>
                <div className="w-full">
                    <input
                        type="text"
                        name="textbox"
                        id="texbox"
                        value={inputValue}
                        className={`block w-full min-h-10 h-10 rounded-full border px-3.5 py-2 font-raleway shadow-sm placeholder:text-gray-400 ${checkInputStyle()}`}
                        onChange={(e) => {
                            setInputValue(e.target.value)
                            handleChange?.(e.target.value)
                        }}
                        onFocus={(e) => onFocusInput()}
                        onBlur={(e) => onBlurInput()}
                    />
                </div>
            </div>
        </div>
    )
}