import { motion } from "framer-motion"
import { ExternalLink, Smartphone } from "lucide-react"
import Reveal from "./Reveal"
import { software } from "../data/content"

export default function Software() {
  return (
    <section id="software" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-accent-400 text-sm font-medium tracking-widest uppercase mb-3">
            Software shipped
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-ink-100 max-w-2xl">
            Products, platforms, and open source
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {software.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full rounded-2xl border border-ink-700 bg-gradient-to-br from-ink-900 to-ink-800/60 p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
                    <Smartphone size={18} />
                  </span>
                  <h3 className="text-xl font-semibold text-ink-100">{s.name}</h3>
                </div>

                <p className="mt-4 text-ink-300 leading-relaxed">{s.description}</p>

                {s.metrics?.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.metrics.map((m) => (
                      <span
                        key={m}
                        className="rounded-full bg-ink-800 border border-ink-600 px-3 py-1 text-xs text-ink-200"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                )}

                {s.links?.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                    {s.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-accent-300"
                      >
                        {l.label} <ExternalLink size={14} />
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
