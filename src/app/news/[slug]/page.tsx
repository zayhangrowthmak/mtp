import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import { NEWS, NEWS_SLUGS, articleBySlug } from '@/lib/news'
import { brandBySlug } from '@/lib/brands'
import { SITE } from '@/lib/site'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return NEWS_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const a = articleBySlug(slug)
  if (!a) return {}
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/news/${a.slug}` },
    openGraph: { type: 'article', title: `${a.title} | MTP Distribution`, description: a.excerpt, url: `${SITE.baseUrl}/news/${a.slug}` },
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params
  const a = articleBySlug(slug)
  if (!a) notFound()

  const brand = a.brand ? brandBySlug(a.brand) : undefined
  const related = NEWS.filter((n) => n.slug !== a.slug).slice(0, 2)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: a.title,
    datePublished: a.iso,
    description: a.excerpt,
    author: { '@type': 'Organization', name: SITE.legalName },
    publisher: { '@type': 'Organization', name: SITE.legalName, url: SITE.baseUrl },
    mainEntityOfPage: `${SITE.baseUrl}/news/${a.slug}`,
  }

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-[#0D1B3E] pt-40 pb-16 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#00B4C8 1px, transparent 1px), linear-gradient(90deg, #00B4C8 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <nav className="flex items-center gap-1.5 text-xs text-white/45 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/events-news" className="hover:text-white transition-colors">News</Link>
            <ChevronRight size={12} />
            <span className="text-white/70 truncate max-w-[40vw]">{a.title}</span>
          </nav>
          <div className="flex items-center gap-3 text-xs text-white/50 mb-4">
            <span>{a.date}</span>
            {brand && (
              <>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <Link href={`/brands/${brand.slug}`} className="text-[#00B4C8] hover:underline">{brand.name}</Link>
              </>
            )}
          </div>
          <h1 className="text-white text-3xl lg:text-5xl font-semibold tracking-tight leading-[1.12]">{a.title}</h1>
        </div>
      </section>

      {/* Body */}
      <article className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <p className="text-[#0D1B3E] text-lg leading-relaxed font-medium mb-6">{a.excerpt}</p>
            {a.body.map((p) => (
              <p key={p.slice(0, 24)} className="text-[#4A5568] text-base leading-relaxed mb-5">{p}</p>
            ))}
          </Reveal>

          {brand && (
            <Reveal>
              <Link
                href={`/brands/${brand.slug}`}
                className="inline-flex items-center gap-2 mt-4 bg-[#F4F8FF] border border-[#E2ECF8] rounded-lg px-5 py-3 text-[#0D1B3E] text-sm font-semibold hover:border-[#00B4C8]/50 transition-colors"
              >
                Explore {brand.name} <ArrowUpRight size={15} className="text-[#00B4C8]" />
              </Link>
            </Reveal>
          )}
        </div>
      </article>

      {/* Related news */}
      {related.length > 0 && (
        <section className="bg-[#F4F8FF] border-y border-[#E2ECF8] py-16">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-[#0D1B3E] text-xl font-semibold tracking-tight mb-6">Related news</h2>
            <div className="space-y-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/news/${r.slug}`}
                  className="group flex items-center justify-between gap-4 bg-white border border-[#E2ECF8] rounded-xl px-6 py-5 hover:border-[#00B4C8]/50 transition-all"
                >
                  <span>
                    <span className="block text-[#0D1B3E] font-semibold leading-tight">{r.title}</span>
                    <span className="block text-[#94A3B8] text-xs mt-1">{r.date}</span>
                  </span>
                  <ArrowUpRight size={18} className="text-[#CBD5E1] group-hover:text-[#00B4C8] transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title="Talk to MTP"
        text="Pre-sales design, project pricing and multi-brand sourcing for system integrators across the UAE and Oman."
        primaryLabel="Contact Us"
        secondaryLabel="View Solutions"
        secondaryHref="/solutions"
      />
    </main>
  )
}
