import { MouseEventHandler } from "react";

export interface ButtonProps {
    title: string;
    btnType: "cancel" | "ok";
    containerStyles?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}