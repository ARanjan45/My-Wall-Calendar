"use client";
import { ThemeName } from "@/types/calendar";

const THEMES: {
  name: ThemeName;
  label: string;
  dot: string;
}[] = [
  { name: "seasons",   label: "Seasons",   dot: "#4a7c59" },
  { name: "festivals", label: "Festivals", dot: "#c27c3a" },
  { name: "minimal",   label: "Minimal",   dot: "#9aa0a6" },
  { name: "moody",     label: "Moody",     dot: "#4a3f6b" },
];

interface Props {
  active: ThemeName;
  onChangeAction: (t: ThemeName) => void;
}

export default function ThemeSwitcher({ active, onChangeAction }: Props) {
  return (
    <div className="flex gap-1.5 flex-wrap">
      {THEMES.map((t) => {
        const isActive = active === t.name;
        return (
          <button
            key={t.name}
            onClick={() => onChangeAction(t.name)}
            style={
              isActive
                ? {
                    background: "#1c1917",
                    color: "#e8e2d9",
                    borderColor: "#1c1917",
                  }
                : undefined
            }
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] font-medium
              tracking-[0.01em] transition-all duration-150 border
              ${
                isActive
                  ? ""
                  : "bg-white text-stone-500 border-stone-200 hover:bg-stone-50 hover:text-stone-700"
              }`}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: t.dot }}
            />
            {t.label}
          </button>
        );
      })}
    </div>
  );
}