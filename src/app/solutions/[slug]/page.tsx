import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react'
import { getSolution, SOLUTION_SLUGS } from '@/lib/solutions'
import { SOLUTION_ICON } from '@/lib/solutionIcons'
import { SITE } from '@/lib/site'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'
import ArchDiagram from '@/components/solutions/ArchDiagram'
import SolutionCatalog from '@/components/solutions/SolutionCatalog'
import HeroProductImage from '@/components/solutions/HeroProductImage'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return SOLUTION_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const s = getSolution(slug)
  if (!s) return {}
  return {
    title: `${s.name} — Solutions`,
    description: s.tagline,
    alternates: { canonical: `/solutions/${s.slug}` },
    openGraph: {
      title: `${s.name} | MTP Distribution`,
      description: s.tagline,
      url: `${SITE.baseUrl}/solutions/${s.slug}`,
    },
  }
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params
  const s = getSolution(slug)
  if (!s) notFound()

  const Icon = SOLUTION_ICON[s.id]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    serviceType: s.name,
    provider: { '@type': 'Organization', name: SITE.legalName, url: SITE.baseUrl },
    areaServed: ['United Arab Emirates', 'Oman'],
    description: s.overview,
    url: `${SITE.baseUrl}/solutions/${s.slug}`,
  }
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Solutions', item: `${SITE.baseUrl}/solutions` },
      { '@type': 'ListItem', position: 3, name: s.name, item: `${SITE.baseUrl}/solutions/${s.slug}` },
    ],
  }

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* 1 — Hero */}
      <section className="bg-[#0D1B3E] pt-40 pb-16 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#00B4C8 1px, transparent 1px), linear-gradient(90deg, #00B4C8 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div
          className="absolute top-1/2 right-[6%] -translate-y-1/2 w-72 h-72 rounded-full blur-3xl opacity-30 hidden lg:block"
          style={{ background: `radial-gradient(circle, ${s.dotColor}, transparent 70%)` }}
        />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-white/45 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              <ChevronRight size={12} />
              <span className="text-white/70">{s.name}</span>
            </nav>

            <div className="flex items-center gap-3 mb-5">
              <span className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${s.dotColor}22` }}>
                {Icon && <Icon size={24} style={{ color: s.dotColor }} />}
              </span>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: s.dotColor }} />
            </div>
            <h1 className="text-white text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.08] max-w-3xl mb-6">
              {s.name}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-10">{s.tagline}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-[#00B4C8] hover:bg-[#00C9DF] text-white font-semibold px-7 py-3.5 rounded-sm transition-colors"
              >
                Request a Quote <ArrowRight size={16} />
              </Link>
              <Link
                href="#brands"
                className="flex items-center gap-2 border border-white/20 hover:border-white/50 text-white/85 hover:text-white font-medium px-7 py-3.5 rounded-sm transition-colors"
              >
                View Brands
              </Link>
            </div>
          </div>

          {/* Real product photo for this line */}
          <div className="relative hidden lg:block">
            <HeroProductImage id={s.id} alt={`${s.name} — representative product`} />
          </div>
        </div>
      </section>

      {/* 2 — Overview + 3 — Architecture */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
          <Reveal>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-6 h-px bg-[#00B4C8]" />
              <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Overview</span>
            </div>
            <h2 className="text-[#0D1B3E] text-3xl font-semibold tracking-tight mb-5">What it is</h2>
            <p className="text-[#4A5568] text-base leading-relaxed mb-8">{s.overview}</p>

            <h3 className="text-[#0D1B3E] text-sm font-semibold tracking-widest uppercase mb-4">Key Capabilities</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {s.capabilities.map((c) => (
                <li key={c} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#00B4C8] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0D1B3E] text-sm">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <ArchDiagram id={s.id} />
          </Reveal>
        </div>
      </section>

      {/* 4 — Featured products */}
      {s.catalog && (
        <section className="bg-[#F4F8FF] border-y border-[#E2ECF8] py-20">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">{s.catalog.eyebrow}</span>
              <h2 className="text-[#0D1B3E] text-3xl lg:text-4xl font-semibold tracking-tight mt-3 mb-2">
                {s.catalog.title}
              </h2>
              <p className="text-[#4A5568] text-sm mb-10 max-w-2xl">{s.catalog.blurb}</p>
            </Reveal>
            <SolutionCatalog meta={s.catalog} categoryId={s.id} />
          </div>
        </section>
      )}

      {/* 5 — Brands in this solution */}
      <section id="brands" className="py-20 lg:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Brands in this solution</span>
                <h2 className="text-[#0D1B3E] text-3xl lg:text-4xl font-semibold tracking-tight mt-3">
                  Vendors we carry for {s.short}
                </h2>
              </div>
              <Link href="/brands" className="flex items-center gap-2 text-[#00B4C8] font-semibold text-sm hover:gap-3 transition-all">
                All brands <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {s.brands.map((b) => (
              <Link
                key={b.slug}
                href={`/brands/${b.slug}`}
                className="group bg-white border border-[#E2ECF8] rounded-xl p-5 hover:border-[#00B4C8]/50 hover:shadow-[0_10px_30px_-14px_rgba(13,27,62,0.2)] transition-all flex flex-col"
              >
                <div className="h-12 flex items-center mb-3">
                  {b.logo ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={b.logo} alt={`${b.name} logo`} className="max-h-9 max-w-[70%] w-auto object-contain mix-blend-multiply" />
                  ) : (
                    <span className="text-[#0D1B3E] font-semibold">{b.name}</span>
                  )}
                </div>
                <p className="text-[#4A5568] text-xs leading-relaxed flex-1">{b.blurb}</p>
                <span className="flex items-center gap-1 text-[#00B4C8] text-xs font-semibold mt-3 group-hover:gap-2 transition-all">
                  {b.name} <ArrowUpRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Applications + 7 — Integration */}
      <section className="bg-[#0D1B3E] py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Applications</span>
            <h2 className="text-white text-2xl lg:text-3xl font-semibold tracking-tight mt-3 mb-6">
              Where it&apos;s deployed
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {s.applications.map((a) => (
                <Link
                  key={a.slug}
                  href={`/industries/${a.slug}`}
                  className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white/75 hover:text-white hover:border-[#00B4C8]/40 text-sm transition-colors"
                >
                  {a.name}
                </Link>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Integration</span>
            <h2 className="text-white text-2xl lg:text-3xl font-semibold tracking-tight mt-3 mb-6">
              Works hand-in-hand with
            </h2>
            <div className="space-y-3">
              {s.integration.map((r) => {
                const RIcon = SOLUTION_ICON[r.id]
                return (
                  <Link
                    key={r.slug}
                    href={`/solutions/${r.slug}`}
                    className="group flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3 hover:border-[#00B4C8]/40 hover:bg-white/[0.07] transition-colors"
                  >
                    <span className="w-9 h-9 rounded-lg bg-[#00B4C8]/12 flex items-center justify-center flex-shrink-0">
                      {RIcon && <RIcon size={16} className="text-[#00B4C8]" />}
                    </span>
                    <span className="text-white/85 text-sm font-medium flex-1">{r.name}</span>
                    <ArrowUpRight size={16} className="text-white/30 group-hover:text-[#00B4C8] transition-colors" />
                  </Link>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8 — Related projects */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="bg-[#F4F8FF] border border-[#E2ECF8] rounded-2xl px-8 py-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
              <div>
                <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Proof</span>
                <h2 className="text-[#0D1B3E] text-2xl font-semibold tracking-tight mt-2">
                  Deployed across the Gulf&apos;s critical sites
                </h2>
                <p className="text-[#4A5568] text-sm mt-2 max-w-xl">
                  Reference case studies for this solution are published in our Projects showcase.
                </p>
              </div>
              <Link
                href="/projects"
                className="flex items-center gap-2 bg-[#0D1B3E] hover:bg-[#162040] text-white font-semibold px-6 py-3 rounded-sm transition-colors flex-shrink-0"
              >
                View Projects <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9 — Enquiry CTA */}
      <CtaBand
        title={`Specifying ${s.short}?`}
        text="Send us the requirement. MTP pre-sales will size it, build the bill of materials and quote across every brand we carry for this line."
        primaryLabel="Request a Quote"
        secondaryLabel="Download Datasheet"
        secondaryHref="/resources"
      />
    </main>
  )
}
