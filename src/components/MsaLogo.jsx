'use client'

import Image from 'next/image'

const MSA_LOGO_URL =
  'https://res.cloudinary.com/ddqgxrgnc/image/upload/v1773460255/matrixlogo_dlhtag.png'

/**
 * Official MSA mark from brand assets (Cloudinary). Prefer this over SVG approximations.
 */
export default function MsaLogo({
  className = '',
  priority = false,
  title = 'Matrix Science Academy',
}) {
  return (
    <Image
      src={MSA_LOGO_URL}
      alt="MSA — Matrix Science Academy"
      title={title}
      width={220}
      height={72}
      className={`w-auto object-contain object-left ${className}`}
      priority={priority}
      sizes="(max-width: 640px) 140px, 200px"
    />
  )
}
