import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Reveal from "./Reveal"
import { highlights } from "../data/content"

export default function Highlights() {
  return (
    <section id="highlights" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-accent-400 text-sm font-medium tracking-widest uppercase mb-3">
            Signature achievements
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-ink-100 max-w-2xl">
            Impact that shipped to billions of devices
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group h-full rounded-2xl border border-ink-700 bg-ink-900/60 p-7 hover:border-accent-400/60 hover:bg-ink-800/60 transition-colors"
              >
                <span className="inline-block rounded-full bg-ink-800 border border-ink-600 px-3 py-1 text-xs font-medium text-amber-400 tracking-wide">
                  {h.tag}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-ink-100">{h.title}</h3>
                <p className="mt-3 text-ink-300 leading-relaxed">{h.description}</p>
                {h.link && (
                  <a
                    href={h.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 group-hover:text-accent-300"
                  >
                    {h.linkLabel} <ExternalLink size={14} />
                  </a>
                )}
                {h.links?.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                    {h.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 group-hover:text-accent-300"
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
