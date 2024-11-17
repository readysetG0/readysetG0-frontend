"use client"

import { useRef, useState } from "react";
import { RecordBoxProps } from "../CommonProps/RecordBoxProps";
import InputBox from "./InputBox";
import TextBox from "./TextBox";

export default function RecordBox({ title, icon, disabled=false, readonly=false, handleChange, value }: RecordBoxProps) {
    const textarea = useRef<HTMLTextAreaElement>(null)
    const [contentHeight, setContentHeight] = useState("h-20")
    const [isFocused, setIsFocused] = useState(false)

    // TODO : 상수화?
    const rem = 16

    const handleResizeHeight = () => {
        if (textarea.current !== null) {
            textarea.current.style.height = "auto"
            const scrollHeight = textarea.current.scrollHeight
            if (scrollHeight > 3.9125 * rem) {
                textarea.current.style.height = scrollHeight + 'px'
                setContentHeight(`h-[${textarea.current.style.height}]`)
            } else {
                textarea.current.style.height = "3.9125rem"
                setContentHeight("h-[5rem]")
            }
        }
    }

    function onTextareaFocus() {
        setIsFocused(true)
    }

    function onTextareaBlur() {
        setIsFocused(false)
    }

    return (
        <div id="root" className="container">
            <TextBox
                title={title}
                icon={icon}
                disabled={disabled}
                readonly={readonly}
                focus={isFocused}
                handleFocus={(value) => {
                    setIsFocused(value)
                }}
            />

            <InputBox
                disabled={disabled}
                readonly={readonly}
                boxHeight={contentHeight}
                className={`ml-10 mt-1 rounded-[0.9rem]`}
                focus={isFocused}
            >
                <textarea
                    ref={textarea}
                    onChange={(e) => handleResizeHeight()}
                    onFocus={(e) => onTextareaFocus()}
                    onBlur={(e) => onTextareaBlur()}
                    rows={1}
                    className="w-full h-full resize-none bg-inherit font-raleway focus:outline-none caret-current focus:caret-current"
                ></textarea>
            </InputBox>
        </div> 
    )
}