"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation(){
    const path=usePathname();
    return(
        <>
        <ul>
            <li> <Link href={"/"}>{path==="/"?"✅":"🌎"}홈으로 가기</Link></li>
            <li> <Link href={"record/10"}>{path==="/record/10"?"✅":"🚩"}레코드 가기</Link></li>
        </ul>
        </>
       
    );
}