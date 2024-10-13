import { InputBoxProps } from "./InputBoxProps";

export interface TextBoxProps extends InputBoxProps {
    handleChange?: (value: string) => void;
    value?: string;
}