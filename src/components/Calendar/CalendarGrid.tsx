import { DayInfo } from "@/types/calendar";
import { DAYS_OF_WEEK } from "@/lib/constants";
import DayCell from "./DayCell";

interface Props {
  days: DayInfo[];
  onDayClick: (date: Date) => void;
  onDayHover: (date: Date) => void;
  isDark: boolean;
  accentColor: string;
}

export default function CalendarGrid({ days, onDayClick, onDayHover, isDark, accentColor }: Props) {
  const headerColor = isDark ? "#8b949e" : "#a8a29e";

  return (
    <div>
      <div className="grid grid-cols-7 mb-1">
        {DAYS_OF_WEEK.map((d) => (
          <div key={d} className="text-center text-sm font-semibold py-1.5" style={{ color: headerColor }}>
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-y-1">
        {days.map((day, i) => (
          <DayCell
            key={i}
            day={day}
            onClickAction={onDayClick}
            onMouseEnterAction={onDayHover}
            isDark={isDark}
            accentColor={accentColor}
          />
        ))}
      </div>
    </div>
  );
}