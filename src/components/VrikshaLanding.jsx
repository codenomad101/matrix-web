import Image from 'next/image'
import Link from 'next/link'
import { Playfair_Display, Great_Vibes } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-vriksha-serif',
  display: 'swap',
})

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vriksha-script',
  display: 'swap',
})

const BLUE = '#0056D2'
const NAVY = '#051937'
const GOLD = '#D4AF37'

const FAMILY_IMAGE =
  'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&q=85&auto=format&fit=crop'

const INFO_POINTS = [
  'Heavy focus on memorisation and recall',
  'One-size-fits-all pacing and assessments',
  'Success measured mainly by marks and ranks',
  'Limited room for curiosity and dialogue',
]

const TRANSFORM_POINTS = [
  'Depth, understanding, and real-world connection',
  'Personalised support and reflective growth',
  'Success includes confidence and communication',
  'Space to question, create, and collaborate',
]

const CORE_VALUES = [
  {
    title: 'Roots',
    desc: 'Strong values, discipline, and a grounded sense of purpose that anchor every learner.',
    icon: IconRoots,
  },
  {
    title: 'Trunk',
    desc: 'Core academic rigour and resilience — the stable structure that holds everything together.',
    icon: IconTrunk,
  },
  {
    title: 'Branches',
    desc: 'Exploration across subjects, skills, and perspectives as learners reach outward.',
    icon: IconBranches,
  },
  {
    title: 'Leaves',
    desc: 'Visible growth — expression, creativity, and outcomes that flourish in the open.',
    icon: IconLeaves,
  },
]

const WEEK_ITEMS = [
  {
    time: '9:00 AM',
    title: 'Deep Work',
    desc: 'Focused study blocks with mentor checkpoints and clear learning goals.',
    icon: IconBook,
  },
  {
    time: '11:30 AM',
    title: 'Collaborative Labs',
    desc: 'Projects and discussions that build communication and critical thinking.',
    icon: IconUsers,
  },
  {
    time: '2:00 PM',
    title: 'Mind & Body',
    desc: 'Movement, reflection, and habits that support sustainable performance.',
    icon: IconHeart,
  },
  {
    time: '4:00 PM',
    title: 'Mentor Circles',
    desc: 'Small-group coaching on goals, doubts, and next steps for each learner.',
    icon: IconMessage,
  },
]

const EVOLUTION_ROWS = [
  { cat: 'Role of Teacher', trad: 'Sage on the stage', vriksha: 'Guide and coach' },
  { cat: 'Curriculum', trad: 'Fixed, exam-centric', vriksha: 'Adaptive, understanding-first' },
  { cat: 'Assessment', trad: 'Summative, high-stakes', vriksha: 'Formative + growth metrics' },
  { cat: 'Learning style', trad: 'Passive consumption', vriksha: 'Active, inquiry-led' },
  { cat: 'Success metric', trad: 'Marks and ranks', vriksha: 'Holistic readiness' },
]

const PILLARS = [
  {
    title: 'Critical Thinking',
    desc: 'Analyse, question, and reason with clarity instead of stopping at answers.',
    icon: IconPillarBrain,
  },
  {
    title: 'Collaboration',
    desc: 'Learn to listen, contribute, and build ideas with others.',
    icon: IconPillarUsers,
  },
  {
    title: 'Creativity',
    desc: 'Express ideas through projects, stories, and inventive problem-solving.',
    icon: IconPillarSpark,
  },
  {
    title: 'Communication',
    desc: 'Speak, write, and present with confidence and empathy.',
    icon: IconPillarMic,
  },
  {
    title: 'Character',
    desc: 'Integrity, grit, and care for self and community.',
    icon: IconPillarStar,
  },
]

function IconRoots({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M24 42V22M24 22c-4-6-12-8-12-8s2 8 8 12M24 22c4-6 12-8 12-8s-2 8-8 12" />
      <path d="M18 14c-2-4-6-6-10-6M30 14c2-4 6-6 10-6" />
    </svg>
  )
}

function IconTrunk({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M22 6h4v36h-4z" />
      <path d="M14 18h20M12 28h24M14 38h20" />
    </svg>
  )
}

function IconBranches({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M24 40V20M24 20l-10-8M24 20l10-8M16 26l-8-4M32 26l8-4" />
    </svg>
  )
}

function IconLeaves({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M8 32c8-12 24-12 32 0-8 8-24 8-32 0z" />
      <path d="M24 32V18M20 22c4-4 8-4 12 0" />
    </svg>
  )
}

function IconBook({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  )
}

function IconUsers({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  )
}

function IconHeart({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  )
}

function IconMessage({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  )
}

function IconPillarBrain({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke={GOLD} strokeWidth="1.25" aria-hidden>
      <path d="M16 4c-2 0-3 1.5-3 3v1h-1.5a2 2 0 100 4H13v1c0 2 2.5 3 4 3s4-1 4-3v-1h1.5a2 2 0 100-4H21V7c0-1.5-1-3-3-3z" />
      <path d="M12 22v4M20 22v4" />
    </svg>
  )
}

function IconPillarUsers({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke={GOLD} strokeWidth="1.25" aria-hidden>
      <path d="M22 26v-2a4 4 0 00-4-4h-4a4 4 0 00-4 4v2" />
      <circle cx="16" cy="12" r="3" />
      <path d="M26 26v-2a4 4 0 00-3.2-3.9" />
      <path d="M6 26v-2a4 4 0 013.2-3.9" />
    </svg>
  )
}

function IconPillarSpark({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke={GOLD} strokeWidth="1.25" aria-hidden>
      <path d="M16 4l1.5 6L24 12l-6.5 2L16 22l-1.5-8L8 12l6.5-2L16 4z" />
    </svg>
  )
}

function IconPillarMic({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke={GOLD} strokeWidth="1.25" aria-hidden>
      <rect x="12" y="8" width="8" height="13" rx="4" />
      <path d="M8 16v2a8 8 0 0016 0v-2M16 24v4M12 28h8" strokeLinecap="round" />
    </svg>
  )
}

function IconPillarStar({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke={GOLD} strokeWidth="1.25" aria-hidden>
      <path d="M16 4l3.5 7 7.5 1-5.5 5.5 1.3 7.5L16 21l-6.8 4.5 1.3-7.5L5 12l7.5-1L16 4z" />
    </svg>
  )
}

function IconBulbBg({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" aria-hidden>
      <path
        d="M100 20c-22 0-40 18-40 40 0 16 10 30 24 36v24h32v-24c14-6 24-20 24-36 0-22-18-40-40-40z"
        stroke="white"
        strokeOpacity="0.12"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconPlay({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  )
}

function IconCheck({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function IconArrow({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

/** Hero right column: sprout + floating inputs → growth (matches VRIKSHA ecosystem visual). */
function VrikshaHeroEcosystem() {
  const blue = BLUE
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <div
        className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-sky-100/60"
        style={{
          background: 'radial-gradient(ellipse 70% 55% at 50% 48%, rgba(0,86,210,0.09), transparent 62%), linear-gradient(180deg, #ffffff 0%, #f8fbff 45%, #eef6ff 100%)',
        }}
      >
        <svg
          viewBox="0 0 440 360"
          className="h-auto w-full"
          role="img"
          aria-label="VRIKSHA ecosystem: learning, achievement, and mentorship flow into central growth"
        >
          <defs>
            <filter id="vrikshaTileShadow" x="-35%" y="-35%" width="170%" height="170%">
              <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#0a1a67" floodOpacity="0.08" />
            </filter>
          </defs>

          {/* Sketched arrows → center */}
          <g fill="none" stroke={blue} strokeLinecap="round" strokeLinejoin="round" opacity={0.88}>
            <path strokeWidth="2.4" d="M 98 66 C 130 88, 155 120, 178 152" />
            <path strokeWidth="2.4" d="M 98 166 Q 145 168, 185 172" />
            <path strokeWidth="2.4" d="M 98 266 C 135 240, 168 210, 188 188" />
            <path strokeWidth="2.2" d="M 342 78 C 310 100, 275 130, 252 158" opacity={0.45} />
            <path strokeWidth="2.2" d="M 342 268 C 305 235, 270 200, 248 178" opacity={0.45} />
          </g>
          <g fill={blue}>
            <path d="M182 150l8 6-2-10z" opacity={0.88} />
            <path d="M188 170l9 2-8-5z" opacity={0.88} />
            <path d="M192 186l8-7-10 3z" opacity={0.88} />
            <path d="M258 156l-7 6 10-1z" opacity={0.38} />
            <path d="M252 176l-8-4 9 6z" opacity={0.38} />
          </g>

          {/* Central glow + sprout */}
          <circle cx="220" cy="172" r="78" fill={blue} fillOpacity="0.07" />
          <g stroke={blue} fill="none" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
            <path d="M220 248V138" />
            <path d="M220 138c-18-28-42-32-58-18" />
            <path d="M220 138c18-28 42-32 58-18" />
            <path d="M220 118c0-22-4-38-12-48" />
            <path d="M208 118c8-14 12-14 24 0" />
          </g>
          <g fill={blue} fillOpacity={0.92}>
            <ellipse cx="198" cy="108" rx="10" ry="16" transform="rotate(-28 198 108)" />
            <ellipse cx="242" cy="108" rx="10" ry="16" transform="rotate(28 242 108)" />
            <ellipse cx="220" cy="88" rx="9" ry="14" />
          </g>

          {/* Left: solid icon tiles */}
          <g filter="url(#vrikshaTileShadow)">
            <rect x="26" y="36" width="58" height="58" rx="14" fill="#fff" stroke="#e2e8f0" strokeWidth="1" />
            <g transform="translate(40 50)" stroke={blue} fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 4a4 4 0 00-4 4v2H6a2 2 0 100 4h2v2a4 4 0 008 0v-2h2a2 2 0 100-4h-2V8a4 4 0 00-4-4z" transform="scale(1.15)" />
            </g>

            <rect x="26" y="136" width="58" height="58" rx="14" fill="#fff" stroke="#e2e8f0" strokeWidth="1" />
            <g transform="translate(43 149)" stroke={blue} fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 016.5 17H18" />
              <path d="M6.5 2H18v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" transform="scale(1.05)" />
            </g>

            <rect x="26" y="236" width="58" height="58" rx="14" fill="#fff" stroke="#e2e8f0" strokeWidth="1" />
            <g transform="translate(43 249)" stroke={blue} fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9H4.5a2.5 2.5 0 000 5H6M18 9h1.5a2.5 2.5 0 010 5H18M6 14h12M8 21h8M12 17v4" transform="scale(1.05)" />
            </g>
          </g>

          {/* Right: softer ghost tiles */}
          <g opacity={0.42}>
            <rect x="354" y="48" width="54" height="54" rx="13" fill="#fff" stroke="#cbd5e1" strokeWidth="1" />
            <g transform="translate(367 61)" stroke={blue} fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l2.4 7.4h7.8l-6.3 4.6 2.4 7.4L12 16.8 5.7 21.4 8.1 14 1.8 9.4h7.8L12 2z" transform="scale(0.95)" />
            </g>
            <rect x="354" y="248" width="54" height="54" rx="13" fill="#fff" stroke="#cbd5e1" strokeWidth="1" />
            <g transform="translate(365 261)" stroke={blue} fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="3.5" />
            </g>
          </g>
        </svg>
      </div>
      <p className="mx-auto mt-5 max-w-md px-2 text-center text-sm leading-relaxed text-neutral-500 md:text-base">
        Inside the ecosystem where raw talent transforms into extraordinary achievement.
      </p>
    </div>
  )
}

export default function VrikshaLanding() {
  return (
    <div
      className={`vriksha-landing min-w-0 bg-white text-neutral-700 antialiased ${playfair.variable} ${greatVibes.variable}`}
    >
      {/* Hero */}
      <section className="border-b border-neutral-100 py-14 md:py-20 lg:py-24">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="text-left">
              <p
                className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: BLUE }}
              >
                VRIKSHA Goal
              </p>
              <h1 className="vriksha-serif mb-6 text-[clamp(1.85rem,4vw,2.75rem)] font-normal leading-[1.15] tracking-tight text-neutral-900">
                If answers are available everywhere…{' '}
                <span className="vriksha-script text-[clamp(2rem,4.5vw,3.25rem)]" style={{ color: BLUE }}>
                  what
                </span>{' '}
                should education really build?
              </h1>
              <p className="mb-8 max-w-xl text-base leading-relaxed text-neutral-500 md:text-lg">
                We believe schooling should go beyond information — to judgement, character, and the ability to learn for life. VRIKSHA
                is our answer: a transformation-first approach inside Matrix Science Academy.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/enquiry"
                  className="inline-flex items-center justify-center rounded-2xl px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:opacity-95"
                  style={{ backgroundColor: BLUE }}
                >
                  Start Now
                </Link>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border-2 bg-white px-6 py-3.5 text-sm font-semibold transition hover:bg-neutral-50"
                  style={{ borderColor: BLUE, color: BLUE }}
                >
                  <IconPlay className="h-4 w-4" />
                  View Video
                </a>
              </div>
            </div>
            <VrikshaHeroEcosystem />
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-14 md:py-20">
        <div className="container-page">
          <h2 className="vriksha-serif mx-auto mb-12 max-w-3xl text-center text-3xl font-normal text-neutral-900 md:text-4xl">
            The world has changed.{' '}
            <span className="vriksha-script block text-4xl md:inline md:text-[2.75rem]" style={{ color: BLUE }}>
              The system hasn&apos;t.
            </span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="rounded-3xl border border-neutral-200/80 bg-slate-50/90 p-8 shadow-sm md:p-10">
              <h3 className="mb-6 text-lg font-bold text-neutral-800">Information Based Education</h3>
              <ul className="space-y-4 text-neutral-600">
                {INFO_POINTS.map((t) => (
                  <li key={t} className="flex gap-3 text-sm leading-relaxed md:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="relative overflow-hidden rounded-3xl p-8 text-white shadow-lg md:p-10"
              style={{ backgroundColor: BLUE }}
            >
              <IconBulbBg className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 opacity-90 md:h-64 md:w-64" />
              <h3 className="relative z-[1] mb-6 text-lg font-bold text-white">Transformation Based Education</h3>
              <ul className="relative z-[1] space-y-4 text-white/95">
                {TRANSFORM_POINTS.map((t) => (
                  <li key={t} className="flex gap-3 text-sm leading-relaxed md:text-base">
                    <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="border-t border-neutral-100 bg-white py-14 md:py-20">
        <div className="container-page">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="vriksha-serif text-3xl font-normal text-neutral-900 md:text-4xl">Grow like a tree</h2>
            <p className="mt-3 text-neutral-500 md:text-lg">The 4 core values that drive our philosophy.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="rounded-3xl border border-neutral-100 bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50" style={{ color: BLUE }}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is VRIKSHA for you */}
      <section className="py-14 md:py-20">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="vriksha-serif mb-8 text-left text-3xl font-normal text-neutral-900 md:text-4xl">
                Is VRIKSHA for you?
              </h2>
              <ul className="space-y-6">
                {[
                  'You want more than marks — you want mindset, communication, and emotional strength.',
                  'You are ready to partner with mentors who balance rigour with care and clarity.',
                ].map((t) => (
                  <li key={t} className="flex gap-4 text-left text-base leading-relaxed text-neutral-600 md:text-lg">
                    <span
                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: BLUE }}
                    >
                      <IconCheck className="h-4 w-4 stroke-[3]" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black/5">
              <Image
                src={FAMILY_IMAGE}
                alt="Parent and child learning together"
                width={800}
                height={560}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5 Pillars */}
      <section className="py-16 md:py-24" style={{ backgroundColor: NAVY }}>
        <div className="container-page">
          <h2 className="vriksha-serif mb-14 text-center text-3xl text-white md:text-4xl">The 5 Pillars</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PILLARS.map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-8 text-center backdrop-blur-sm"
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center">
                  <Icon className="h-10 w-10" />
                </div>
                <h3 className="text-sm font-bold text-white md:text-base">{title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-white/75 md:text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Week at VRIKSHA */}
      <section className="bg-[#eef2ff] py-14 md:py-20">
        <div className="container-page max-w-3xl">
          <h2 className="vriksha-serif mb-10 text-center text-3xl text-neutral-900 md:text-4xl">A Week at VRIKSHA</h2>
          <div className="space-y-4">
            {WEEK_ITEMS.map(({ time, title, desc, icon: Icon }) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-indigo-100/80 bg-white p-5 shadow-sm md:gap-5 md:p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50" style={{ color: BLUE }}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">{time}</p>
                  <p className="mt-1 font-bold text-neutral-900">{title}</p>
                  <p className="mt-1 text-sm text-neutral-600">{desc}</p>
                </div>
              </div>
            ))}
            <Link
              href="/enquiry"
              className="flex items-center justify-between gap-4 rounded-2xl px-6 py-5 text-white shadow-md transition hover:opacity-95 md:px-8 md:py-6"
              style={{ backgroundColor: BLUE }}
            >
              <span className="text-base font-semibold md:text-lg">Connect with us to know more</span>
              <IconArrow className="h-6 w-6 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* Evolution table */}
      <section className="py-14 md:py-20">
        <div className="container-page">
          <h2 className="vriksha-serif mb-10 text-center text-3xl text-neutral-900 md:text-4xl">The Evolution of Learning</h2>
          <div className="overflow-x-auto rounded-2xl border border-neutral-100 shadow-sm">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-100 bg-neutral-50/80">
                  <th className="px-5 py-4 font-semibold text-neutral-700 md:px-6"> </th>
                  <th className="px-5 py-4 font-semibold text-neutral-700 md:px-6">Traditional Schooling</th>
                  <th className="px-5 py-4 font-semibold md:px-6" style={{ color: BLUE }}>
                    VRIKSHA
                  </th>
                </tr>
              </thead>
              <tbody>
                {EVOLUTION_ROWS.map((row) => (
                  <tr key={row.cat} className="border-b border-neutral-100 last:border-0">
                    <th scope="row" className="px-5 py-4 font-bold text-neutral-800 md:px-6">
                      {row.cat}
                    </th>
                    <td className="px-5 py-4 text-neutral-600 md:px-6">{row.trad}</td>
                    <td className="px-5 py-4 font-medium md:px-6" style={{ color: BLUE }}>
                      {row.vriksha}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="relative overflow-hidden border-t border-neutral-100 bg-neutral-50 py-20 md:py-28">
        <p
          className="pointer-events-none absolute left-1/2 top-1/2 w-[min(100%,56rem)] -translate-x-1/2 -translate-y-1/2 select-none text-center text-[clamp(3rem,14vw,10rem)] font-black uppercase leading-none text-neutral-200/90"
          aria-hidden
        >
          THE OUTCOME
        </p>
        <div className="container-page relative z-[1] flex flex-col items-center gap-6 text-center md:gap-8">
          <p className="vriksha-serif text-4xl text-neutral-900 md:text-5xl">Confident Thinker</p>
          <p className="vriksha-script text-4xl md:text-5xl" style={{ color: GOLD }}>
            Elite Communicator
          </p>
          <p className="text-3xl font-bold md:text-4xl" style={{ color: BLUE }}>
            Emotionally Strong
          </p>
          <p className="text-2xl font-medium text-neutral-400 md:text-3xl">Future-Ready</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-16 md:pb-24">
        <div className="container-page">
          <div
            className="relative overflow-hidden rounded-[1.75rem] px-8 py-14 text-center md:px-16 md:py-20"
            style={{ backgroundColor: NAVY }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 40px, white 40px, white 41px), repeating-linear-gradient(0deg, transparent, transparent 40px, white 40px, white 41px)`,
              }}
              aria-hidden
            />
            <div className="relative z-[1] mx-auto max-w-2xl">
              <h2 className="vriksha-serif text-2xl text-white md:text-3xl">Experience VRIKSHA before you decide.</h2>
              <p className="mt-4 text-sm text-white/80 md:text-base">
                Book a conversation or visit — see how we combine academics with the habits that last a lifetime.
              </p>
              <Link
                href="/enquiry"
                className="mt-8 inline-flex items-center justify-center rounded-2xl px-10 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:opacity-95"
                style={{ backgroundColor: BLUE }}
              >
                Sign up now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
