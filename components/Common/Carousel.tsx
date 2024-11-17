'use client'

import { forwardRef, ReactNode, useState } from "react";
import { CarouselProps } from "../CommonProps/CarouselProps";
import registDragEvent from "@/utils/registDragEvent";

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(({ children, childWidth, index=0 }, ref) => {
    const childrenLength = (children as ReactNode[]).length

    const [currentIndex, setCurrentIndex] = useState(index)
    const [transX, setTransX] = useState(0)

    const checkRange = (delta: number, min: number, max: number) => {
        if (delta < min) return min
        if (delta > max) return max
        return delta
    }

    const onDotClick = (index: number) => {
        // TODO : 움직이는 모션 추가
        setCurrentIndex(index)
    }

    return (
        <div ref={ref} id="root" className="container min-h-72 w-full flex flex-col justify-center items-center overflow-hidden">
            <div
                id="carousel-content"
                className={`flex w-[${childWidth * childrenLength}] h-72`}
                style={{
                    transform: `translateX(${-currentIndex * childWidth + transX}px)`,
                    transition: `trasnform ${transX ? 0 : 300}ms ease-in-out 0s`
                }}
                {...registDragEvent({
                    onDragChange: (deltaX) => {
                        setTransX(checkRange(deltaX, -childWidth, childWidth))
                    },
                    onDragEnd: (deltaX) => {
                        const maxIndex = (children as ReactNode[]).length - 1

                        if (deltaX < -100) setCurrentIndex(checkRange(currentIndex + 1, 0, maxIndex))
                        if (deltaX > 100) setCurrentIndex(checkRange(currentIndex - 1, 0, maxIndex))
                        
                        setTransX(0)
                    }
                })}
            >
                {(children as ReactNode[])?.map((child: ReactNode, index: number) => (
                    <div key={index} className="flex-shrink-0 w-full h-72">
                        {child}
                    </div>
                ))}
            </div>
            
            <div id="dot-wrapper" className="flex flex-col justify-center items-center w-full h-10">
                <ul id="dots" className="flex justify-center items-center">
                    {(children as ReactNode[])?.map((child: ReactNode, index: number) => (
                        <li
                            key={index}
                            className={`${index === currentIndex ? 'actived' : ''} w-3 h-3 mt-0 mr-1 border border-solid border-rsgGreen-primary rounded-full bg-[#D9D9D9] cursor-pointer [&.actived]:bg-rsgGreen-primary`}
                            onClick={() => onDotClick(index)}
                        ></li>
                    ))}
                </ul>
            </div>
        </div>
    )
})

export default Carousel