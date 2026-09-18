import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function CollapsibleDetail({ children }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div
        className={`grid overflow-hidden transition-all duration-300 sm:grid-rows-[1fr] sm:opacity-100 sm:mt-2 ${
          open ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">{children}</div>
      </div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="sm:hidden mt-2 flex items-center gap-1 text-xs font-mono text-ink-3"
      >
        {open ? "Less" : "More"}
        <ChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
    </>
  )
}
