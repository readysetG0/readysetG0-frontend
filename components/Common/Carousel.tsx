import ImagePicker from "./ImagePicker";

export default function Carousel() {
    return (
        <div id="root" className="container min-h-72 flex flex-col justify-center items-center">
            <div id="carousel-content" className="container min-h-64 flex flex-col justify-center items-center">
            <ImagePicker></ImagePicker>
            </div>
            <div id="dot-wrapper" className="flex flex-col justify-center items-center w-full h-10">
                <ul id="dots" className="flex justify-center items-center">
                    <li className="actived w-3 h-3 mt-0 mr-1 border border-solid border-rsgGreen-primary rounded-full bg-[#D9D9D9] cursor-pointer [&.actived]:bg-rsgGreen-primary"></li>
                    <li className="w-3 h-3 mt-0 mr-1 border border-solid border-rsgGreen-primary rounded-full bg-[#D9D9D9] cursor-pointer [&.actived]:bg-rsgGreen-primary"></li>
                </ul>
            </div>
        </div>
    )
}