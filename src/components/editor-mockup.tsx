export function EditorMockup() {
  return (
    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-border bg-card shadow-[0_30px_60px_-30px_oklch(0.18_0.005_85/0.25)]">
      {/* Top bar */}
      <div className="absolute inset-x-0 top-0 h-8 bg-secondary border-b border-border flex items-center px-3 gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-border" />
        <span className="w-2.5 h-2.5 rounded-full bg-border" />
        <span className="w-2.5 h-2.5 rounded-full bg-border" />
        <span className="ml-4 text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Project · Brand_Reel_v04</span>
      </div>

      {/* Sidebar */}
      <div className="absolute left-0 top-8 bottom-[38%] w-12 bg-navy flex flex-col items-center pt-4 gap-5">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className={`w-4 h-4 rounded-sm ${i === 1 ? "bg-gold" : "bg-navy-foreground/20"}`} />
        ))}
      </div>

      {/* Preview window */}
      <div className="absolute right-4 top-12 bottom-[42%] left-1/2 bg-foreground rounded-md overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-foreground to-foreground" />
        <div className="absolute bottom-2 left-2 right-2 h-1 bg-foreground/40 rounded-full overflow-hidden">
          <div className="h-full w-2/5 bg-gold" />
        </div>
      </div>

      {/* Color panel */}
      <div className="absolute left-16 top-12 bottom-[42%] right-[52%] bg-background rounded-md border border-border p-3">
        <div className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground mb-3">Color</div>
        <div className="w-20 h-20 rounded-full mx-auto" style={{ background: "conic-gradient(from 0deg, oklch(0.74 0.09 80), oklch(0.55 0.15 250), oklch(0.65 0.18 30), oklch(0.74 0.09 80))" }} />
        <div className="mt-3 space-y-2">
          {[60, 80, 45].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="text-[8px] uppercase tracking-wider text-muted-foreground w-10">{["Exp", "Sat", "Tnt"][i]}</div>
              <div className="flex-1 h-1 bg-secondary rounded-full">
                <div className="h-full bg-navy rounded-full" style={{ width: `${w}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="absolute inset-x-0 bottom-0 h-[38%] bg-secondary border-t border-border p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground">Timeline</div>
          <div className="text-[9px] tabular-nums text-muted-foreground">00:01:24:08</div>
        </div>
        <div className="space-y-1.5">
          {[
            { color: "bg-navy", w: "85%", off: "0%" },
            { color: "bg-gold", w: "55%", off: "12%" },
            { color: "bg-foreground/70", w: "70%", off: "8%" },
            { color: "bg-navy/60", w: "40%", off: "30%" },
          ].map((row, i) => (
            <div key={i} className="h-5 bg-background rounded-sm relative overflow-hidden">
              <div className={`absolute top-0 bottom-0 ${row.color} rounded-sm`} style={{ left: row.off, width: row.w }} />
            </div>
          ))}
        </div>
        {/* Playhead */}
        <div className="absolute top-8 bottom-2 w-px bg-gold left-[42%]">
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-gold rotate-45" />
        </div>
      </div>
    </div>
  );
}
