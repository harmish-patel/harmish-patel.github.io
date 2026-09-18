import { ArrowUpRight, Smartphone } from "lucide-react"
import CollapsibleDetail from "./CollapsibleDetail"
import Reveal from "./Reveal"
import { software } from "../data/content"

export default function Software() {
  return (
    <section id="software" className="relative py-16 px-6 bg-tone-3 border-t border-line">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue mb-3">
            §03 — Software shipped
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink max-w-2xl">
            Products, platforms, and open source
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-px md:grid-cols-2 lg:grid-cols-3 bg-line border border-line">
          {software.map((s, i) => {
            const isLastAlone = i === software.length - 1 && software.length % 2 !== 0
            return (
            <Reveal key={s.name} delay={i * 0.06} className={isLastAlone ? "md:col-span-2" : ""}>
              <div className="h-full bg-paper p-6 hover:bg-paper-raised transition-colors">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center border border-ink text-ink">
                    <Smartphone size={16} />
                  </span>
                  <h3 className="font-serif text-xl text-ink">{s.name}</h3>
                </div>

                <CollapsibleDetail>
                  <p className="text-ink-2 leading-relaxed">{s.description}</p>

                  {s.metrics?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-xs text-ink-3">
                      {s.metrics.map((m) => (
                        <span key={m}>· {m}</span>
                      ))}
                    </div>
                  )}

                  {s.links?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                      {s.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-blue hover:underline"
                        >
                          {l.label} <ArrowUpRight size={14} />
                        </a>
                      ))}
                    </div>
                  )}
                </CollapsibleDetail>
              </div>
            </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
