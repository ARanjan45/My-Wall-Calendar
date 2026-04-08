"use client";
import Image from "next/image";
import { MonthTheme, ThemeName } from "@/types/calendar";
import { THEME_IMAGES } from "@/lib/constants";
import { useEffect, useState } from "react";

interface Props {
  theme: MonthTheme;
  themeName: ThemeName;
  monthName: string;
  year: number;
  monthIndex: number;
}

export default function HeroImage({ theme, themeName, monthName, year, monthIndex }: Props) {
  const imageUrl = THEME_IMAGES[themeName][monthIndex];
  const isDark = themeName === "moody";
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [imageUrl]);

  return (
    <div className="relative w-full" style={{ aspectRatio: "3/2", overflow: "hidden" }}>
      <Image
        src={imageUrl}
        alt={`${monthName} ${year}`}
        fill
        sizes="(max-width: 640px) 100vw, 580px"
        className="object-cover transition-opacity duration-500"
        style={{ opacity: loaded ? 1 : 0 }}
        onLoad={() => setLoaded(true)}
        priority
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.68) 100%)",
        }}
      />
      {/* Month label above wave */}
      <div className="absolute bottom-14 left-0 right-0 px-6 flex items-end justify-between z-20">
        <div>
          <p className="text-white/60 text-xs uppercase tracking-[0.2em] font-medium mb-0.5">
            {year}
          </p>
          <h1
            className="text-white font-bold leading-none"
            style={{ fontSize: "clamp(2rem, 6vw, 3.2rem)", letterSpacing: "-0.02em" }}
          >
            {monthName}
          </h1>
        </div>
      </div>
    </div>
  );
}