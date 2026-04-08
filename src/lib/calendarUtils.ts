import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameDay, isWithinInterval, isToday, isSameMonth, format } from "date-fns";
import { DayInfo, DateRange } from "@/types/calendar";
import { INDIAN_HOLIDAYS_2026 } from "./constants";

export function buildCalendarDays(month: Date, range: DateRange): DayInfo[] {
  const start = startOfWeek(startOfMonth(month));
  const end = endOfWeek(endOfMonth(month));

  return eachDayOfInterval({ start, end }).map((date) => {
    const key = format(date, "yyyy-MM-dd");
    return {
      date,
      isCurrentMonth: isSameMonth(date, month),
      isToday: isToday(date),
      selectionState: getSelectionState(date, range),
      isWeekend: [0, 6].includes(date.getDay()),
      holiday: INDIAN_HOLIDAYS_2026[key],
    };
  });
}

function getSelectionState(date: Date, range: DateRange) {
  const { start, end } = range;
  if (start && isSameDay(date, start)) return "start";
  if (end && isSameDay(date, end)) return "end";
  if (start && end && isWithinInterval(date, { start, end })) return "in-range";
  return "none";
}

export function formatDateRangeLabel(range: DateRange): string {
  if (!range.start) return "";
  if (!range.end) return format(range.start, "MMM d, yyyy");
  return `${format(range.start, "MMM d")} – ${format(range.end, "MMM d, yyyy")}`;
}