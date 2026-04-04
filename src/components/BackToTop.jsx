'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const SCROLL_THRESHOLD = 100

function BackToTopButton({ showAfterScroll, visible, onClick }) {
  const isVisible = !showAfterScroll || visible
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: 'opacity 0.25s ease',
      }}
      className="fixed bottom-6 right-20 sm:right-24 z-[10001] w-12 h-12 bg-[var(--brand-red)] hover:bg-[var(--brand-red-hover)] text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:ring-offset-2"
      aria-label="Back to top"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  )
}

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return
    const handleScroll = () => {
      const y = window.scrollY ?? document.documentElement.scrollTop ?? 0
      setVisible(y > SCROLL_THRESHOLD)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('scroll', handleScroll)
    }
  }, [mounted])

  const scrollToTop = () => {
    const forceTop = () => {
      window.scrollTo(0, 0)
      if (typeof document !== 'undefined') {
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      }
    }
    setTimeout(forceTop, 120)
  }

  if (!mounted) return null

  return createPortal(
    <BackToTopButton showAfterScroll={false} visible={visible} onClick={scrollToTop} />,
    document.body
  )
}
