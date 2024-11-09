import { useState } from "react"
import { twMerge } from "tailwind-merge"

export default function Divider({ gap }: { gap?: string }) {
    // TODO :  mx-[-1.5rem] 하드코딩 수정할 방법 찾기...
    return (
        <div
            id="root"
            className={`w-[100vw] h-[0.1rem] bg-rsgGreen-primary mx-[-1.5rem]`}
            style={{ marginTop: gap, marginBottom: gap }}>
        </div>
    )
}