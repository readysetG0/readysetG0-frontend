import { IoIosArrowBack } from "react-icons/io";

export default function Header() {
    return (
        <div id="root" className="container top-0 flex justify-between min-h-6 ">
            <div id="left-button-wrapper">
                <IoIosArrowBack size={"3em"}/>
            </div>
            <div id="right-button-wrapper">

            </div>
        </div>
    );
}