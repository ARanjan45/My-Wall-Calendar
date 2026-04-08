export type SelectionState = "start" | "end" | "in-range" | "none";

export interface DayInfo {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  selectionState: SelectionState;
  isWeekend: boolean;
  holiday?: string;
}

export interface Note {
  id: string;
  text: string;
  createdAt: string;
  dateRangeLabel?: string;
  rangeStart?: string;   // ← add
  rangeEnd?: string;     // ← add
}

export interface DateRange {
  start: Date | null;
  end: Date | null;
}

export type ThemeName = "seasons" | "festivals" | "minimal" | "moody";

export interface MonthTheme {
  bg: string;
  accent: string;
  text: string;
  particle: "snow" | "petals" | "leaves" | "fireflies" | "rain" | "sparkles";
  label: string;
  gradient: string;
}