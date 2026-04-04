'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { JeeCounselingProgram } from './JeeCounselingProgram.jsx'
import { MhcetCounselingProgram } from './MhcetCounselingProgram.jsx'
import { Grade810CounselingProgram } from './Grade810CounselingProgram.jsx'

const TABS = [
  { id: 'jee', label: 'JEE counselling' },
  { id: 'mhcet', label: 'MHT CET counselling' },
  { id: 'school', label: '8th to 10th counselling' },
]

export default function CounselingProgramTabs() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const tabParam = searchParams.get('tab')
  const initial =
    TABS.some((t) => t.id === tabParam) ? tabParam : 'jee'

  const [active, setActive] = useState(initial)

  useEffect(() => {
    if (TABS.some((t) => t.id === tabParam)) {
      setActive(tabParam)
    }
  }, [tabParam])

  return (
    <div>
      <div
        className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3"
        role="tablist"
        aria-label="Counselling programme"
      >
        {TABS.map((t) => {
          const selected = active === t.id
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={selected}
              id={`counsel-tab-${t.id}`}
              aria-controls={`counsel-panel-${t.id}`}
              onClick={() => {
                setActive(t.id)
                router.replace(`${pathname}?tab=${t.id}`, { scroll: false })
              }}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                selected
                  ? 'bg-[#2563eb] text-white shadow-md shadow-blue-500/25'
                  : 'border border-neutral-200 bg-white text-neutral-700 hover:border-sky-300 hover:bg-sky-50/80'
              }`}
            >
              {t.label}
            </button>
          )
        })}
      </div>

      <div className="mt-10 md:mt-12">
        <div
          id="counsel-panel-jee"
          role="tabpanel"
          aria-labelledby="counsel-tab-jee"
          hidden={active !== 'jee'}
        >
          <JeeCounselingProgram />
        </div>

        <div
          id="counsel-panel-mhcet"
          role="tabpanel"
          aria-labelledby="counsel-tab-mhcet"
          hidden={active !== 'mhcet'}
        >
          <MhcetCounselingProgram />
        </div>

        <div
          id="counsel-panel-school"
          role="tabpanel"
          aria-labelledby="counsel-tab-school"
          hidden={active !== 'school'}
        >
          <Grade810CounselingProgram />
        </div>
      </div>
    </div>
  )
}
