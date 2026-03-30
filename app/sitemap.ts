import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.dsqaure.com'
  const sections = [
    { url: `${baseUrl}/#home`, priority: 1.0 },
    { url: `${baseUrl}/#mission`, priority: 0.8 },
    { url: `${baseUrl}/#stack`, priority: 0.8 },
    { url: `${baseUrl}/#projects`, priority: 0.9 },
    { url: `${baseUrl}/#services`, priority: 0.9 },
    { url: `${baseUrl}/#capabilities`, priority: 0.8 },
    { url: `${baseUrl}/#process`, priority: 0.7 },
    { url: `${baseUrl}/#pricing`, priority: 0.8 },
    { url: `${baseUrl}/#testimonials`, priority: 0.7 },
    { url: `${baseUrl}/#faq`, priority: 0.6 },
  ]

  return sections.map((section) => ({
    url: section.url,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: section.priority,
  }))
}
