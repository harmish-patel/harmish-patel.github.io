import { Award, GraduationCap } from "lucide-react"
import Reveal from "./Reveal"
import { certifications, education } from "../data/content"

export default function Education() {
  return (
    <section id="education" className="relative py-16 px-6 bg-tone-4 border-t border-line">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue mb-3">
            §04 — Education
          </p>
          <div className="mt-8 grid gap-px sm:grid-cols-2 bg-line border border-line">
            {education.map((ed) => (
              <div key={ed.degree} className="flex items-start gap-5 bg-paper p-8">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink text-ink">
                  <GraduationCap size={20} />
                </span>
                <div>
                  <h3 className="font-serif text-lg text-ink">{ed.degree}</h3>
                  <p className="mt-1 font-mono text-sm text-blue">{ed.school}</p>
                  <p className="mt-2 text-ink-2">{ed.detail}</p>
                  <p className="mt-1 font-mono text-xs text-ink-3">{ed.period}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue mt-12 mb-3">
            Licenses &amp; Certifications
          </p>
          <div className="mt-8 grid gap-px sm:grid-cols-2 bg-line border border-line">
            {certifications.map((c) => (
              <div key={c.name} className="flex items-start gap-4 bg-paper p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-rust text-rust">
                  <Award size={16} />
                </span>
                <div>
                  <h4 className="font-medium text-ink">{c.name}</h4>
                  <p className="mt-1 font-mono text-xs text-rust">{c.issuer}</p>
                  <p className="mt-1 font-mono text-xs text-ink-3">Issued {c.date}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
