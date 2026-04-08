export default function RingBinding({ isDark }: { isDark: boolean }) {
  const count = 9;
  return (
    <div
      className="relative w-full z-30 flex items-center"
      style={{
        height: 28,
        background: isDark
          ? "linear-gradient(180deg,#1a1d23 0%,#13161c 100%)"
          : "linear-gradient(180deg,#c8b99a 0%,#b0a080 100%)",
      }}
    >
      {/* screw holes row */}
      <div className="absolute inset-0 flex items-center justify-around px-10">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: isDark
                ? "radial-gradient(circle at 35% 35%, #2a2d35, #0a0c10)"
                : "radial-gradient(circle at 35% 35%, #e8d8b8, #8a7858)",
              boxShadow: isDark
                ? "inset 0 2px 4px rgba(0,0,0,0.9), 0 1px 1px rgba(255,255,255,0.05)"
                : "inset 0 2px 4px rgba(0,0,0,0.4), 0 1px 2px rgba(255,255,255,0.3)",
              position: "relative",
            }}
          >
            {/* inner hole */}
            <div style={{
              position: "absolute",
              top: "50%", left: "50%",
              transform: "translate(-50%,-50%)",
              width: 8, height: 8,
              borderRadius: "50%",
              background: isDark ? "#050608" : "#6a5840",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.8)",
            }} />
          </div>
        ))}
      </div>
    </div>
  );
}