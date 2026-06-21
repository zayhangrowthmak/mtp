import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowUpRight, ChevronRight, MapPin, CheckCircle2, Download } from 'lucide-react'
import { BRANDS_24, brandBySlug } from '@/lib/brands'
import { familiesForBrand } from '@/lib/families'
import { brandCategories } from '@/lib/brandCategories'
import { SOLUTION_NAV, SITE } from '@/lib/site'
import { SOLUTION_ICON } from '@/lib/solutionIcons'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return BRANDS_24.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const b = brandBySlug(slug)
  if (!b) return {}
  return {
    title: `${b.name} — Distributor in the UAE & Oman`,
    description: `${b.blurb} Distributed by MTP across the UAE and Oman with pre-sales design, sizing and after-sales support.`,
    alternates: { canonical: `/brands/${b.slug}` },
    openGraph: {
      title: `${b.name} | MTP Distribution`,
      description: b.blurb,
      url: `${SITE.baseUrl}/brands/${b.slug}`,
    },
  }
}

export default async function BrandDetailPage({ params }: Props) {
  const { slug } = await params
  const b = brandBySlug(slug)
  if (!b) notFound()

  const categories = brandCategories(b.slug)
  const families = familiesForBrand(b)
  const related = b.solutions.map((id) => SOLUTION_NAV.find((s) => s.id === id)).filter(Boolean) as {
    id: string
    slug: string
    name: string
    short: string
  }[]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    name: b.name,
    description: b.blurb,
    ...(b.logo ? { logo: `${SITE.baseUrl}${b.logo}` } : {}),
  }
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Brands', item: `${SITE.baseUrl}/brands` },
      { '@type': 'ListItem', position: 3, name: b.name, item: `${SITE.baseUrl}/brands/${b.slug}` },
    ],
  }

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* 1 — Brand hero */}
      <section className="bg-[#0D1B3E] pt-40 pb-16 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#00B4C8 1px, transparent 1px), linear-gradient(90deg, #00B4C8 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <nav className="flex items-center gap-1.5 text-xs text-white/45 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/brands" className="hover:text-white transition-colors">Brands</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">{b.name}</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
            <div className="w-28 h-20 bg-white rounded-xl flex items-center justify-center px-5 flex-shrink-0">
              {b.logo ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={b.logo} alt={`${b.name} logo`} className="max-h-12 max-w-full w-auto object-contain mix-blend-multiply" />
              ) : (
                <span className="text-[#0D1B3E] font-bold text-xl">{b.name}</span>
              )}
            </div>
            <div>
              <h1 className="text-white text-4xl lg:text-5xl font-semibold tracking-tight mb-2">{b.name}</h1>
              {b.country && (
                <p className="flex items-center gap-1.5 text-white/50 text-sm">
                  <MapPin size={14} className="text-[#00B4C8]" /> {b.country}
                </p>
              )}
            </div>
          </div>

          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-10">{b.blurb}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-[#00B4C8] hover:bg-[#00C9DF] text-white font-semibold px-7 py-3.5 rounded-sm transition-colors"
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
            <Link
              href="/resources"
              className="flex items-center gap-2 border border-white/20 hover:border-white/50 text-white/85 hover:text-white font-medium px-7 py-3.5 rounded-sm transition-colors"
            >
              <Download size={15} /> Datasheets
            </Link>
          </div>
        </div>
      </section>

      {/* 2 — About + 3 — Products/Technologies */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">
          <Reveal>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-6 h-px bg-[#00B4C8]" />
              <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">About the vendor</span>
            </div>
            <h2 className="text-[#0D1B3E] text-3xl font-semibold tracking-tight mb-5">Why MTP carries {b.name}</h2>
            <p className="text-[#4A5568] text-base leading-relaxed mb-4">{b.blurb}</p>
            <p className="text-[#4A5568] text-base leading-relaxed">
              MTP distributes {b.name} across our{' '}
              {related.map((r, i) => (
                <span key={r.slug}>
                  <Link href={`/solutions/${r.slug}`} className="text-[#00B4C8] hover:underline">
                    {r.name}
                  </Link>
                  {i < related.length - 1 ? (i === related.length - 2 ? ' and ' : ', ') : ' '}
                </span>
              ))}
              line{related.length > 1 ? 's' : ''} — pairing every product with pre-sales design, sizing,
              integration and after-sales support across the UAE and Oman.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-6 h-px bg-[#00B4C8]" />
              <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Products & technologies</span>
            </div>
            <p className="text-[#4A5568] text-sm mb-5">
              The {b.name} product lines MTP distributes:
            </p>

            {categories ? (
              // Brand-specific product categories / series
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {categories.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2.5 bg-[#F4F8FF] border border-[#E2ECF8] rounded-lg px-4 py-3"
                  >
                    <CheckCircle2 size={16} className="text-[#00B4C8] flex-shrink-0 mt-0.5" />
                    <span className="text-[#0D1B3E] text-sm font-medium">{c}</span>
                  </li>
                ))}
              </ul>
            ) : (
              // Fallback: generic per-solution families
              <div className="space-y-6">
                {families.map((f) => (
                  <div key={f.id}>
                    <Link href={`/solutions/${f.slug}`} className="text-[#0D1B3E] font-semibold text-sm hover:text-[#00B4C8] transition-colors">
                      {f.name}
                    </Link>
                    <ul className="mt-2.5 grid sm:grid-cols-2 gap-2">
                      {f.families.map((fam) => (
                        <li key={fam} className="flex items-start gap-2 text-[#4A5568] text-sm">
                          <CheckCircle2 size={15} className="text-[#00B4C8] flex-shrink-0 mt-0.5" />
                          {fam}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* 4 — Related solutions */}
      <section className="bg-[#F4F8FF] border-y border-[#E2ECF8] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-[#0D1B3E] text-3xl lg:text-4xl font-semibold tracking-tight mb-10">
              Solutions {b.name} powers
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((r, i) => {
              const Icon = SOLUTION_ICON[r.id]
              return (
                <Reveal key={r.slug} delay={(i % 3) * 0.06}>
                  <Link
                    href={`/solutions/${r.slug}`}
                    className="group flex items-center gap-4 bg-white border border-[#E2ECF8] rounded-xl p-6 hover:border-[#00B4C8]/50 hover:shadow-[0_12px_36px_-16px_rgba(13,27,62,0.2)] transition-all"
                  >
                    <span className="w-12 h-12 rounded-xl bg-[#F4F8FF] flex items-center justify-center flex-shrink-0">
                      {Icon && <Icon size={22} className="text-[#00B4C8]" />}
                    </span>
                    <span className="flex-1">
                      <span className="block text-[#0D1B3E] font-semibold">{r.name}</span>
                    </span>
                    <ArrowUpRight size={18} className="text-[#CBD5E1] group-hover:text-[#00B4C8] transition-colors" />
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5 — Related projects / downloads */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-5">
          <Link
            href="/projects"
            className="group bg-[#0D1B3E] rounded-2xl px-8 py-9 flex items-center justify-between gap-4 hover:bg-[#162040] transition-colors"
          >
            <div>
              <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Proof</span>
              <h3 className="text-white text-xl font-semibold tracking-tight mt-2">Related projects</h3>
              <p className="text-white/50 text-sm mt-1">Where {b.name} has been deployed.</p>
            </div>
            <ArrowUpRight size={22} className="text-white/40 group-hover:text-[#00B4C8] transition-colors flex-shrink-0" />
          </Link>
          <Link
            href="/resources"
            className="group border border-[#E2ECF8] rounded-2xl px-8 py-9 flex items-center justify-between gap-4 hover:border-[#00B4C8]/50 transition-colors"
          >
            <div>
              <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Downloads</span>
              <h3 className="text-[#0D1B3E] text-xl font-semibold tracking-tight mt-2">Datasheets & catalogs</h3>
              <p className="text-[#4A5568] text-sm mt-1">Documentation for {b.name} products.</p>
            </div>
            <Download size={22} className="text-[#CBD5E1] group-hover:text-[#00B4C8] transition-colors flex-shrink-0" />
          </Link>
        </div>
      </section>

      {/* 6 — Enquiry CTA */}
      <CtaBand
        title={`Source ${b.name} through MTP`}
        text={`One multi-brand point of contact with project pricing, pre-sales design and authorised distribution across the UAE and Oman.`}
        primaryLabel="Request a Quote"
        secondaryLabel="View All Brands"
        secondaryHref="/brands"
      />
    </main>
  )
}
