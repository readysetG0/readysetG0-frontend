import { ReactNode } from "react"
import { MdImageSearch } from "react-icons/md"

export default function ImagePicker() {
    return (
        <div id="root" className="container min-h-64 h-full border-dashed border-2 border-black rounded-xl flex flex-col justify-center items-center gap-6">
            <MdImageSearch className="w-28 h-28" />
            <p className="font-raleway text-2xl">사진을 추가해보세요</p>
        </div>
    )
}