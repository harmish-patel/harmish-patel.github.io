import { GitlabIcon, LinkedinIcon } from "./BrandIcons"
import { profile } from "../data/content"
import profilePhoto from "../assets/profile.webp"

const LINKS = [
  { href: "#highlights", label: "Highlights" },
  { href: "#experience", label: "Experience" },
  { href: "#software", label: "Software" },
  { href: "#education", label: "Education" },
]

export default function Sidebar() {
  return (
    <aside className="border-b border-line md:border-b-0 md:border-r md:fixed md:inset-y-0 md:left-0 md:w-72 md:flex md:flex-col md:justify-between blueprint-grid px-8 py-10 md:py-12">
      <div>
        <img
          src={profilePhoto}
          alt={profile.name}
          className="h-36 w-36 object-cover border border-ink"
          width={144}
          height={144}
        />
        <h1 className="mt-5 font-serif text-3xl text-ink">{profile.name}</h1>
        <p className="mt-1 font-mono text-sm text-blue">{profile.title}</p>
        <p className="mt-4 text-sm text-ink-2 leading-relaxed">{profile.tagline}</p>

        <nav className="mt-8 flex flex-row flex-wrap md:flex-col gap-x-5 gap-y-3 font-mono text-xs uppercase tracking-wider text-ink-2">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-blue transition-colors w-fit">
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-8 md:mt-0 flex items-center gap-4">
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
    </aside>
  )
}
