'use client'

import { useState } from "react";
import { TagBoxProps } from "../CommonProps/TagBoxProps";
import InputBox from "./InputBox";
import Tag from "./Tag";

export default function TagBox({ tagList, selectIndexList=[], mode="single", title, icon, disabled=false, readonly=false} : TagBoxProps) {
    const [isFocused, setIsFocused] = useState(false)
    const [selectIdxList, setSelectIdxList] = useState([...selectIndexList])

    function onTagBoxFocus() {
        setIsFocused(true)
    }

    function onTagBoxBlur() {
        setIsFocused(false)
    }

    function onTagClick(title: string, index: number, isFocused: boolean) {
        console.log("클릭 태그? ", title, " ", index, " ", isFocused);

        if (mode === "single") {
            if (isFocused) {
                const removeIdx = selectIdxList.findIndex((elem) => elem === index)
                const copy = [...selectIdxList]
                copy.splice(removeIdx, 1)
                setSelectIdxList([...copy])
            } else {
                setSelectIdxList([index])
            }
        }
        else if (mode === "multiple") {
            if (isFocused) {
                const removeIdx = selectIdxList.findIndex((elem) => elem === index)
                const copy = [...selectIdxList]
                copy.splice(removeIdx, 1)
                setSelectIdxList([...copy])
            } else {
                setSelectIdxList([...selectIdxList, index])
            }
        }
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
                        if (selectIdxList.includes(index)) return <Tag key={index} title={title} focus={isFocused} handleClick={(title, isFocused) => onTagClick(title, index, isFocused)} />
                        else null
                    })}
                </div>
            </InputBox>
            <div id="tag-selector-wrapper" className={`${isFocused ? "" : "hidden"} absolute top-11 left-0 w-full`}>
                <InputBox className="bg-white z-10" focus={isFocused}>
                    <div
                        id="inner-wrapper"
                        className="flex justify-start items-center gap-2"
                    >
                        {tagList.map((title, index) => {
                            if (selectIdxList.includes(index)) {
                                return (
                                    <Tag key={index} title={title} focus={true} handleClick={(title, isFocused) => onTagClick(title, index, isFocused)}/>
                                )
                            }
                            else {
                                return (
                                    <Tag key={index} title={title} focus={false} handleClick={(title, isFocused) => onTagClick(title, index, isFocused)} />
                                )
                            }
                        })}
                    </div>
                </InputBox>
            </div>
        </div>
    )
}