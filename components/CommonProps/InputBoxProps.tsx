import { ReactNode } from "react";

export interface InputBoxProps {
    children?: ReactNode;
    title?: string;
    icon?: string;
    disabled?: boolean;
    readonly?: boolean;
    focus?: boolean;
}