import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { profile } from "../data/content"

const LINKS = [
  { href: "#highlights", label: "Highlights" },
  { href: "#experience", label: "Experience" },
  { href: "#software", label: "Software" },
  { href: "#education", label: "Education" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink-950/80 backdrop-blur-lg border-b border-ink-700/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <a href="#top" className="font-semibold tracking-tight text-ink-100">
          {profile.name.split(" ")[0]}
          <span className="text-accent-400">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-200">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink-100 transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href={profile.gitlab}
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink-100 transition-colors"
          >
            GitLab
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ink-600 px-4 py-1.5 hover:border-accent-400 hover:text-ink-100 transition-colors"
          >
            LinkedIn
          </a>
        </nav>

        <button
          className="md:hidden text-ink-100"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink-700/60 bg-ink-950/95 px-6 py-4 flex flex-col gap-4 text-ink-200">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={profile.gitlab} target="_blank" rel="noreferrer">
            GitLab
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      )}
    </motion.header>
  )
}
