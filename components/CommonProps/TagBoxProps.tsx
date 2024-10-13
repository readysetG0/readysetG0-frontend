import { InputBoxProps } from "./InputBoxProps";

export interface TagBoxProps extends InputBoxProps {
    tagList: string[];
    selectIndexList?: number[];
}