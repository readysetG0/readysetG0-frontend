import { TagBoxProps } from "../CommonProps/TagBoxProps";
import InputBox from "./InputBox";

export default function TagBox({ title, icon, disabled=false, readonly=false} : TagBoxProps) {
    return (
        <InputBox title={title} icon={icon} disabled={disabled} readonly={readonly}>

        </InputBox>
    )
}