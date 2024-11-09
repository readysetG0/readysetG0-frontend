import { useEffect, useState } from "react"

export default function Divider({ gap, parentPadding }: { gap?: string, parentPadding?: string }) {
    const [windowWidth, setWindowWidth] = useState<number>()

    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, [])
    
    return (
        <div
            id="root"
            className={`w-[100vw] h-[0.1rem] ${parentPadding ? "mx-[-" + parentPadding + "]" : ""} bg-rsgGreen-primary`}
            style={{ marginTop: gap, marginBottom: gap }}>
        </div>
    )
}