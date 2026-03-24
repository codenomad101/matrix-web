'use client'

import { useCallback, useLayoutEffect, useState } from 'react'

const STORAGE_KEY = 'msa-theme'

function applyTheme(theme) {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  if (theme === 'red' || theme === 'blue') {
    root.setAttribute('data-theme', theme)
  } else {
    root.setAttribute('data-theme', 'blue')
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState('blue')

  useLayoutEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      const fromDom = document.documentElement.getAttribute('data-theme')
      const t =
        stored === 'red' || stored === 'blue'
          ? stored
          : fromDom === 'red' || fromDom === 'blue'
            ? fromDom
            : 'blue'
      setTheme(t)
      applyTheme(t)
    } catch {
      setTheme('blue')
      applyTheme('blue')
    }
  }, [])

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'blue' ? 'red' : 'blue'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        /* ignore */
      }
      applyTheme(next)
      return next
    })
  }, [])

  const isRed = theme === 'red'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isRed}
      aria-label={isRed ? 'Switch to blue theme' : 'Switch to red theme'}
      onClick={toggle}
      suppressHydrationWarning
      className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
    >
      <span className={!isRed ? 'opacity-100' : 'opacity-60'}>Blue</span>
      <span
        className="relative h-5 w-9 shrink-0 rounded-full bg-white/25 transition-colors"
        aria-hidden
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full shadow-sm transition-transform duration-200 ${
            isRed ? 'translate-x-4 bg-[#B30027]' : 'translate-x-0.5 bg-[#0a1a67]'
          }`}
        />
      </span>
      <span className={isRed ? 'opacity-100' : 'opacity-60'}>Red</span>
    </button>
  )
}
