'use client'

import { ReactNode } from "react";
import Button from "./Button";

export default function Footer({ children }: { children?: ReactNode }) {
    return (
        <div id="root" className="flex justify-center gap-4">
            {children}
        </div>
    )
}