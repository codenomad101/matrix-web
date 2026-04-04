/**
 * Minimal page header for course detail routes (replaces full-width brand-color hero).
 */
export default function CourseHeroPlain({ eyebrow, title, subtitle, description, centered = true }) {
  return (
    <section className="border-b border-neutral-200 bg-white py-10 sm:py-12 md:py-14">
      <div
        className={`container-page max-w-4xl ${centered ? 'mx-auto text-center' : ''}`}
      >
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{eyebrow}</p>
        ) : null}
        <h1 className={`interior-title ${centered ? 'interior-title-center' : ''}`}>{title}</h1>
        {subtitle ? <p className="mt-3 text-lg font-medium text-neutral-800">{subtitle}</p> : null}
        {description ? (
          <p className={`interior-lead mt-2 max-w-2xl ${centered ? 'mx-auto' : ''}`}>{description}</p>
        ) : null}
      </div>
    </section>
  )
}
