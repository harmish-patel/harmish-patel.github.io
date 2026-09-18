import { GitlabIcon, LinkedinIcon } from "./BrandIcons"
import { profile } from "../data/content"

export default function Footer() {
  return (
    <footer className="relative border-t border-ink px-6 py-10">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="font-mono text-xs text-ink-3">
          © {new Date().getFullYear()} {profile.name}
        </div>
        <div className="flex items-center gap-5">
          <a
            href={profile.gitlab}
            target="_blank"
            rel="noreferrer"
            className="text-ink-2 hover:text-blue transition-colors"
            aria-label="GitLab"
          >
            <GitlabIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-ink-2 hover:text-blue transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
