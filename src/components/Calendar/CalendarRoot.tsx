"use client";
import { useState, useCallback, useMemo } from "react";
import { addMonths, subMonths, isBefore, format, parseISO } from "date-fns";
import { DateRange, Note, ThemeName } from "@/types/calendar";
import { buildCalendarDays, formatDateRangeLabel } from "@/lib/calendarUtils";
import { getMonthTheme } from "@/lib/theme";
import { MONTH_NAMES } from "@/lib/constants";
import CalendarGrid from "./CalendarGrid";
import NotesPanel from "./NotesPanel";
import HeroImage from "./HeroImage";
import ThemeSwitcher from "./ThemeSwitcher";
import RingBinding from "./RingBinding";
import PageFlip from "./PageFlip";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CalendarRoot() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [range, setRange] = useState<DateRange>({ start: null, end: null });
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [selecting, setSelecting] = useState<"start" | "end">("start");
  const [themeName, setThemeName] = useState<ThemeName>("seasons");
  const [allNotes, setAllNotes] = useState<Record<string, Note[]>>({});
  const [flipDirection, setFlipDirection] = useState<"forward" | "backward">("forward");

  const monthKey = format(currentMonth, "yyyy-MM");
  const notes = allNotes[monthKey] ?? [];
  const theme = getMonthTheme(themeName, currentMonth.getMonth());
  const isDark = themeName === "moody";

  const previewRange: DateRange =
    selecting === "end" && range.start && hoverDate
      ? { start: range.start, end: hoverDate }
      : range;

  const days = useMemo(
    () => buildCalendarDays(currentMonth, previewRange),
    [currentMonth, previewRange]
  );
  const dateRangeLabel = formatDateRangeLabel(range);

  const clearRange = useCallback(() => {
    setRange({ start: null, end: null });
    setSelecting("start");
  }, []);

  const goToPrev = useCallback(() => {
    setFlipDirection("backward");
    setCurrentMonth((m) => subMonths(m, 1));
    clearRange();
  }, [clearRange]);

  const goToNext = useCallback(() => {
    setFlipDirection("forward");
    setCurrentMonth((m) => addMonths(m, 1));
    clearRange();
  }, [clearRange]);

  const goToToday = useCallback(() => {
    setFlipDirection(new Date() > currentMonth ? "forward" : "backward");
    setCurrentMonth(new Date());
    clearRange();
  }, [currentMonth, clearRange]);

  const handleDayClick = useCallback(
    (date: Date) => {
      if (selecting === "start") {
        setRange({ start: date, end: null });
        setSelecting("end");
      } else {
        if (range.start && isBefore(date, range.start)) {
          setRange({ start: date, end: range.start });
        } else {
          setRange((r) => ({ ...r, end: date }));
        }
        setSelecting("start");
      }
    },
    [selecting, range.start]
  );

  const handleDayHover = useCallback((date: Date) => setHoverDate(date), []);

  const handleAddAction = useCallback(
    (text: string) => {
      setAllNotes((prev) => ({
        ...prev,
        [monthKey]: [
          {
            id: crypto.randomUUID(),
            text,
            createdAt: new Date().toISOString(),
            dateRangeLabel: dateRangeLabel || undefined,
            rangeStart: range.start?.toISOString(),
            rangeEnd: range.end?.toISOString(),
          },
          ...(prev[monthKey] ?? []),
        ],
      }));
    },
    [dateRangeLabel, range, monthKey]
  );

  const handleDeleteAction = useCallback(
    (id: string) => {
      setAllNotes((prev) => ({
        ...prev,
        [monthKey]: (prev[monthKey] ?? []).filter((n) => n.id !== id),
      }));
    },
    [monthKey]
  );

  const handleNoteClickAction = useCallback(
    (noteId: string) => {
      const note = notes.find((n) => n.id === noteId);
      if (!note?.rangeStart) return;
      setRange({
        start: parseISO(note.rangeStart),
        end: note.rangeEnd ? parseISO(note.rangeEnd) : null,
      });
      setSelecting("start");
    },
    [notes]
  );

  const muted = isDark ? "#6e7681" : "#9ca3af";
  const border = isDark ? "#21262d" : "#e5e0d8";
  const hoverBg = isDark ? "#1c2028" : "#f0ece4";

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 md:p-10 gap-4 transition-colors duration-700"
      style={{ backgroundColor: isDark ? "#0a0c10" : "#c8bfb0" }}
    >
      <ThemeSwitcher active={themeName} onChangeAction={setThemeName} />

      <div
        className="w-full relative"
        style={{
          maxWidth: 580,
          filter: isDark
            ? "drop-shadow(0 36px 50px rgba(0,0,0,0.75))"
            : "drop-shadow(0 30px 40px rgba(0,0,0,0.22))",
        }}
      >
        <div
          className="absolute left-6 right-6 -bottom-3 h-7 rounded-xl blur-lg"
          style={{
            background: isDark ? "rgba(0,0,0,0.65)" : "rgba(0,0,0,0.18)",
            zIndex: 0,
          }}
        />

        <div
          className="absolute left-2 right-2 rounded-b-2xl"
          style={{
            bottom: -6,
            height: "100%",
            background: isDark ? "#181c22" : "#ece4d7",
            zIndex: 0,
          }}
        />
        <div
          className="absolute left-1 right-1 rounded-b-2xl"
          style={{
            bottom: -3,
            height: "100%",
            background: isDark ? "#1c2028" : "#f4ede2",
            zIndex: 1,
          }}
        />

        <div
          className={`relative rounded-2xl overflow-hidden ${isDark ? "paper-dark" : "paper"}`}
          style={{
            zIndex: 2,
            border: isDark ? "1px solid #21262d" : "1px solid #d4c9b8",
            boxShadow: isDark
              ? "0 20px 40px rgba(0,0,0,0.75)"
              : "0 18px 32px rgba(0,0,0,0.14)",
          }}
        >
          <RingBinding isDark={isDark} />

          <PageFlip monthKey={monthKey} direction={flipDirection}>
            <div className="relative overflow-hidden">
              <HeroImage
                theme={theme}
                themeName={themeName}
                monthName={MONTH_NAMES[currentMonth.getMonth()]}
                year={currentMonth.getFullYear()}
                monthIndex={currentMonth.getMonth()}
              />

              <div className="absolute bottom-0 left-0 w-full z-10">
                <svg
                  viewBox="0 0 580 64"
                  preserveAspectRatio="none"
                  className="w-full block"
                  style={{ height: 64 }}
                >
                  <defs>
                    <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={theme.accent} stopOpacity="0.95" />
                      <stop offset="50%" stopColor={theme.accent} stopOpacity="0.85" />
                      <stop offset="100%" stopColor={theme.accent} stopOpacity="0.95" />
                    </linearGradient>
                  </defs>
                  <rect x="0" y="44" width="580" height="20" fill="url(#waveGrad)" />
                  <path
                    d="M0,44 C80,20 160,56 240,36 C320,16 400,52 480,32 C520,22 550,40 580,34 L580,64 L0,64 Z"
                    fill="url(#waveGrad)"
                  />
                </svg>
              </div>
            </div>

            <div className="px-5 pt-2 pb-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-medium" style={{ color: muted }}>
                  {selecting === "start" ? "Tap to select start" : "Tap to select end"}
                </p>

                <div className="flex items-center gap-1">
                  {dateRangeLabel && (
                    <>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{ background: `${theme.accent}20`, color: theme.accent }}
                      >
                        {dateRangeLabel}
                      </span>
                      <button
                        onClick={clearRange}
                        className="text-xs"
                        style={{ color: muted }}
                      >
                        ✕
                      </button>
                    </>
                  )}

                  <button
                    onClick={goToToday}
                    className="text-xs px-2.5 py-1 rounded-lg border transition-colors ml-1"
                    style={{ borderColor: border, color: muted }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = hoverBg)}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    Today
                  </button>

                  <button
                    onClick={goToPrev}
                    className="p-1 rounded-lg transition-colors"
                    style={{ color: muted }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = hoverBg)}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <button
                    onClick={goToNext}
                    className="p-1 rounded-lg transition-colors"
                    style={{ color: muted }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = hoverBg)}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <CalendarGrid
                days={days}
                onDayClick={handleDayClick}
                onDayHover={handleDayHover}
                isDark={isDark}
                accentColor={theme.accent}
              />

              <div className="flex items-center gap-3 mt-3">
                <span className="flex items-center gap-1 text-xs" style={{ color: muted }}>
                  <span
                    className="w-1.5 h-1.5 rounded-full inline-block"
                    style={{ background: theme.accent }}
                  />
                  Holiday
                </span>
                <span className="flex items-center gap-1 text-xs" style={{ color: "#f87171" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block" />
                  Weekend
                </span>
              </div>
            </div>

            <div
              style={{
                height: 1,
                background: isDark ? "#21262d" : "#e5e0d8",
                margin: "0 20px",
              }}
            />

            <div className="px-5 py-4 relative" style={{ minHeight: 180 }}>
              <NotesPanel
                notes={notes}
                dateRangeLabel={dateRangeLabel}
                onAddAction={handleAddAction}
                onDeleteAction={handleDeleteAction}
                onNoteClickAction={handleNoteClickAction}
                accentColor={theme.accent}
              />

              <div
                className="absolute bottom-0 left-0 w-full h-12 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.08), transparent)",
                }}
              />
            </div>
          </PageFlip>
        </div>
      </div>
    </div>
  );
}