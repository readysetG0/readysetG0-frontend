import { ReactNode } from "react";

export interface CarouselProps {
    childWidth: number,
    children?: ReactNode | ReactNode[]
    index?: number,
}