import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { GitlabIcon, LinkedinIcon } from "./BrandIcons"
import { profile, stats } from "../data/content"
import profilePhoto from "../assets/profile.webp"

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden noise-bg">
      {/* animated background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ink-800 via-ink-950 to-ink-950" />
        <motion.div
          className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-accent-500/20 blur-[120px]"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -right-32 h-[460px] w-[460px] rounded-full bg-amber-400/10 blur-[120px]"
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-32 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center gap-5"
        >
          <img
            src={profilePhoto}
            alt={profile.name}
            className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover ring-2 ring-ink-700 shrink-0"
            width={80}
            height={80}
          />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-ink-100">
            {profile.name}
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-2xl sm:text-3xl font-medium text-gradient max-w-2xl"
        >
          {profile.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-lg text-ink-200 max-w-2xl leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#highlights"
            className="rounded-full bg-accent-500 hover:bg-accent-400 transition-colors px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent-500/20"
          >
            See the highlights
          </a>
          <a
            href={profile.gitlab}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-ink-600 hover:border-accent-400 transition-colors px-6 py-3 text-sm font-medium text-ink-100"
          >
            <GitlabIcon size={16} /> GitLab
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-ink-600 hover:border-accent-400 transition-colors px-6 py-3 text-sm font-medium text-ink-100"
          >
            <LinkedinIcon size={16} /> LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {stats.map((s) => (
            <div key={s.label} className="border-t border-ink-700 pt-4">
              <div className="text-3xl font-semibold text-ink-100">{s.value}</div>
              <div className="mt-1 text-sm text-ink-400">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#highlights"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-400"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}
