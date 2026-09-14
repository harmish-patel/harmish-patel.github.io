import Reveal from "./Reveal"
import { experience } from "../data/content"

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 bg-ink-900/40">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-accent-400 text-sm font-medium tracking-widest uppercase mb-3">
            Career
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-ink-100">
            Record of roles
          </h2>
        </Reveal>

        <div className="mt-14 relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-ink-700" />

          <div className="space-y-14">
            {experience.map((job, i) => (
              <Reveal key={job.company + job.period} delay={i * 0.06}>
                <div className="relative pl-10">
                  <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent-400 bg-ink-950" />

                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold text-ink-100">{job.company}</h3>
                    <span className="text-sm text-ink-400">{job.period}</span>
                  </div>
                  <p className="text-sm text-ink-400">{job.location}</p>

                  <div className="mt-4 space-y-6">
                    {job.roles.map((r) => (
                      <div key={r.title + r.period}>
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <p className="text-accent-300 font-medium">{r.title}</p>
                          {job.roles.length > 1 && (
                            <span className="text-xs text-ink-400">{r.period}</span>
                          )}
                        </div>
                        <ul className="mt-3 space-y-2.5">
                          {r.points.map((pt) => (
                            <li key={pt} className="flex gap-3 text-ink-300 leading-relaxed">
                              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink-500" />
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
      </div>
    </section>
  )
}
