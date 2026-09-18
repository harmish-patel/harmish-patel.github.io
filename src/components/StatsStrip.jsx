import { stats } from "../data/content"

export default function StatsStrip() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-line">
      {stats.map((s) => (
        <div key={s.label} className="border-r border-line px-6 py-6 last:border-r-0">
          <div className="font-serif text-2xl text-ink">{s.value}</div>
          <div className="mt-1 font-mono text-[11px] text-ink-3 uppercase tracking-wide leading-snug">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  )
}
