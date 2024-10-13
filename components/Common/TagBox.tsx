'use client'

import { useState } from "react";
import { TagBoxProps } from "../CommonProps/TagBoxProps";
import InputBox from "./InputBox";
import Tag from "./Tag";

export default function TagBox({ tagList, selectIndexList=[], title, icon, disabled=false, readonly=false} : TagBoxProps) {
    const [isFocused, setIsFocused] = useState(false)

    function onTagBoxFocus() {
        setIsFocused(true)
    }

    function onTagBoxBlur() {
        setIsFocused(false)
    }

    function onTagClick(title: string, index: number) {
        console.log("클릭 태그? ", title, " ", index);
    }

    return (
        <div id="root" className="container relative">
            <InputBox title={title} icon={icon} disabled={disabled} readonly={readonly} focus={isFocused}>
                <div
                    id="tag-wrapper"
                    className="flex justify-start items-center gap-2"
                    tabIndex={0}
                    onFocus={(e) => onTagBoxFocus()}
                    onBlur={(e) => onTagBoxBlur()}
                >
                    {tagList.map((title, index) => {
                        if (selectIndexList.includes(index)) return <Tag key={index} title={title} focus={isFocused} handleClick={(title) => onTagClick(title, index)} />
                        else null
                    })}
                </div>
            </InputBox>
            <div id="tag-selector-wrapper" className={`${isFocused ? "" : "hidden"} absolute top-11 left-0 w-full`}>
                <InputBox className="bg-white" focus={isFocused}>
                    <div
                        id="inner-wrapper"
                        className="flex justify-start items-center gap-2"
                    >
                        {tagList.map((title, index) => {
                            if (selectIndexList.includes(index)) return <Tag key={index} title={title} focus={true} handleClick={(title) => onTagClick(title, index)} />
                            else return <Tag key={index} title={title} focus={false} handleClick={(title) => onTagClick(title, index)} />
                        })}
                    </div>
                </InputBox>
            </div>
        </div>
    )
}