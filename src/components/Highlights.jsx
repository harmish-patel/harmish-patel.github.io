import { ArrowUpRight } from "lucide-react"
import CollapsibleDetail from "./CollapsibleDetail"
import Reveal from "./Reveal"
import { highlights } from "../data/content"

export default function Highlights() {
  return (
    <section id="highlights" className="relative py-16 px-6 bg-tone-1 border-t border-line">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue mb-3">
            §01 — Signature achievements
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink max-w-2xl">
            Impact at scale
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-px sm:grid-cols-2 bg-line border border-line">
          {highlights.map((h, i) => {
            const isMedia = h.tag === "Fox Business"
            const accent = isMedia ? "text-rust" : "text-blue"
            return (
              <Reveal key={h.title} delay={i * 0.05}>
                <div className="h-full bg-paper p-5 hover:bg-paper-raised transition-colors">
                  <span className={`font-mono text-xs ${accent}`}>{h.tag}</span>
                  <h3 className="mt-2 font-serif text-lg text-ink leading-snug">{h.title}</h3>
                  <CollapsibleDetail>
                    <p className="text-sm text-ink-2 leading-relaxed">{h.description}</p>
                    {h.link && (
                      <a
                        href={h.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`mt-2 inline-flex items-center gap-1 text-sm font-medium hover:underline ${accent}`}
                      >
                        {h.linkLabel} <ArrowUpRight size={13} />
                      </a>
                    )}
                    {h.links?.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                        {h.links.map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-medium text-blue hover:underline"
                          >
                            {l.label} <ArrowUpRight size={12} />
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
