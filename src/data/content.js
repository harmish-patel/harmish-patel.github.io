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
  { value: "2x", label: "Products at 1M+ download scale" },
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
    title: "Millions of downloads, high ratings",
    description:
      "Xerox Workplace (1M+ downloads, 4.4/5.0) and the Xerox Print Service Plugin (1M+ downloads, 4.2/5.0) each independently crossed a million downloads on the Google Play Store, with a 50% surge in installs under my supervision.",
    tag: "Google Play Store",
    link: null,
  },
  {
    title: "Global media coverage",
    description:
      "The Xerox Team Availability App — an emergency personnel resource tracker my team built under my leadership during COVID-19 — was piloted at the UK's Imperial College Healthcare NHS Trust and covered by international press.",
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
        stack: ["AI-Assisted Development", "React Native", "GraphQL", "Node.js", "TypeScript", "Native Android (Kotlin) / iOS (SwiftUI)"],
        points: [
          "Engineered high-stakes transaction features driving multi-million dollars in net-new deposits.",
          "Leading AI adoption into the team's SDLC and building the culture behind it — creating skills and agents for repetitive work like tech debt backlog generation, migration work, feature flag removal, and code coverage/testing.",
          "Fashioned an AI adoption dashboard to monitor usage trends and AI-assisted merge requests across the team.",
          "Scaled the mobile engineering organization by nearly 100%, formalizing enterprise-wide recruitment, screening, and interview pipelines.",
          "Stepped up to manage both the mobile and backend engineering teams for nearly a year, bridging the gap while recruiting the right permanent backend leader.",
          "Integrated the mobile stack with a high-throughput Apollo GraphQL platform built by the backend team, retiring legacy mobile backend frameworks.",
          "Took over an underperforming 6-person team building Northwestern Mutual's React Native field app — used extensively by field representatives and a key driver of the company's OKRs and revenue — and grew it into one of NM's top-rated apps for customer satisfaction."
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
        stack: ["Native Android (Java, Kotlin) / iOS (Obj C, Swift, UIKit)"],
        points: [
          "Sole institutional gatekeeper for Xerox's global Apple Developer and Google Play accounts.",
          "Led the mobile app engineering behind Xerox Workplace, part of the solution recognized with 4 BLI Smart Workplace Solutions Line of the Year awards (2016, 2017, 2019, 2020) from Keypoint Intelligence.",
          "Scaled Xerox Workplace to 1M+ downloads with a 50% surge in installs and 4.4/5.0 rating.",
          "Led building the Xerox Team Availability App, piloted at the UK's Imperial College Healthcare NHS Trust.",
          "Designed a touchless NFC authentication framework during COVID-19 for secure, contactless printing, driving a ~10% increase in monthly active users after launch.",
          "Authored and upstreamed core printer subsystem code to Android Open Source Project.",
          "Built an offshore engineering mobile team in India from scratch cutting burn-rate by 30%. Together with my on-shore team, it supported a portfolio of 6 applications: Xerox Workplace, Xerox Print Service Plugin, Xerox Mobile Link, Xerox Genuine Scan, Xerox Team Availability, and the Xerox Workplace Mac OS X app.",
          "Integrated Xerox Workplace with enterprise MDM platforms — MobileIron, Good Technology, and Microsoft Intune.",
          "Integrated printer discovery and printing over IPP, SNMP, and WiFi Direct protocols on Xerox Workplace for maximum printer discovery and printing support",
          "Represented Xerox in the Mopria Alliance, the cross-industry standards body for mobile printing and scanning interoperability.",
        ],
      },
      {
        title: "Software Developer",
        period: "2011 — 2016",
        stack: ["C#", ".NET", "ASP.NET MVC", "WCF", "Android", "jQuery", "MS SQL", "Azure"],
        points: [
          "Architected middleware bridging Microsoft Exchange Web Services and IBM Lotus Notes into Xerox Workplace.",
          "Reduced print release time by 30% by introducing document pre-conversion.",
          "Spearheaded IPP (Internet Printing Protocol) integration for secure printing and real-time print status, driving acquisition of a new multi-million dollar deal upon launch.",
          "Coordinated weekly cross-border alignment with the Fuji Xerox engineering team in Japan.",
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
        stack: [],
        points: [
          "Contributed to transactional codebase verification and diagnostics for high-volume clearing banking modules.",
        ],
      },
    ],
  },
]

export const software = [
  {
    name: "NMC Mobile (NM Connect Mobile)",
    description:
      "Line-of-business React Native app used extensively by Northwestern Mutual's field representatives — the driving engine behind the company's OKRs and revenue. Turned around a defunct 6-person team to build it into one of NM's top-rated apps for customer satisfaction.",
    metrics: ["Top-rated internally"],
    links: [],
  },
  {
    name: "Northwestern Mutual App",
    description:
      "Native enterprise mobile app for policyholders — linking insurance, investments, banking, and net worth tracking into a single view, with high-stakes transaction and billing features I engineered and led the redesign of.",
    metrics: ["4.8/5.0 rating"],
    links: [
      { label: "View on Google Play", href: "https://play.google.com/store/apps/details?id=com.nm.nm&hl=en_US" },
      { label: "View on App Store", href: "https://apps.apple.com/us/app/northwestern-mutual/id1132579006" },
    ],
  },
  {
    name: "Xerox Workplace",
    description:
      "Native enterprise mobile app powering print, scan, and workplace workflows for Fortune 500 enterprises, government agencies, and healthcare institutions — integrated with enterprise MDM platforms including MobileIron, Good Technology, and Microsoft Intune.",
    metrics: ["1M+ downloads", "4.4/5.0 rating", "4x BLI Line of the Year", "MDM integrated"],
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
      "Emergency personnel resource tracker built during COVID-19, piloted at the UK's Imperial College Healthcare NHS Trust to help maintain vital hospital operations.",
    metrics: ["Global press coverage", "UK NHS Trust deployment"],
    links: [
      { label: "Fox Business coverage", href: "https://www.foxbusiness.com/technology/xerox-app-track-remote-employees" },
    ],
  },
  {
    name: "AOSP Printer Subsystem",
    description:
      "Core wireless discovery integration upstreamed to the Android Open Source Project, shipping natively on billions of Android devices.",
    metrics: ["Billions of endpoints"],
    links: [
      { label: "In Android OS", href: "https://android.googlesource.com/platform/frameworks/base/+/refs/heads/main/packages/PrintRecommendationService/src/com/android/printservice/recommendation/plugin/xerox" },
      { label: "Commit 22888aa", href: "https://android.googlesource.com/platform/packages/experimental.git/+/22888aa21bf916ca8b344a6944bd38406ba31d92" },
    ],
  },
]

export const education = [
  {
    degree: "Master of Science (M.S.) in Computer Engineering",
    school: "Syracuse University",
    detail: "Awarded 30% Merit-Based Academic Scholarship",
    period: "2009 — 2011",
  },
]

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
