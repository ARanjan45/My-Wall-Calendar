import { ThemeName, MonthTheme } from "@/types/calendar";

export const THEMES: Record<ThemeName, MonthTheme[]> = {
  seasons: [
    { bg: "#e8f0f7", accent: "#4a7fa5", text: "#1a3a5c", particle: "snow", label: "January", gradient: "from-slate-400 to-blue-200" },
    { bg: "#f0eaf7", accent: "#7c5cbf", text: "#2d1f4e", particle: "snow", label: "February", gradient: "from-purple-300 to-pink-200" },
    { bg: "#fff0f5", accent: "#d63384", text: "#4a0e2e", particle: "petals", label: "March", gradient: "from-rose-400 to-pink-100" },
    { bg: "#fdf3ea", accent: "#e07b39", text: "#5c2d0a", particle: "petals", label: "April", gradient: "from-orange-200 to-pink-100" },
    { bg: "#eafaf1", accent: "#27ae60", text: "#1a4a2e", particle: "petals", label: "May", gradient: "from-green-400 to-teal-200" },
    { bg: "#fff9e6", accent: "#f0b429", text: "#5c3d00", particle: "fireflies", label: "June", gradient: "from-yellow-300 to-amber-100" },
    { bg: "#e0f7fa", accent: "#00838f", text: "#00363a", particle: "fireflies", label: "July", gradient: "from-teal-400 to-cyan-100" }, { bg: "#fde8e8", accent: "#c0392b", text: "#4a0a0a", particle: "fireflies", label: "August", gradient: "from-red-300 to-orange-200" },
    { bg: "#fdf3e3", accent: "#d35400", text: "#5c2700", particle: "leaves", label: "September", gradient: "from-amber-400 to-orange-200" },
    { bg: "#fbeee0", accent: "#a04000", text: "#3d1700", particle: "leaves", label: "October", gradient: "from-orange-600 to-amber-300" },
    { bg: "#eaf0f6", accent: "#2e4057", text: "#1a2535", particle: "rain", label: "November", gradient: "from-slate-500 to-blue-300" },
    { bg: "#e8f0f7", accent: "#1a5276", text: "#0d2b3e", particle: "snow", label: "December", gradient: "from-blue-400 to-cyan-200" },
  ],
  festivals: [
    { bg: "#fff9c4", accent: "#fbc02d", text: "#453100", particle: "sparkles", label: "January", gradient: "from-yellow-500 to-amber-200" },

    { bg: "#fffde7", accent: "#ffd600", text: "#3e2723", particle: "petals", label: "February", gradient: "from-yellow-400 to-orange-300" },

    { bg: "#fce4ec", accent: "#d81b60", text: "#4a0019", particle: "petals", label: "March", gradient: "from-pink-500 to-purple-400" },

    { bg: "#e8f5e9", accent: "#2e7d32", text: "#0d2310", particle: "sparkles", label: "April", gradient: "from-green-600 to-lime-300" },

    { bg: "#fafafa", accent: "#ff6d00", text: "#4e342e", particle: "sparkles", label: "May", gradient: "from-orange-400 to-gray-100" },

    { bg: "#fff3e0", accent: "#bf360c", text: "#3e2723", particle: "fireflies", label: "June", gradient: "from-red-700 to-orange-400" },

    { bg: "#f1f8e9", accent: "#558b2f", text: "#1b3009", particle: "fireflies", label: "July", gradient: "from-teal-700 to-green-300" },

    { bg: "#e3f2fd", accent: "#1565c0", text: "#0d47a1", particle: "sparkles", label: "August", gradient: "from-blue-600 to-indigo-300" },

    { bg: "#fff8e1", accent: "#e65100", text: "#3e2723", particle: "petals", label: "September", gradient: "from-orange-500 to-red-500" },

    { bg: "#ffffff", accent: "#b71c1c", text: "#310000", particle: "sparkles", label: "October", gradient: "from-red-600 to-slate-100" },

    { bg: "#3e2723", accent: "#ffab00", text: "#fff8e1", particle: "sparkles", label: "November", gradient: "from-amber-600 to-orange-900" },

    // December: Christmas/Guru Nanak Jayanti (Pine Green & Berry Red)
    { bg: "#f5f5f5", accent: "#c62828", text: "#1b5e20", particle: "snow", label: "December", gradient: "from-red-700 to-green-700" },
  ],
  minimal: [
    { bg: "#fafafa", accent: "#333333", text: "#111111", particle: "snow", label: "January", gradient: "from-gray-300 to-gray-100" },
    { bg: "#fafafa", accent: "#555555", text: "#111111", particle: "snow", label: "February", gradient: "from-gray-400 to-gray-200" },
    { bg: "#fafafa", accent: "#444444", text: "#111111", particle: "petals", label: "March", gradient: "from-gray-300 to-stone-100" },
    { bg: "#fafafa", accent: "#333333", text: "#111111", particle: "petals", label: "April", gradient: "from-stone-300 to-gray-100" },
    { bg: "#fafafa", accent: "#444444", text: "#111111", particle: "petals", label: "May", gradient: "from-gray-200 to-stone-100" },
    { bg: "#fafafa", accent: "#555555", text: "#111111", particle: "fireflies", label: "June", gradient: "from-stone-300 to-gray-200" },
    { bg: "#fafafa", accent: "#333333", text: "#111111", particle: "fireflies", label: "July", gradient: "from-gray-300 to-stone-200" },
    { bg: "#fafafa", accent: "#444444", text: "#111111", particle: "fireflies", label: "August", gradient: "from-stone-400 to-gray-200" },
    { bg: "#fafafa", accent: "#555555", text: "#111111", particle: "leaves", label: "September", gradient: "from-gray-400 to-stone-200" },
    { bg: "#fafafa", accent: "#333333", text: "#111111", particle: "leaves", label: "October", gradient: "from-stone-400 to-gray-300" },
    { bg: "#fafafa", accent: "#444444", text: "#111111", particle: "rain", label: "November", gradient: "from-gray-500 to-stone-300" },
    { bg: "#fafafa", accent: "#555555", text: "#111111", particle: "snow", label: "December", gradient: "from-gray-300 to-stone-100" },
  ],
  moody: [
    { bg: "#0d1117", accent: "#58a6ff", text: "#c9d1d9", particle: "snow", label: "January", gradient: "from-gray-900 to-blue-950" },
    { bg: "#0d0d1a", accent: "#bc8cff", text: "#d2bef0", particle: "snow", label: "February", gradient: "from-indigo-950 to-purple-950" },
    { bg: "#0a1a0f", accent: "#56d364", text: "#aef0b8", particle: "petals", label: "March", gradient: "from-green-950 to-emerald-900" },
    { bg: "#1a100a", accent: "#f78166", text: "#f0c8b0", particle: "petals", label: "April", gradient: "from-orange-950 to-red-900" },
    { bg: "#0a1a12", accent: "#3fb950", text: "#b0f0c0", particle: "fireflies", label: "May", gradient: "from-green-950 to-teal-900" },
    { bg: "#1a1500", accent: "#e3b341", text: "#f0dca0", particle: "fireflies", label: "June", gradient: "from-yellow-950 to-amber-900" },
    { bg: "#1a0a00", accent: "#f0883e", text: "#f0c090", particle: "fireflies", label: "July", gradient: "from-orange-950 to-amber-900" },
    { bg: "#1a0000", accent: "#ff7b72", text: "#f0b0b0", particle: "sparkles", label: "August", gradient: "from-red-950 to-rose-900" },
    { bg: "#1a0f00", accent: "#d29922", text: "#f0d080", particle: "leaves", label: "September", gradient: "from-amber-950 to-orange-900" },
    { bg: "#0f0500", accent: "#b36d00", text: "#e8a060", particle: "leaves", label: "October", gradient: "from-orange-950 to-red-950" },
    { bg: "#050d1a", accent: "#388bfd", text: "#a0c0f0", particle: "rain", label: "November", gradient: "from-blue-950 to-slate-900" },
    { bg: "#030d1a", accent: "#1f6feb", text: "#80b0f0", particle: "snow", label: "December", gradient: "from-blue-950 to-indigo-950" },
  ],
};

export function getMonthTheme(themeName: ThemeName, monthIndex: number): MonthTheme {
  return THEMES[themeName][monthIndex];
}