import { Award, GraduationCap } from "lucide-react"
import Reveal from "./Reveal"
import { certifications, education } from "../data/content"

export default function Education() {
  return (
    <section id="education" className="relative py-28 px-6 bg-ink-900/40">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-accent-400 text-sm font-medium tracking-widest uppercase mb-3">
            Education
          </p>
          <div className="mt-8 flex items-start gap-5 rounded-2xl border border-ink-700 bg-ink-900/60 p-8">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400/15 text-amber-400">
              <GraduationCap size={22} />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-ink-100">{education.degree}</h3>
              <p className="mt-1 text-accent-300 font-medium">{education.school}</p>
              <p className="mt-2 text-ink-300">{education.detail}</p>
              <p className="mt-1 text-sm text-ink-400">{education.period}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-accent-400 text-sm font-medium tracking-widest uppercase mt-12 mb-3">
            Licenses &amp; Certifications
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {certifications.map((c) => (
              <div
                key={c.name}
                className="flex items-start gap-4 rounded-2xl border border-ink-700 bg-ink-900/60 p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
                  <Award size={18} />
                </span>
                <div>
                  <h4 className="font-semibold text-ink-100">{c.name}</h4>
                  <p className="mt-1 text-sm text-accent-300">{c.issuer}</p>
                  <p className="mt-1 text-xs text-ink-400">Issued {c.date}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
