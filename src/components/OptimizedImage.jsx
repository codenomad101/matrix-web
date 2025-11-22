'use client'

import { useState, useEffect } from 'react'

/**
 * OptimizedImage component for Cloudinary images with WebP support and responsive sizing
 * @param {string} alt - Alt text for the image
 * @param {string} cloudinaryId - Cloudinary image ID (e.g., "v1763783229/1_yyfdsn")
 * @param {number} width - Base width for the image
 * @param {number} height - Base height for the image
 * @param {string} className - Additional CSS classes
 * @param {object} style - Additional inline styles
 * @param {string} crop - Cloudinary crop mode (default: 'fill')
 * @param {string} quality - Image quality (default: 'auto')
 * @param {string} loading - Loading strategy: 'lazy' or 'eager' (default: 'lazy')
 */
const OptimizedImage = ({ 
  alt, 
  cloudinaryId, 
  width = 400, 
  height = 400, 
  className = '',
  style = {},
  crop = 'fill',
  quality = 'auto',
  loading = 'lazy'
}) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Cloudinary base URL
  const baseUrl = 'https://res.cloudinary.com/ddqgxrgnc/image/upload'
  
  // Build Cloudinary transformation URL
  const buildCloudinaryUrl = (format = 'auto', w = width, h = height) => {
    const transformations = [
      `w_${w}`,
      `h_${h}`,
      `c_${crop}`,
      `q_${quality}`,
      format === 'webp' ? 'f_webp' : format === 'auto' ? 'f_auto' : 'f_auto'
    ].filter(Boolean).join(',')
    
    // Cloudinary IDs already include the file extension, so we don't add .jpg
    return `${baseUrl}/${transformations}/${cloudinaryId}`
  }

  // Use f_auto to let Cloudinary serve WebP automatically if supported
  const imageSrc = buildCloudinaryUrl('auto', width, height)

  // Preload image if eager loading
  useEffect(() => {
    if (loading === 'eager' && typeof window !== 'undefined') {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = imageSrc
      if (!document.querySelector(`link[href="${imageSrc}"]`)) {
        document.head.appendChild(link)
      }
    }
  }, [loading, imageSrc])

  if (imageError) {
    // Fallback: show initials or placeholder
    return (
      <div 
        className={`bg-brand/80 flex items-center justify-center text-white font-bold text-3xl ${className}`}
        style={{ width, height, ...style }}
      >
        {alt ? alt.split(' ').map(n => n[0]).join('').toUpperCase() : '?'}
      </div>
    )
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      fetchPriority={loading === 'eager' ? 'high' : 'auto'}
      decoding={loading === 'eager' ? 'sync' : 'async'}
      className={className}
      style={{ 
        maxWidth: '100%', 
        height: 'auto',
        objectFit: crop === 'fill' ? 'cover' : 'contain',
        ...style 
      }}
      onLoad={() => setImageLoaded(true)}
      onError={() => {
        setImageError(true)
        setImageLoaded(true)
      }}
    />
  )
}

export default OptimizedImage

