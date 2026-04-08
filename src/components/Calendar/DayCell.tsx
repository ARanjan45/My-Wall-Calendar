"use client";
import { DayInfo } from "@/types/calendar";
import { format } from "date-fns";

interface Props {
  day: DayInfo;
  onClickAction: (date: Date) => void;
  onMouseEnterAction: (date: Date) => void;
  isDark: boolean;
  accentColor: string;
}

export default function DayCell({ day, onClickAction, onMouseEnterAction, isDark, accentColor }: Props) {
  const { date, isCurrentMonth, isToday, selectionState, isWeekend, holiday } = day;

  const getStyle = () => {
    if (selectionState === "start") return {
      backgroundColor: accentColor,
      color: "#fff",
      borderRadius: "10px 0 0 10px",
    };
    if (selectionState === "end") return {
      backgroundColor: accentColor,
      color: "#fff",
      borderRadius: "0 10px 10px 0",
    };
    if (selectionState === "in-range") return {
      backgroundColor: `${accentColor}22`,
      color: isDark ? "#e6edf3" : "#1c1917",
      borderRadius: "0",
    };
    return {
      backgroundColor: "transparent",
      color: isWeekend && isCurrentMonth
        ? "#f87171"
        : isDark ? "#c9d1d9" : "#374151",
      borderRadius: "10px",
    };
  };

  return (
    <div
      onClick={() => onClickAction(date)}
      onMouseEnter={() => onMouseEnterAction(date)}
      className="relative flex flex-col items-center justify-center h-12 w-full cursor-pointer select-none transition-all duration-100 text-sm font-semibold group"
      style={{
        ...getStyle(),
        opacity: !isCurrentMonth ? 0.2 : 1,
        outline: isToday && selectionState === "none"
          ? `2px solid ${accentColor}`
          : "none",
        outlineOffset: "-2px",
      }}
    >
      <span className="z-10 leading-none">{format(date, "d")}</span>

      {/* Holiday dot */}
      {holiday && isCurrentMonth && (
        <span
          className="absolute bottom-1 w-1 h-1 rounded-full"
          style={{ backgroundColor: selectionState !== "none" ? "#fff" : accentColor }}
          title={holiday}
        />
      )}

      {/* Hover tooltip for holiday */}
      {holiday && isCurrentMonth && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block z-50 whitespace-nowrap bg-stone-800 text-white text-[10px] px-2 py-1 rounded-md shadow-lg pointer-events-none">
          {holiday}
        </div>
      )}
    </div>
  );
}