'use client'

import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import OptimizedImage from '@/components/OptimizedImage'
import { getBranchEnquiryDetail } from '@/data/branch-enquiry-details'

export default function BranchEnquiryHeader({ branchKey }) {
  const detail = getBranchEnquiryDetail(branchKey)
  if (!detail) return null

  const tel = detail.phone.replace(/\s/g, '')

  return (
    <div className="mb-8 overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 via-white to-sky-50/40 text-center shadow-sm">
      <div className="border-b border-neutral-100 bg-white/60 px-5 py-3 md:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">Selected centre</p>
        <p className="mt-0.5 text-lg font-bold text-neutral-900 md:text-xl">
          Matrix Science Academy — <span className="text-[#005FB8]">{detail.key}</span>
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 p-5 md:p-6">
        <div className="flex shrink-0 justify-center">
          {detail.cloudinaryId ? (
            <div className="relative overflow-hidden rounded-2xl shadow-md ring-4 ring-white">
              <OptimizedImage
                cloudinaryId={detail.cloudinaryId}
                alt={detail.directorName}
                width={280}
                height={280}
                className="h-32 w-32 object-cover sm:h-36 sm:w-36"
                crop="fill"
                quality="auto"
              />
            </div>
          ) : (
            <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-neutral-200/80 text-4xl shadow-inner ring-4 ring-white sm:h-36 sm:w-36">
              <span aria-hidden>🏛️</span>
            </div>
          )}
        </div>

        <div className="w-full max-w-lg space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Branch director / lead</p>
            <p className="mt-1 text-xl font-bold text-neutral-900">{detail.directorName}</p>
            <p className="text-sm font-medium text-neutral-600">{detail.directorTitle}</p>
          </div>

          <div className="mx-auto max-w-md rounded-xl border border-neutral-200/80 bg-white/80 p-4">
            <FaMapMarkerAlt className="mx-auto mb-2 h-5 w-5 text-[#005FB8]" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Address</p>
            <div className="mt-1 space-y-1 text-sm leading-relaxed text-neutral-800">
              {detail.addressLines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>

          <a
            href={`tel:${tel}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900 transition-colors hover:border-[#005FB8]/40 hover:bg-sky-50/50"
          >
            <FaPhoneAlt className="h-4 w-4 text-[#005FB8]" aria-hidden />
            <span>{detail.phone}</span>
          </a>
        </div>
      </div>
    </div>
  )
}
