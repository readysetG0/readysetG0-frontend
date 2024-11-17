'use client'

import { forwardRef, MutableRefObject, ReactNode, useEffect, useRef, useState } from "react";
import { CarouselProps } from "../CommonProps/CarouselProps";
import { useSwipeable } from "react-swipeable";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import registDragEvent from "@/utils/registDragEvent";

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(({ children, childWidth, index=0 }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(index)
    const [transX, setTransX] = useState(0)

    // const [{ x }, api] = useSpring(() => ({ x: 0 }))

    // const bind = useDrag(({ down, movement: [mx] }) => {
    //     api.start({ x: down ? mx : 0, immediate: down })
    // })

    // const nextSlide = () => {
    //     setCurrentIndex((prevIndex: number) => 
    //         prevIndex === (children as ReactNode[]).length - 1 ? 0 : prevIndex + 1
    //     );
    // }

    // const prevSlide = () => {
    //     setCurrentIndex((prevIndex: number) => 
    //         prevIndex === 0 ? (children as ReactNode[]).length - 1 : prevIndex - 1
    //     );
    // }

    // const handlers = useSwipeable({
    //     onSwipedLeft: () => nextSlide(),
    //     onSwipedRight: () => prevSlide(),
    // });

    const checkRange = (delta: number, min: number, max: number) => {
        if (delta < min) return min
        if (delta > max) return max
        return delta
    }

    return (
        <div ref={ref} id="root" className="container min-h-72 flex flex-col justify-center items-center overflow-hidden">
            <div
                id="carousel-content"
                className={`flex w-full h-72`}
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
                    <div key={index} className="flex-shrink-0 h-72">
                        {child}
                    </div>
                ))}
            </div>
            {/* <div id="carousel-content" className="container min-h-64 flex flex-col justify-center items-center">
                {children}
            </div> */}
            {/* {...bind()} style={{ x, touchAction: 'none' }} */}
            {/* <animated.div id="carousel-content" className="relative overflow-hidden w-full h-72" {...handlers}>
                {(children as ReactNode[])?.map((child: ReactNode, index: number) => (
                    <div key={index} className={`absolute top-0 left-0 w-full h-full transition-x duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                        {child}
                    </div>
                ))}
            </animated.div>*/}
            <div id="dot-wrapper" className="flex flex-col justify-center items-center w-full h-10">
                <ul id="dots" className="flex justify-center items-center">
                    {(children as ReactNode[])?.map((child: ReactNode, index: number) => (
                        <li key={index} className={`${index === currentIndex ? 'actived' : ''} w-3 h-3 mt-0 mr-1 border border-solid border-rsgGreen-primary rounded-full bg-[#D9D9D9] cursor-pointer [&.actived]:bg-rsgGreen-primary`}></li>
                    ))}
                </ul>
            </div>
        </div>
    )
})

export default Carousel