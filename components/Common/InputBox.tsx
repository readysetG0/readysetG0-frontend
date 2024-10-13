'use client'

import React, { useEffect, useState } from "react";
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

export default function InputBox({children, title, icon, disabled=false, readonly=false, focus=false, className=""}: InputBoxProps) {
    const [iconBgColor, setIconBgColor] = useState(() => {
        if (disabled) return "bg-[#D9D9D9]"
        else return "bg-rsgGreen-primary"
    })

    useEffect(() => {
        if (focus) {
            setIconBgColor("bg-rsgGreen-accent")
        } else {
            if (disabled) {
                setIconBgColor("bg-[#D9D9D9]")
            } else {
                setIconBgColor("bg-rsgGreen-primary")
            }
        }
    }, [focus])

    function checkInputStyle(): string {
        if (disabled) {
            return "border-[#D9D9D9] text-[#D9D9D9] pointer-events-none"
        } else if (readonly) {
            return "bg-rsgGreen-primary text-white pointer-events-none"
        } else {
            return "pointer-events-auto text-rsgFont-primary border-rsgGreen-primary"
        }
    }

    function setOutline(focus: boolean) {
        if (focus) {
            return "ring-2 ring-inset ring-rsgGreen-accent outline-none"
        }
    }

    return (
        <div id="root" className="flex justify-start items-center gap-2 w-full h-12">
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
                    className={`block text-sm font-semibold leading-6 text-gray-900 ${title ? ""  : "hidden"}`}
                >
                    {title}
                </label>
                <div className={`w-full min-h-10 h-10 rounded-full border px-3.5 py-2 ${checkInputStyle()} ${setOutline(focus)} ${className}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}