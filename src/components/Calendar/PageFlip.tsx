"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

interface Props {
    children: ReactNode;
    monthKey: string;
    direction: "forward" | "backward";
}

export default function PageFlip({ children, monthKey, direction }: Props) {
    const [animClass, setAnimClass] = useState("");
    const prevKey = useRef(monthKey);

    useEffect(() => {
        if (prevKey.current === monthKey) return;
        prevKey.current = monthKey;
        const cls = direction === "forward" ? "flip-forward" : "flip-backward";
        setAnimClass(cls);
        const t = setTimeout(() => setAnimClass(""), 900);
        return () => clearTimeout(t);
    }, [monthKey, direction]);

    return (
        <div className="perspective-1200 w-full" style={{ transformStyle: "preserve-3d" }}>
            <div
                className={`w-full ${animClass}`}
                style={{ transformOrigin: "top center", transformStyle: "preserve-3d" }}
            >
                {children}
            </div>
        </div>
    );
}