import { MONTH_NAMES } from "@/lib/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  month: Date;
  onPrev: () => void;
  onNext: () => void;
  onToday: () => void;
  isDark: boolean;
  accentColor: string;
}

export default function CalendarHeader({ month, onPrev, onNext, onToday, isDark, accentColor }: Props) {
  const muted = isDark ? "#8b949e" : "#a8a29e";
  const hover = isDark ? "#21262d" : "#f5f5f4";
  const border = isDark ? "#30363d" : "#e7e5e4";
  const text = isDark ? "#e6edf3" : "#1c1917";

  return (
    <div className="flex items-start justify-between mb-4 gap-2 overflow-visible">

      <div className="flex items-center gap-1.5 shrink-0">
        <button
          onClick={onToday}
          className="text-xs px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap"
          style={{ borderColor: border, color: muted }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hover)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          Today
        </button>
        {[onPrev, onNext].map((fn, i) => (
          <button
            key={i}
            onClick={fn}
            className="p-1.5 rounded-lg transition-colors"
            style={{ color: muted }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            {i === 0 ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </button>
        ))}
      </div>
    </div>
  );
}