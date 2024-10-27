import { InputBoxProps } from "./InputBoxProps";

export interface TextBoxProps extends InputBoxProps {
    handleChange?: (value: string) => void;
    handleFocus?:  (value: boolean) => void;
    value?: string;
}