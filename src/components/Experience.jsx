import Reveal from "./Reveal"
import { experience } from "../data/content"

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 px-6 bg-tone-2 border-t border-line">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue mb-3">
            §02 — Career
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink">Record of roles</h2>
        </Reveal>

        <div className="mt-10 space-y-10">
          {experience.map((job, i) => (
            <Reveal key={job.company + job.period} delay={i * 0.06}>
              <div className="border-t border-ink pt-5 md:grid md:grid-cols-[180px_1fr] md:gap-8">
                <div className="mb-4 md:mb-0">
                  <h3 className="font-serif text-lg text-ink">{job.company}</h3>
                  <p className="mt-1 font-mono text-xs text-ink-3">{job.period}</p>
                  <p className="text-xs text-ink-3">{job.location}</p>
                </div>

                <div className="space-y-6">
                  {job.roles.map((r) => (
                    <div key={r.title + r.period} className="pl-5 border-l border-line">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="font-mono text-sm text-blue">{r.title}</p>
                        {job.roles.length > 1 && (
                          <span className="font-mono text-xs text-ink-3">{r.period}</span>
                        )}
                      </div>
                      {r.stack?.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-ink-3">
                          {r.stack.map((s) => (
                            <span key={s}>· {s}</span>
                          ))}
                        </div>
                      )}
                      <ul className="mt-3 space-y-2">
                        {r.points.map((pt) => (
                          <li key={pt} className="flex gap-3 text-ink-2 leading-relaxed">
                            <span className="mt-2.5 h-1 w-1 shrink-0 bg-ink-3" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
