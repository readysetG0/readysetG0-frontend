import { MdImageSearch } from "react-icons/md"
import { twMerge } from "tailwind-merge"

export default function ImagePicker({ width, height }: { width?: number, height?: number }) {
    const className = twMerge("container min-h-64", width !== undefined ? `w-[${width}px]` : "w-full", height !== undefined ? `h-[${height}px]` : "h-full", "border-dashed border-2 border-black rounded-xl flex flex-col justify-center items-center gap-6")
    return (
        <div id="root" className={className}>
            <MdImageSearch className="w-28 h-28" />
            <p className="font-raleway text-2xl">사진을 추가해보세요</p>
        </div>
    )
}