const BASE_URL = 'https://www.matrixscienceacademy.com'

export default function sitemap() {
  const routes = [
    '',
    '/about',
    '/courses',
    '/courses/iit-jee',
    '/courses/neet',
    '/courses/mht-cet',
    '/courses/iiser',
    '/activities',
    '/activities/course-selection',
    '/activities/felicitation',
    '/activities/iit-neet-timeline',
    '/activities/mht-cet-timeline',
    '/activities/on-demand-courses',
    '/activities/performance',
    '/directors-message',
    '/faculty',
    '/gallery',
    '/results',
    '/testimonials',
    '/enquiry',
    '/vriksha',
    '/counseling',
    '/scholarships',
    '/thank-you',
    '/terms-and-conditions',
    '/privacy-policy',
  ]

  return routes.map((path) => ({
    url: path ? `${BASE_URL}${path}` : BASE_URL,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.split('/').length === 1 ? 0.9 : 0.8,
  }))
}
