'use client'
import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import EnquiryForm, { BRANCH_OPTIONS } from '../components/EnquiryForm.jsx'
import BranchEnquiryLanding from '@/components/BranchEnquiryLanding.jsx'

function EnquiryWithBranch() {
  const searchParams = useSearchParams()
  const param = searchParams.get('branch')
  const branchFromUrl = param && BRANCH_OPTIONS.includes(param) ? param : null
  const [branch, setBranch] = useState(() => branchFromUrl ?? 'Nigdi')

  useEffect(() => {
    setBranch(branchFromUrl ?? 'Nigdi')
  }, [param, branchFromUrl])

  /** Branch landing URLs (?branch=…) show landing + infrastructure only—no duplicate form at bottom. */
  const showBottomForm = !branchFromUrl
  const landingMode = branchFromUrl ? 'branch' : 'general'

  return (
    <>
      <BranchEnquiryLanding
        branchKey={branchFromUrl ?? branch}
        enquiryFormAnchor={showBottomForm}
        mode={landingMode}
      />

      {showBottomForm && (
        <section id="enquiry-form" className="scroll-mt-24 border-t border-violet-100 bg-[#F9F5FB] py-12 md:py-16">
          <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold tracking-tight text-neutral-900 md:text-[1.65rem]">
              Enquiry form
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-center text-sm text-neutral-600 md:text-base">
              {branchFromUrl ? (
                <>
                  You&apos;re contacting our <strong className="font-semibold text-neutral-800">{branch}</strong> centre.
                  Prefer another location? Change &quot;Preferred branch&quot; below.
                </>
              ) : (
                <>
                  Share your details and course interest—we&apos;ll reach out from the right centre. Choose your{' '}
                  <strong className="font-semibold text-neutral-800">preferred branch</strong> below.
                </>
              )}
            </p>
            <div className="mt-8">
              <EnquiryForm
                selectedBranch={branch}
                onBranchChange={setBranch}
                layoutCentered
                singleColumnFormOnly
              />
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default function Enquiry() {
  return (
    <div className="interior-page">
      <Suspense
        fallback={
          <div className="container-page max-w-4xl py-12">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="text-sm text-neutral-600">Loading…</p>
            </div>
          </div>
        }
      >
        <EnquiryWithBranch />
      </Suspense>
    </div>
  )
}
