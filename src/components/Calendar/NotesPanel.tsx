"use client";
import { Note } from "@/types/calendar";
import { useState } from "react";
import { Trash2, StickyNote, CalendarDays } from "lucide-react";

interface Props {
  notes: Note[];
  dateRangeLabel: string;
  onAddAction: (text: string) => void;
  onDeleteAction: (id: string) => void;
  onNoteClickAction: (noteId: string) => void;
  accentColor: string;
}

export default function NotesPanel({ notes, dateRangeLabel, onAddAction, onDeleteAction, onNoteClickAction, accentColor }: Props) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    onAddAction(input.trim());
    setInput("");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-3">
        <StickyNote size={16} style={{ color: accentColor }} />
        <h3 className="font-semibold text-stone-700 text-sm">Notes</h3>
        {dateRangeLabel && (
          <span className="ml-auto text-xs text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full truncate max-w-25">
            {dateRangeLabel}
          </span>
        )}
      </div>

      {/* Input stacked to avoid overflow */}
      <div className="flex flex-col gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder={dateRangeLabel ? `Note for ${dateRangeLabel}…` : "Add a note…"}
          className="w-full text-sm px-3 py-2 rounded-lg border border-stone-200 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-300 placeholder:text-stone-300"
        />
        <button
          onClick={handleAdd}
          className="w-full py-2 text-white text-sm rounded-lg transition-opacity hover:opacity-80 font-medium"
          style={{ backgroundColor: accentColor }}
        >
          Add Note
        </button>
      </div>

      {/* Notes list */}
      <div className="flex-1 overflow-y-auto space-y-2">
        {notes.length === 0 && (
          <p className="text-xs text-stone-300 text-center mt-6">No notes this month</p>
        )}
        {notes.map((note) => (
          <div
            key={note.id}
            onClick={() => onNoteClickAction(note.id)}
            className="group flex flex-col gap-1 bg-white border border-stone-100 rounded-xl px-3 py-2.5 cursor-pointer hover:shadow-sm transition-all"
          >
            <p className="text-sm text-stone-700 leading-snug">{note.text}</p>
            <div className="flex items-center justify-between">
              {note.dateRangeLabel ? (
                <span className="flex items-center gap-1 text-xs text-stone-400">
                  <CalendarDays size={10} />
                  {note.dateRangeLabel}
                </span>
              ) : (
                <span className="text-xs text-stone-300">No date</span>
              )}
              <button
                onClick={(e) => { e.stopPropagation(); onDeleteAction(note.id); }}
                className="opacity-0 group-hover:opacity-100 text-stone-300 hover:text-rose-400 transition-all"
              >
                <Trash2 size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}