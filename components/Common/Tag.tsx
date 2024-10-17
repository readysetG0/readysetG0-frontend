"use-client"

import { MouseEventHandler, useEffect, useState } from "react"
import { TagProps } from "../CommonProps/TagProps"

export default function Tag({ title, focus=false, handleMouseDown, handleClick }: TagProps) {
    const [bg, setBg] = useState("bg-rsgGreen-primary")

    useEffect(() => {
        if (focus) setBg("bg-rsgGreen-accent")
        else setBg("bg-rsgGreen-primary")
    }, [focus])

    return (
        <div
            id="root"
            className={`flex justify-center items-center min-w-16 min-h-5 w-20 h-5 rounded-full border p-3 py-3 ${bg}`}
            onMouseDown={(e) => {
                e.preventDefault()
                handleMouseDown?.(e)
            }}
            onClick={(e) => {handleClick?.(title, focus)}}
        >
            <p id="title-wrapper" className="text-white font-raleway text-xs">{title}</p>
        </div>
    )
}