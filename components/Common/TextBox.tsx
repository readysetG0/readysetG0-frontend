import { useEffect, useState } from "react";
import InputBox from "./InputBox";
import { TextBoxProps } from "../CommonProps/TextBoxProps";

export default function TextBox({title, icon, disabled=false, readonly=false, handleChange, handleFocus, value="", focus=false}: TextBoxProps) {
    const [inputValue, setInputValue] = useState(value)
    const [isFocused, setIsFocused] = useState(false)

    function onFocusInput() {
        setIsFocused(true)
        handleFocus?.(true)
    }

    function onBlurInput() {
        setIsFocused(false)
        handleFocus?.(false)
    }

    return (
        <InputBox title={title} icon={icon} disabled={disabled} readonly={readonly} focus={focus || isFocused}>
            <input
                type="text"
                name="textbox"
                id="texbox"
                value={inputValue}
                className={`block bg-inherit w-full font-raleway placeholder:text-gray-400 focus:outline-none caret-current focus:caret-current`}
                onChange={(e) => {
                    setInputValue(e.target.value)
                    handleChange?.(e.target.value)
                }}
                onFocus={(e) => onFocusInput()}
                onBlur={(e) => onBlurInput()}
            />
        </InputBox>
    )
}