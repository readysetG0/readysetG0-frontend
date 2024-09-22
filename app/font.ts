import { Raleway } from 'next/font/google'
import localFont from 'next/font/local'

export const pretendardFont=localFont({
    src:'../public/fonts/PretendardVariable.woff2',
    display:"swap",
    weight:"45 920",
    variable:"--font-pretendardFont"
})

export const raleway=Raleway({
    subsets:['latin'],
    weight:"400",
    variable:"--font-raleway"
})