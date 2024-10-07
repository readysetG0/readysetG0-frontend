export interface InputBoxProps {
    title: string;
    icon?: string;
    handleChange?: (value: string) => void;
    disabled?: boolean;
    readonly?: boolean;
    value?: string;
}