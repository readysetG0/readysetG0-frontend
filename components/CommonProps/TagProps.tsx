import { MouseEvent } from "react";

export interface TagProps {
    title: string;
    focus?: boolean;
    handleMouseDown?: (e: MouseEvent<HTMLDivElement>) => void;
    handleClick?: (title: string, isFocused: boolean) => void;
}