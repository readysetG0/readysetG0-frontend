'use client'

import React from "react";
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

export default function InputBox({title, icon}: InputBoxProps) {
    return (
        <div id="root" className="flex justify-start items-center gap-2 w-full">
            <div id="icon-wrapper" className={`${icon ? 'flex' : 'hidden'} justify-center items-center rounded-full w-10 h-10 bg-rsgGreen-primary`}>
                {icon && Icon[icon] && React.createElement(Icon[icon], { className: "text-white font-bold", size: "1.25rem" })}
            </div>
            <div id="input-wrapper" className="flex justify-center items-center w-full">
                <label htmlFor="textbox" className="block text-sm font-semibold leading-6 text-gray-900">{title}</label>
                <div className="w-full">
                    <input type="text" name="textbox" id="texbox" autoComplete="given-name" className="block w-full min-h-10 h-10 rounded-full border border-rsgGreen-primary px-3.5 py-2 font-raleway text-rsgFont-primary shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rsgGreen-accent focus:outline-none" />
                </div>
            </div>
        </div>
    );
}