import { MouseEventHandler } from "react";

export interface ButtonProps {
    title: string;
    btnType?: "cancel" | "ok";
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}