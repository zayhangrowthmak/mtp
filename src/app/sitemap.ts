import type { MetadataRoute } from 'next'
import { SITE, SOLUTION_NAV, INDUSTRIES } from '@/lib/site'
import { BRANDS_24 } from '@/lib/brands'
import { PROJECTS } from '@/lib/projects'
import { EVENTS } from '@/lib/events'
import { NEWS } from '@/lib/news'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.baseUrl
  const now = new Date()

  const staticPages = [
    { path: '/', priority: 1.0, freq: 'weekly' as const },
    { path: '/solutions', priority: 0.9, freq: 'weekly' as const },
    { path: '/brands', priority: 0.9, freq: 'weekly' as const },
    { path: '/industries', priority: 0.8, freq: 'monthly' as const },
    { path: '/projects', priority: 0.8, freq: 'weekly' as const },
    { path: '/events-news', priority: 0.7, freq: 'weekly' as const },
    { path: '/partners', priority: 0.9, freq: 'monthly' as const },
    { path: '/why-mtp', priority: 0.7, freq: 'monthly' as const },
    { path: '/about', priority: 0.7, freq: 'monthly' as const },
    { path: '/resources', priority: 0.6, freq: 'weekly' as const },
    { path: '/careers', priority: 0.4, freq: 'monthly' as const },
    { path: '/contact', priority: 0.8, freq: 'yearly' as const },
  ]

  const solutionPages = SOLUTION_NAV.map((s) => ({
    path: `/solutions/${s.slug}`,
    priority: 0.8,
    freq: 'monthly' as const,
  }))

  const industryPages = INDUSTRIES.map((i) => ({
    path: `/industries/${i.slug}`,
    priority: 0.6,
    freq: 'monthly' as const,
  }))

  const brandPages = BRANDS_24.map((b) => ({
    path: `/brands/${b.slug}`,
    priority: 0.6,
    freq: 'monthly' as const,
  }))

  const projectPages = PROJECTS.map((p) => ({
    path: `/projects/${p.slug}`,
    priority: 0.6,
    freq: 'monthly' as const,
  }))

  const eventPages = EVENTS.map((e) => ({
    path: `/events/${e.slug}`,
    priority: 0.5,
    freq: 'weekly' as const,
  }))

  const newsPages = NEWS.map((n) => ({
    path: `/news/${n.slug}`,
    priority: 0.5,
    freq: 'monthly' as const,
  }))

  return [
    ...staticPages,
    ...solutionPages,
    ...industryPages,
    ...brandPages,
    ...projectPages,
    ...eventPages,
    ...newsPages,
  ].map((p) => ({
    url: `${base}${p.path}`,
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }))
}
