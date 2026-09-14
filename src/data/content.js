export const profile = {
  name: "Harmish Patel",
  title: "Mobile Engineering Leader",
  tagline:
    "15+ years directing and scaling enterprise mobile ecosystems — from Android Open Source Project contributions to billing platforms handling multi-million dollar transactions.",
  linkedin: "https://linkedin.com/in/harmish-patel",
  gitlab: "https://gitlab.com/harmish-gitlab",
}

export const stats = [
  { value: "15+", label: "Years in mobile engineering" },
  { value: "2M+", label: "Downloads across Xerox mobile apps" },
  { value: "4x", label: "BLI Smart Workplace Line of the Year awards" },
  { value: "100%", label: "Team growth scaled at Northwestern Mutual" },
]

export const highlights = [
  {
    title: "Upstreamed to the Android Open Source Project",
    description:
      "Authored and upstreamed core printer-subsystem integration code directly into the AOSP baseline repository, putting Xerox discovery components natively on billions of Android devices worldwide.",
    tag: "AOSP Commit 22888aa",
    link: "https://android.googlesource.com/platform/packages/experimental.git/+/22888aa21bf916ca8b344a6944bd38406ba31d92",
    linkLabel: "View commit on android.googlesource.com",
  },
  {
    title: "2M+ downloads, 4+ star ratings",
    description:
      "Xerox Workplace (1M+ downloads, 4.4/5.0) and the Xerox Print Service Plugin (1M+ downloads, 4.2/5.0) each independently crossed a million downloads on the Google Play Store, with a 50% surge in installs under my supervision.",
    tag: "Google Play Store",
    link: null,
  },
  {
    title: "Global media coverage",
    description:
      "The Xerox Team Availability App — an emergency personnel resource tracker my team built under my leadership during COVID-19 — was piloted at Imperial College Healthcare NHS Trust and covered by international press.",
    tag: "Fox Business",
    link: "https://www.foxbusiness.com/technology/xerox-app-track-remote-employees",
    linkLabel: "Read the Fox Business coverage",
  },
  {
    title: "4x BLI Smart Workplace Line of the Year awards",
    description:
      "Xerox Workplace won Keypoint Intelligence's BLI Smart Workplace Solutions Line of the Year award in 2016, 2017, 2019, and 2020, serving Fortune 500 enterprises, government agencies, and healthcare institutions worldwide.",
    tag: "Keypoint Intelligence / BLI",
    link: null,
  },
]

export const experience = [
  {
    company: "Northwestern Mutual",
    location: "Remote / Chicago Area",
    period: "2021 — Present",
    roles: [
      {
        title: "Mobile Engineering Manager",
        period: "2021 — Present",
        points: [
          "Scaled the mobile engineering organization by nearly 100%, formalizing enterprise-wide recruitment, screening, and interview pipelines.",
          "Took over a defunct engineering team and turned it into one of the corporation's highest-producing divisions.",
          "Engineered high-stakes transaction features driving multi-million dollars in net-new deposits.",
          "Decommissioned legacy mobile backend frameworks, migrating to a high-throughput modern platform.",
          "Led a full redesign of the mobile Billing and Payments infrastructure.",
        ],
      },
    ],
  },
  {
    company: "Xerox Corporation",
    location: "Rochester, NY",
    period: "2011 — 2021",
    roles: [
      {
        title: "Engineering Supervisor (Mobile Ecosystems)",
        period: "2016 — 2021",
        points: [
          "Managed an onshore and offshore team supporting a portfolio of 6 applications: Xerox Workplace, Xerox Print Service Plugin, Xerox Mobile Link, Xerox Genuine Scan, Xerox Team Availability, and the Xerox Workplace Mac OS X app.",
          "Sole institutional gatekeeper for Xerox's global Apple Developer and Google Play store footprints.",
          "Scaled Xerox Workplace to 1.1M+ downloads with a 50% surge in installs and 4.4/5.0 rating.",
          "Authored and upstreamed core printer subsystem code to AOSP (Commit 22888aa).",
          "Led the mobile app engineering behind Xerox Workplace, part of the solution recognized with 4 BLI Smart Workplace Solutions Line of the Year awards (2016, 2017, 2019, 2020) from Keypoint Intelligence.",
          "Led my team in building the Xerox Team Availability App, piloted at Imperial College Healthcare NHS Trust.",
          "Built an offshore engineering division in India from scratch, cutting burn-rate by 30%.",
          "Integrated Xerox Workplace with enterprise MDM platforms — MobileIron, Good Technology, and Microsoft Intune.",
          "Integrated printer discovery and printing over IPP, SNMP, and WiFi Direct protocols on Xerox Workplace.",
          "Designed a touchless NFC authentication framework during COVID-19 for secure, contactless printing.",
          "Coordinated weekly cross-border alignment with the Fuji Xerox engineering team in Japan.",
        ],
      },
      {
        title: "Software Developer — C# .NET / WCF / Android",
        period: "2011 — 2016",
        points: [
          "Architected middleware bridging Microsoft Exchange Web Services and IBM Lotus Notes into Xerox Workplace.",
          "Selected to pivot into Android development with zero prior mobile experience to rescue a critical release under deadline — the assignment that launched a 15-year career in mobile engineering.",
        ],
      },
    ],
  },
  {
    company: "BNY Mellon",
    location: "Syracuse, NY",
    period: "2010 — 2011",
    roles: [
      {
        title: "Graduate Systems Engineering Intern",
        period: "2010 — 2011",
        points: [
          "Contributed to transactional codebase verification and diagnostics for high-volume clearing banking modules.",
        ],
      },
    ],
  },
]

export const software = [
  {
    name: "Northwestern Mutual App",
    description:
      "Enterprise mobile app for policyholders — linking insurance, investments, banking, and net worth tracking into a single view, with high-stakes transaction and billing features I engineered and led the redesign of.",
    metrics: ["4.8/5.0 rating"],
    links: [
      { label: "View on Google Play", href: "https://play.google.com/store/apps/details?id=com.nm.nm&hl=en_US" },
      { label: "View on App Store", href: "https://apps.apple.com/us/app/northwestern-mutual/id1132579006" },
    ],
  },
  {
    name: "Xerox Workplace",
    description:
      "Enterprise mobile app powering print, scan, and workplace workflows for Fortune 500 enterprises, government agencies, and healthcare institutions — integrated with enterprise MDM platforms including MobileIron, Good Technology, and Microsoft Intune.",
    metrics: ["1.1M+ downloads", "4.4/5.0 rating", "4x BLI Line of the Year", "MDM integrated"],
    links: [
      { label: "View on Google Play", href: "https://play.google.com/store/apps/details?id=com.xerox.mobileprint&hl=en_US" },
      { label: "View on App Store", href: "https://apps.apple.com/us/app/xerox-workplace/id520577939" },
      { label: "2016 BLI award", href: "https://www.office.xerox.com/latest/XOGAR-25U.pdf" },
      { label: "2017 BLI award", href: "https://www.office.xerox.com/latest/XOGAR-32U.pdf" },
      { label: "2019 BLI award", href: "https://www.office.xerox.com/latest/SOLAR-05U.pdf" },
      { label: "2020 BLI award", href: "https://www.office.xerox.com/latest/SOLAR-09U.pdf" },
    ],
  },
  {
    name: "Xerox Print Service Plugin",
    description:
      "Native Android print services plugin enabling driverless mobile printing to Xerox printers and MFPs, independently crossing 1M+ downloads on Google Play.",
    metrics: ["1M+ downloads", "4.2/5.0 rating"],
    links: [
      { label: "View on Google Play", href: "https://play.google.com/store/apps/details?id=com.xerox.printservice&hl=en_US" },
    ],
  },
  {
    name: "Xerox Team Availability App",
    description:
      "Emergency personnel resource tracker built during COVID-19, piloted at Imperial College Healthcare NHS Trust to help maintain vital hospital operations.",
    metrics: ["Global press coverage", "NHS Trust deployment"],
    links: [
      { label: "Fox Business coverage", href: "https://www.foxbusiness.com/technology/xerox-app-track-remote-employees" },
    ],
  },
  {
    name: "AOSP Printer Subsystem",
    description:
      "Core wireless discovery integration upstreamed to the Android Open Source Project, shipping natively on billions of Android devices.",
    metrics: ["Commit 22888aa", "Billions of endpoints"],
    links: [
      { label: "View AOSP commit", href: "https://android.googlesource.com/platform/packages/experimental.git/+/22888aa21bf916ca8b344a6944bd38406ba31d92" },
    ],
  },
]

export const education = {
  degree: "Master of Science (M.S.) in Computer Engineering",
  school: "Syracuse University",
  detail: "Awarded 30% Merit-Based Academic Scholarship",
  period: "2009 — 2011",
}

export const certifications = [
  {
    name: "Adaptability & Resilience",
    issuer: "McKinsey & Company",
    date: "Dec 2022",
  },
  {
    name: "Practitioner — Northwestern Mutual Design Thinking Academy",
    issuer: "Illinois Institute of Technology",
    date: "Oct 2022",
  },
]
