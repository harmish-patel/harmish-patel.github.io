import { GitlabIcon, LinkedinIcon } from "./BrandIcons"
import { profile } from "../data/content"

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-700 px-6 py-12">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-ink-400 text-sm">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
        </div>
        <div className="flex items-center gap-5">
          <a
            href={profile.gitlab}
            target="_blank"
            rel="noreferrer"
            className="text-ink-300 hover:text-accent-400 transition-colors"
            aria-label="GitLab"
          >
            <GitlabIcon size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-ink-300 hover:text-accent-400 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
